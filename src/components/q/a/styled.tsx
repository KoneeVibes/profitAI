import { Stack, styled } from "@mui/material";

export const QandAStack = styled(Stack)(
    ({ theme }) => {
        return {
            padding: "var(--cardPadding)",
            backgroundColor: "#00322340",
            borderRadius: "25px",
            gap: "var(--flexGap)",
            "& .answer": {
                lineHeight: 0
            },
            "& .answer.active": {
                lineHeight: 1.5,
            },
        }
    }
)