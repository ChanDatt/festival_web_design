import { useState } from 'react';
import styles from './UploadForm.module.css';
import Swal from 'sweetalert2';
import Email from '../../vendor/smtp.js'; 

function UploadForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      Swal.fire('Oops...', 'Please select an image to upload.', 'error');
      return;
    }
    
    setIsSubmitting(true);

    const bodyMessage = `An image has been submitted from the gallery page:<br><br>
                         <b>Full Name:</b> ${fullName}<br>
                         <b>Email:</b> ${email}<br>
                         <b>File Name:</b> ${file.name}<br>
                         <b>File Size:</b> ${(file.size / 1024).toFixed(2)} KB`;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "your-email@example.com", 
      Password: "YOUR_ELASTICEMAIL_PASSWORD", 
      To: 'your-email@example.com',
      From: "your-email@example.com",
      Subject: `New Image Submission from ${fullName}`,
      Body: bodyMessage
    }).then(message => {
      if (message === "OK") {
        Swal.fire("Success!", "Thank you for being part of THE COLOR RUN!", "success");
        setFullName('');
        setEmail('');
        setFile(null);
        e.target.reset();
      } else {
        Swal.fire("Error", `Something went wrong: ${message}`, "error");
      }
    }).finally(() => {
      setIsSubmitting(false); 
    });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <h2>Send Image</h2>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name:</label>
          <input
            id="name"
            type="text"
            className={styles.input}
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className={styles.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="myfile">Select image:</label>
          <input
            id="myfile"
            type="file"
            className={styles.fileInput}
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>
        
        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}

export default UploadForm;