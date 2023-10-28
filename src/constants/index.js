import trading from "../assets/trading.svg"
import openinterest from "../assets/openinterest.svg"
import totaluser from "../assets/totaluser.svg"
import drops from "../assets/drops.svg"
import flags from "../assets/flags.svg"
import arrows from "../assets/arrows.svg"
import zomi from "../assets/zomi.png"
import zlp from "../assets/zlp.png"

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
