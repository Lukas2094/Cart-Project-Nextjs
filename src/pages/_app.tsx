import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { CartProvider } from "@/contexts/CartContexts";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'rgb(47, 46, 65)',
        color: 'white',
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>    
    </ChakraProvider>
  ) ;
}
