// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {beatifyCamelCase} from "../../utils/functions";
import {SENDER_EMAIL, SENDER_PASSWORD} from "../../utils/constants";
const nodemailer = require('nodemailer');

type Data = {

}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const body = req.body || {};

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.porkbun.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: SENDER_EMAIL, // generated ethereal user
      pass: SENDER_PASSWORD, // generated ethereal password
    },
  });

  let rows = '';
  for(let key in body) {
    rows += `<tr><td  style="text-transform: capitalize">${beatifyCamelCase(key)}</td><td>${body[key]}</td></tr>`;
  }

  const template = `
      <!DOCTYPE html>
        <html>
        <head>
        <style>
          table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }
          td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }
        </style>
        </head>
        <body>
        <h2>${body.fullName}'s Application</h2>
        <table>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
          ${rows}
        </table>
        </body>
        </html>
    `;

  try {
    await transporter.sendMail({
      from: SENDER_EMAIL, // sender address
      to: SENDER_EMAIL, // list of receivers
      subject: `${body.fullName}'s Application`, // Subject line
      html: template
    });
    await transporter.sendMail({
      from: SENDER_EMAIL, // sender address
      to: body.email, // list of receivers
      subject: "Your Application at NATI Institute", // Subject line
      html: 'We Have Received Your Message and Will Get Back to You Shortly.'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Failed to Submit the Application' });
  }


  return res.status(200).json({message: 'Application Submitted Successfully'});
}

