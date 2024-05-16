import { Box, IconButton, Stack, Typography } from "@mui/material";
import { QandAStack } from "./styled";
import AddIcon from '@mui/icons-material/Add';
import { QandAProps } from "../../../types/app.type";
import { motion } from "framer-motion";
import { container, item } from "../../../configs/slideIn";

export const QandA: React.FC<QandAProps> = ({ question, answer }) => {
    return (
        <QandAStack
            component={motion.div}
            variants={container}
            initial={"hidden"}
            whileInView={"show"}
        >
            <Stack
                component={motion.div}
                variants={item}
                direction={"row"}
                gap={"calc(var(--flexGap)/2)"}
                justifyContent={"space-between"}
                overflow={"hidden"}
            >
                <Typography
                    variant="h3"
                    fontFamily={"Inter"}
                    fontWeight={500}
                    fontSize={{ mobile: "25px" }}
                    lineHeight={"normal"}
                    color={"#FFFFFF"}
                    whiteSpace={"normal"}
                >
                    {question}
                </Typography>
                <IconButton
                    className="toggleAnswer"
                    sx={{
                        border: "1px solid #FFFFFF14",
                        height: "fit-content"
                    }}
                >
                    <AddIcon style={{ color: "#FFFFFF" }} />
                </IconButton>
            </Stack>
            <Box
                component={motion.div}
                variants={item}
            >
                <Typography
                    variant="body1"
                    className="answer"
                    fontFamily={"Open Sans"}
                    fontWeight={400}
                    fontSize={{ mobile: "16px" }}
                    color={"#FFFFFF99"}
                    whiteSpace={"normal"}
                    sx={{
                        transition: "all .3s ease-in-out",
                    }}
                >
                    {answer}
                </Typography>
            </Box>
        </QandAStack>
    )
}