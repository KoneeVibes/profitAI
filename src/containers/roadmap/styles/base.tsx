import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const RoadmapBox = styled(Box)(
    ({ theme }) => {
        return {
            "& .MuiStepConnector-root": {
                display: "none",
            },
            "& .MuiStepLabel-root": {
                alignItems: "flex-start",
                padding: 0,
            },
            "& .MuiStepLabel-iconContainer": {
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "0 !important",
            },
            "& .divider": {
                borderLeft: "3px dotted",
                borderImage: "linear-gradient(180deg, rgba(38, 153, 86, 0.48) 14.37%, #3FFF90 59.27%)",
                height: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                position: "absolute",
                borderImageSlice: 1
            },
            [theme.breakpoints.down("laptop")]: {
                "& .divider": {
                    left: 0,
                },
                "& .MuiStepLabel-iconContainer": {
                    left: 0
                }
            },
        }
    }
)