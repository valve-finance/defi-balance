/* eslint-disable prefer-const */ // to satisfy AS compiler
import { log } from '@graphprotocol/graph-ts'
import { Transfer } from '../types/DAI/Token'
import { Asset, Account, TransferEvent } from '../types/schema'

import {
  createAccount,
  updateCommonTokenStats,
  TokenDecimalsBD,
  TokenDecimals,
} from './helpers'

import { createAsset, updateAsset } from './assets'

/* Transferring of Tokens
 *
 * event.params.from = sender of Tokens
 * event.params.to = receiver of Tokens
 * event.params.amount = amount sent
 *
 */
export function handleTransfer(event: Transfer): void {
  let assetID = event.address.toHexString()
  let asset = Asset.load(assetID)
  if (asset == null) {
    asset = createAsset(assetID)
    asset.save()
  } else if (asset.accrualBlockNumber != event.block.number.toI32()) {
    asset = updateAsset(
      event.address,
      event.block.number.toI32(),
      event.block.timestamp.toI32(),
    )
  }
  // Checking if the tx is FROM the Token contract (i.e. this will not run when minting)
  // If so, it is a mint, and we don't need to run these calculations
  let accountFromID = event.params.from.toHex()
  if (accountFromID != assetID) {
    let accountFrom = Account.load(accountFromID)
    if (accountFrom == null) {
      createAccount(accountFromID)
    }
    // Update TokenStats common for all events, and return the stats to update unique
    // values for each event
    let TokenStatsFrom = updateCommonTokenStats(
      asset.id,
      asset.symbol,
      accountFromID,
      event.transaction.hash,
      event.block.timestamp,
      event.block.number,
      event.logIndex,
    )
    TokenStatsFrom.TokenBalance = TokenStatsFrom.TokenBalance.minus(
      event.params.value
        .toBigDecimal()
        .div(TokenDecimalsBD)
        .truncate(TokenDecimals),
    )
    TokenStatsFrom.save()
  }

  // Checking if the tx is TO the Token contract (i.e. this will not run when redeeming)
  // If so, we ignore it. this leaves an edge case, where someone who accidentally sends
  // Tokens to a Token contract, where it will not get recorded. Right now it would
  // be messy to include, so we are leaving it out for now TODO fix this in future
  let accountToID = event.params.to.toHex()
  if (accountToID != assetID) {
    let accountTo = Account.load(accountToID)
    if (accountTo == null) {
      createAccount(accountToID)
    }

    // Update TokenStats common for all events, and return the stats to update unique
    // values for each event
    let TokenStatsTo = updateCommonTokenStats(
      asset.id,
      asset.symbol,
      accountToID,
      event.transaction.hash,
      event.block.timestamp,
      event.block.number,
      event.logIndex,
    )

    TokenStatsTo.TokenBalance = TokenStatsTo.TokenBalance.plus(
      event.params.value
        .toBigDecimal()
        .div(TokenDecimalsBD)
        .truncate(TokenDecimals),
    )

    TokenStatsTo.save()
  }

  let transferID = event.transaction.hash
    .toHexString()
    .concat('-')
    .concat(event.transactionLogIndex.toString())

  let transfer = new TransferEvent(transferID)
  transfer.amount = event.params.value.toBigDecimal().div(TokenDecimalsBD)
  transfer.to = event.params.to
  transfer.from = event.params.from
  transfer.blockNumber = event.block.number.toI32()
  transfer.blockTime = event.block.timestamp.toI32()
  transfer.TokenSymbol = asset.symbol
  transfer.save()
}
