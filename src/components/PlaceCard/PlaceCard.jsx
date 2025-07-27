import { Link } from "react-router-dom";
import styles from "./PlaceCard.module.css";

function PlaceCard({ image, city, date }) {
  return (
    <div className={styles.cityCard}>
      <img src={image} alt={`Event in ${city}`} draggable="false" />
      <div className={styles.contentPlace}>
        <h2>{city}</h2>
        <p>{date}</p>
        <Link to="/tickets" className={styles.explore}>
          Join
        </Link>
      </div>
    </div>
  );
}

export default PlaceCard;
