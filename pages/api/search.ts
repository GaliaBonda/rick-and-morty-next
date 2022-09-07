import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //   res.status(200).json({ name: 'John Doek' });
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  // console.log('body: ', body);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  // if (!body.name) {
  //   return res.status(400).json({ data: 'invalid data' });
  // }

  res.status(200).json({
    data: `?name=${body.name}&status=${body.status}&species=${body.species}&type=${body.type}&gender=${body.gender}`,
  });
}
