import { BigDecimal } from '@graphprotocol/graph-ts'
import { AccountToken, Account } from '../types/schema'

export function exponentToBigDecimal(decimals: i32): BigDecimal {
  let bd = BigDecimal.fromString('1')
  for (let i = 0; i < decimals; i++) {
    bd = bd.times(BigDecimal.fromString('10'))
  }
  return bd
}

export let TokenDecimals = 8
export let TokenDecimalsBD: BigDecimal = exponentToBigDecimal(8)
export let zeroBD = BigDecimal.fromString('0')

export function createAccountToken(
  TokenStatsID: string,
  TokenUserID: string,
  symbol: string,
  account: string,
  assetID: string,
): AccountToken {
  let TokenStats = new AccountToken(TokenStatsID)
  TokenStats.symbol = symbol
  TokenStats.asset = assetID
  TokenStats.account = account
  TokenStats.balance = zeroBD
  TokenStats.userID = TokenUserID
  return TokenStats
}

export function createAccount(accountID: string): Account {
  let account = new Account(accountID)
  account.save()
  return account
}

export function updateCommonTokenStats(
  assetID: string,
  assetSymbol: string,
  accountID: string
): AccountToken {
  let TokenStatsID = assetID.concat('-').concat(accountID)
  let TokenUserID = accountID
  let TokenStats = AccountToken.load(TokenStatsID)
  if (TokenStats == null) {
    TokenStats = createAccountToken(TokenStatsID, TokenUserID, assetSymbol, accountID, assetID)
  }
  return TokenStats as AccountToken
}
