import { Box, styled } from "@mui/material";

export const ToolBox = styled(Box)(
    ({ theme }) => {
        return {
            padding: "calc(2 * var(--cardPadding)) var(--pagePadding) var(--cardPadding)",
            "& .toolIcon": {
                "& .MuiCardHeader-avatar": {
                    flex: "auto",
                    overflow: "hidden",
                }
            },
            [theme.breakpoints.up("tablet")]: {
                padding: "calc(2 * var(--cardPadding)) var(--pagePadding)",
            }
        }
    }
)