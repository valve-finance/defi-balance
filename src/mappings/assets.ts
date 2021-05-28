import { Asset } from '../types/schema'
import {
  DeFiName,
  DeFiSymbol,
  DeFiCategory
} from './constants'

export function createAsset(assetAddress: string): Asset {
  let asset = new Asset(assetAddress)
  if (assetAddress == '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' 
      || assetAddress == '0xdac17f958d2ee523a2206206994597c13d831ec7') {
    asset.decimals = 6
  } else {
    asset.decimals = 18
  }
  asset.name = DeFiName.get(assetAddress) as string
  asset.symbol = DeFiSymbol.get(assetAddress) as string
  asset.category = DeFiCategory.get(assetAddress) as string
  return asset
}