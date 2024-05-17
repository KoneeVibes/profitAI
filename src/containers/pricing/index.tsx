import { Box, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import { pricing } from "../../data";
import { CheckMark, Tick } from "../../assets";
import { BaseButton } from "../../components/button";
import { PricingBox } from "./styled";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { container, item } from "../../configs/slideIn";

export const Pricing: React.FC<{}> = () => {
    useEffect(() => {
        const pricing = document.getElementById("pricing");
        const free = document.getElementById("free");
        const premium = document.getElementById("premium");
        pricing?.addEventListener("mouseover", () => {
            free?.classList.add("free");
            premium?.classList.add("premium");
        });
        pricing?.addEventListener("mouseout", () => {
            free?.classList.remove("free");
            premium?.classList.remove("premium");
        })
    }, []);
    return (
        <PricingBox
            id="pricing"
            margin={"0 var(--pagePadding)"}
            padding={{ mobile: "0 0 calc(2 * var(--cardPadding))", tablet: "0 0 calc(3 * var(--cardPadding))", laptop: "0 0 calc(4 * var(--cardPadding))" }}
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
                width={{ tablet: "85%", laptop: "70%", desktop: "50%" }}
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
                    Our <Typography
                        component={"span"}
                        color={"#3FFF90"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                    >
                        Pricing
                    </Typography>
                </Typography>
                <Typography
                    variant="body1"
                    component={motion.h2}
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
                    We offer two tiers, free and premium!
                </Typography>
            </Box>
            <Stack
                gap={"var(--flexGap)"}
                direction={{ tablet: "row" }}
                overflow={"hidden"}
            >
                <Card
                    id="free"
                    className="borderLight"
                    sx={{
                        flex: 1,
                        background: "#03291E",
                        position: "relative",
                        left: 0,
                        padding: "var(--cardPadding)",
                        borderRadius: "30px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transform: { laptop: "scale(0.8)" },
                        transition: "all .3s",
                    }}
                >
                    <CardHeader
                        title={
                            <Typography
                                variant="h3"
                                fontFamily={"Inter"}
                                fontWeight={600}
                                fontSize={{ mobile: "30px" }}
                                lineHeight={"normal"}
                                color={"#FFFFFF"}
                                textTransform={"uppercase"}
                                marginBlock={"1rem"}
                                component={motion.h3}
                                variants={item}
                            >
                                Free
                            </Typography>
                        }
                        subheader={
                            <Typography
                                variant="subtitle1"
                                fontFamily={"Inter"}
                                fontWeight={600}
                                fontSize={"45px"}
                                lineHeight={"normal"}
                                color={"#3FFF90"}
                                whiteSpace={"normal"}
                                component={motion.h6}
                                variants={item}
                            >
                                0% <Typography
                                    component={"span"}
                                    color={"#B0B3BF"}
                                    fontFamily={"Open Sans"}
                                    fontWeight={600}
                                    fontSize={{ mobile: "20px" }}
                                    lineHeight={"inherit"}
                                    whiteSpace={"inherit"}
                                    marginBlockEnd={"1rem"}
                                >
                                    Token Holding
                                </Typography>
                            </Typography>
                        }
                        component={motion.div}
                        variants={container}
                        initial={"hidden"}
                        whileInView={"show"}
                        sx={{
                            borderBottom: "1px solid #FFFFFF1A",
                        }}
                    />
                    <CardContent
                        component={motion.div}
                        variants={container}
                        initial={"hidden"}
                        whileInView={"show"}
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        {pricing.free.features.map((feature, i) => {
                            return (
                                <Stack
                                    key={i}
                                    gap={"0.5rem"}
                                    direction={"row"}
                                    overflow={"hidden"}
                                    component={motion.div}
                                    variants={item}
                                >
                                    <CheckMark style={{ flexShrink: 0 }} />
                                    <Typography
                                        variant="body1"
                                        fontFamily={"Open Sans"}
                                        fontWeight={400}
                                        fontSize={{ mobile: "16px" }}
                                        lineHeight={"normal"}
                                        color={"#FFFFFF"}
                                        whiteSpace={"normal"}
                                        marginBlockEnd={"1rem"}
                                    >
                                        {feature}
                                    </Typography>
                                </Stack>
                            )
                        })}
                        <Box
                            overflow={"hidden"}
                            marginBlockStart={"2rem"}
                            component={motion.div}
                            variants={container}
                            initial={"hidden"}
                            whileInView={"show"}
                        >
                            <BaseButton
                                location="pricing"
                                sx={{
                                    width: "100%"
                                }}
                                component={motion.button}
                                variants={item}
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
                                    Choose Plan
                                </Typography>
                            </BaseButton>
                        </Box>
                    </CardContent>
                </Card>
                <Card
                    component={"div"}
                    id="premium"
                    className="borderLight"
                    sx={{
                        flex: 1,
                        background: "#03291E",
                        position: "relative",
                        left: 0,
                        padding: "var(--cardPadding)",
                        borderRadius: "30px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "all .3s ease-in-out",
                    }}
                >
                    <CardHeader
                        title={
                            <Typography
                                variant="h3"
                                fontFamily={"Inter"}
                                fontWeight={600}
                                fontSize={{ mobile: "30px" }}
                                lineHeight={"normal"}
                                textTransform={"uppercase"}
                                marginBlock={"1rem"}
                                component={motion.h3}
                                variants={item}
                                sx={{
                                    backgroundImage: "linear-gradient(90deg, #3FFF90 0%, #B0DC73 51.5%, #58E794 100%)",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    color: "transparent",
                                }}
                            >
                                Premium
                            </Typography>
                        }
                        subheader={
                            <Typography
                                variant="subtitle1"
                                fontFamily={"Inter"}
                                fontWeight={600}
                                fontSize={"45px"}
                                lineHeight={"normal"}
                                color={"#3FFF90"}
                                whiteSpace={"normal"}
                                component={motion.h6}
                                variants={item}
                            >
                                1% <Typography
                                    component={"span"}
                                    color={"#B0B3BF"}
                                    fontFamily={"Open Sans"}
                                    fontWeight={600}
                                    fontSize={{ mobile: "20px" }}
                                    lineHeight={"inherit"}
                                    whiteSpace={"inherit"}
                                    marginBlockEnd={"1rem"}
                                >
                                    Token Holding
                                </Typography>
                            </Typography>
                        }
                        component={motion.div}
                        variants={container}
                        initial={"hidden"}
                        whileInView={"show"}
                        sx={{
                            borderBottom: "1px solid #FFFFFF1A",
                        }}
                    />
                    <CardContent
                        component={motion.div}
                        variants={container}
                        initial={"hidden"}
                        whileInView={"show"}
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        {pricing.premium.features.map((feature, i) => {
                            return (
                                <Stack
                                    key={i}
                                    gap={"0.5rem"}
                                    direction={"row"}
                                    overflow={"hidden"}
                                    component={motion.div}
                                    variants={item}
                                >
                                    <CheckMark style={{ flexShrink: 0 }} />
                                    <Typography
                                        variant="body1"
                                        fontFamily={"Open Sans"}
                                        fontWeight={400}
                                        fontSize={{ mobile: "16px" }}
                                        lineHeight={"normal"}
                                        color={"#FFFFFF"}
                                        whiteSpace={"normal"}
                                        marginBlockEnd={"1rem"}
                                    >
                                        {feature}
                                    </Typography>
                                </Stack>
                            )
                        })}
                        <Typography
                            variant="body1"
                            fontFamily={"Open Sans"}
                            fontWeight={700}
                            fontSize={{ mobile: "16px" }}
                            lineHeight={"normal"}
                            color={"#3FFF90"}
                            whiteSpace={"normal"}
                            marginBlockEnd={"1rem"}
                            component={motion.p}
                            variants={item}
                        >
                            3 ways to access premium features
                        </Typography>
                        {pricing.premium.qualifiers.map((qualifier, i) => {
                            return (
                                <Stack
                                    key={i}
                                    gap={"0.5rem"}
                                    direction={"row"}
                                    overflow={"hidden"}
                                    component={motion.div}
                                    variants={container}
                                    initial={"hidden"}
                                    whileInView={"show"}
                                >
                                    <Tick style={{ flexShrink: 0 }} />
                                    <Typography
                                        variant="body1"
                                        component={motion.p}
                                        variants={item}
                                        fontFamily={"Open Sans"}
                                        fontWeight={400}
                                        fontSize={{ mobile: "16px" }}
                                        lineHeight={"normal"}
                                        color={"#FFFFFF"}
                                        whiteSpace={"normal"}
                                        marginBlockEnd={"1rem"}
                                    >
                                        {qualifier}
                                    </Typography>
                                </Stack>
                            )
                        })}
                        <Box
                            overflow={"hidden"}
                            marginBlockStart={"2rem"}
                            component={motion.div}
                            variants={container}
                            initial={"hidden"}
                            whileInView={"show"}
                        >
                            <BaseButton
                                location="pricing"
                                sx={{
                                    width: "100%"
                                }}
                                component={motion.button}
                                variants={item}
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
                                    Choose Plan
                                </Typography>
                            </BaseButton>
                        </Box>
                    </CardContent>
                </Card>
            </Stack>
        </PricingBox >
    )
}