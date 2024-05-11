import { Stack, styled } from "@mui/material";

export const PartnersStack = styled(Stack)(
    ({ theme }) => {
        return {
            "& .MuiCardHeader-content": {
                overflow: "hidden",
            },
            "& .MuiCardHeader-avatar": {
                width: "100%",
                overflow: "hidden"
            }
        }
    }
)