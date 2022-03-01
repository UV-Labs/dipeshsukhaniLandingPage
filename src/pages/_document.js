import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          
          <meta
            name="keywords"
            content="Dipesh Sukhani"
          />
          <meta
            name="description"
            content="Dipesh Sukhani - Portfolio"
          />
      {/* Facebook Meta Tags  */}
        <meta property="og:url" content="https://dipeshsukhani.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dipesh Sukhani" />
        <meta property="og:description" content="Dipesh Sukhani - Portfolio" />
        <meta
          property="og:image"
          content="https://www.dipeshsukhani.dev/img/hero.png"
        />
            
            {/* Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="dipeshsukhani.dev" />
        <meta property="twitter:url" content="https://dipeshsukhani.dev/" />
        <meta name="twitter:title" content="Dipesh Sukhani" />
        <meta name="twitter:description" content="Dipesh Sukhani - Portfolio" />
        <meta
          name="twitter:image"
          content="https://www.dipeshsukhani.dev/img/hero.png"
        />
          
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
