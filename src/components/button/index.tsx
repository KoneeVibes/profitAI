import { Button, styled } from "@mui/material";
import { BaseButtonType } from "../../types/app.type";
import { getButtonStyles } from "../../configs/fontStyles";

export const BaseButton: React.FC<BaseButtonType> = styled(Button)<{ location: string }>(
    ({ theme, location }) => {
        return {
            fontFamily: "Open Sans",
            fontWeight: getButtonStyles(location).weight,
            fontSize: getButtonStyles(location).size,
            lineHeight: "normal",
            color: getButtonStyles(location).color,
            backgroundColor: getButtonStyles(location).bg,
            borderRadius: getButtonStyles(location).radius,
            padding: "1rem 2rem",
            minWidth: 0,
            "&:hover": {
                backgroundColor: getButtonStyles(location).bg,
            }
        }
    }
)