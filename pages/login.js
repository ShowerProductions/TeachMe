import Head from 'next/head';
import Layout from '@components/layout/Layout';

import InputForm from '@components/authentication/input-form/InputForm';
import InputItem from '@components/authentication/input-item/InputItem';

export default function Login() {
  return (
    <Layout>
      <Head></Head>
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
