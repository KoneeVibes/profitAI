import { Box, Card, CardHeader, Stack, Typography } from "@mui/material";
import teamBg from "../../assets/teamBg.svg";
import { team } from "../../data";
import { TeamBox } from "./styled";

export const Team: React.FC<{}> = () => {
    return (
        <TeamBox
            margin={{ mobile: "var(--cardPadding) var(--pagePadding)", laptop: "calc(1.5 * var(--cardPadding)) var(--pagePadding)", desktop: "calc(3 * var(--cardPadding)) var(--pagePadding)" }}
            padding={"var(--cardPadding) 0"}
            position={"relative"}
            sx={{
                backgroundImage: `url(${teamBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "70.5rem"
            }}
        >
            <Box>
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
                    Meet our <Typography
                        component={"span"}
                        color={"#3FFF90"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                    >
                        Team
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
                    marginBlockStart={{ mobile: "1rem" }}
                    marginBlockEnd={{ mobile: "2rem", laptop: "1rem" }}
                    sx={{
                        textWrap: "balance",
                    }}
                >
                    Hey everyone, meet our amazing team!
                </Typography>
            </Box>
            <Stack
                gap={"var(--flexGap)"}
                direction={{ laptop: "row" }}
                justifyContent={"space-between"}
                position={{ laptop: "absolute" }}
                top={"35%"}
                left={"var(--pagePadding)"}
                right={"var(--pagePadding)"}
                width={"100%"}
                sx={{
                    transform: { laptop: "translate(calc(-1 * var(--pagePadding)), calc(-1 * var(--pagePadding)))" }
                }}
            >
                {team.map((member, i) => {
                    return (
                        <Card
                            key={i}
                            sx={{
                                backgroundColor: "#03291E",
                                borderRadius: "25px",
                                boxShadow: "none",
                                flexGrow: 1,
                            }}
                        >
                            <CardHeader
                                title={
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Open Sans"}
                                        fontWeight={600}
                                        fontSize={{ mobile: "20px" }}
                                        lineHeight={"normal"}
                                        whiteSpace={"normal"}
                                        color={"#FFFFFF"}
                                        textAlign={"center"}
                                    >
                                        {member.name}
                                    </Typography>
                                }
                                avatar={member.headshot}
                                subheader={
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily={"Open Sans"}
                                        fontWeight={400}
                                        fontSize={{ mobile: "14px" }}
                                        lineHeight={"normal"}
                                        whiteSpace={"normal"}
                                        color={"#FFFFFF99"}
                                        textAlign={"center"}
                                    >
                                        {member.title}
                                    </Typography>
                                }
                            />
                        </Card>
                    )
                })}
            </Stack>
        </TeamBox >
    )
}