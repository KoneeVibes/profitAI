import { Amazon, CoinMarketCap, CopyTrading, Github, Medium, Signals, Sniping, Telegram, TelegramBots, Twitter, Uniswap, YouTube } from "./assets"

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