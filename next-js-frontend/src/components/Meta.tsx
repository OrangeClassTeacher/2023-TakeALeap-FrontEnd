import React from "react";
import Head from "next/head";

export const Meta = () => {
  return (
    <Head>
      <title>LYNX</title>
      <meta name="og:description" content="Take a leap project" />
      <meta name="og:viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

// interface IMetaTags {
//   url: string;
//   title: string;
//   description: string;
//   image: string;
//   site_name: string;
// }

// export const Meta = ({
//   url,
//   title,
//   description,
//   image,
//   site_name,
// }: IMetaTags): JSX.Element => (
//   <Head>
//     <title>Rotten tomatoes</title>

//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <meta name="title" content={title ? title : "Orange Rotten Tomatoes"} />
//     <meta
//       name="description"
//       content={description ? description : "Orange Rotten Tomatoes"}
//     />
//     <meta name="url" content={url} />
//     <meta name="site_name" content={site_name} />
//     <meta name="image" content={image} />
//     <link rel="icon" href="/favicon.ico" />
//   </Head>
// );
