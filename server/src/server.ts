import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "21c0239dbd64fd",
    pass: "bacd6e44a38545"
  }
});

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot} = req.body;

  const feedback = await prisma.feedbacks.create({
    data: {
      type,
      comment,
      screenshot
    }
  });

  transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Lau Oliveira <oi@laura.com>',
    subject: 'Novo feedback',
    html: [
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
    ].join('\n')
  });

  return res.status(201).json({data: feedback});
});

app.listen(3333, () => {
  console.log('Server running...');
});
