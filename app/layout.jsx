'use client';
import React, { useState } from "react";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.sass";
import CustomHeader from "../components/CustomHeader";
import Meta from "../components/Meta";
import Starfield from "../components/StarComponents/Starfield";
import GalagaContainer from "../components/GalagaComponents/GalagaContainer";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {

  const [isInverted, setIsInverted] = useState(false);
  return (
    <html lang="en">
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {
          // eslint-disable-next-line @next/next/no-page-custom-font
        }
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        </head>
      <body>
        {" "}
        <div
          className={`${styles.container} ${isInverted ? styles.invert : ""}`}
        >
          <CustomHeader setIsInverted={setIsInverted} />
          <Meta />
          <main className={styles.main}>
            <div
              className={`nes-container is-dark with-title ${styles.innerContainer}`}
            >
              <div>
                {children}
                <GalagaContainer />
              </div>
              <Starfield isInverted={isInverted} />
            </div>
          </main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
