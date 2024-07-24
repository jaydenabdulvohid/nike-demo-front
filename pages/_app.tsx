import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "../sccs/MaterialTheme/";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  // Socket.io,
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
