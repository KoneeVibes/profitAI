import { Box, Stack, Typography } from "@mui/material";
import { features } from "../../data";
import { BaseButton } from "../../components/button";

export const Features: React.FC<{}> = () => {
    return (
        <Box
            margin={"0 var(--pagePadding)"}
            padding={"calc(2 * var(--cardPadding)) 0"}
            sx={{
                border: "1px solid",
                borderLeft: "none",
                borderRight: "none",
                borderImageSource: "linear-gradient(90deg, #00150F 0%, #32C971 53.34%, #062519 100%)",
                borderImageSlice: 1,
            }}
        >
            <Box
                marginLeft={"auto"}
                marginRight={"auto"}
                width={{ tablet: "85%", laptop: "80%", desktop: "60%" }}
            >
                <Typography
                    variant="h2"
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
                    Core Bot <Typography
                        component={"span"}
                        color={"#3FFF90"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                    >
                        Features
                    </Typography>
                </Typography>
                <Typography
                    variant="body1"
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
                    Here's a list of things you can do with ProfitAI. These core features are essential in maximizing the potential of ProfitAI for your trades.
                </Typography>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                >
                    <Stack
                        direction={{ tablet: "row" }}
                        justifyContent={"center"}
                        gap={{ mobile: "calc(var(--flexGap)/2)", tablet: "var(--flexGap)" }}
                        width={{ mobile: "fit-content", tablet: "unset" }}
                        overflow={"hidden"}
                    >
                        {features.map((feature, i) => {
                            return (
                                <BaseButton
                                    key={i}
                                    location="features"
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
                                        {feature.name}
                                    </Typography>
                                </BaseButton>
                            )
                        })}
                    </Stack>
                </Box>
            </Box>
        </Box >
    )
}