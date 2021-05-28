import { TypedMap } from '@graphprotocol/graph-ts'

export let DeFiCategory = new TypedMap<string, string>()
export let DeFiName = new TypedMap<string, string>()
export let DeFiSymbol = new TypedMap<string, string>()

// Stable Coins

// DAI
DeFiCategory.set('0x6b175474e89094c44da98b954eedeac495271d0f', 'Stable')
DeFiName.set('0x6b175474e89094c44da98b954eedeac495271d0f', 'Dai Stablecoin')
DeFiSymbol.set('0x6b175474e89094c44da98b954eedeac495271d0f', 'DAI')

// USDC
DeFiCategory.set('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 'Stable')
DeFiName.set('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 'USD Coin')
DeFiSymbol.set('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 'USDC')

// USDT
DeFiCategory.set('0xdac17f958d2ee523a2206206994597c13d831ec7', 'Stable')
DeFiName.set('0xdac17f958d2ee523a2206206994597c13d831ec7', 'Tether USD')
DeFiSymbol.set('0xdac17f958d2ee523a2206206994597c13d831ec7', 'USDT')

// TUSD
DeFiCategory.set('0x0000000000085d4780b73119b644ae5ecd22b376', 'Stable')
DeFiName.set('0x0000000000085d4780b73119b644ae5ecd22b376', 'True USD')
DeFiSymbol.set('0x0000000000085d4780b73119b644ae5ecd22b376', 'TUSD')

// BUSD
DeFiCategory.set('0x4fabb145d64652a948d72533023f6e7a623c7c53', 'Stable')
DeFiName.set('0x4fabb145d64652a948d72533023f6e7a623c7c53', 'Binance USD')
DeFiSymbol.set('0x4fabb145d64652a948d72533023f6e7a623c7c53', 'BUSD')



// Lending Coins

// MKR
DeFiCategory.set('0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', 'Lending')
DeFiName.set('0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', 'Maker')
DeFiSymbol.set('0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', 'MKR')

// COMP
DeFiCategory.set('0xc00e94cb662c3520282e6f5717214004a7f26888', 'Lending')
DeFiName.set('0xc00e94cb662c3520282e6f5717214004a7f26888', 'Compound')
DeFiSymbol.set('0xc00e94cb662c3520282e6f5717214004a7f26888', 'COMP')

// AAVE
DeFiCategory.set('0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9', 'Lending')
DeFiName.set('0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9', 'Aave Token')
DeFiSymbol.set('0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9', 'AAVE')

// LQTY
DeFiCategory.set('0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d', 'Lending')
DeFiName.set('0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d', 'Liquity')
DeFiSymbol.set('0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d', 'LQTY')

// ALPHA
DeFiCategory.set('0xa1faa113cbe53436df28ff0aee54275c13b40975', 'Lending')
DeFiName.set('0xa1faa113cbe53436df28ff0aee54275c13b40975', 'Alpha Token')
DeFiSymbol.set('0xa1faa113cbe53436df28ff0aee54275c13b40975', 'ALPHA')

// ALCX
DeFiCategory.set('0xdbdb4d16eda451d0503b854cf79d55697f90c8df', 'Lending')
DeFiName.set('0xdbdb4d16eda451d0503b854cf79d55697f90c8df', 'Alchemix')
DeFiSymbol.set('0xdbdb4d16eda451d0503b854cf79d55697f90c8df', 'ALCX')



// DEX Coins

// UNI
DeFiCategory.set('0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', 'DEX')
DeFiName.set('0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', 'Uniswap')
DeFiSymbol.set('0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', 'UNI')

// CRV
DeFiCategory.set('0xd533a949740bb3306d119cc777fa900ba034cd52', 'DEX')
DeFiName.set('0xd533a949740bb3306d119cc777fa900ba034cd52', 'Curve DAO')
DeFiSymbol.set('0xd533a949740bb3306d119cc777fa900ba034cd52', 'CRV')

// BAL
DeFiCategory.set('0xba100000625a3754423978a60c9317c58a424e3d', 'DEX')
DeFiName.set('0xba100000625a3754423978a60c9317c58a424e3d', 'Balancer')
DeFiSymbol.set('0xba100000625a3754423978a60c9317c58a424e3d', 'BAL')

// SUSHI
DeFiCategory.set('0x6b3595068778dd592e39a122f4f5a5cf09c90fe2', 'DEX')
DeFiName.set('0x6b3595068778dd592e39a122f4f5a5cf09c90fe2', 'Sushi Token')
DeFiSymbol.set('0x6b3595068778dd592e39a122f4f5a5cf09c90fe2', 'SUSHI')

// BNT
DeFiCategory.set('0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c', 'DEX')
DeFiName.set('0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c', 'Bancor Network')
DeFiSymbol.set('0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c', 'BNT')

// LRC
DeFiCategory.set('0xbbbbca6a901c926f240b89eacb641d8aec7aeafd', 'DEX')
DeFiName.set('0xbbbbca6a901c926f240b89eacb641d8aec7aeafd', 'Loopring Coin')
DeFiSymbol.set('0xbbbbca6a901c926f240b89eacb641d8aec7aeafd', 'LRC')



// Derivatives Coins

// SNX
DeFiCategory.set('0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', 'Derivative')
DeFiName.set('0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', 'Synthetix Network Token')
DeFiSymbol.set('0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', 'SNX')

// NXM
DeFiCategory.set('0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b', 'Derivative')
DeFiName.set('0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b', 'Nexus Mutual')
DeFiSymbol.set('0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b', 'NXM')

// BOND
DeFiCategory.set('0x0391d2021f89dc339f60fff84546ea23e337750f', 'Derivative')
DeFiName.set('0x0391d2021f89dc339f60fff84546ea23e337750f', 'BarnBridge Governance Token')
DeFiSymbol.set('0x0391d2021f89dc339f60fff84546ea23e337750f', 'BOND')

// HEGIC
DeFiCategory.set('0x584bc13c7d411c00c01a62e8019472de68768430', 'Derivative')
DeFiName.set('0x584bc13c7d411c00c01a62e8019472de68768430', 'Hegic')
DeFiSymbol.set('0x584bc13c7d411c00c01a62e8019472de68768430', 'HEGIC')

// FST
DeFiCategory.set('0x0e192d382a36de7011f795acc4391cd302003606', 'Derivative')
DeFiName.set('0x0e192d382a36de7011f795acc4391cd302003606', 'Future Swap Token')
DeFiSymbol.set('0x0e192d382a36de7011f795acc4391cd302003606', 'FST')

// DDX
DeFiCategory.set('0x3a880652f47bfaa771908c07dd8673a787daed3a', 'Derivative')
DeFiName.set('0x3a880652f47bfaa771908c07dd8673a787daed3a', 'DerivaDex DAO')
DeFiSymbol.set('0x3a880652f47bfaa771908c07dd8673a787daed3a', 'DDX')



// Asset Coins

// YFI
DeFiCategory.set('0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e', 'Asset')
DeFiName.set('0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e', 'Yearn Finance')
DeFiSymbol.set('0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e', 'YFI')

// VSP
DeFiCategory.set('0x1b40183efb4dd766f11bda7a7c3ad8982e998421', 'Asset')
DeFiName.set('0x1b40183efb4dd766f11bda7a7c3ad8982e998421', 'Vesper Token')
DeFiSymbol.set('0x1b40183efb4dd766f11bda7a7c3ad8982e998421', 'VSP')

// BADGER
DeFiCategory.set('0x3472a5a71965499acd81997a54bba8d852c6e53d', 'Asset')
DeFiName.set('0x3472a5a71965499acd81997a54bba8d852c6e53d', 'Badger DAO')
DeFiSymbol.set('0x3472a5a71965499acd81997a54bba8d852c6e53d', 'BADGER')

// REN
DeFiCategory.set('0x408e41876cccdc0f92210600ef50372656052a38', 'Asset')
DeFiName.set('0x408e41876cccdc0f92210600ef50372656052a38', 'Republic Token')
DeFiSymbol.set('0x408e41876cccdc0f92210600ef50372656052a38', 'REN')

// FARM
DeFiCategory.set('0xa0246c9032bc3a600820415ae600c6388619a14d', 'Asset')
DeFiName.set('0xa0246c9032bc3a600820415ae600c6388619a14d', 'Farm Reward')
DeFiSymbol.set('0xa0246c9032bc3a600820415ae600c6388619a14d', 'FARM')



// Payment Coins

// MATIC
DeFiCategory.set('0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0', 'Payment')
DeFiName.set('0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0', 'Matic Token')
DeFiSymbol.set('0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0', 'Matic')

// TORN
DeFiCategory.set('0x77777feddddffc19ff86db637967013e6c6a116c', 'Payment')
DeFiName.set('0x77777feddddffc19ff86db637967013e6c6a116c', 'Torndado Cash')
DeFiSymbol.set('0x77777feddddffc19ff86db637967013e6c6a116c', 'TORN')

// STAKE
DeFiCategory.set('0x0ae055097c6d159879521c384f1d2123d1f195e6', 'Payment')
DeFiName.set('0x0ae055097c6d159879521c384f1d2123d1f195e6', 'Stake')
DeFiSymbol.set('0x0ae055097c6d159879521c384f1d2123d1f195e6', 'STAKE')
