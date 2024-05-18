const container = {
    hidden: { opacity: 0, transform: "translateY(10vh)" },
    show: {
        opacity: 1,
        transform: "translateY(0)",
        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    }
}

const item = {
    hidden: { opacity: 0, transform: "translateY(10vh)" },
    show: { opacity: 1, transform: "translateY(0)" }
}

export {
    container, item
}