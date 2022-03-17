import Head from 'next/head';
import { getProviders, getSession, signIn, signOut } from 'next-auth/react';

import Layout from '@components/Layout';
import InputForm from '@components/InputForm';
import InputItem from '@components/InputItem';
import Button from '@components/Button';
import Seperator from '@components/Seperator';
import CredentialProvider from '@components/CredentialProvider';

import utilStyles from '@styles/utils.module.css';

export default function Login({ providers }) {
  return (
    <Layout>
      <Head></Head>
      <div className="login">
        <main className="login-area">
          <h1 className={utilStyles.headding1} style={{ margin: 0 }}>
            Login to Your Acccount
          </h1>
          <p className={utilStyles.paragraph} style={{ padding: 0, margin: 0 }}>
            Login using either your credentials or a familiar social app
          </p>
          <div className="providers">
            {Object.values(providers).map((provider) => (
              <CredentialProvider
                onClick={() => signIn(provider.id)}
                key={provider.id}
              ></CredentialProvider>
            ))}
          </div>
          <Seperator length="50%" width="30px" height="30px">
            Or
          </Seperator>
          <InputForm>
            {(register) => (
              <>
                <InputItem
                  name="Username"
                  register={register}
                  type="text"
                  required
                />
                <InputItem
                  name="Password"
                  register={register}
                  type="password"
                />
              </>
            )}
          </InputForm>
        </main>
        <div className="sign-up-area">
          <h1 className={utilStyles.headding1} style={{ margin: 0 }}>
            New Here?
          </h1>
          <p className={utilStyles.paragraph} stlye={{ textAlign: 'center' }}>
            Register an account to start your priceless journey today!
          </p>
          <Button padding="10px 30px">Sign Up</Button>
        </div>
      </div>
      <style jsx>
        {`
          .login {
            width: 100%;
            height: 100%;
            display: grid;
            grid: 1fr / 1.7fr 1fr;
          }

          .providers {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            align-content: center;
            gap: 20px;
          }

          main {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-content: center;
            align-items: center;
            gap: 25px;
            background-color: #fff;
          }

          .sign-up-area {
            background-color: #8bc6ec;
            background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            padding: 50px;
          }
        `}
      </style>
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
