import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { SessionProvider } from 'next-auth/react';
import { SocketProvider } from '@lib/context/socket';

import { io } from 'socket.io-client';

import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => socketInitializer(), []);

  const IoContext = React.createContext();
  IoContext.displayName = 'socket.io socket';

  let ioSocket;
  const socketInitializer = async () => {
    await fetch('/api/socket');
    const socket = io();

    socket.on('connect', () => {
      console.log('connected');
    });

    ioSocket = socket;
  };
  return (
    <SessionProvider session={session}>
      <SocketProvider value={ioSocket}>
        <Component {...pageProps} />
      </SocketProvider>
    </SessionProvider>
  );
}

export default MyApp;
