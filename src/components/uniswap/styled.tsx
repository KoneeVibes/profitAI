import { Box, BoxProps, styled } from "@mui/material";
import { MotionProps } from "framer-motion";

export const UniswapBox = styled(Box)<BoxProps & MotionProps>(
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