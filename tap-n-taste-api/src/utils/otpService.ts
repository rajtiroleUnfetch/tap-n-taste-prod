import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'yahoo',
  secure: false,
  auth: {
    user: 'tap_n_taste_info@yahoo.com',
    pass: 'Rajalove@22'
  },
});
// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//       user: 'alvera.powlowski86@ethereal.email',
//       pass: 'uYpnnasZ4Rr6FaHjeu'
//   }
// });

export const sendSignupOTPEmail = async (email: string, otp: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP for Signup',
    text: `Your OTP for signup is ${otp}. It expires in 5 minutes.`,
  });
};

export const sendLoginOTPEmail = async (email: string, otp: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP for Login',
    text: `Your OTP for login is ${otp}. It expires in 5 minutes.`,
  });
};
