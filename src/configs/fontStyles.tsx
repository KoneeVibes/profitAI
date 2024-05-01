export const getButtonStyles = (location: string) => {
    switch (location) {
        case "nav":
            return {
                size: 16,
                weight: 600,
                color: "#0C263A",
                bg: "#3FFF90",
                radius: "8px",
            }
        default:
            return {
                size: 16,
                weight: 600,
                color: "#0C263A",
                bg: "#3FFF90",
                radius: "8px",
            }
    }
}