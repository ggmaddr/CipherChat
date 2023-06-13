//Import `extendTheme`
import { ThemeConfig, extendTheme } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

//Call `extendTheme` and pass your custom values
export const theme = extendTheme(
  {config},
  {
    colors: {
      brand: {
        100: '#14279B', //blue
      },
    },
    styles:{
      global: ()=>({
        body: {
          bg: "#F6F6E9", //beige

        }
      }),
      }
    },
)
