import { Box, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
// import { Icon } from "../../assets";
import { partners } from "../../data";
import { PartnersStack } from "./styled";
import "../../configs/lightening.css";

export const Partners: React.FC<{}> = () => {
    return (
        <Box
            padding={"0 var(--pagePadding)"}
        >
            <PartnersStack
                direction={{ laptop: "row" }}
                gap={"calc(1.5 * var(--flexGap))"}
                overflow={"hidden"}
            >
                <Card
                    className="borderLight"
                    sx={{
                        flex: 1,
                        backgroundColor: "#00322340",
                        padding: "calc(var(--cardPadding)/2)",
                        borderRadius: "30px",
                        boxShadow: "none"
                    }}
                >
                    <CardHeader
                        // avatar={<Icon />}
                        title={
                            <Typography
                                variant="h2"
                                fontFamily={"Poppins"}
                                fontWeight={700}
                                fontSize={{ mobile: 30, miniTablet: 35, tablet: 40, laptop: 50 }}
                                lineHeight={"normal"}
                                sx={{
                                    backgroundImage: "linear-gradient(90deg, #3FFF90 0%, #0AED1F 100%)",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    color: "transparent",
                                }}
                            >
                                Partners
                            </Typography>
                        }
                    />
                    <CardContent
                        sx={{
                            overflow: "hidden"
                        }}
                    >
                        <Stack
                            direction={{ xl: "row" }}
                            flexWrap={"wrap"}
                            gap={{ mobile: "var(--flexGap)", xl: "calc(var(--flexGap)/2)" }}
                            justifyContent={"space-between"}
                            overflow={"hidden"}
                        >
                            {partners.map((partner, i) => {
                                return (
                                    <Card
                                        key={i}
                                        sx={{
                                            backgroundColor: "transparent",
                                            flex: `calc(100%/${partners.length})`,
                                            boxShadow: "none",
                                            width: "100%",
                                        }}
                                    >
                                        <CardHeader
                                            avatar={partner.logo}
                                            sx={{
                                                padding: 0,

                                            }}
                                        />
                                        <CardContent
                                            sx={{
                                                padding: "0 !important",
                                            }}
                                        >
                                            <Typography
                                                variant="h3"
                                                fontFamily={"Poppins"}
                                                fontWeight={700}
                                                fontSize={{ mobile: "14px" }}
                                                lineHeight={"normal"}
                                                whiteSpace={"normal"}
                                                color={"#FFFFFF"}
                                                marginBlockStart={"1rem"}
                                                sx={{
                                                    textTransform: "uppercase"
                                                }}
                                            >
                                                {partner.title}
                                                <Typography
                                                    component={"span"}
                                                    color={"inherit"}
                                                    fontFamily={"inherit"}
                                                    fontWeight={400}
                                                    fontSize={"inherit"}
                                                    lineHeight={"inherit"}
                                                    whiteSpace={"inherit"}
                                                    sx={{
                                                        textTransform: "capitalize"
                                                    }}
                                                >
                                                    {partner.info}
                                                </Typography>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </Stack>
                    </CardContent>
                </Card>
                <Card
                    className="borderLight"
                    sx={{
                        flex: 1,
                        backgroundColor: "#00322340",
                        padding: "calc(var(--cardPadding)/2)",
                        borderRadius: "30px",
                        boxShadow: "none",
                    }}
                >
                    <CardHeader
                        title={
                            <Typography
                                variant="h2"
                                fontFamily={"Inter"}
                                fontWeight={600}
                                fontSize={{ mobile: 30, miniTablet: 35, tablet: 40, laptop: 47 }}
                                lineHeight={"normal"}
                                color={"#FFFFFF"}
                                whiteSpace={"normal"}
                            >
                                Partner <Typography
                                    component={"span"}
                                    color={"#3FFF90"}
                                    fontFamily={"inherit"}
                                    fontWeight={"inherit"}
                                    fontSize={"inherit"}
                                    lineHeight={"inherit"}
                                >
                                    Integrations
                                </Typography>
                            </Typography>
                        }
                        sx={{
                            border: "1px solid",
                            borderLeft: "none",
                            borderRight: "none",
                            borderTop: "none",
                            borderImageSource: "linear-gradient(90deg, #00150F 0%, #32C971 53.34%, #062519 100%)",
                            borderImageSlice: 1,
                        }}
                    />
                    <CardContent>
                        <Typography
                            variant="body1"
                            fontFamily={"Poppins"}
                            fontWeight={400}
                            fontSize={{ mobile: 16, desktop: 17 }}
                            lineHeight={"normal"}
                            color={"#FFFFFF99"}
                            whiteSpace={"normal"}
                            marginBlockStart={"2rem"}
                        >
                            Highlighting ProfitAI's Web2 partner integrations and their significant impact on our product is crucial. With numerous partnerships, it's vital to understand each one's specific benefits.<br /><span style={{ display: "block", height: "2rem" }} />

                            These partnerships enhance Website AI's development and future brand visibility. Amazon AWS, Uniswap, and CoinMarketCap are seamlessly integrated into our dApp, optimizing efficiency.
                        </Typography>
                    </CardContent>
                </Card>
            </PartnersStack>
        </Box>
    )
}