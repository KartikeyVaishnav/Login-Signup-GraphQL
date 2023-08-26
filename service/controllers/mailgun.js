import mailgunJS from 'mailgun-js';

const api_key = '7566db4f15996c9be5edfba2d94bce72-73f745ed-dd5c7927';
const domain = 'sandbox1f1e75d031fd4711aae5e03652e0ce3a.mailgun.org';

const mailgun = mailgunJS({ apiKey: api_key, domain: domain });

const sendEmail = (data) => {
  return new Promise((resolve, reject) => {
    mailgun.messages().send(data, (error, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};

export default sendEmail;