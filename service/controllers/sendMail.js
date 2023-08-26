import { generateOTP } from "./OTP.js";
import { cacheOTP } from "./cacheOTP.js";
import sendEmail from "./mailgun.js";

export const userCreation=async(args)=>{
    const otp = await generateOTP()
    const data = {
        from: 'kartikeyvaishnav24@gmail.com',
        to: 'kartikeyvaishnav24@gmail.com',
        subject: 'Registration OTP',
        text: `Here is your Registration OTP ${otp}`,
      };
      await cacheOTP(args.email,otp)
     const mail =await sendEmail(data)
        .then((body) => {
          console.log(body);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
        return mail
}

export const login=async(args)=>{
    const otp = await generateOTP()
    const data = {
        from: 'kartikeyvaishnav24@gmail.com',
        to: 'kartikeyvaishnav24@gmail.com',
        subject: 'Login OTP',
        text: `Here is your Login OTP ${otp}`,
      };
      await cacheOTP(args.email,otp)
     const mail =await sendEmail(data)
        .then((body) => {
          console.log(body);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
        return mail
}

