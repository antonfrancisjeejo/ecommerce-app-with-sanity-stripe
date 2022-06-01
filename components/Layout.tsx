import React, { FC } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: any;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Ecommerce Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
