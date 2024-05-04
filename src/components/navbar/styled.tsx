import { Stack, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const Nav = styled(Stack)(
    ({ theme }) => {
        const { openMenu } = useContext(Context);
        return {
            border: "1.5px solid #629F943D",
            borderRadius: "21px",
            padding: "var(--cardPadding)",
            "& nav": {
                display: "flex",
                flexDirection: "row",
                gap: "var(--flexGap)",
                "& a": {
                    textDecoration: "none",
                    [theme.breakpoints.down("desktop")]: {
                        textAlign: "center",
                    }
                },
                [theme.breakpoints.down("desktop")]: {
                    flexDirection: "column",
                    width: "100%",
                    gap: "calc(1.5 * var(--flexGap))",
                }
            },
            [theme.breakpoints.down("desktop")]: {
                "& .navStack": {
                    display: openMenu ? "flex" : "none",
                    flexDirection: "column",
                    gap: "calc(3 * var(--flexGap))",
                    backgroundColor: "#00150F",
                    position: "fixed",
                    top: "calc(65px + calc(4 * var(--sectionMargin)))",
                    left: 0,
                    width: "stretch",
                    height: "stretch",
                    overflow: "overlay",
                    padding: "calc(0.5 * var(--cardPadding)) var(--cardPadding) calc(5 * var(--cardPadding))",
                    zIndex: 10,
                }
            },
            [theme.breakpoints.down("tablet")]: {
                "& .navStack": {
                    justifyContent: "space-between",
                }
            },
            [theme.breakpoints.down("miniTablet")]: {
                "& .navStack": {
                    padding: "0 var(--cardPadding) calc(3 * var(--cardPadding))",
                }
            },
            [theme.breakpoints.down(320)]: {
                justifyContent: "center",
                "& .logo": {
                    display: "none"
                },
                "& .navStack": {
                    top: "calc(41px + calc(4 * var(--sectionMargin)))",
                },
                "& .callToActionButtonBox": {
                    overflow: "hidden"
                }
            }
        }
    }
)