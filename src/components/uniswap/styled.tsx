import { Box, styled } from "@mui/material";

export const UniswapBox = styled(Box)(
    ({ theme }) => {
        return {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& .widget": {
                minWidth: "0 !important",
                overflow: "hidden",
                "& .headline, & .body": {
                    whiteSpace: "normal",
                    overflowWrap: "anywhere",
                },
                "& [data-testid='action-button'] button, & .euFSZW": {
                    overflow: "hidden"
                },
            }
        }
    }
)