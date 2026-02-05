'use client';

import { ThemeProvider } from 'shadcn-glass-ui';
import 'shadcn-glass-ui/dist/shadcn-glass-ui.css';

export function GlassThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="glass">
      {children}
    </ThemeProvider>
  );
}
