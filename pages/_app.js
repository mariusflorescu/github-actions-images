import { ThemeProvider } from "next-themes";
import { theme, darkTheme } from "../stitches.config";
import { global } from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  global();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: theme.className,
        dark: darkTheme.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
