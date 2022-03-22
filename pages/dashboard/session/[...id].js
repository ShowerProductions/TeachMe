import React from 'react';

import { useRouter } from 'next/router';

import Layout from '@components/Layout';

const Session = (props) => {
  const router = useRouter();
  const id = router.query.id || [];
  return (
    <Layout navbar>
      <main></main>
      <style jsx>{`
        main {
          display: grid;
          height: 100%;
        }
      `}</style>
    </Layout>
  );
};

export default Session;
