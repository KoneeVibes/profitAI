import { Box, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { footerLinks, socialMedia } from "../../data";
import { BaseButton } from "../../components/button";
import TelegramIcon from '@mui/icons-material/Telegram';

export const Footer: React.FC<{}> = () => {
    const matches = useMediaQuery('(max-width:280px)');
    return (
        <Box
            padding={"calc(2 * var(--cardPadding)) var(--pagePadding)"}
        >
            <Stack
                gap={{ mobile: "calc(2 * var(--flexGap))", tablet: "var(--flexGap)" }}
                direction={{ tablet: "row" }}
                paddingBottom={{ mobile: "var(--cardPadding)", tablet: "calc(2 * var(--cardPadding))" }}
            >
                <Box
                    flex={0.6}
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
                    gap={{ mobile: "var(--flexGap)", tablet: "calc(2 * var(--flexGap))" }}
                    direction={{ tablet: "row" }}
                >
                    {Object.entries(footerLinks).map((group, i) => {
                        return (
                            <Box
                                key={i}
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
                                            <Typography
                                                key={i}
                                                component={"a"}
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
                                        )
                                    })}
                                </Stack>
                            </Box>
                        )
                    })}
                </Stack>
            </Stack>
            <Stack
                borderTop={"1px solid #FFFFFF1A"}
                direction={{ tablet: "row" }}
                paddingTop={"var(--cardPadding)"}
                gap={"var(--flexGap)"}
                alignItems={{ tablet: "center" }}
                justifyContent={"space-between"}
            >
                <Box>
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
                            >
                                {medium.icon}
                            </IconButton>
                        )
                    })}
                </Stack>
            </Stack>
        </Box>
    )
}
