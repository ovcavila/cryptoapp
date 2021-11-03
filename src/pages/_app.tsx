import type { AppProps } from 'next/app';
import  Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { EmotionCache } from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import { createEmotionCache } from '../../styles/createEmotionCache';
import { theme } from '../../styles/theme';
import { NavBar } from '../components/Navbar';
import { CustomThemeProvider } from '../utils/CustomThemeProvider';

const clientEmotionCache = createEmotionCache();


function MyApp({ Component, emotionCache = clientEmotionCache, pageProps }: AppProps & { emotionCache: EmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Crypto currency App</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CustomThemeProvider>
          <CssBaseline />
          <NavBar />
          <Component {...pageProps} />
      </CustomThemeProvider>
      
    </CacheProvider>
  ) 
}

export default MyApp
