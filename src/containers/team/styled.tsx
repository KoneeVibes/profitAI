import { Box, styled } from "@mui/material";

export const TeamBox = styled(Box)(
    ({ theme }) => {
        return {
            "& .MuiCardHeader-root": {
                flexDirection: "column",
                gap: "var(--flexGap)",
                padding: "var(--cardPadding)",
                paddingBottom: 0,
            },
            "& .MuiCardHeader-content": {
                overflow: "hidden",
                width: "100%",
                padding: "var(--cardPadding)",
                borderRadius: "25px",
            },
            "& .MuiCardHeader-avatar": {
                overflow: "hidden",
                width: "100%",
                margin: "0 !important",
                "& svg": {
                    width: "100%",
                    [theme.breakpoints.down("miniTablet")]: {
                        height: "auto",
                    }
                }
            },
            "& .MuiCard-root:hover .MuiCardHeader-content": {
                border: "1px solid #3FFF90"
            }
        }
    }
)