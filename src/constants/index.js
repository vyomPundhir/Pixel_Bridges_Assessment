import trading from "../assets/trading.svg"
import openinterest from "../assets/openinterest.svg"
import totaluser from "../assets/totaluser.svg"
import drops from "../assets/drops.svg"
import flags from "../assets/flags.svg"
import arrows from "../assets/arrows.svg"
import zomi from "../assets/zomi.png"
import zlp from "../assets/zlp.png"
import distribution from "../assets/distribution.png"
import pool from "../assets/pool.png"
import diamond from "../assets/diamond.svg"
import bitcoin from "../assets/bitcoin.svg"
import skull from "../assets/skull.svg"
import dollar from "../assets/dollar.svg"



export const SimpleCardData = [
  {
    image: trading,
    title: "Total Trading Volume",
    number: "$0",
  },
  {
    image: openinterest,
    title: "Open Interest",
    number: "$0",
  },
  {
    image: totaluser,
    title: "Total Users",
    number: "0",
  },
];

export const FeatureCardData = [
  {
    image: drops,
    title: "Reduce Liquidation Risks",
    detail: "An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks."
  },
  {
    image: flags,
    title: "Save on Costs",
    detail: "Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs."
  },
  {
    image: arrows,
    title: "Simple Swaps",
    detail: "Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice."
  }
];

export const TokenCardData = [
  {
    image: zomi,
    name: "$ZOMI",
    detail: "$ZOMI is the utility and governance token. Accrues 30% of the platform's generated fees.",
    percentage: "0.00%"
  },
  {
    image: zlp,
    name: "$ZLP",
    detail: "$ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.",
    percentage: "1,653,265,449.23%"
  },
];

export const Stats =[
  {
    title: "Overview",
    list: [
      {
        left: "AUM",
        right: "$34"
      },
      {
        left: "$ZLP Pool",
        right: "$34"
      },
      {
        left: "24h Volume",
        right: "$0"
      },
      {
        left: "Long Positions",
        right: "$0"
      },
      {
        left: "Short Positions",
        right: "$0"
      },
    ],
  },

  {
    title: "Total Stats",
    list: [
      {
        left: "Total Fees",
        right: "$0"
      },
      {
        left: "Total Volume",
        right: "$0"
      },
      {
        left: "Floor Price Fund",
        right: "$627,428"
      },
    ],
  },
];

export const Tokens = [

  {
    image1: zomi,
    title: "$ZOMI",
    list: [
      {
        left:"Price",
        right:"$0.00"
      },
      {
        left:"Supply",
        right:"10,000 $ZOMI"
      },
      {
        left:"Total Staked",
        right:"$0"
      },
      {
        left:"Market Cap",
        right:"$10"
      },
    ],
    image2: distribution
  },

  {
    image1: zlp,
    title: "$ZLP",
    list: [
      {
        left:"Price",
        right:"$1.138"
      },
      {
        left:"Supply",
        right:"29 $ZLP"
      },
      {
        left:"Total Staked",
        right:"$34"
      },
      {
        left:"Market Cap",
        right:"$34"
      },
      {
        left:"Stablecoin Percentage",
        right:"49.50%"
      },
    ],
    image2: pool
  }
];

export const TokenIndex = [
  {
    title: "$ZLP Index Composition",
    top: [
      {
        token: "TOKEN",
      },
      {
        token:"PRICE"
      },
      {
        token:"POOL"
      },
      {
        token:"WEIGHT"
      },
      {
        token:"UTILIZATION"
      },

    ],

    list: [
      {
        image: diamond,
        name: "Ethereum",
        sname: "ETH",
        price: "$1,809.42",
        pool: "$19",
        weight: "50.49% / 25.00%",
        util: "0.00%",
      },

      {
        image: bitcoin,
        name: "Wrapped Bitcoin",
        sname: "WBTC",
        price: "$34,472.85",
        pool: "	$0",
        weight: "	0.00% / 25.00%",
        util: "0.00%",
      },

      {
        image: skull,
        name: "ApeCoin",
        sname: "APE",
        price: "$1.37",
        pool: "	$0",
        weight: "	0.00% / 25.00%",
        util: "0.00%",
      },

      {
        image: dollar,
        name: "USD Coin",
        sname: "USDC",
        price: "$1.00",
        pool: "$14",
        weight: "	49.50% / 25.00%",
        util: "0.00%",
      }
    ]
  },
];

