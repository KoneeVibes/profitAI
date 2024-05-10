import { Box, styled } from "@mui/material";

export const ToolBox = styled(Box)(
    ({ theme }) => {
        return {
            padding: "calc(2 * var(--cardPadding)) var(--pagePadding)",
            "& .tool:hover": {
                animation: "lightening 1.5s linear infinite",
            },
            "& .toolIcon": {
                "& .MuiCardHeader-avatar": {
                    flex: "auto",
                    overflow: "hidden",
                }
            }
        }
    }
)