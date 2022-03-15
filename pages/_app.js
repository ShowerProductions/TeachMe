import { SessionProvider } from 'next-auth/react';
import '@fortawesome/fontawesome-svg-core/styles.css';

import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
