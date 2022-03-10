import Head from 'next/head';
import { getProviders, getSession, signIn, signOut } from 'next-auth/react';

import Layout from '@components/Layout';
import InputForm from '@components/InputForm';
import InputItem from '@components/InputItem';

import utilStyles from '@styles/utils.module.css';

export default function Login({ providers }) {
  return (
    <Layout>
      <Head></Head>
      <div className="login">
        <main className="login-area">
          <InputForm name="Login">
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
          <button className={utilStyles.fancyButton}>Sign Up</button>
        </div>
        {/* {Object.values(providers).map((provider) => (
        <button onClick={() => signIn(provider.id)} key={provider.id}>
          Sign in with {provider.name}
        </button>
      ))} */}
      </div>
      <style jsx>{`
        .login {
          position: relative;
          width: 100%;
          height: 100%;
          display: grid;
          grid: 1fr / 1.7fr 1fr;
        }

        .login-area {
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
      `}</style>
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
