import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

interface QueryProviderProps {
  children?: React.ReactNode;
}

const queryClient = new QueryClient();

export const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
