import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function Doc() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <style jsx>
        {`
          html,
          body {
            height: 100%;
            margin: 0;
          }
        `}
      </style>
    </Html>
  );
}
