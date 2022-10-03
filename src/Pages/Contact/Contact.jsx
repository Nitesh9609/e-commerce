import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";

const Contact = () => {
  const [alert, setAlert] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ajlybo",
        "template_7dwxrua",
        form.current,
        "5y_3wXJ70CQnEAVMx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    setAlert(true);
  };

  return (
    <>
      <div className="contact-heading">Contact Us</div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.840280369297!2d77.10154651489276!3d28.604567982428833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ca9c886d1ed%3A0xa92b35a87f59a9c6!2sState%20Bank%20ATM!5e0!3m2!1sen!2sin!4v1664778262482!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0, marginTop: 50 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message" required />
        {alert ? (
          <Alert
            sx={{ position: "absolute", top: 20 }}
            severity="success"
            color="info"
            onClose={() => setAlert(false)}
          >
            Message Send Successfully
          </Alert>
        ) : (
          
          <button type="submit">SEND MESSAGE</button>
        )}
      </form>
    </>
  );
};

export default Contact;
