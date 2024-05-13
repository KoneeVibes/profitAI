import { Box, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";

export const Pricing: React.FC<{}> = () => {
    return (
        <Box
            padding={"0 var(--pagePadding) var(--cardPadding)"}
        >
            <Box
                marginLeft={"auto"}
                marginRight={"auto"}
                width={{ tablet: "85%", laptop: "70%", desktop: "50%" }}
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
                direction={{ laptop: "row" }}
            >
                <Card
                    sx={{
                        flex: 1,
                        background: "#03291E",
                        padding: "var(--cardPadding)",
                        borderRadius: "30px"
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
                            >
                                0% <Typography
                                    component={"span"}
                                    color={"#B0B3BF"}
                                    fontFamily={"Open Sans"}
                                    fontWeight={600}
                                    fontSize={{ mobile: "20px" }}
                                    lineHeight={"inherit"}
                                    marginBlockEnd={"1rem"}
                                >
                                    Token Holding
                                </Typography>
                            </Typography>
                        }
                        sx={{
                            borderBottom: "1px solid #FFFFFF1A",
                        }}
                    />
                    <CardContent>

                    </CardContent>
                </Card>
                <Card
                    sx={{
                        flex: 1,
                        background: "#03291E",
                        padding: "var(--cardPadding)",
                        borderRadius: "30px"
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
                            >
                                1% <Typography
                                    component={"span"}
                                    color={"#B0B3BF"}
                                    fontFamily={"Open Sans"}
                                    fontWeight={600}
                                    fontSize={{ mobile: "20px" }}
                                    lineHeight={"inherit"}
                                    marginBlockEnd={"1rem"}
                                >
                                    Token Holding
                                </Typography>
                            </Typography>
                        }
                        sx={{
                            borderBottom: "1px solid #FFFFFF1A",
                        }}
                    />
                    <CardContent>

                    </CardContent>
                </Card>
            </Stack>
        </Box>
    )
}