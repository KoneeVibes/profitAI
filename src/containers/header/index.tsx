import { Box } from "@mui/material";
import { Navbar } from "../../components/navbar";
import { Hero } from "../../components/hero";
import { Socials } from "../../components/socials";
import gradientBg from "../../assets/bgGradient.svg";

export const Header: React.FC<{}> = () => {
    return (
        <Box
            position={"relative"}
            padding={"var(--cardPadding) var(--pagePadding)"}
        >
            <Navbar />
            <Hero />
            <Socials />
            <Box
                sx={{
                    backgroundImage: `url(${gradientBg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: { mobile: "top left", tablet: "top", xl: "top right" },
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    right: 0,
                    width: "calc(40% + var(--pagePadding))",
                }}
            />
        </Box>
    )
}