import { useState } from "react";
import styles from "./TicketsPage.module.css";
import Modal from "../../components/Modal/Modal";
import TicketForm from "../../components/TicketForm/TicketForm";
import TicketCard from "../../components/TicketCard/TicketCard";

import background2 from "../../assets/images/background2.jpg";
import kitGlowGetter from "../../assets/images/kit-glow-getter.png";
import kitTwinkle from "../../assets/images/kit-twinkle.png";
import kitGlow from "../../assets/images/kit-glow.png";

const ticketsData = [
  { name: "Glow-Getter", price: "$34.99", image: kitGlowGetter },
  { name: "Twinkle", price: "$24.99", image: kitTwinkle },
  { name: "Glow", price: "$29.99", image: kitGlow },
];

function TicketsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.backgroundWrapper}>
        <img src={background2} alt="Event background" draggable="false" />
      </div>

      <main className={styles.mainContent}>
        <h2 className={styles.titleTicket}>Tickets</h2>
        <div className={styles.cardGrid}>
          {ticketsData.map((ticket) => (
            <TicketCard
              key={ticket.name}
              name={ticket.name}
              price={ticket.price}
              image={ticket.image}
              onBuyClick={() => setIsModalOpen(true)}
            />
          ))}
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TicketForm />
      </Modal>
    </div>
  );
}

export default TicketsPage;
