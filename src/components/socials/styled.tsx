import { Stack, styled } from "@mui/material";

export const SocialsStack = styled(Stack)(
    ({ theme }) => {
        return {
            gap: "calc(var(--flexGap)/2)",
            position: "fixed",
            top: "calc(65px + calc(3 * var(--sectionMargin)))",
            left: 0,
            padding: "calc(var(--cardPadding)/4)",
            "& svg": {
                width: "70%",
            },
            [theme.breakpoints.down("desktop")]: {
                display: "none",
            },
            [theme.breakpoints.up("xl")]: {
                padding: "calc(var(--cardPadding)/2)",
                "& svg": {
                    width: "auto",
                },
            }
        }
    }
)