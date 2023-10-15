'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

type ThemeProviderWrapperProps = {
    children: React.ReactNode
}

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => (
  <ThemeProvider attribute="class">
    {children}
  </ThemeProvider>
);
export default ThemeProviderWrapper;
