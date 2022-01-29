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
//   ONES_310000: new BigNumber('4294967295'), // 2**32-1
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
    10000: '0x89C3bCCeD77A7A96816a5110af9bc286Eb2F2F87', // FOGToken address
    // 10001: '0x43a7903E3a839a67192151eE300e11198985E54b', // sushi
    10001: '0x89C3bCCeD77A7A96816a5110af9bc286Eb2F2F87', // FOGToken address
    // 10000: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2', // sushi use
  },
  masterChef: {
    10000: '0xCc09C4C02af2F1a9A72fD0be345a96CAb7f2eaEb', // FOGFarming address
    // 10001: '0x245A074cA9814fB46A21562bC70fAB92F8A3F779', // sushi
    10001: '0xCc09C4C02af2F1a9A72fD0be345a96CAb7f2eaEb', // FOGFarming address
    // 10000: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd', // sushi use
  },
  weth: {
    10000: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04', // WBCH - formerly aelf sushi
    // 10001: '0xd0a1e359811322d97991e03f863a0c30c2cf029c', // weth in kovan
    10001: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04', // WBCH - formerly sushi use
  },
}

/*
MIST LP Address on mainnet for reference
==========================================
0	  EBEN/BCH	    0x80F712670d268cf2C05e7162674c7466c940eBE3
1	  FlexUSD/BCH	  0x24f011f12Ea45AfaDb1D4245bA15dCAB38B43D13
2	  FLEX/FlexUSD	0x4fF52e9D7824EC9b4e0189F11B5aA0F02b459b03
3	  ORB/BCH	      0x1EE39F93450d80981c169E59C8A641a3bC853A09
4	  Knuth/BCH	    0xc98552Ad7DFC5daabAd2660DF378e0070ca75Efc
5	  SPICE/BCH	    0x287a276401caDBe50d5C0398137490E6d45830Dd
6	  ARG/BCH	      0x41075d2Ea8BEF1CAfb24D9Bd2061b620cbc05B60
7	  MIST/BCH	    0x674A71E69fe8D5cCff6fdcF9F1Fa4262Aa14b154
8	  MIST/FlexUSD	0x437E444365aD9ed788e8f255c908bceAd5AEA645
9	  CATS/BCH	    0xc47B0B4B51EE06De0daF02517D78f0473B776633
10	AXIEBCH/BCH	  0xD6EcaDB40b35D17f739Ec27285759d0ca119e3A1
11	SHIBABCH/BCH	0xFCf26E0EB200692B3002f941eea0486d2E901aA9
12	DOGEBCH/BCH	  0xCFcBC90e617a3996355761b52dF2830B7b6718d0
13	UATX/BCH	    0xf9D33ABfaF59fd19077f44399A8971621Cd2eA55
14	POTA/BCH	    0xCabdb1321CEAb169935a0c9d4c856250766C3df7
15	HONK/BCH	    0xbE48dC2353a460668A5D859C66e4472661581998
16	SHIB/FlexUSD	0x12E03015A85A0c2c1eca69486147608ABB0b801c
17	KITTEN/BCH	  0x6B68f5D7d0531207a01e9AC16cfCd223D2139D28
18	LAW/BCH	      0x24615e918AD078900BfE13F4cd26876Bae64dD75
19	XMIST/BCH	    0xa331430473ABA2337698fD95a7c2fCf376DEbFb1
20	MAZE/BCH	    0x1c47c2a72e86B9B488f436F7aC76ACc61e531926
21	KONRA/BCH	    0xA32B73445dBc075dA5054503171362D790164dC9
22	POTA/FlexUSD	0xE3e155c22685F7ceAB3F429CA60f302bCFb13616
23	XMIST/MIST	  0x0663B29E3CAa8F2DB0313eA8B3E942a0431429cf
24	PHA/BCH	      0x211c0d74b1213A40Bdfd61490A9893353544ea46
25	ZOMBIE/BCH  	0x8e5EdB62775c1Cd003804Ec2a8242E5E0393876b
26	FLEX/BCH	    0x49260567a5610414954a1D8F0E7774104FC5CAED
27	sBUSD/BCH	    0x64c379ab93b859AdA71b8AbACA77BeD104a5DbCa
28	C4Q/BCH	      0xFEC4202E22d0cd950aFC52622114e787FFFa0F53
29	HODL/BCH	    0x98A03761Fe62b9A1FD7888D86f70E94a40ACD511
30	BPAD/BCH	    0x8221D04A71FcD0Dd3d096cB3B49E22918095933F
31	CLY/BCH	      0x5775D98022590dc60E9c4Ae0a1c56bF1fD8fcaDC
32	JOY/BCH	      0x20943aD7855bdE06Dd41BB89C9D2efE05DB329EC
33	STO/BCH	      0xB02A135992478a485D9DD771092CdD8B4487594A
34	HAM/BCH	      0xE75Ec02F28bC0E1ca1794FbFFe8229ac1662075E
35	FlexUSD/DAO	  0x99057a0cB475D1c4d950d552E77e9E68CdDb8261
36	FIRE/BCH	    0x1F354956DE4A7Ed71308225De94a27b35A84EA57
37	BCH/DAO	      0xBe8C7C35103c443844Ef234cFFd73a491Df6f503
38	WOJACK/BCH	  0xB31f44E525Cc07037E55bd448004CfF66f1fa878
39	sBUSD/FlexUSD	0x49F8C72fCA1f6F62411da1Aa451c479e1324Eb8f
40	MMMM/BCH	    0xEA5038043364830c489D7fd8F95eFE35eaE6f4Ff
41	GAME/BCH	    0x2eA9369dAEE963CeBc0266AE8b98c3E015C59046
42	SMART/BCH	    0x800632AFC31225813b06185EA8Be8eD571820a50
43	BCHDAO/BCH	  0x5e937a1E35e1D931FEbB70E2b061ED38c8E43336
44	SIDX/BCH	    0x7E1B9F1e286160A80ab9B04D228C02583AeF90B5
45	GOC/BCH	      0x4fd950b3cA45d6F40E5187706D3981ee955E06b4
*/

