import { Stack, StackProps, styled } from "@mui/material";
import { MotionProps } from "framer-motion";

export const QandAStack = styled(Stack)<StackProps & MotionProps>(
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