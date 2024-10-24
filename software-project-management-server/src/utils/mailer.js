import config from "../config/environment.js";
import nodeMailer from "nodemailer";

const sendMail = (to, subject, htmlContent) => {
    const transporter = nodeMailer.createTransport({
        host: config.mailer.host,
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: config.mailer.username,
            pass: config.mailer.password,
        },
    });

    const options = {
        from: config.mailer.from,
        to: to,
        subject: subject,
        html: htmlContent,
    };
    return transporter.sendMail(options);
};

export { sendMail };
