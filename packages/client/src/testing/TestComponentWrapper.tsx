import { QueryClientProvider } from "@tanstack/react-query"
import { QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient()

export const TestComponentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}