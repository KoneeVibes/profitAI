import { Button, ButtonProps, styled } from "@mui/material";
import { BaseButtonType } from "../../types/app.type";
import { getButtonStyles } from "../../configs/fontStyles";
import { MotionProps } from "framer-motion";

export const BaseButton = styled(Button)<ButtonProps & BaseButtonType & MotionProps & { location: string }>(
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
            padding: getButtonStyles(location).padding,
            textTransform: "capitalize",
            width: getButtonStyles(location).width,
            minWidth: 0,
            "&:hover": {
                backgroundColor: getButtonStyles(location).bg,
            }
        }
    }
)