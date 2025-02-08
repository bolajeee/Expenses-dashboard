import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      primary: "#FF0080",
      secondary: "#7928CA",
    },
    chart: {
      expense: "#FF0080",
      income: "#50C878",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
  components: {
    Box: {
      baseStyle: {
        borderRadius: "xl",
        transition: "all 0.2s",
      },
    },
    Container: {
      baseStyle: {
        maxW: "1400px",
      },
    },
  },
});

export default theme;
