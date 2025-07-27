import styles from "./ScheduleTimeline.module.css";

import ticketIcon from "../../assets/images/ticket-icon.jpg";
import singerIcon from "../../assets/images/singer-timeline.png";
import warmupIcon from "../../assets/images/warmup-timeline.png";
import startIcon from "../../assets/images/start-timeline.jpg";
import djIcon from "../../assets/images/dj-timeline.png";
import boomingIcon from "../../assets/images/booming-timeline.png";
import artistIcon from "../../assets/images/artistperformance-timeline.png";
import finishIcon from "../../assets/images/finish-timeline.png";
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    time: "1:00PM",
    description: "Welcome",
    icon: ticketIcon,
    color: "rgb(130, 4, 4)",
  },
  {
    time: "1:00PM - 2:30PM",
    description:
      "Other Festival Activities / Minishow: The Color Run Got Talent",
    icon: singerIcon,
    color: "rgb(130, 67, 4)",
  },
  {
    time: "2:30PM - 2:45PM",
    description: "Warm Up",
    icon: warmupIcon,
    color: "rgb(130, 92, 4)",
  },
  {
    time: "2:45PM - 5:00PM",
    description: "Journey Starts",
    icon: startIcon,
    color: "rgb(50, 130, 4)",
  },
  {
    time: "5:00PM - 5:15PM",
    description: "Performance DJ",
    icon: djIcon,
    color: "rgb(4, 130, 71)",
  },
  {
    time: "5:15PM - 5:30PM",
    description: "Booming Session *Can't miss",
    icon: boomingIcon,
    color: "rgb(4, 63, 130)",
  },
  {
    time: "5:30PM - 8:30PM",
    description: "Artist Performance",
    icon: artistIcon,
    color: "rgb(80, 4, 130)",
  },
  {
    time: "8:30PM",
    description: "End",
    icon: finishIcon,
    color: "rgb(130, 4, 67)",
  },
];

function ScheduleTimeline() {
  return (
    <section className={styles.schedule}>
      <h2>Schedule</h2>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ScheduleTimeline;
