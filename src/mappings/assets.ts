/* eslint-disable prefer-const */ // to satisfy AS compiler

import { Address, TypedMap, log } from '@graphprotocol/graph-ts'
import { Asset } from '../types/schema'
import { Token } from '../types/DAI/Token'

let DeFiCategory = new TypedMap<string, string>()

DeFiCategory.set('0x6b175474e89094c44da98b954eedeac495271d0f', 'Stable')
DeFiCategory.set('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 'Stable')

export function createAsset(assetAddress: string): Asset {
  let asset = new Asset(assetAddress)
  let underlyingContract = Token.bind(Address.fromString(assetAddress))
  asset.name = underlyingContract.name()
  asset.symbol = underlyingContract.symbol()
  asset.category = DeFiCategory.get(assetAddress) as string
  asset.blockTimestamp = 0
  asset.accrualBlockNumber = 0
  return asset
}

export function updateAsset(
  assetAddress: Address,
  blockNumber: i32,
  blockTimestamp: i32,
): Asset {
  let assetID = assetAddress.toHexString()
  let asset = Asset.load(assetID)
  if (asset == null) {
    asset = createAsset(assetID)
  }
  if (asset.accrualBlockNumber != blockNumber) {
    asset.accrualBlockNumber = blockNumber
    asset.blockTimestamp = blockTimestamp
    asset.save()
  }
  return asset as Asset
}
