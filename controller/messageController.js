const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMessage = async (req, res) => {
  try {
    let config = {
      service: "gmail",
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD,
      },
    };

    let transporter = nodemailer.createTransport(config);

    const content = `<b>Name: </b>${req.body.name}<br /><b>Email: </b>${req.body.email}<b><br />Phone: </b>${req.body.phone}<br /><b>Message: </b>${req.body.message}`;

    let message = {
      from: req.body.email,
      to: process.env.COMPANY_MAIL,
      subject: "Message from " + req.body.name,
      html: content,
    };

    let info = await transporter.sendMail(message);

    return res.status(201).send("Message sent");
  } catch (error) {
    res.send(error);
  }
};

module.exports = { sendMessage };
