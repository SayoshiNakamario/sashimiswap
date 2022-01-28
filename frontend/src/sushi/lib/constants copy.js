// import BigNumber from 'bignumber.js/bignumber'

// export const SUBTRACT_GAS_LIMIT = 100000

// const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
// const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
// const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
// const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

// export const INTEGERS = {
//   ONE_MINUTE_IN_SECONDS,
//   ONE_HOUR_IN_SECONDS,
//   ONE_DAY_IN_SECONDS,
//   ONE_YEAR_IN_SECONDS,
//   ZERO: new BigNumber(0),
//   ONE: new BigNumber(1),
//   ONES_310001: new BigNumber('4294967295'), // 2**32-1
//   ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
//   ONES_255: new BigNumber(
//     '115792089237316195423570985008687907853269984665640564039457584007913129639935',
//   ), // 2**256-1
//   INTEREST_RATE_BASE: new BigNumber('1e18'),
// }

// export const addressMap = {
//   uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
//   uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
//   YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
//   YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
//   UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
//   WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//   UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
//   LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
//   MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
//   SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
//   COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
//   LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
//   YAMYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
// }

export const contractAddresses = {
  sushi: {
    10001: '0x2191fC9678ff28367c231C6Ba4D47831DC1Dfc33', // FOGToken address
    // 10000: '0x43a7903E3a839a67192151eE300e11198985E54b', // sushi
    10000: '0x2191fC9678ff28367c231C6Ba4D47831DC1Dfc33', // FOGToken address
    // 10001: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2', // sushi use
  },
  masterChef: {
    10001: '0x5B414DB0d31A59BbFb9522F181A4ee181B3abe53', // FOGFarming address
    // 10000: '0x245A074cA9814fB46A21562bC70fAB92F8A3F779', // sushi
    10000: '0x5B414DB0d31A59BbFb9522F181A4ee181B3abe53', // FOGFarming address
    // 10001: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd', // sushi use
  },
  weth: {
    10001: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04', // WBCH - formerly aelf sushi
    // 10000: '0xd0a1e359811322d97991e03f863a0c30c2cf029c', // weth in kovan
    10000: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04', // WBCH - formerly sushi use
  },
}

/*
UNI-V2 LP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  // Test Only
  // {
  //   pid: 10,
  //   lpAddresses: {
  //     10000: '0xF5fE4e3237BDE3AF05Fe190585FA5319b6bF6Dbc', // ABC-ELF
  //     10001: '0xce84867c3c02b05dc570d0135103d3fb9cc19433', // Null
  //   },
  //   tokenAddresses: {
  //     10000: '0x4615fF2bf25B5b40E08Bf50C7eBb8Bd6C97Eb14F', // ABC token
  //     // 10000: '0x76cE90eC600f6D8Af072eAA811485C5e0EE17d30', // sushi
  //     10001: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2', // Null
  //   },
  //   // elf:10000: 0xB5685232b185cAdF7C5F58217722Ac40BC4ec45e
  //   name: 'ABC Test Only!',
  //   symbol: 'ABC-ELF',
  //   tokenSymbol: 'ABC',
  //   icon: '🍣',
  // },
  {
    pid: 9,
    lpAddresses: {
      10000: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10001: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
    },
    tokenAddresses: {
      10000: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10001: '0x2191fC9678ff28367c231C6Ba4D47831DC1Dfc33',
    },
    name: 'FOG Party!',
    symbol: 'FOG-WETH',
    tokenSymbol: 'FOG',
    icon: '🍣',
    pool: '17.7%',
  },
  {
    pid: 10,
    lpAddresses: {
      10000: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10001: '0x1629B0259E6E5c315B8Eea09fd1a4D0A26291F98',
    },
    tokenAddresses: {
      10000: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10001: '0x2191fC9678ff28367c231C6Ba4D47831DC1Dfc33',
    },
    name: 'elf love FOG!🧝🍱',
    symbol: 'FOG-ELF',
    tokenSymbol: 'FOG',
    icon: '🍱',
    pool: '17.7%',
  },
  {
    pid: 7,
    lpAddresses: {
      10000: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10001: '0xA6be7F7C6c454B364cDA446ea39Be9e5E4369DE8',
    },
    tokenAddresses: {
      10000: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10001: '0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e',
    },
    name: 'elf garden 🧝🧝‍♂️🧝‍♀',
    symbol: 'ELF-ETH',
    tokenSymbol: 'ELF',
    icon: '🧝',
    pool: '15.4%',
  },
  {
    pid: 8,
    lpAddresses: {
      10000: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10001: '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940',
    },
    tokenAddresses: {
      10000: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10001: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    },
    name: 'BTC Satoshi and his friends！',
    symbol: 'WBTC-ETH',
    tokenSymbol: 'WBTC',
    icon: '₿',
    pool: '7.7%',
  },

  // Others
  {
    pid: 0,
    lpAddresses: {
      10000: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10001: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
    },
    tokenAddresses: {
      10000: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10001: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    name: 'Tether Turtle',
    symbol: 'USDT-ETH',
    tokenSymbol: 'USDT',
    icon: '🐢',
    pool: '7.7%',
  },
  {
    pid: 1,
    lpAddresses: {
      10000: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10001: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
    },
    tokenAddresses: {
      10000: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10001: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Circle Snail',
    symbol: 'USDC-ETH',
    tokenSymbol: 'USDC',
    icon: '🐌',
    pool: '8.7%',
  },
  {
    pid: 2,
    lpAddresses: {
      10000: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10001: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
    },
    tokenAddresses: {
      10000: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10001: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Donald DAI',
    symbol: 'DAI-ETH',
    tokenSymbol: 'DAI',
    icon: '🦆',
    pool: '8.7%',
  },
  {
    pid: 3,
    lpAddresses: {
      10000: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10001: '0x2fdbadf3c4d5a8666bc06645b8358ab803996e28',
    },
    tokenAddresses: {
      10000: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10001: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'YFI Whale',
    symbol: 'YFI-ETH',
    tokenSymbol: 'YFI',
    icon: '🐋',
    pool: '4.1%',
  },
  {
    pid: 4,
    lpAddresses: {
      10000: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10001: '0xab3f9bf1d81ddb224a2014e98b238638824bcf20',
    },
    tokenAddresses: {
      10000: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10001: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    },
    name: 'Aave Boar',
    symbol: 'LEND-ETH',
    tokenSymbol: 'LEND',
    icon: '🐗',
    pool: '4.1%',
  },
  {
    pid: 5,
    lpAddresses: {
      10000: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10001: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
    },
    tokenAddresses: {
      10000: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10001: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'Toadie Marine',
    symbol: 'LINK-ETH',
    tokenSymbol: 'LINK',
    icon: '🐸',
    pool: '4.1%',
  },
  {
    pid: 6,
    lpAddresses: {
      10000: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10001: '0x43ae24960e5534731fc831386c07755a2dc33d47',
    },
    tokenAddresses: {
      10000: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10001: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    name: 'Synthetic Snake',
    symbol: 'SNX-ETH',
    tokenSymbol: 'SNX',
    icon: '🐍',
    pool: '4.1%',
  },
]
