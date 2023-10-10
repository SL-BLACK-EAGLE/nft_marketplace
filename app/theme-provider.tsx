'use client';

import { ThemeProvider } from 'next-themes';

const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider attribute="class">
    {children}
  </ThemeProvider>
);
export default ThemeProviderWrapper;
