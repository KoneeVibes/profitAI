import { Box, Stack, Typography } from "@mui/material";
import { tokenomics } from "../../data";
import { motion } from "framer-motion";
import { container, item } from "../../configs/verticalSlideIn";

export const Tokenomics: React.FC<{}> = () => {
    return (
        <Box
            padding={{ mobile: "var(--cardPadding) var(--pagePadding)", laptop: "var(--cardPadding) var(--pagePadding) calc(3 * var(--cardPadding))" }}
        >
            <Box
                component={motion.div}
                variants={container}
                initial={"hidden"}
                whileInView={"show"}
                marginLeft={"auto"}
                marginRight={"auto"}
                width={{ tablet: "85%", laptop: "80%", desktop: "60%" }}
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
                    Tokenomics
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
                        overflowWrap: "anywhere",
                    }}
                >
                    {/* contract address to enter here */}
                </Typography>
            </Box>
            <Stack
                component={motion.div}
                variants={container}
                initial={"hidden"}
                whileInView={"show"}
                direction={{ tablet: "row" }}
                gap={"var(--flexGap)"}
                justifyContent={"space-between"}
                overflow={"hidden"}
            >
                {tokenomics.map((token, i) => {
                    return (
                        <Box
                            key={i}
                            component={motion.div}
                            variants={item}
                            bgcolor={"#03291E"}
                            border={"2px solid #091E19"}
                            borderRadius={"16px"}
                            padding={{ mobile: "var(--cardPadding)", laptop: "calc(2 * var(--cardPadding)) var(--cardPadding)" }}
                            flexGrow={1}
                        >
                            <Typography
                                variant="h3"
                                fontFamily={"Inter"}
                                fontWeight={500}
                                fontSize={{ mobile: 24 }}
                                lineHeight={"normal"}
                                color={"#FFFFFF"}
                                textAlign={"center"}
                                whiteSpace={"normal"}
                                marginBlockEnd={"0.5rem"}
                            >
                                {token.name}
                            </Typography>
                            <Typography
                                variant="body1"
                                fontFamily={"Open Sans"}
                                fontWeight={400}
                                fontSize={{ mobile: 16 }}
                                lineHeight={"normal"}
                                color={"#FFFFFF99"}
                                textAlign={"center"}
                                whiteSpace={"normal"}
                            >
                                {token.subtext}
                            </Typography>
                        </Box>
                    )
                })}
            </Stack>
        </Box >
    )
}