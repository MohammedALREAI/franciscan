import Head from "next/head";

export default ({title, description}) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css?family=Cinzel"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </Head>
);
