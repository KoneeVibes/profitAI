import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { leftChild, leftParent, rightChild, rightParent } from "../../configs/horizontalSlideIn";
import { BaseButton } from "../../components/button";
import { CertificateImg } from "../../assets";

export const Certificate: React.FC<{}> = () => {
    return (
        <Stack
            direction={{ tablet: "row" }}
            alignItems={{ tablet: "center" }}
            gap={"calc(1.5 * var(--flexGap))"}
            padding={{ mobile: "var(--cardPadding) var(--pagePadding) calc(2 * var(--cardPadding))", tablet: "calc(1.5 * var(--cardPadding)) var(--pagePadding)" }}
        >
            <Box
                component={motion.div}
                variants={leftParent}
                initial={"hidden"}
                whileInView={"show"}
                flex={1}
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
                    Assure Defi KYC
                </Typography>
                <Typography
                    variant="body1"
                    component={motion.p}
                    variants={leftChild}
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
                    We are proud to announce that we have been fully KYC verified by the trusted Assure DeFi.
                </Typography>
                <Box
                    component={motion.div}
                    variants={leftChild}
                    display={"flex"}
                    justifyContent={"center"}
                    overflow={"hidden"}
                >
                    <BaseButton
                        location="certificate"
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
                            View Certificate
                        </Typography>
                    </BaseButton>
                </Box>
            </Box>
            <Box
                component={motion.div}
                variants={rightParent}
                initial={"hidden"}
                whileInView={"show"}
                flex={1}
            >
                <Box
                    component={motion.div}
                    variants={rightChild}
                >
                    <CertificateImg style={{ display: "block", marginRight: "auto", marginLeft: "auto", width: "100%", height: "auto" }} />
                </Box>
            </Box>
        </Stack>
    )
}