import React from 'react';
import { getSession } from 'next-auth/react';

import Session from '@components/Session';
import Layout from '@components/Layout';
import InputForm from '@components/InputForm';
import InputItem from '@components/InputItem';

const index = (props) => {
  return (
    <Layout navbar>
      <main>
        <InputForm name="search" style={{ 'flex-flow': 'row nowrap' }}>
          {(register) => (
            <>
              <InputItem
                name="Search"
                register={register}
                type="text"
                required
              />
            </>
          )}
        </InputForm>
        <Session
          id={4}
          username="torghton"
          title="How to find area of circle"
          description="Im not sure how to find the area of a circle, my geometry class is studying it right now, though the teacher didn't explain it very well. Please lecture me on how to do this."
          topic="Science"
        />
        <Session
          id={2}
          username="bob"
          title="Mitocondria Explanation Help"
          description="hafkjdshfkjhsadkjfhsakjdfhksjadfhkjsadhfhsakjfhsd"
          topic="Science"
        />
        <Session
          id={2}
          username="bob"
          title="Mitocondria Explanation Help"
          description="hafkjdshfkjhsadkjfhsakjdfhksjadfhkjsadhfhsakjfhsd"
          topic="Science"
        />
        <Session
          id={2}
          username="bob"
          title="Mitocondria Explanation Help"
          description="hafkjdshfkjhsadkjfhsakjdfhksjadfhkjsadhfhsakjfhsd"
          topic="Science"
        />
        <Session
          id={2}
          username="bob"
          title="Mitocondria Explanation Help"
          description="hafkjdshfkjhsadkjfhsakjdfhksjadfhkjsadhfhsakjfhsd"
          topic="Science"
        />
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-start;
          align-items: center;
          align-content: center;
          gap: 20px;
          width: 100%;
          height: 100%;
          padding: 50px 20%;
          overflow-y: auto;
          overflow-x: hidden;
        }
      `}</style>
    </Layout>
  );
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session === null) {
    return {
      redirect: { destination: '/login' },
    };
  }

  return {
    props: {},
  };
}

export default index;
