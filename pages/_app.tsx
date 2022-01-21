import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout/Layout";
import useTrackUsers from "../components/layout/hooks/useTrackUsers";

function MyApp({ Component, pageProps }: AppProps) {
	useTrackUsers();

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
