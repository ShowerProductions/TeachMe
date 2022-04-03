import React from 'react';
import { useRouter } from 'next/router';

import { getSession } from 'next-auth/react';

import Session from '@components/Session';
import Layout from '@components/Layout';
import InputForm from '@components/InputForm';
import InputItem from '@components/InputItem';
import Button from '@components/Button';

import executeQuery from '@lib/database';

const Sessions = ({ sessions }) => {
  const router = useRouter();

  const sessionComponents = sessions.map(
    ({ id, host_name, title, description, topic }) => {
      return (
        <Session
          id={id}
          username={host_name}
          title={title}
          description={description}
          topic={topic}
          key={id}
        />
      );
    }
  );

  const createSession = async () => {
    const response = await fetch('/api/session', {
      method: 'POST',
      body: JSON.stringify({
        username: 'torghton',
        title: 'test',
        description: 'desc',
        topic: 'math',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    router.push(`/dashboard/session/${data.id}`);
  };
  return (
    <Layout navbar>
      <main>
        <Button onClick={createSession} padding="10px 20px">
          Create New Session
        </Button>
        <InputForm name="search" style={{ flexFlow: 'row nowrap' }}>
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
        {/* <Session
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
        /> */}
        {sessionComponents}
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

  const sessions = await executeQuery({
    query: 'SELECT * FROM Sessions',
    values: [],
  });

  const serializedSessions = JSON.parse(JSON.stringify(sessions));

  return {
    props: { sessions: serializedSessions },
  };
}

export default Sessions;
