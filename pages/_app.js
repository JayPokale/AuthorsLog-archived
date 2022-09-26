import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter().asPath.replace("#", "");
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* {router !== "/connect" && <Navbar />} */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
