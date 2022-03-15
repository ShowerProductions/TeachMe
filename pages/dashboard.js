import Head from 'next/head';
import { getSession } from 'next-auth/react';

import Layout from '@components/Layout';
import Panel from '@components/Panel';
import Session from '@components/Session';

export default function Dashboard() {
  return (
    <Layout navbar>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Asap&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Panel>hjasdkf</Panel>
        <Panel>
          <Session
            username="torghton"
            title="How to find area of circle"
            description="Im not sure how to find the area of a circle, my geometry class is studying it right now, though the teacher didn't explain it very well. Please lecture me on how to do this."
            topic="Science"
          />
          <Session
            username="bob"
            title="Mitocondria Explanation Help"
            description="hafkjdshfkjhsadkjfhsakjdfhksjadfhkjsadhfhsakjfhsd"
            topic="Science"
          />
        </Panel>
        <Panel></Panel>
      </main>
      <style jsx>{`
        main {
          display: grid;
          grid-template-rows: 1fr;
          grid-template-columns: 0.9fr 1.2fr 0.9fr;
          gap: 7px;
          width: 100%;
          height: 100%;
          background-color: black;
        }
      `}</style>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  console.log(session);

  if (session === null) {
    return {
      redirect: { destination: '/login' },
    };
  }

  return {
    props: {},
  };
}
