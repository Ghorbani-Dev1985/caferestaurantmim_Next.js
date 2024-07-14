"use client"
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';


const ReactQueryProvider = ({ children } : {children : React.ReactNode}) => {
  // State
  const [queryClientStore] = useState(() => new QueryClient());
  // Return Provider
  return (
    <QueryClientProvider client={queryClientStore}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;