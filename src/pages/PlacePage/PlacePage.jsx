import styles from "./PlacePage.module.css";
import PlaceCard from "../../components/PlaceCard/PlaceCard";
import ScheduleTimeline from "../../components/ScheduleTimeline/ScheduleTimeline";

import hcmImage from "../../assets/images/benthanhmarket.png";
import dnImage from "../../assets/images/dragonbrigde.jpg";
import hnImage from "../../assets/images/pillarpagoda.png";
import headerImage from "../../assets/images/tree.png"; // Ảnh nền cây

const placesData = [
  { city: "Ho Chi Minh", date: "January 20th, 2026", image: hcmImage },
  { city: "Da Nang", date: "May 25th, 2026", image: dnImage },
  { city: "Ha Noi", date: "December 21th, 2026", image: hnImage },
];

function PlacePage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.backgroundWrapper}>
        <img
          src={headerImage}
          alt="Scenic background with trees"
          draggable="false"
        />
      </div>

      <main className={styles.mainContent}>
        <section className={styles.placesEvent}>
          <h2 className={styles.titlePlace}>PLACE</h2>
          <div className={styles.cardGrid}>
            {placesData.map((place) => (
              <PlaceCard
                key={place.city}
                city={place.city}
                date={place.date}
                image={place.image}
              />
            ))}
          </div>
        </section>
      </main>

      <ScheduleTimeline />
    </div>
  );
}

export default PlacePage;
