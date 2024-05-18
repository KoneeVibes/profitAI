import { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { QandA } from "../../components/q/a";
import { qanda } from "../../data";
import { motion } from "framer-motion";
import { container, item } from "../../configs/verticalSlideIn";

export const FAQ: React.FC<{}> = () => {
    useEffect(() => {
        const toggleButtons = Array.from(document.getElementsByClassName("toggleAnswer")) as HTMLElement[];
        const answers = Array.from(document.getElementsByClassName("answer")) as HTMLElement[];
        //default to display the first answer
        answers[0].classList.add("active");
        toggleButtons.forEach((toggleButton, i) => {
            toggleButton.addEventListener("click", function () {
                answers.forEach((answer) => {
                    answer.classList.remove("active");
                })
                answers[i].classList.add("active");
            })
        });
    }, []);
    return (
        <Box
            id={"FAQ"}
            component={"div"}
            padding={"calc(2 * var(--cardPadding)) var(--pagePadding)"}
            sx={{
                borderBottom: "1px solid",
                borderImageSource: "linear-gradient(90deg, #00150F 0%, #32C971 53.34%, #062519 100%)",
                borderImageSlice: 1,
            }}
        >
            <Box
                component={motion.div}
                variants={container}
                initial={"hidden"}
                whileInView={"show"}
                marginLeft={"auto"}
                marginRight={"auto"}
                width={{ tablet: "85%", laptop: "70%", desktop: "50%", xl: "35%" }}
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
                    Frequently  <Typography
                        component={"span"}
                        color={"#3FFF90"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                    >
                        Asked Questions
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
                    marginBlockStart={"1rem"}
                    marginBlockEnd={{ mobile: "2rem", tablet: "3rem" }}
                    sx={{
                        textWrap: "balance",
                    }}
                >
                    Got questions about WebsiteAI? We've got answers. Dive into our FAQ section
                    to learn more.
                </Typography>
            </Box>
            <Box
                display={"flex"}
                flexDirection={{ mobile: "column", laptop: "row" }}
                gap={"calc(1.5 * var(--flexGap))"}
                justifyContent={"space-between"}
                overflow={"hidden"}
                padding={{ mobile: "var(--cardPadding) 0", laptop: "calc(3* var(--cardPadding)) 0 var(--cardPadding)" }}
            >
                <Box
                    flex={0.4}
                    component={motion.div}
                    variants={container}
                    initial={"hidden"}
                    whileInView={"show"}
                >
                    <Typography
                        variant="h3"
                        component={motion.h3}
                        variants={item}
                        fontFamily={"Inter"}
                        fontWeight={500}
                        fontSize={{ mobile: "20px" }}
                        lineHeight={"normal"}
                        color={"#3FFF90"}
                        whiteSpace={"normal"}
                        marginBlockEnd={"1rem"}
                    >
                        Learn more about Profit ai
                    </Typography>
                    <Typography
                        variant="body1"
                        component={motion.p}
                        variants={item}
                        fontFamily={"Open Sans"}
                        fontWeight={400}
                        fontSize={{ mobile: "16px" }}
                        lineHeight={"normal"}
                        color={"#FFFFFF99"}
                        whiteSpace={"normal"}
                        sx={{
                            textWrap: "balance"
                        }}
                    >
                        Learn how to optimize your trading experience and explore what makes Profit AI the cutting-edge choice for enhancing profitability. Dive deeper into understanding our platform's features, benefits, and how it can revolutionize your approach to trading.
                    </Typography>
                </Box>
                <Stack
                    flex={0.6}
                    gap={"var(--flexGap)"}
                >
                    {qanda.map((pair, i) => {
                        return (
                            <QandA
                                key={i}
                                question={pair.question}
                                answer={pair.answer}
                            />
                        )
                    })}
                </Stack>
            </Box>
        </Box>
    )
}