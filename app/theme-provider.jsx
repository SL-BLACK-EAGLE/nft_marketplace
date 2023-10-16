'use client';

import { ThemeProvider } from 'next-themes';

const Theme = ({ children }) => (
  <ThemeProvider attribute="class">
    {children}
  </ThemeProvider>
);
export default Theme;
