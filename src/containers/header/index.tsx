import { Box } from "@mui/material"
import { Navbar } from "../../components/navbar"
import { Hero } from "../../components/hero"

export const Header: React.FC<{}> = () => {
    return (
        <Box
            overflow={"hidden"}
        >
            <Navbar />
            <Hero />
        </Box>
    )
}