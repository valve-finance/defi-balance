# DeFi Balance Subgraph

## Description
This subgraph tracks the token balances of the most popular DeFi tokens and presents them in a easily queriable manner. The assets we currently track are: 

- Stable Coin Tokens: DAI, USDC, USDT, TUSD, BUSD
- Lending Tokens: MKR, COMP, AAVE, LQTY, ALPHA, ALCX
- DEX Tokens: UNI, CRV, BAL, SUSHI, BNT, LRC
- Derivatives Tokens: SNX, NXM, BOND, HEGIC, FST, DDX
- Asset Manager Tokens: YFI, VSP, BADGER, REN, FARM
- Payment Tokens: MATIC, TORN, STAKE

## Useful Links

Subgraph is hosted at: https://thegraph.com/explorer/subgraph/valve-finance/defi-balance

Subgraph API can be queried at: https://api.thegraph.com/subgraphs/name/valve-finance/defi-balance


## Build Instructions
1. Replace `$YOUR_SUB_GRAPH` with the name of your subgraph
2. Replace `$YOUR_GRAPH_ACCESS_TOKEN` with your access token
3. Run below commands:
```
    yarn
    yarn codegen
    yarn build
    yarn deploy
```

## Features & Capabilities
Given up to a 1000 wallet addresses, and a block ID, we will return the token balances of the DeFi pulse index for those wallets. You can also cut it by category: lending, DEXs, Derivatives, Assets. 

Below are a few examples of types of queries that can be run:

### Get all supported assets
```
{
  assets(first: 100) {
    id
    name
    symbol
    decimals
    category
  }
}
```

### Get Top 100 holders of a given asset
```
{
  accountTokens (
    first: 100
    orderBy: balance
    orderDirection: desc
    where: {
      balance_gt: 0
      symbol: "DAI"
    }
  ) {
    userID
    balance
  }
}
```

### Get balance of DPI assets for given list of wallets (up to 1000 wallets)
```
{
  accounts (
    where: {
      id_in: [
        "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
        "0x00000000b7ca7e12dcc72290d1fe47b2ef14c607",
        "0x0000006daea1723962647b7e189d311d757fb793"
      ]
    }
  ) {
    id
    tokens (
      where: {
        balance_gt: 0
      }
    ) {
      symbol
      balance
    }
  }
}
```

### Get balance for a category of assets
```
{
  accounts (
    where: {
      id_in: [
        "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
        "0x00000000b7ca7e12dcc72290d1fe47b2ef14c607",
        "0x0000006daea1723962647b7e189d311d757fb793"
      ]
    }
  ) {
    id
    tokens (
      where: {
        category: "Lending"
        balance_gt: 0
      }
    ) {
      symbol
      balance
    }
  }
}
```

### Get token balance at specified block number
```
{
  accounts(
    where: {
      id_in: [
        "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
        "0x00000000b7ca7e12dcc72290d1fe47b2ef14c607",
        "0x0000006daea1723962647b7e189d311d757fb793"
      ]
    }
    block: {number: 12459565}
  ) {
    id
    tokens {
      symbol
      balance
    }
  }
}
```
