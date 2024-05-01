import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        mobile: true;
        miniTablet: true;
        tablet: true;
        laptop: true;
        desktop: true;
        xl: true;
    }
}

export const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            miniTablet: 425,
            tablet: 768,
            laptop: 1024,
            desktop: 1280,
            xl: 1440,
        },
    },

    typography: {
        h1: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        },
        h2: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        },
        h3: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        },
        h4: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        },
        body1: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        },
        subtitle1: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        },
        button: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        }
    },
})