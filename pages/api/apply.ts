// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer');

type Data = {

}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "info@nati-usa.org", // generated ethereal user
      pass: "Abedalmala1994", // generated ethereal password
    },
  });

  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <smtp.office365.com>', // sender address
    to: "thedragonea@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  return res.status(200).json(info);
}

