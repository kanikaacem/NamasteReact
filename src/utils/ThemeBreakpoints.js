import { createTheme } from "@mui/material";

// Define custom breakpoints in the theme
export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 992,
            lg: 1200,
            xl: 1920,
        },
    },
});