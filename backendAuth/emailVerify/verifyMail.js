import nodemailer from "nodemailer"
import 'dotenv/config'


export const verifyMail = async (token, email) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    const mailConfigurations = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Email Verification',
        text: `Please click the following link to verify your email: http://localhost:5173/verify/${token}`
    }

    transporter.sendMail(mailConfigurations, function (error, info) {
        if (error) {
            throw new Error(error)
        }
        console.log('Email sent successfully');
        console.log(info);


    })
}

