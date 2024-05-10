import { Amazon, CoinMarketCap, CopyAI, CopyTrading, Dev, Github, MEV, Medium, Presale, Signal, Signals, Sniper, Sniping, Telegram, TelegramBots, Twitter, Uniswap, YouTube } from "./assets"

export const navLinks = [
    {
        name: "Home",
        url: "#"
    },
    {
        name: "About",
        url: "#"
    },
    {
        name: "Features",
        url: "#"
    },
    {
        name: "Tools",
        url: "#"
    },
    {
        name: "Partners",
        url: "#"
    },
    {
        name: "Team",
        url: "#"
    },
    {
        name: "Other",
        url: "#"
    },
]

export const smIcons = [
    {
        icon: <Telegram />,
        url: "#"
    },
    {
        icon: <Twitter />,
        url: "#"
    },
    {
        icon: <Github />,
        url: "#"
    },
    {
        icon: <Medium />,
        url: "#"
    },
    {
        icon: <YouTube />,
        url: "#"
    }
]

export const clients = [
    <Amazon />, <CoinMarketCap />, <Uniswap />
]

export const features = [
    {
        name: "Bot",
        url: ""
    },
    {
        name: "Tools",
        url: "",
    },
    {
        name: "DApp",
        url: ""
    }
]

export const featuredItems = [
    {
        section: "ProfitAi Dapp",
        title: "Sniping (incl. presales)",
        body: "We combine real-time market analysis with AI-driven insights to enable precise sniping and pre-sales trading strategies. We empower users to capitalize on fleeting market opportunities with optimal timing, reducing risk and maximizing returns. Join us to experience intelligent trading at your fingertips.",
        img: <Sniping />
    },
    {
        section: "AI Tools",
        title: "Signals Trading",
        body: "Our platform delivers real-time insights on market trends and opportunities, empowering users to execute trades with confidence and efficiency.",
        img: <Signals />
    },
    {
        section: "Telegram Bot",
        title: "Buy and Sell Trading",
        body: "We provides a user-friendly interface for effortless trading, ensuring you never miss out on favorable market conditions. Join us to optimize your trading experience today.",
        img: <TelegramBots />,
    },
    {
        section: "Telegram Bot",
        title: "Copy Trading AI",
        body: "You can effortlessly follow top traders and replicate their strategies in real time. Our advanced AI algorithms identify skilled traders based on performance metrics, allowing you to diversify your portfolio and maximize potential returns.",
        img: <CopyTrading />,
    }
]

export const tools = [
    {
        index: "01",
        title: "Multi-chain Sniper Bot",
        body: "The Multi-chain and Sniper Bot features of ProfitAI have all the essentials you need when it comes to trading in multiple chains and decentralized exchanges.",
        icon: <Sniper />
    },
    {
        index: "02",
        title: "Multi-Chain Copy Trading AI",
        body: "Copy trading AI replicates successful traders' strategies, no advanced skills required. Benefit from expert traders effortlessly. Revolutionize your trading with ProfitAI.",
        icon: <CopyAI />
    },
    {
        index: "03",
        title: "ProfitAI Signal Bot",
        body: "ProfitAI signal bot analyzes crypto markets, generates automated trading signals across multiple chains using technical, fundamental analysis, and machine learning, making trading profitable and enjoyable.",
        icon: <Signal />
    },
    {
        index: "04",
        title: "ProfitAI Presale Bot",
        body: "ProfitAI presale bot automates token purchases during highly sought-after presales, swiftly completing checkouts on various launchpads to increase profit chances effortlessly.",
        icon: <Presale />
    },
    {
        index: "05",
        title: "Contract Dev Bot",
        body: "ProfitAI Contract Dev Ai automates smart contract creation and deployment using NLP and code generation. Features include code generation, templates, syntax checking, testing, deployment guidance, and monitoring.",
        icon: <Dev />
    },
    {
        index: "06",
        title: "MEV Bot",
        body: "MEV (Miner Extractable Value) refers to profits extracted by bots from transaction ordering inefficiencies in DeFi. Bots leverage mempool data to identify and exploit arbitrage opportunities for financial gain.",
        icon: <MEV />
    },
]