import { useState } from "react";
import styles from "./TicketForm.module.css";
import Swal from "sweetalert2";
import headerBg from "../../assets/images/background8.png";
import submitBg from "../../assets/images/background4.png";

import Email from "../../vendor/smtp.js";

function TicketForm() {
  const [city, setCity] = useState("");
  const [kit, setKit] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city || !kit || !email) {
      Swal.fire("Oops...", "Please fill out all required fields!", "error");
      return;
    }

    const bodyMessage = `City: ${city}<br> Kit: ${kit}<br> Quantity: ${quantity}<br> Email: ${email}`;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "your-email@example.com",
      Password: "YOUR_ELASTICEMAIL_PASSWORD",
      To: "your-email@example.com",
      From: "your-email@example.com",
      Subject: "REQUEST TO BUY KIT",
      Body: bodyMessage,
    }).then((message) => {
      if (message === "OK") {
        Swal.fire(
          "Success!",
          "Request sent successfully! We will contact you soon.",
          "success"
        );
      } else {
        Swal.fire("Error", `Something went wrong: ${message}`, "error");
      }
    });
  };

  return (
    <form className={styles.modalForm} onSubmit={handleSubmit}>
      <header
        className={styles.modalHeader}
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <i>Tickets</i>
      </header>

      <div className={styles.modalBody}>
        <div className={styles.formGroup}>
          <p>
            <i className="bx bxs-business"></i> City
          </p>
          <input
            type="radio"
            id="hcm"
            name="city"
            value="hcm"
            checked={city === "hcm"}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <label htmlFor="hcm">Ho Chi Minh</label>

          <input
            type="radio"
            id="dn"
            name="city"
            value="dn"
            checked={city === "dn"}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <label htmlFor="dn">Da Nang</label>

          <input
            type="radio"
            id="hn"
            name="city"
            value="hn"
            checked={city === "hn"}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <label htmlFor="hn">Ha Noi</label>
        </div>

        <div className={styles.formGroup}>
          <p>
            <i className="bx bxs-backpack"></i> Kit
          </p>
          <input
            type="radio"
            id="glowgetter"
            name="kit"
            value="glowgetter"
            checked={kit === "glowgetter"}
            onChange={(e) => setKit(e.target.value)}
            required
          />
          <label htmlFor="glowgetter">
            Glow-Getter - <i>$34.99</i>
          </label>

          <input
            type="radio"
            id="twinkle"
            name="kit"
            value="twinkle"
            checked={kit === "twinkle"}
            onChange={(e) => setKit(e.target.value)}
            required
          />
          <label htmlFor="twinkle">
            Twinkle - <i>$24.99</i>
          </label>

          <input
            type="radio"
            id="glow"
            name="kit"
            value="glow"
            checked={kit === "glow"}
            onChange={(e) => setKit(e.target.value)}
            required
          />
          <label htmlFor="glow">
            Glow - <i>$29.99</i>
          </label>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="quantity">
            <i className="bx bxs-cart"></i> Tickets
          </label>
          <input
            id="quantity"
            type="number"
            className={styles.modalInput}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">
            <i className="bx bxs-user"></i> Send to
          </label>
          <input
            id="email"
            type="email"
            className={styles.modalInput}
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          style={{ backgroundImage: `url(${submitBg})` }}
        >
          REQUEST <i className="bx bx-check"></i>
        </button>
      </div>

      <footer className={styles.modalFooter}>
        <p>
          Need <a href="/contact">help?</a>
        </p>
      </footer>
    </form>
  );
}

export default TicketForm;
