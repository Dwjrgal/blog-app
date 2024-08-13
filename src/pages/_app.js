import "@/styles/globals.css";
import Layout from "@/components/layout";
import SearchProvider from "@/provider/search-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </SearchProvider>
  );
}
