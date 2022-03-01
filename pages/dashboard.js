import Head from 'next/head';

import Layout from '@components/layout/Layout';
import DashboardLayout from '@components/dashboard/layout/Layout';
import Panel from '@components/dashboard/panel/Panel';
import Session from '@components/dashboard/panels/sessions/Session';

export default function Dashboard() {
  return (
    <Layout>
      <Head></Head>
      <DashboardLayout>
        <Panel>hjasdkf</Panel>
        <Panel>
          <Session
            user="torghton"
            title="How to find area of circle"
            description="Im not sure how to find the area of a circle, my geometry class is studying it right now, though the teacher didn't explain it very well. Please lecture me on how to do this."
            topic="Science"
          />
        </Panel>
        <Panel></Panel>
      </DashboardLayout>
    </Layout>
  );
}
