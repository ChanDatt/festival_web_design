import styles from "./ArtistCard.module.css";

function ArtistCard({ artist }) {
  return (
    <div className={styles.artistCard}>
      <img
        src={artist.image}
        alt={artist.name}
        className={styles.artistImage}
      />

      <div className={styles.biography}>
        <h2 style={{ color: artist.color }}>{artist.name}</h2>
        <p>{artist.bio}</p>

        <div className={styles.musicPlayer}>
          <audio src={artist.musicPath} controls />
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
