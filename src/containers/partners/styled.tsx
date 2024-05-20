import { Stack, styled } from "@mui/material";

export const PartnersStack = styled(Stack)(
    ({ theme }) => {
        return {
            "& .MuiCardHeader-content": {
                overflow: "hidden",
            },
            "& .MuiCardHeader-avatar": {
                flex: "0 1 auto",
                overflow: "hidden"
            }
        }
    }
)