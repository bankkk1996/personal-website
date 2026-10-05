import { ThemeProvider } from 'next-themes';
import App from './App';

export function Root() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <App />
    </ThemeProvider>
  );
}
