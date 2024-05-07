import { ButtonStyles } from "../types/app.type";

export const getButtonStyles = (location: string): ButtonStyles => {
    const baseStyles = {
        size: 16,
        weight: 600,
        color: "#0C263A",
        bg: "#3FFF90",
        padding: "1rem 2rem",
    };

    switch (location) {
        case "nav":
            return {
                ...baseStyles,
                radius: "8px",
                border: "none",
            };
        case "heroLeft":
        case "discover":
            return {
                ...baseStyles,
                radius: "40px",
                border: "none",
            };
        case "heroRight":
            return {
                ...baseStyles,
                color: "#3FFF90",
                bg: "transparent",
                radius: "40px",
                border: "1px solid #3FFF90",
            };
        case "features":
            return {
                ...baseStyles,
                padding: "1rem 4rem",
                radius: "8px",
            };
        default:
            return {
                ...baseStyles,
                radius: "8px",
                border: "none",
            };
    }
};
