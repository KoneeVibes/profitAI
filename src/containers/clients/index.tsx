import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { clients } from "../../data";

export const Clients: React.FC<{}> = () => {
    return (
        <Stack
            gap={"calc(var(--flexGap)/4)"}
            padding={"var(--cardPadding) 0 var(--cardPadding) var(--pagePadding)"}
        >
            <Box>
                <Typography
                    variant="h2"
                    fontFamily={"Poppins"}
                    fontWeight={400}
                    fontSize={26}
                    lineHeight={"normal"}
                    color={"#D7D7D7"}
                >
                    Trusted by:
                </Typography>
            </Box>
            <Marquee
                autoFill={true}
            >
                {clients.map((client, i) => {
                    return (
                        <React.Fragment
                            key={i}
                        >
                            {client}
                        </React.Fragment>
                    )
                })}
            </Marquee>
        </Stack>
    )
}