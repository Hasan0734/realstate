import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SENDER_MAIL,
      pass: process.env.APP_PASSWORD,
    },
    secure: true,
  })


export async function sendMail(mailData) {
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
    })
}



// {
//     from: 'alifhasan332@gmail.com',
//     to: email,
//     subject: `Message From`,
//     text: 'test text',
// }