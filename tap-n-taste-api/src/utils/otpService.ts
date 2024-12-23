import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
<<<<<<< HEAD
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
=======
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
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f

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
