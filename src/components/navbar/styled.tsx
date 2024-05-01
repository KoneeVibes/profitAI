import { Stack, styled } from "@mui/material";

export const Nav = styled(Stack)(
    ({ theme }) => ({
        border: "1.5px solid #629F943D",
        borderRadius: "21px",
        padding: "var(--cardPadding)",
        "& nav": {
            display: "flex",
            flexDirection: "row",
            gap: "var(--flexGap)",
            "& a": {
                textDecoration: "none",
            },
            [theme.breakpoints.down("tablet")]: {
                flexDirection: "column",
            }
        }
    })
)