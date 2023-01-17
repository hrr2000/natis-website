// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {password: string} | {error: string}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method !== 'POST') return res.status(400).json({
    error: 'Unsupported Method'
  });

  const { password } = req.body || {};
  const formPassword = process.env.FORM_PASSWORD;
  console.log('pass', password, formPassword);

  if(formPassword === password) {
    return res.status(200).json({
      password
    });
  }

  return res.status(400).json({
    // error: 'invalid password'
    error: formPassword
  });
}

