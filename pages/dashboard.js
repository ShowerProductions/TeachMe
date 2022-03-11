import Head from 'next/head';
import { getSession } from 'next-auth/react';

import Layout from '@components/layout/Layout';
import DashboardLayout from '@components/dashboard/layout/Layout';
import Panel from '@components/dashboard/panel/Panel';
import Session from '@components/dashboard/panels/sessions/Session';

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Asap&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DashboardLayout>
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
      </DashboardLayout>
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
