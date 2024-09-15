import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef(); // To reference the form for submission

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_USER_ID with your actual EmailJS credentials
    emailjs.sendForm('service_fol7rtg', 'template_j1njvlw', form.current, 'S-2OCgycSp3nwznIn')
      .then((result) => {
        console.log(result.text);
        alert("Email sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("An error occurred, please try again.");
      });
    
    e.target.reset(); // Reset the form after submission
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" name="user_name" required />

      <label>Email:</label>
      <input type="email" name="user_email" required />

      <label>Message:</label>
      <textarea name="message" required />

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
