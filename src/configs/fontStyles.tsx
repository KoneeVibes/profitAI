export const getButtonStyles = (location: string) => {
    switch (location) {
        case "nav":
            return {
                size: 16,
                weight: 600,
                color: "#0C263A",
                bg: "#3FFF90",
                radius: "8px",
                border: "none",
            }
        case "heroLeft":
            return {
                radius: "40px",
                size: 16,
                weight: 600,
                color: "#0C263A",
                bg: "#3FFF90",
                border: "none",
            }
        case "heroRight":
            return {
                radius: "40px",
                size: 16,
                weight: 600,
                color: "#3FFF90",
                bg: "transparent",
                border: "1px solid #3FFF90",
            }
        default:
            return {
                size: 16,
                weight: 600,
                color: "#0C263A",
                bg: "#3FFF90",
                radius: "8px",
                border: "none",
            }
    }
}