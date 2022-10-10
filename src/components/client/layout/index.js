import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
      
      </Head>
      <main className="page-wrapper">
        {" "}
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
