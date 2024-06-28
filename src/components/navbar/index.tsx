import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Box, Stack, Typography } from "@mui/material";
import { Logo } from "../../assets";
import { navLinks } from "../../data";
import { Nav } from "./styled";
import { BaseButton } from "../button";
import { MenuButton } from "../button/menu";
import { Context } from "../../context";

export const Navbar: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { openMenu, setOpenMenu } = useContext(Context);
    const telegramUrl = "https://t.me/Profits_Ai";

    useEffect(() => {
        if (openMenu) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "visible";
        }
    }, [openMenu]);
    const handleLogoClick = () => {
        setOpenMenu(false);
        navigate("/");
    }
    const routeToTelegram = () => {
        setOpenMenu(false);
        window.open(telegramUrl, '_blank');

    }

    const scrollWithOffset = (el: any) => {
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
        const yOffset = -65; //to account for maxNavheight
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    return (
        <Nav
            direction={{ mobile: "row" }}
            gap={"calc(2 * var(--flexGap))"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <Logo
                className="logo"
                onClick={handleLogoClick}
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
                                scroll={(el) => scrollWithOffset(el)}
                                onClick={() => setOpenMenu(false)}
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
                        onClick={routeToTelegram}
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
                            Telegram
                        </Typography>
                    </BaseButton>
                </Box>
            </Stack>
            <MenuButton />
        </Nav>
    )
}