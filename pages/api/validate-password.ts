// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  password: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { password } = req.body || {};

  const formPassword = process.env.FORM_PASSWORD;
  if(formPassword === password) {
    return res.status(200).json({
      password
    });
  }
}

