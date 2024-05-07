import React from "react";

export type BaseButtonType = {
    children: React.ReactNode
    location: string
}

export type ButtonStyles = {
    size: number;
    weight: number;
    color: string;
    bg: string;
    radius: string;
    border?: string;
    padding?: string;
}
