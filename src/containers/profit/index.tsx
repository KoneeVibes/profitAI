import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { container, item } from "../../configs/slideIn";

export const Profit: React.FC<{}> = () => {
    return (
        <Box
            padding={"calc(2 * var(--cardPadding)) var(--pagePadding)"}
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
                    Buy <Typography
                        component={"span"}
                        color={"#3FFF90"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                    >
                        $PROFIT
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
                    On UniSwap
                </Typography>
            </Box>
            <Box
                height={"360px"}
            >

            </Box>
        </Box>
    )
}