import { useInView } from "react-intersection-observer";
import styles from "./ScheduleTimeline.module.css";

function TimelineItem({ item, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`
        ${styles.containerTimeline} 
        ${index % 2 === 0 ? styles.leftContainer : styles.rightContainer}
        ${inView ? styles.visible : ""}
      `}
    >
      <img src={item.icon} alt="" draggable="false" />
      <div className={styles.textBoxTimeline}>
        <h3 style={{ color: item.color }}>{item.time}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: item.description.replace(
              "*Can't miss",
              "<i>*Can't miss</i>"
            ),
          }}
        />
      </div>
    </div>
  );
}

export default TimelineItem;
