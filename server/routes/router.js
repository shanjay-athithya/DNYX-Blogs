const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

router.get("/", (req, res) => {
  res.send("server start Router");
});


router.post("/send-email", async (req, res) => {
  const { name,email, phone,subject  } = req.body;
  console.log(name, email, phone, subject)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dnyx2024@gmail.com",
      pass: "pwzq xyni odpw ixnk",
    },
  });

  const mailOptions = {
    from: "dnyx2024@gmail.com",
    to: "contact@dnyx.in",
    subject: "New Contact Request",
    text: `Name : ${name} \nEmail: ${email}\nPhone Number : ${phone}\nSubject : ${subject}\n`,
  };
  console.log(mailOptions);

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log(info);
    res.status(200).send({ message: "Email sent", info: info });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error sending email", error: error });
  }
});



module.exports = router;
