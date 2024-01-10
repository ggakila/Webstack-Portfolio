import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/utils/AuthContext";
import Layout from "./layout";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			
			<QueryClientProvider client={queryClient}>
					<Component {...pageProps} />
			</QueryClientProvider>

		</AuthProvider>
	);
}

export default MyApp;
