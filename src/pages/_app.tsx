import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        defaultRadius: 0,
        colors: {
          brand: [
            "#fffbeb",
            "#fef3c7",
            "#fce58b",
            "#fbd24e",
            "#fabe25",
            "#f49d0c",
            "#d87607",
            "#b3520a",
            "#913f0f",
            "#78350f",
          ],
        },
        primaryColor: "brand",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
