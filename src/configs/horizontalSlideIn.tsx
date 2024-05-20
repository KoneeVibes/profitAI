const leftParent = {
    hidden: { opacity: 0, transform: "translateX(-10vh)" },
    show: {
        opacity: 1,
        transform: "translateX(0)",
        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    }
}

const rightParent = {
    hidden: { opacity: 0, transform: "translateX(10vh)" },
    show: {
        opacity: 1,
        transform: "translateX(0)",
        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    }
}

const leftChild = {
    hidden: { opacity: 0, transform: "translateX(-10vh)" },
    show: { opacity: 1, transform: "translateX(0)" }
}

const rightChild = {
    hidden: { opacity: 0, transform: "translateX(10vh)" },
    show: { opacity: 1, transform: "translateX(0)" }
}

export {
    leftChild, rightChild, leftParent, rightParent
}