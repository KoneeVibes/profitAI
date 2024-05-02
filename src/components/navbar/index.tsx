import { HashLink } from "react-router-hash-link";
import { Box, Stack, Typography } from "@mui/material";
import { Logo } from "../../assets";
import { navLinks } from "../../data";
import { Nav } from "./styled";
import { BaseButton } from "../button";
import { MenuButton } from "../button/menu";

export const Navbar: React.FC<{}> = () => {
    return (
        <Nav
            direction={{ mobile: "row" }}
            gap={"calc(2 * var(--flexGap))"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <Logo
                className="logo"
            />
            <Stack
                className="navStack"
                direction={{ desktop: "row" }}
                gap={"var(--flexGap)"}
                alignItems={"center"}
                justifyContent={{ xl: "space-between" }}
            >
                <nav>
                    {navLinks.map((navLink, i) => {
                        return (
                            <HashLink
                                key={i}
                                to={navLink.url}
                                smooth={true}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Open Sans"}
                                    fontWeight={400}
                                    fontSize={16}
                                    lineHeight={"normal"}
                                    color={"#FFFFFF"}
                                >
                                    {navLink.name}
                                </Typography>
                            </HashLink>
                        )
                    })}
                </nav>
                <Box
                    component={"div"}
                    className="callToActionButtonBox"
                    width={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <BaseButton
                        location="nav"
                    >
                        <Typography
                            variant="button"
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                        >
                            Telegram
                        </Typography>
                    </BaseButton>
                </Box>
            </Stack>
            <MenuButton />
        </Nav>
    )
}