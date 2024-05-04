import { Stack, styled } from "@mui/material";

export const HeroStack = styled(Stack)(
    ({ theme }) => {
        return {
            "& svg": {
                transformStyle: "preserve-3d",
                animation: "spin 5s linear infinite",
            }
        }
    }
)