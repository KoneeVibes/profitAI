import React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VideocamIcon from '@mui/icons-material/Videocam';
import { TypeAnimation } from "react-type-animation";
import { HeaderImg } from "../../assets";
import { HeroStack } from "./style";
import { BaseButton } from "../button";
import { motion } from "framer-motion";
import { container, item } from "../../configs/slideIn";

export const Hero: React.FC<{}> = () => {
    const matches = useMediaQuery('(min-width: 580px) and (max-width: 1023px)');
    return (
        <HeroStack
            direction={{ laptop: "row" }}
            gap={{ mobile: "var(--flexGap)", laptop: "calc(2 * var(--flexGap))" }}
            justifyContent={"space-between"}
            padding={{ mobile: "var(--cardPadding) 0", miniTablet: "calc(2 * var(--cardPadding)) 0", laptop: "calc(3 * var(--cardPadding)) 0" }}
            overflow={"hidden"}
        >
            <Box
                flex={"60%"}
                position={"relative"}
                zIndex={100}
            >
                <Typography
                    variant="h1"
                    fontFamily={"Poppins"}
                    fontWeight={600}
                    fontSize={{ mobile: 35, miniTablet: 45, tablet: 50, xl: 58 }}
                    lineHeight={{ mobile: "45px", miniTablet: "50px", tablet: "60px", xl: "64px" }}
                    color={"#FFFFFF"}
                    whiteSpace={"normal"}
                    sx={{
                        textWrap: "balance"
                    }}
                >
                    <Typography
                        component={"span"}
                        color={"#3FFF90"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                    >
                        ProfitAi
                    </Typography>
                    <TypeAnimation
                        sequence={[
                            ' revolutionizes\n',
                            1000,
                            ' revolutionizes\ncryptocurrency access',
                            1000,
                            ' revolutionizes\nblockchain access',
                            1000,
                        ]}
                        repeat={Infinity}
                        preRenderFirstString={true}
                        style={{
                            whiteSpace: "pre-line"
                        }}
                    />
                </Typography>
                <Typography
                    variant="body1"
                    component={motion.p}
                    variants={container}
                    initial={"hidden"}
                    whileInView={"show"}
                    fontFamily={"Open Sans"}
                    fontWeight={400}
                    fontSize={16}
                    lineHeight={"normal"}
                    color={"#FFFFFF99"}
                    whiteSpace={"normal"}
                    marginBlock={"2rem"}
                    sx={{
                        textWrap: "balance"
                    }}
                >
                    We believe that by leveraging the power of artificial intelligence (AI), we can empower users to make informed decisions and harness the full potential of digital assets and blockchain innovations.
                </Typography>
                <Stack
                    className="callToAction"
                    component={motion.div}
                    variants={container}
                    initial={"hidden"}
                    whileInView={"show"}
                    direction={{ mobile: matches ? "row" : "column", tablet: "row" }}
                    gap={"calc(var(--flexGap)/2)"}
                    padding={"0 0 4rem"}
                >
                    <BaseButton
                        location="heroLeft"
                        component={motion.button}
                        variants={item}
                        endIcon={<ArrowForwardIcon />}
                    >
                        <Typography
                            variant="button"
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            textTransform={"inherit"}
                        >
                            Get Started
                        </Typography>
                    </BaseButton>
                    <BaseButton
                        location="heroRight"
                        component={motion.button}
                        variants={item}
                        startIcon={<VideocamIcon />}
                    >
                        <Typography
                            variant="button"
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            textTransform={"inherit"}
                        >
                            Watch Tutorial
                        </Typography>
                    </BaseButton>
                </Stack>
            </Box>
            <Box
                flex={"40%"}
                zIndex={10}
            >
                <HeaderImg
                    className="headerImg"
                    style={{
                        width: "100%",
                        height: matches ? "595px" : "auto",
                        objectFit: "cover",
                    }}
                />
            </Box>
        </HeroStack >
    )
}