import { styled } from "@mui/material";

export const StepIcon = styled("div")<{ ownerState: { completed?: boolean; active?: boolean }; }>(
    ({ theme, ownerState }) => {
        return {
            border: "3px solid #146038",
            borderRadius: "50%",
            padding: "0.5rem",
        }
    }
)