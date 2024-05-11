import { Stack, styled } from "@mui/material";

export const FeaturedItemsStack = styled(Stack)(
    ({ theme }) => {
        return {
            "& .textBox": {
                transition: "all .3s",
                cursor: "pointer",
                overflow: "hidden",
            },
            "& .textBox:hover": {
                padding: "2rem",
                background: "#00322340",
                borderLeft: "4px solid #3FFF90",
            },
            "& .featuredImg": {
                width: "100%",
                "& svg": {
                    width: "100%",
                }
            },
            "& .center": {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }
        }
    }
)