export const supportedPools = [
  // Test Only
  // {
  //   pid: 10,
  //   lpAddresses: {
  //     10001: '0xF5fE4e3237BDE3AF05Fe190585FA5319b6bF6Dbc', // ABC-ELF
  //     10000: '0xce84867c3c02b05dc570d0135103d3fb9cc19433', // Null
  //   },
  //   tokenAddresses: {
  //     10001: '0x4615fF2bf25B5b40E08Bf50C7eBb8Bd6C97Eb14F', // ABC token
  //     // 10001: '0x76cE90eC600f6D8Af072eAA811485C5e0EE17d30', // sushi
  //     10000: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2', // Null
  //   },
  //   // elf:10001: 0xB5685232b185cAdF7C5F58217722Ac40BC4ec45e
  //   name: 'ABC Test Only!',
  //   symbol: 'ABC-ELF',
  //   tokenSymbol: 'ABC',
  //   icon: '🍣',
  // },
  {
    pid: 0,
    mpid: 1,
    lpAddresses: {
      10001: '',
      10000: '0x24f011f12Ea45AfaDb1D4245bA15dCAB38B43D13',
    },
    tokenAddresses: {
      10001: '',
      10000: '0x89C3bCCeD77A7A96816a5110af9bc286Eb2F2F87',
    },
    name: 'FOG Party!',
    symbol: 'BCH-FlexUSD',
    tokenSymbol: 'FOG',
    icon: '🍣',
    pool: 'X%',
  },
  {
    pid: 10,
    mpid: 0,
    lpAddresses: {
      10001: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10000: '0x1629B0259E6E5c315B8Eea09fd1a4D0A26291F98',
    },
    tokenAddresses: {
      10001: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10000: '0x89C3bCCeD77A7A96816a5110af9bc286Eb2F2F87',
    },
    name: 'elf love FOG!🧝🍱',
    symbol: 'FOG-ELF',
    tokenSymbol: 'FOG',
    icon: '🍱',
    pool: '17.7%',
  },
  {
    pid: 7,
    mpid: 0,
    lpAddresses: {
      10001: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10000: '0xA6be7F7C6c454B364cDA446ea39Be9e5E4369DE8',
    },
    tokenAddresses: {
      10001: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10000: '0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e',
    },
    name: 'elf garden 🧝🧝‍♂️🧝‍♀',
    symbol: 'ELF-ETH',
    tokenSymbol: 'ELF',
    icon: '🧝',
    pool: '15.4%',
  },
  {
    pid: 8,
    mpid: 0,
    lpAddresses: {
      10001: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10000: '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940',
    },
    tokenAddresses: {
      10001: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10000: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    },
    name: 'BTC Satoshi and his friends！',
    symbol: 'WBTC-ETH',
    tokenSymbol: 'WBTC',
    icon: '₿',
    pool: '7.7%',
  },

  // Others
  {
    pid: 1,
    mpid: 0,
    lpAddresses: {
      10001: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10000: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
    },
    tokenAddresses: {
      10001: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10000: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Circle Snail',
    symbol: 'USDC-ETH',
    tokenSymbol: 'USDC',
    icon: '🐌',
    pool: '8.7%',
  },
  {
    pid: 2,
    mpid: 0,
    lpAddresses: {
      10001: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10000: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
    },
    tokenAddresses: {
      10001: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10000: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Donald DAI',
    symbol: 'DAI-ETH',
    tokenSymbol: 'DAI',
    icon: '🦆',
    pool: '8.7%',
  },
  {
    pid: 3,
    mpid: 0,
    lpAddresses: {
      10001: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10000: '0x2fdbadf3c4d5a8666bc06645b8358ab803996e28',
    },
    tokenAddresses: {
      10001: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10000: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'YFI Whale',
    symbol: 'YFI-ETH',
    tokenSymbol: 'YFI',
    icon: '🐋',
    pool: '4.1%',
  },
  {
    pid: 4,
    mpid: 0,
    lpAddresses: {
      10001: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10000: '0xab3f9bf1d81ddb224a2014e98b238638824bcf20',
    },
    tokenAddresses: {
      10001: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10000: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    },
    name: 'Aave Boar',
    symbol: 'LEND-ETH',
    tokenSymbol: 'LEND',
    icon: '🐗',
    pool: '4.1%',
  },
  {
    pid: 5,
    mpid: 0,
    lpAddresses: {
      10001: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10000: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
    },
    tokenAddresses: {
      10001: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10000: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'Toadie Marine',
    symbol: 'LINK-ETH',
    tokenSymbol: 'LINK',
    icon: '🐸',
    pool: '4.1%',
  },
  {
    pid: 6,
    mpid: 0,
    lpAddresses: {
      10001: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      10000: '0x43ae24960e5534731fc831386c07755a2dc33d47',
    },
    tokenAddresses: {
      10001: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      10000: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    name: 'Synthetic Snake',
    symbol: 'SNX-ETH',
    tokenSymbol: 'SNX',
    icon: '🐍',
    pool: '4.1%',
  },
]
