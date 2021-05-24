import { Address } from '@graphprotocol/graph-ts'
import { Asset } from '../types/schema'
import { Token } from '../types/DAI/Token'
import { DeFiCategory } from './constants'

export function createAsset(assetAddress: string): Asset {
  let asset = new Asset(assetAddress)
  if (assetAddress == '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2') {
    asset.name = "Maker"
    asset.symbol = "MKR"
    asset.decimals = 18
  } else {
    let underlyingContract = Token.bind(Address.fromString(assetAddress))
    asset.name = underlyingContract.name()
    asset.symbol = underlyingContract.symbol()
    asset.decimals = underlyingContract.decimals()
  }
  asset.category = DeFiCategory.get(assetAddress) as string
  return asset
}