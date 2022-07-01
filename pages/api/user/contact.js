
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.API_KEY);

export default async function Contact(req,res) {

    const body = JSON.parse(req.body);

    const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;
    
    mail.send({
        to: process.env.REC_EMAIL,
        from: process.env.SEND_EMAIL,
        subject: '[EV Charging] New Message! From: '+body.name,
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
      }).then(() => {
        res.status(200).json({ status: 'Ok' });
      });
}