import { Box, styled } from "@mui/material";

export const PricingBox = styled(Box)(
    ({ theme }) => {
        return {
            "& .MuiCardHeader-content": {
                overflow: "hidden"
            },
            [theme.breakpoints.up("laptop")]: {
                "& .free": {
                    left: "5%",
                },
                "& .premium": {
                    left: "-5%",
                }
            }
        }
    }
)