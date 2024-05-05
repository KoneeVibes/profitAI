import React from "react";
import { smIcons } from "../../data";
import { SocialsStack } from "./styled";

export const Socials: React.FC<{}> = () => {
    return (
        <SocialsStack>
            {smIcons.map((item, key) => {
                return (
                    <React.Fragment
                        key={key}
                    >
                        {item.icon}
                    </React.Fragment>
                )
            })}
        </SocialsStack>
    )
}