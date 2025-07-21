import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";

export function QueryProvider({ children }: { children: ReactNode }) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools client={queryClient} initialIsOpen={false} />
		</QueryClientProvider>
	);
}
