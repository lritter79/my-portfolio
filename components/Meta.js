import Head from "next/head";

import React from "react";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>
        {
          // eslint-disable-next-line react/no-unescaped-entities
          title
        }
      </title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords}></meta>

      {
        // eslint-disable-next-line @next/next/no-page-custom-font
      }
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
    </Head>
  );
};

Meta.defaultProps = {
  title: "",
  description: "",
  keywords: "",
};

export default Meta;
