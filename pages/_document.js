import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

import { site } from 'data';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ru" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />

          <title>{site.seo.title}</title>

          <meta name="description" content={site.seo.description} />
          <meta name="keywords" content={site.seo.keywords} />

          <meta name="author" content={`${site.author.fio} | ${site.author.nickname} | ${site.author.link}`} />

          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <meta name="theme-color" content="#fff" />

          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
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
