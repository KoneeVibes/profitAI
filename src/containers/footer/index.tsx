import { Box, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { footerLinks, socialMedia } from "../../data";
import { BaseButton } from "../../components/button";
import TelegramIcon from '@mui/icons-material/Telegram';
import { motion } from "framer-motion";
import { container, item } from "../../configs/verticalSlideIn";
import { HashLink } from "react-router-hash-link";
import { FooterBox } from "./styled";

export const Footer: React.FC<{}> = () => {
    const matches = useMediaQuery('(max-width:280px)');
    return (
        <FooterBox
            padding={"calc(2 * var(--cardPadding)) var(--pagePadding)"}
        >
            <Stack
                component={motion.div}
                variants={container}
                initial={"hidden"}
                whileInView={"show"}
                gap={{ mobile: "calc(2 * var(--flexGap))", tablet: "var(--flexGap)" }}
                direction={{ tablet: "row" }}
                paddingBottom={{ mobile: "var(--cardPadding)", tablet: "calc(2 * var(--cardPadding))" }}
            >
                <Box
                    flex={0.6}
                    component={motion.div}
                    variants={item}
                    overflow={"hidden"}
                >
                    <BaseButton
                        location="footer"
                        startIcon={<TelegramIcon sx={{ background: "#24A1DE", borderRadius: "50%", padding: "0.5rem" }} />}
                        sx={{
                            width: matches ? "100%" : "auto"
                        }}
                    >
                        <Typography
                            variant="button"
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            textTransform={"uppercase"}
                        >
                            USE IT ON <br />
                            <Typography
                                variant="button"
                                fontFamily={"inherit"}
                                fontWeight={400}
                                fontSize={"14px"}
                                lineHeight={"inherit"}
                                color={"inherit"}
                                textTransform={"capitalize"}
                            >
                                Telegram
                            </Typography>
                        </Typography>
                    </BaseButton>
                </Box>
                <Stack
                    flex={0.4}
                    component={motion.div}
                    variants={container}
                    initial={"hidden"}
                    whileInView={"show"}
                    gap={{ mobile: "var(--flexGap)", tablet: "calc(2 * var(--flexGap))" }}
                    direction={{ tablet: "row" }}
                >
                    {Object.entries(footerLinks).map((group, i) => {
                        return (
                            <Box
                                key={i}
                                component={motion.div}
                                variants={item}
                            >
                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily={"Inter"}
                                        fontWeight={600}
                                        fontSize={"20px"}
                                        lineHeight={"normal"}
                                        color={"#FFFFFF"}
                                        marginBlockEnd={"2rem"}
                                    >
                                        {group[0]}
                                    </Typography>
                                </Box>
                                <Stack
                                    gap={"var(--flexGap)"}
                                >
                                    {group[1].map((link, i) => {
                                        return (
                                            <HashLink
                                                key={i}
                                                to={link.url}
                                                smooth={true}
                                            >
                                                <Typography
                                                    variant="subtitle1"
                                                    fontFamily={"Open Sans"}
                                                    fontWeight={400}
                                                    fontSize={"16px"}
                                                    lineHeight={"normal"}
                                                    color={"#FFFFFF99"}
                                                    sx={{
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    {link.name}
                                                </Typography>
                                            </HashLink>
                                        )
                                    })}
                                </Stack>
                            </Box>
                        )
                    })}
                </Stack>
            </Stack>
            <Stack
                component={motion.div}
                variants={container}
                initial={"hidden"}
                whileInView={"show"}
                borderTop={"1px solid #FFFFFF1A"}
                direction={{ tablet: "row" }}
                paddingTop={"var(--cardPadding)"}
                gap={"var(--flexGap)"}
                alignItems={{ tablet: "center" }}
                justifyContent={"space-between"}
            >
                <Box
                    component={motion.div}
                    variants={item}
                >
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Open Sans"}
                        fontWeight={400}
                        fontSize={{ mobile: "16px" }}
                        lineHeight={"normal"}
                        color={"#FFFFFF99"}
                        whiteSpace={"normal"}
                    >
                        @2024 <Typography
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={600}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"#3FFF90"}
                            textTransform={"uppercase"}
                        >
                            profit Ai
                        </Typography>
                    </Typography>
                </Box>
                <Stack
                    component={motion.div}
                    variants={item}
                    gap={"calc(var(--flexGap)/4)"}
                    direction={{ mobile: "row" }}
                    flexWrap={"wrap"}
                    overflow={"hidden"}
                >
                    {socialMedia.map((medium, i) => {
                        return (
                            <IconButton
                                key={i}
                                sx={{
                                    border: "1px solid #FFFFFF14",
                                    height: "fit-content"
                                }}
                                onClick={() => window.open(medium.url, '_blank')}
                            >
                                {medium.icon}
                            </IconButton>
                        )
                    })}
                </Stack>
            </Stack>
        </FooterBox>
    )
}
