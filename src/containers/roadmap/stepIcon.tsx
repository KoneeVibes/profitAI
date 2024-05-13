import { StepIconProps } from "@mui/material";
import { StepIcon } from "./styles/stepIcon";

export const CustomStepIcon = (props: StepIconProps) => {
    const { active, completed, className } = props;
    return (
        <StepIcon ownerState={{ completed, active }} className={className}>

        </StepIcon>
    );
}