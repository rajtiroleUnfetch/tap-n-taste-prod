import * as React from 'react';
import Box from '@mui/material/Box';

interface QBasicLayoutProps {
  children: React.ReactNode;
}

export function TMainLayout({ children }: QBasicLayoutProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      {children}
    </Box>
  );
}
