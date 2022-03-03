import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import Layout from '@components/layout/Layout';
const { data: session, status } = useSession();
const router = useRouter();

if (status === 'unauthenticated') router.push('/dashboard');

export default function Home() {
  return (
    <Layout>
      <Head></Head>
    </Layout>
  );
}