export const EarnData1= [
  {
    title: "$ZOMI",
    button1: "Buy $ZOMI",
    list1: [
      {
        left: "Price",
        right: "$0.00",
      },
      {
        left: "Wallet",
        right: "... $ZOMI ($...)",
      },
      {
        left: "Staked",
        right: "... $ZOMI ($...)",
      },
    ],
    list2: [
      {
        left: "APR",
        right: "...%",
      },
      {
        left: "Rewards",
        right: "$...",
      },
      {
        left: "Multiplier Points APR",
        right: "100.00%",
      },
      {
        left: "Boost Percentage",
        right: "...%",
      },
    ],
    list3:[
      {
        left: "Total Staked",
        right: "0 $ZOMI ($...)",
      },
      {
        left: "Total Supply",
        right: "10,000 $ZOMI ($10)",
      },
    ]
  },
];

export const EarnData2 = [
  {
    title: "Total Rewards",
    button1: "Connect Wallet",
    list1: [
      {
        left: "ETH (WETH)",
        right: "... ($...)",
      },
      {
        left: "$ZOMI",
        right: "... ($...)",
      },
      {
        left: "Escrowed $ZOMI",
        right: "... ($...)",
      },
      {
        left: "Multiplier Points",
        right: "...",
      },
      {
        left: "Staked Multiplier Points",
        right: "...",
      },
      {
        left: "Total",
        right: "$...",
      },
    ],
    list2: [
      {
        left: "",
        right: "",
      },
      {
        left: "",
        right: "",
      },
    ],
    list3: [
      {
        left: "",
        right: "",
      },
      {
        left: "",
        right: "",
      },
    ],
  },
];

export const EarnData3 = [
  {
    title: "$ZLP (Ethereum)",
    button1: "Buy $ZLP",
    button2: "Sell $ZLP",
    list1: [
      {
        left: "Price",
        right: "$...",
      },
      {
        left: "Wallet",
        right: "... $ZLP ($...)",
      },
      {
        left: "Staked",
        right: "... $ZLP ($...)",
      },
    ],

    list2: [
      {
        left: "APR",
        right: "...%",
      },
      {
        left: "Rewards",
        right: "$...",
      },
    ],

    list3: [
      {
        left: "Total Staked",
        right: "... $ZLP ($...)",
      },
      {
        left: "Total Supply",
        right: "... $ZLP ($...)",
      },
    ],
  },
];

export const EarnData4 = [
  {
    title: "Escrowed $ZOMI",
    button1: "Connect Wallet",
    list1: [
      {
        left: "Price",
        right: "$0.00",
      },
      {
        left: "Wallet",
        right: "... esZOMI ($...)",
      },
      {
        left: "Staked",
        right: "... esZOMI ($...)",
      },
    ],

    list2: [
      {
        left: "APR",
        right: "...%",
      },
      {
        left: "Multiplier Points APR",
        right: "100.00%",
      },
    ],

    list3: [
      {
        left: "Total Staked",
        right: "... esZOMI ($...)",
      },
      {
        left: "Total Supply",
        right: "1,023,379 esZOMI ($1,063)",
      },
    ],
  },
];

export const Vest = [
  {
    title: "$ZOMI Vault",
    list: [
      {
        left: "Staked Tokens",
        right: "...",
      },
      {
        left: "Reserved for Vesting",
        right: "0.00 / ...",
      },
      {
        left: "Vesting Status",
        right: "0.0000 / 0.0000",
      },
      {
        left: "Claimable",
        right: "0.0000 $ZOMI",
      },
    ],
    button: "Connect Wallet"
  },

  {
    title: "$ZLP Vault",
    list: [
      {
        left: "Staked Tokens",
        right: "... $ZLP",
      },
      {
        left: "Reserved for Vesting",
        right: "0.00 / ...",
      },
      {
        left: "Vesting Status",
        right: "0.0000 / 0.0000",
      },
      {
        left: "Claimable",
        right: "0.0000 $ZOMI",
      },
    ],
    button: "Connect Wallet"
  },
];


