import React from "react";
import Head from "next/head";

export const Meta = (): JSX.Element => (
  <Head>
    <title>LYNX</title>
    <meta name="og:description" content="Take a leap project" />
    <meta name="og:viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
