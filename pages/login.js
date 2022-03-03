import Head from 'next/head';
import { getProviders, getSession, signIn, signOut } from 'next-auth/react';

import Layout from '@components/layout/Layout';
import InputForm from '@components/authentication/input-form/InputForm';
import InputItem from '@components/authentication/input-item/InputItem';

export default function Login({ providers }) {
  return (
    <Layout>
      <Head></Head>
      <button onClick={() => signOut}>Sign Out</button>
      {Object.values(providers).map((provider) => (
        <button onClick={() => signIn(provider.id)} key={provider.id}>
          Sign in with {provider.name}
        </button>
      ))}
      <InputForm name="Login">
        {(register) => (
          <>
            <InputItem
              name="Username"
              register={register}
              type="text"
              required
            />
            <InputItem name="Password" register={register} type="password" />
          </>
        )}
      </InputForm>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
      },
    };
  }

  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
