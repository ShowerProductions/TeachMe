import executeQuery from '@lib/database';
import { v4 as uuid } from 'uuid';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const sessionId = uuid();
      const result = await executeQuery({
        query: 'INSERT INTO Sessions VALUES (?, ?, ?, ?, ?)',
        values: [
          sessionId,
          req.body.username,
          req.body.title,
          req.body.description,
          req.body.topic,
        ],
      });
      console.log(sessionId);
      res.status(200).json({ id: sessionId });
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }
}
