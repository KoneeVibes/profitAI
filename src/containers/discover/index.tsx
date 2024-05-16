import { Box, Typography } from "@mui/material";
import { BaseButton } from "../../components/button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from "framer-motion";
import { container, item } from "../../configs/slideIn";

export const Discover: React.FC<{}> = () => {
    return (
        <Box
            component={motion.div}
            initial="hidden"
            whileInView="show"
            variants={container}
            padding={"calc(2 * var(--cardPadding)) var(--pagePadding)"}
        >
            <Box
                component={motion.div}
                variants={item}
                marginLeft={"auto"}
                marginRight={"auto"}
                width={{ tablet: "85%", laptop: "80%", desktop: "60%" }}
            >
                <Typography
                    variant="h2"
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
            <Typography
                component={motion.p}
                variants={item}
                variant="body1"
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
                At ProfitAI BOTS, Our vision is to revolutionize the way people access and navigate the world of cryptocurrencies and blockchain technology. We believe that by leveraging the power of artificial intelligence (AI), we can empower users to make informed decisions and harness the full potential of digital assets and blockchain innovations.
            </Typography>
            <Box
                component={motion.div}
                variants={item}
                display={"flex"}
                justifyContent={"center"}
                overflow={"hidden"}
            >
                <BaseButton
                    location="discover"
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
            </Box>
        </Box>
    )
}