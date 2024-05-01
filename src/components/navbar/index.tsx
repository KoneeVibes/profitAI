import { HashLink } from "react-router-hash-link";
import { Stack, Typography } from "@mui/material";
import { Logo } from "../../assets";
import { navLinks } from "../../data";
import { Nav } from "./styled";
import { BaseButton } from "../button";

export const Navbar: React.FC<{}> = () => {
    return (
        <Nav
            direction={{ desktop: "row" }}
            gap={"calc(2 * var(--flexGap))"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <Logo />
            <Stack
                direction={{ desktop: "row" }}
                gap={"var(--flexGap)"}
                alignItems={"center"}
                justifyContent={"space-between"}
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
            </Stack>
        </Nav>
    )
}