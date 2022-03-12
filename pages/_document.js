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
      {/* <style jsx>
        {`
          body {
            padding: 0;
            margin: 0;
          }
        `}
      </style> */}
    </Html>
  );
}
