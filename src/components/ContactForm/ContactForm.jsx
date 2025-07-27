import { useState } from 'react';
import styles from './ContactForm.module.css';
import Swal from 'sweetalert2';
import Email from '../../vendor/smtp.js'; 

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const bodyMessage = `First Name: ${firstName}<br> Last Name: ${lastName}<br> Mobile: ${mobile}<br> Email: ${email}<br> Message: ${message}`;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "your-email@example.com",
      Password: "YOUR_ELASTICEMAIL_PASSWORD", 
      To: 'your-email@example.com',
      From: "your-email@example.com",
      Subject: "Contact Form Message",
      Body: bodyMessage
    }).then(msg => {
      if (msg === "OK") {
        Swal.fire("Success!", "Your message has been sent!", "success");
        setFirstName('');
        setLastName('');
        setEmail('');
        setMobile('');
        setMessage('');
      } else {
        Swal.fire("Error", `Something went wrong: ${msg}`, "error");
      }
    });
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <h1>Contact us</h1>
      <div className={styles.inputRow}>
        <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required />
        <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required />
      </div>
      <div className={styles.inputRow}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="text" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} required />
      </div>
      <h4>Message</h4>
      <textarea placeholder="Your message here..." value={message} onChange={e => setMessage(e.target.value)} required></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;