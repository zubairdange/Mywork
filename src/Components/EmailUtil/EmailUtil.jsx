import { SMTPClient } from "emailjs";

//export const sendEmailNotification = () => {
  export const client = new SMTPClient({
    user: "zubairdange",
    password: "zubair@8600",
    host: "smtp.zubairdange@gmail.com",
    ssl: true,
  });
  // send the message and get a callback with an error or details of the message that was sent
  client.send(
    {
      text: "i hope this works",
      from: "you <zubairdange@gmail.com>",
      to: "someone <zubsahmed@yahoo.com>, another <pickupyourbiz@gmail.com>",
      cc: "else <zeeinsightcompany@gmail.com>",
      subject: "testing emailjs",
    },
    (err, message) => {
      console.log(err || message);
    }
  );
};
