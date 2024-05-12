import { Box, Card, Grid, Stack, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material"
import { roadmap } from "../../data"

export const Roadmap: React.FC<{}> = () => {
    return (
        <Box
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
                activeStep={0}
            >
                {roadmap.map((milestone, i) => {
                    return (
                        <Step
                            key={i}
                        >
                            <StepLabel>
                                <Card>
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
                                    <ul>
                                        <li>{milestone.focus}</li>
                                        <li>{milestone.objective}</li>
                                    </ul>
                                </Card>
                            </StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
        </Box>
    )
}