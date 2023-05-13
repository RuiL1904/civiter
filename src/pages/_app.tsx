import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";

import "@/styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ defaultRadius: 0}}  
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ThirdwebProvider>
    </QueryClientProvider>
  );
}
