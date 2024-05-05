import { Box } from "@mui/material";
import { Navbar } from "../../components/navbar";
import { Hero } from "../../components/hero";
import { Socials } from "../../components/socials";

export const Header: React.FC<{}> = () => {
    return (
        <Box
            overflow={"hidden"}
        >
            <Navbar />
            <Hero />
            <Socials />
        </Box>
    )
}