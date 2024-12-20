import { useRef } from "react";
import { Box, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { tools } from "../../data";
import { ToolBox } from "./styled";
import { motion } from "framer-motion";
import { container, item } from "../../configs/verticalSlideIn";

export const Tools: React.FC<{}> = () => {
    const scrollRef = useRef(null);
    return (
        <ToolBox
            id="tools"
        >
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Typography
                    variant="h2"
                    component={motion.h2}
                    variants={item}
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
                    Tools we <Typography
                        component={"span"}
                        color={"#3FFF90"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                    >
                        provide
                    </Typography>
                </Typography>
                <Typography
                    variant="body1"
                    component={motion.p}
                    variants={item}
                    fontFamily={"Poppins"}
                    fontWeight={400}
                    fontSize={{ mobile: 16 }}
                    color={"#FFFFFF99"}
                    lineHeight={"normal"}
                    whiteSpace={"normal"}
                    textAlign={"center"}
                    marginBlock={"1rem"}
                    sx={{
                        textWrap: "balance",
                    }}
                >
                    View the different ways to interact with Profit AI
                </Typography>
            </Box>
            <Grid
                container
                gap={"calc(1.5 * var(--flexGap))"}
                justifyContent={"space-between"}
                padding={{ mobile: "var(--cardPadding) 0", tablet: "calc(2 * var(--cardPadding)) 0" }}
            >
                {tools.map((tool, i) => {
                    return (
                        <Grid
                            item
                            key={i}
                            mobile={12}
                            tablet={5}
                            desktop={3}
                            component={motion.div}
                            variants={container}
                            initial={"hidden"}
                            whileInView={"show"}
                            sx={{
                                borderRadius: "25px",
                                overflow: "hidden",
                                maxWidth: "100% !important",
                                flexGrow: "1 !important",
                                "&:hover": {
                                    border: "1px solid #3FFF90"
                                }
                            }}
                        >
                            <Card
                                ref={scrollRef}
                                sx={{
                                    backgroundColor: "#00322340",
                                    padding: "calc(var(--cardPadding)/2)",
                                    height: "100%",
                                }}
                            >
                                <CardHeader
                                    component={motion.div}
                                    variants={item}
                                    viewport={{ root: scrollRef }}
                                    className="toolIcon"
                                    avatar={tool.icon}
                                />
                                <CardContent
                                    component={motion.div}
                                    variants={item}
                                    viewport={{ root: scrollRef }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily={"Open Sans"}
                                        fontWeight={400}
                                        fontSize={{ mobile: 16 }}
                                        lineHeight={"normal"}
                                        whiteSpace={"normal"}
                                        color={"#FFFFFF99"}
                                    >
                                        {tool.index}
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Poppins"}
                                        fontWeight={400}
                                        fontSize={{ mobile: 25 }}
                                        lineHeight={"normal"}
                                        whiteSpace={"normal"}
                                        color={"#FFFFFFC4"}
                                        marginBlock={"2rem"}
                                    >
                                        {tool.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        fontFamily={"Open Sans"}
                                        fontWeight={400}
                                        fontSize={{ mobile: 16 }}
                                        lineHeight={"normal"}
                                        whiteSpace={"normal"}
                                        color={"#FFFFFF99"}
                                    >
                                        {tool.body}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </ToolBox>
    )
}