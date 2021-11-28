import React, { ReactElement } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { CssBaseline } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import { Analytics } from "components/analytic";
import theme from "styles/theme";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = (props: MyAppProps): ReactElement => {
  const {
    Component,
    pageProps,
    emotionCache = createCache({ key: "css", prepend: true }),
  } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Analytics />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
