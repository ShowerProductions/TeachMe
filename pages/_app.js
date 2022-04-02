import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { SessionProvider } from 'next-auth/react';
import { SocketProvider } from '@lib/context/socket';

import { io } from 'socket.io-client';

import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState({});
  useEffect(() => socketInitializer(), []);

  const socketInitializer = async () => {
    await fetch('/api/socket');
    const ioSocket = io();
    console.log('ASKDLJASKLJDDKLSA', ioSocket);

    ioSocket.on('connect', () => {
      console.log('connected');
    });

    setSocket(ioSocket);
    setLoading(false);
  };
  return (
    <SessionProvider session={session}>
      <SocketProvider value={{ loading, socket }}>
        <Component {...pageProps} />
      </SocketProvider>
    </SessionProvider>
  );
}

export default MyApp;
