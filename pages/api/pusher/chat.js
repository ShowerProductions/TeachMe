import { pusher } from '@lib/pusher';

export default async function handler(req, res) {
  const { chatId, username, message } = req.body;
  await pusher.trigger(`chat-${chatId}`, 'message', {
    username,
    message,
  });

  res.status(200).json({ status: 200 });
}
