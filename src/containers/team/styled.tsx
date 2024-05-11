import { Box, styled } from "@mui/material";

export const TeamBox = styled(Box)(
    ({ theme }) => {
        return {
            "& .MuiCardHeader-root": {
                flexDirection: "column",
                gap: "var(--flexGap)",
                padding: "var(--cardPadding)",
            },
            "& .MuiCardHeader-content": {
                overflow: "hidden",
                width: "100%",
            },
            "& .MuiCardHeader-avatar": {
                overflow: "hidden",
                width: "100%",
                margin: "0 !important",
                "& svg": {
                    width: "100%"
                }
            }
        }
    }
)