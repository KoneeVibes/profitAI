import { useEffect } from "react";
import { RoadmapBox } from "./styles/base";
import { Box, Card, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { roadmap } from "../../data";
import { CustomStepIcon } from "./stepIcon";
import stepperBg from "../../assets/roadmapbg.svg";

export const Roadmap: React.FC<{}> = () => {
    useEffect(() => {
        const steps = Array.from(document.getElementsByClassName("MuiStepLabel-iconContainer")) as HTMLElement[];
        steps.forEach((step) => {
            step.addEventListener("click", () => {
                window.scrollTo({
                    top: step.getBoundingClientRect().top + window.scrollY,
                    behavior: "smooth"
                });
            });
        });
    }, []);
    return (
        <RoadmapBox
            padding={"calc(2 * var(--cardPadding)) var(--pagePadding)"}
        >
            <Box
                marginLeft={"auto"}
                marginRight={"auto"}
                width={{ tablet: "85%", laptop: "70%", desktop: "50%" }}
            >
                <Typography
                    variant="h2"
                    fontFamily={"Inter"}
                    fontWeight={600}
                    fontSize={{ mobile: 30, miniTablet: 35, tablet: 40, laptop: 47 }}
                    lineHeight={{ mobile: "35px", miniTablet: "40px", tablet: "45px", laptop: "60px" }}
                    color={"#FFFFFF"}
                    whiteSpace={"normal"}
                    textAlign={"center"}
                    textTransform={"capitalize"}
                    sx={{
                        textWrap: { miniTablet: "balance" }
                    }}
                >
                    Product <Typography
                        component={"span"}
                        color={"#3FFF90"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                    >
                        roadmap
                    </Typography>
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"Poppins"}
                    fontWeight={400}
                    fontSize={{ mobile: 16 }}
                    color={"#FFFFFF99"}
                    lineHeight={"normal"}
                    whiteSpace={"normal"}
                    textAlign={"center"}
                    marginBlockStart={"1rem"}
                    marginBlockEnd={{ mobile: "2rem", tablet: "3rem" }}
                    sx={{
                        textWrap: "balance",
                    }}
                >
                    A product roadmap shows the path ahead, helps teams plan,
                    and guides the delivery of the product.
                </Typography>
            </Box>
            <Stepper
                orientation="vertical"
                sx={{
                    display: "grid",
                    gridTemplateColumns: { laptop: "47% 47%" },
                    columnGap: "var(--flexGap)",
                    rowGap: { mobile: "2rem", laptop: "0" },
                    justifyContent: "space-between",
                    position: "relative",
                    backgroundImage: `url(${stepperBg})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    padding: "var(--sectionMargin) 0",
                    margin: { laptop: "calc(2 * var(--sectionMargin)) 0" },
                }}
            >
                <div className="divider"></div>
                {roadmap.map((milestone, i) => {
                    return (
                        <Step
                            key={i}
                            sx={{
                                marginLeft: { mobile: "2rem", laptop: "unset" },
                                visibility: { laptop: milestone.placeholder ? "hidden" : "visible" },
                                display: { mobile: milestone.placeholder ? "none" : "block", laptop: "unset" },
                                overflow: "hidden",
                            }}
                        >
                            <StepLabel
                                StepIconComponent={CustomStepIcon}
                            >
                                <Card
                                    sx={{
                                        background: "linear-gradient(91.81deg, rgba(32, 56, 51, 0.5) 0%, rgba(2, 29, 21, 0) 100%)",
                                        borderRadius: "16px",
                                        padding: "var(--cardPadding)",
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Inter"}
                                        fontWeight={600}
                                        fontSize={{ mobile: "30px" }}
                                        lineHeight={"normal"}
                                        color={"#3FFF90"}
                                        whiteSpace={"normal"}
                                    >
                                        {milestone.title}
                                    </Typography>
                                    <Box>
                                        <Typography
                                            variant="body1"
                                            fontFamily={"Open Sans"}
                                            fontWeight={400}
                                            fontSize={{ mobile: "16px" }}
                                            lineHeight={"normal"}
                                            color={"#FFFFFF99"}
                                            whiteSpace={"normal"}
                                            marginBlockStart={"2rem"}
                                        >
                                            {milestone.focus}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            fontFamily={"Open Sans"}
                                            fontWeight={400}
                                            fontSize={{ mobile: "16px" }}
                                            lineHeight={"normal"}
                                            color={"#FFFFFF99"}
                                            whiteSpace={"normal"}
                                            marginBlockStart={"2rem"}
                                        >
                                            {milestone.objective}
                                        </Typography>
                                    </Box>
                                </Card>
                            </StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
        </RoadmapBox>
    )
}