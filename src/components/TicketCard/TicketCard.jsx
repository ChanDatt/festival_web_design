import styles from "./TicketCard.module.css";

function TicketCard({ image, name, price, onBuyClick }) {
  return (
    <div className={styles.ticketCard}>
      <img src={image} alt={`${name} ticket kit`} draggable="false" />
      <div className={styles.contentTicket}>
        <h2>{name}</h2>
        <p>{price}</p>
        <button className={styles.buyButton} onClick={onBuyClick}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default TicketCard;
