import { extendTheme } from "@chakra-ui/react";

// const theme = extendTheme({
//     config: {
//         initialColorMode: "light",
//         useSystemColorMode: false
//     }
// });

const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    },
    styles: {
        global: {
            body: {
                bg: "#FFFFFF", // Bright white background
                color: "#000000", // Black text for high contrast
            },
            a: {
                color: "#ff0000", // Bright red links
                _hover: {
                    textDecoration: "underline"
                }
            }
        }
    }
});


export default theme