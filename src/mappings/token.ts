import { BigDecimal } from '@graphprotocol/graph-ts'
import { Transfer } from '../types/DAI/Token'
import { Asset, Account, } from '../types/schema'
import { DeFiCategory } from './constants'
import { createAsset } from './assets'

import {
  createAccount,
  exponentToBigDecimal,
  updateCommonTokenStats
} from './helpers'

export function handleTransfer(event: Transfer): void {
  let assetID = event.address.toHexString()
  let asset = Asset.load(assetID)
  if (asset == null) {
    asset = createAsset(assetID)
    asset.save()
  }
  let TokenDecimals = asset.decimals
  let TokenDecimalsBD: BigDecimal = exponentToBigDecimal(TokenDecimals)
  let accountFromID = event.params.from.toHex()
  if (accountFromID != assetID) {
    let accountFrom = Account.load(accountFromID)
    if (accountFrom == null) {
      createAccount(accountFromID)
    }
    let TokenStatsFrom = updateCommonTokenStats(
      asset.id,
      asset.symbol,
      accountFromID
    )
    TokenStatsFrom.balance = TokenStatsFrom.balance.minus(
      event.params.value
        .toBigDecimal()
        .div(TokenDecimalsBD)
        .truncate(TokenDecimals),
    )
    TokenStatsFrom.category = DeFiCategory.get(assetID) as string
    TokenStatsFrom.userID = accountFromID
    TokenStatsFrom.save()
  }
  let accountToID = event.params.to.toHex()
  if (accountToID != assetID) {
    let accountTo = Account.load(accountToID)
    if (accountTo == null) {
      createAccount(accountToID)
    }
    let TokenStatsTo = updateCommonTokenStats(
      asset.id,
      asset.symbol,
      accountToID
    )
    TokenStatsTo.balance = TokenStatsTo.balance.plus(
      event.params.value
        .toBigDecimal()
        .div(TokenDecimalsBD)
        .truncate(TokenDecimals),
    )
    TokenStatsTo.category = DeFiCategory.get(assetID) as string
    TokenStatsTo.userID = accountFromID
    TokenStatsTo.save()
  }
}