import { Box, styled } from "@mui/material";

export const FooterBox = styled(Box)(
    ({ theme }) => {
        return {
            "& a": {
                textDecoration: "none",
            }
        }
    }
)