import { Stack, styled } from "@mui/material";

export const HeroStack = styled(Stack)(
    ({ theme }) => {
        return {
            "& .headerImg": {
                transformStyle: "preserve-3d",
                animation: "spin 5s linear infinite",
            },
            [theme.breakpoints.up(280)]: {
                "& .callToAction": {
                    width: "fit-content",
                }
            }
        }
    }
)