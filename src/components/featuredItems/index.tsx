import React, { useState } from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { featuredItems } from "../../data";
import { FeaturedItemsStack } from "./styled";

export const FeaturedItems: React.FC<{}> = () => {
    const [shownIndex, setShownIndex] = useState(0);
    const matches = useMediaQuery('(max-width: 200px)');
    return (
        <FeaturedItemsStack
            padding={{ mobile: "calc(1.5 * var(--cardPadding)) 0", tablet: "calc(2 * var(--cardPadding)) 0 var(--cardPadding)" }}
            gap={{ mobile: "calc(2 * var(--flexGap))" }}
            direction={{ laptop: "row" }}
        >
            <Stack
                flex={0.5}
                gap={{ mobile: "calc(1.5 * var(--flexGap))", laptop: "calc(2 * var(--flexGap))" }}
            >
                {featuredItems.map((item, i) => {
                    return (
                        <Box
                            key={i}
                            component={"div"}
                            className="textBox"
                            onMouseEnter={() => setShownIndex(i)}
                        >
                            <Box
                                padding={"calc(var(--cardPadding)/2)"}
                                bgcolor={"#FFFFFF0A"}
                                width={matches ? "auto" : "fit-content"}
                                borderRadius={"8px"}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Open Sans"}
                                    fontWeight={600}
                                    fontSize={14}
                                    lineHeight={"normal"}
                                    color={"#3FFF90"}
                                    whiteSpace={"normal"}
                                >
                                    {item.section}
                                </Typography>
                            </Box>
                            <Typography
                                variant="h3"
                                fontFamily={"Inter"}
                                fontWeight={600}
                                fontSize={{ mobile: 23 }}
                                lineHeight={"normal"}
                                color={"#FFFFFF"}
                                whiteSpace={"normal"}
                                marginBlock={"2rem"}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="h3"
                                fontFamily={"Open Sans"}
                                fontWeight={400}
                                fontSize={16}
                                lineHeight={"normal"}
                                color={"#FFFFFF99"}
                                whiteSpace={"normal"}
                                marginBlockStart={"2rem"}
                            >
                                {item.body}
                            </Typography>
                        </Box>
                    )
                })}
            </Stack>
            <Box
                flex={0.5}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box
                    component={"div"}
                    className="featuredImg"
                    sx={{
                        padding: "var(--cardPadding)",
                        backgroundColor: "#03291E",
                        borderRadius: "30px",
                        transition: "all 3s",
                        animation: "lightening 1.5s linear infinite",
                    }}
                >
                    {featuredItems[shownIndex].img}
                </Box>
            </Box>
        </FeaturedItemsStack >
    )
}