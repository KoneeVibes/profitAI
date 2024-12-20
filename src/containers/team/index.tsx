import { Box, Card, CardHeader, Stack, Typography } from "@mui/material";
import teamBg from "../../assets/teamBg.svg";
import { team } from "../../data";
import { TeamBox } from "./styled";
import { motion } from "framer-motion";
import { container, item } from "../../configs/verticalSlideIn";

export const Team: React.FC<{}> = () => {
    return (
        <TeamBox
            id="team"
            margin={{ mobile: "var(--cardPadding) var(--pagePadding)", laptop: "calc(3 * var(--cardPadding)) var(--pagePadding) calc(1.5 * var(--cardPadding))", desktop: "calc(3 * var(--cardPadding)) var(--pagePadding) var(--cardPadding)" }}
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
            <Box
                component={motion.div}
                variants={container}
                initial={"hidden"}
                whileInView={"show"}
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
                    component={motion.div}
                    variants={item}
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
                                avatar={member.headshot}
                                title={
                                    <Box
                                        overflow={"hidden"}
                                    >
                                        <Typography
                                            variant="h3"
                                            fontFamily={"Open Sans"}
                                            fontWeight={600}
                                            fontSize={{ mobile: "20px" }}
                                            lineHeight={"normal"}
                                            whiteSpace={"normal"}
                                            color={"#FFFFFF"}
                                            textAlign={"center"}
                                            padding={"0 2rem"}
                                            sx={{
                                                cursor: "pointer"
                                            }}
                                            onClick={() => window.open(member.url, '_blank')}
                                        >
                                            {member.name}
                                        </Typography>
                                    </Box>
                                }
                                subheader={
                                    <Box
                                        overflow={"hidden"}
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            fontFamily={"Open Sans"}
                                            fontWeight={400}
                                            fontSize={{ mobile: "14px" }}
                                            lineHeight={"normal"}
                                            whiteSpace={"normal"}
                                            color={"#FFFFFF99"}
                                            textAlign={"center"}
                                            padding={"2rem 2rem 0"}
                                        >
                                            {member.title}
                                        </Typography>
                                    </Box>
                                }
                            />
                        </Card>
                    )
                })}
            </Stack>
        </TeamBox >
    )
}