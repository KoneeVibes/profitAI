import { Button, ButtonProps, styled } from "@mui/material";
import { BaseButtonType } from "../../types/app.type";
import { getButtonStyles } from "../../configs/fontStyles";

export const BaseButton: React.FC<BaseButtonType & Omit<ButtonProps, keyof BaseButtonType>> = styled(Button)<{ location: string }>(
    ({ theme, location }) => {
        return {
            fontFamily: "Open Sans",
            fontWeight: getButtonStyles(location).weight,
            fontSize: getButtonStyles(location).size,
            lineHeight: "normal",
            color: getButtonStyles(location).color,
            backgroundColor: getButtonStyles(location).bg,
            borderRadius: getButtonStyles(location).radius,
            border: getButtonStyles(location).border,
            padding: "1rem 2rem",
            minWidth: 0,
            "&:hover": {
                backgroundColor: getButtonStyles(location).bg,
            }
        }
    }
)