import Head from 'next/head';
import { getProviders, getSession, signIn, signOut } from 'next-auth/react';

import Layout from '@components/login/layout/Layout';
import InputForm from '@components/authentication/input-form/InputForm';
import InputItem from '@components/authentication/input-item/InputItem';

import utilStyles from '@styles/utils.module.css';
import styles from '@styles/login.module.css';

export default function Login({ providers }) {
  return (
    <Layout>
      <Head></Head>
      <main className={styles.loginArea}>
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
      </main>
      <div className={styles.signUpArea}>
        <h1 className={utilStyles.headding1} style={{ margin: 0 }}>
          New Here?
        </h1>
        <p className={utilStyles.paragraph} stlye={{ textAlign: 'center' }}>
          Register an account to start your priceless journey today!
        </p>
        <button className={utilStyles.fancyButton}>Sign Up</button>
      </div>
      {/* {Object.values(providers).map((provider) => (
        <button onClick={() => signIn(provider.id)} key={provider.id}>
          Sign in with {provider.name}
        </button>
      ))} */}
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  console.log(session);

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
