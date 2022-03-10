import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";

import { theme } from "components/common/Theme";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Head>
      <title>リナビスマネージャー</title>
      <link rel="icon" href="/favicon.ico" />

      <meta httpEquiv="Content-Language" content="ja" />
      <meta name="google" content="notranslate" />
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
);
export default MyApp;
