import { Box, Typography } from "@mui/material";
import { BaseButton } from "../../components/button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from "framer-motion";
import { leftChild, leftParent, rightChild, rightParent } from "../../configs/horizontalSlideIn";

export const Discover: React.FC<{}> = () => {
    return (
        <Box
            id="discover"
            padding={"calc(2 * var(--cardPadding)) var(--pagePadding) var(--cardPadding)"}
        >
            <Box
                component={motion.div}
                variants={leftParent}
                initial="hidden"
                whileInView="show"
                marginLeft={"auto"}
                marginRight={"auto"}
                width={{ tablet: "85%", laptop: "80%", desktop: "60%" }}
            >
                <Typography
                    variant="h2"
                    component={motion.h2}
                    variants={leftChild}
                    fontFamily={"poppins"}
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
                    Discover <Typography
                        component={"span"}
                        color={"#3FFF90"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                    >
                        ProfitAi
                    </Typography>, the future of trading crypto.
                </Typography>
            </Box>
            <Box
                component={motion.div}
                variants={rightParent}
                initial="hidden"
                whileInView="show"
            >
                <Typography
                    variant="body1"
                    component={motion.p}
                    variants={rightChild}
                    fontFamily={"Poppins"}
                    fontWeight={400}
                    fontSize={16}
                    lineHeight={"normal"}
                    color={"#FFFFFF99"}
                    textAlign={"center"}
                    whiteSpace={"normal"}
                    marginBlock={"2rem"}
                    sx={{
                        textWrap: { mobile: "balance", tablet: "pretty" }
                    }}
                >
                    At ProfitAI BOTS, Our vision is to revolutionize the way people access and navigate the world of cryptocurrencies and blockchain technology. We believe that by leveraging the power of artificial intelligence (AI), we can empower users to make informed decisions and harness the full potential of digital assets and blockchain.
                </Typography>
                <Box
                    component={motion.div}
                    variants={rightChild}
                    display={"flex"}
                    justifyContent={"center"}
                    overflow={"hidden"}
                >
                    <BaseButton
                        location="discover"
                        component={motion.div}
                        variants={rightParent}
                        initial="hidden"
                        whileInView="show"
                        endIcon={<ArrowForwardIcon />}
                    >
                        <Typography
                            variant="button"
                            component={motion.p}
                            variants={rightChild}
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
                </Box>
            </Box>
        </Box >
    )
}