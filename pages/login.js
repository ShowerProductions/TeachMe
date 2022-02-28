import Head from 'next/head';
import Layout from '@components/layout/Layout';

import InputForm from '@components/authentication/input-form/InputForm';
import InputItem from '@components/authentication/input-item/InputItem';

export default function Login() {
  return (
    <div>
      <Head></Head>
      <InputForm name="Login">
        <InputItem name="Username" />
        <InputItem name="Password" />
      </InputForm>
    </div>
  );
}
