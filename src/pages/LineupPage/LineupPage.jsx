import styles from "./LineupPage.module.css";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

import arianaImg from "../../assets/images/ariana.jpg";
import billieImg from "../../assets/images/billie.jpg";
import lanaImg from "../../assets/images/lana.jpg";
import oliviaImg from "../../assets/images/oliva.jpg";
import lauvImg from "../../assets/images/lauv.jpg";
import aliImg from "../../assets/images/aligatie.jpg";
import headerImage from "../../assets/images/tree.png";

import povMusic from "../../assets/music/pov-ari.mp3";
import billieMusic from "../../assets/music/billie.mp3";
import lanaMusic from "../../assets/music/lana.mp3";
import oliviaMusic from "../../assets/music/oliva.mp3";
import lauvMusic from "../../assets/music/lauv.mp3";
import aliMusic from "../../assets/music/ali.mp3";

const artistsData = [
  {
    name: "Ariana Grande",
    image: arianaImg,
    bio: "With her four-octave vocal acrobatics and iconic image, American singer, songwriter, and actress Ariana Grande solidified her place as one of the quintessential pop stars of her generation...",
    musicPath: povMusic,
    color: "rgb(70, 0, 70)",
  },
  {
    name: "Billie Eilish",
    image: billieImg,
    bio: "Billie Eilish made history as the youngest artist to receive nominations and win in all the major categories at the 62nd GRAMMY® Awards...",
    musicPath: billieMusic,
    color: "rgb(111, 102, 0)",
  },
  {
    name: "Lana Del Rey",
    image: lanaImg,
    bio: "Lana Del Rey is one part songwriting superpower, one part constructed character, building a Southern California dream world of manufactured melancholy...",
    musicPath: lanaMusic,
    color: "rgb(77, 8, 0)",
  },
  {
    name: "Olivia Rodrigo",
    image: oliviaImg,
    bio: "After shattering records with her chart-topping, 4x Platinum debut album SOUR... Olivia Rodrigo makes a monumental return with her new album GUTS...",
    musicPath: oliviaMusic,
    color: "rgb(77, 0, 77)",
  },
  {
    name: "Lauv",
    image: lauvImg,
    bio: "For as much as he’s known for intriguing and inventive soundscapes, multi-Platinum chart-topping singer, songwriter... Lauv asserts himself as a storyteller...",
    musicPath: lauvMusic,
    color: "rgb(82, 0, 79)",
  },
  {
    name: "Ali Gatie",
    image: aliImg,
    bio: "A 26 - year-old artist from a suburb of Toronto (Mississauga), everything you need to know about Ali is expressed through his music...",
    musicPath: aliMusic,
    color: "rgb(220, 217, 0)",
  },
];

function LineupPage() {
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
        <h2>Lineup 2026</h2>
        <div className={styles.lineupList}>
          {artistsData.map((artist) => (
            <ArtistCard key={artist.name} artist={artist} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default LineupPage;
