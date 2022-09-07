import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;
  const queryArr = [];
  for (const key in body) {
    if (body[key]) queryArr.push(`${key}=${body[key]}`);
  }
  res.status(200).json({
    data: `?${queryArr.join('&')}`,
  });
}
