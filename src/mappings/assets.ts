/* eslint-disable prefer-const */ // to satisfy AS compiler

import { Address } from '@graphprotocol/graph-ts'
import { Asset } from '../types/schema'
import { Token } from '../types/DAI/Token'
import { DeFiCategory } from './constants'

export function createAsset(assetAddress: string): Asset {
  let asset = new Asset(assetAddress)
  if (assetAddress == '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2') {
    asset.name = "Maker"
    asset.symbol = "MKR"
  } else {
    let underlyingContract = Token.bind(Address.fromString(assetAddress))
    asset.name = underlyingContract.name()
    asset.symbol = underlyingContract.symbol()
  }
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
