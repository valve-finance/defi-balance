# DeFi Subgraphs

## Problem
Given up to a 1000 wallet addresses, and a block ID, we will return the token balances of the DeFi pulse index for those wallets. You can also cut it by category: lending, DEXs, Derivatives, Assets.

## Key Features

### For The Graph

1. GraphQL (GQL) API that allows balance fetches for 1000 wallet addresses.
2. Default return behavior is the balance of all tokens in the Defi Pulse Index (DPI)
3. Optional return behavior by category. (Only return the balances of tokens in a segment or category of the DPI.  e.g. Lending, DEXs, Derivatives, Assets ...)
4. Statistics
    - Top 10 addresses & balances for each DPI token.
5. Threshold filtering.  e.g. Results greater, less than, or between specified balance(s).
6. [Questionable if Possible] Historic data.
    - Balance at or near timestamp
    - Balance at or near block number

### For DApps

*Each Token in our subgraph should have its own statistics entity that computes the following items to address the underlined information.*

Breakout: high utilization of an asset

- Can use either or both transaction count and amount mentioned below.

Number of Transactions in asset daily/weekly/monthly

- Transaction Count
    - last block
    - last three blocks
    - last hour
    - day
    - week
    - month

Large fund movements, see rug pulls, fund drains, exploits

- Total Transaction Amount (abs. value of inflow/outflow)
    - last block
    - last three blocks
    - last hour
    - day

Drastic changes in # of wallets holding asset

- Holders count (the current number of wallets holding the asset)
    - last block
    - last three blocks
    - last hour
    - day

Top holders of asset

- Top X holders list

Top inflows of asset

- Top X inflows
    - all time
    - hour
    - day
    - month

Top outflows of asset

- Top X outflows
    - all time
    - hour
    - day
    - month
