import type { AppProps } from 'next/app'
import {SessionProvider }from "next-auth/react"
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
import * as React from 'react'

// 1. import `ChakraProvider` component

export default MyApp;
