import { smIcons } from "../../data";
import { SocialsStack } from "./styled";
import { IconButton } from "@mui/material";

export const Socials: React.FC<{}> = () => {
    return (
        <SocialsStack>
            {smIcons.map((item, key) => {
                return (
                    <IconButton
                        key={key}
                        sx={{
                            padding: "0 !important"
                        }}
                        onClick={() => window.open(item.url, '_blank')}
                    >
                        {item.icon}
                    </IconButton>
                )
            })}
        </SocialsStack>
    )
}