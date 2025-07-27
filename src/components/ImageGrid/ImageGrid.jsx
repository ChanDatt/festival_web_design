import styles from './ImageGrid.module.css';
import gallery1 from '../../assets/images/gallery-1.png';
import gallery2 from '../../assets/images/gallery-2.jpg';
import gallery3 from '../../assets/images/gallery-3.jpg';
import gallery4 from '../../assets/images/gallery-4.jpg';
import gallery5 from '../../assets/images/gallery-5.jpg';
import gallery6 from '../../assets/images/gallery-6.png';
import gallery7 from '../../assets/images/gallery-7.jpeg';
import gallery8 from '../../assets/images/gallery-8.jpg';
import gallery9 from '../../assets/images/gallery-9.jpg';
import gallery10 from '../../assets/images/gallery-10.jpg';
import gallery11 from '../../assets/images/gallery-11.jpg';
import gallery12 from '../../assets/images/gallery-12.jpg';

const images = [
  gallery1, gallery2, gallery3, gallery4, 
  gallery5, gallery6, gallery7, gallery8, 
  gallery9, gallery10, gallery11, gallery12
];

function ImageGrid({ onImageClick }) {
  return (
    <div className={styles.imageGrid}>
      {images.map((imgSrc, index) => (
        <div key={index} className={styles.imageWrapper} onClick={() => onImageClick(imgSrc)}>
          <img src={imgSrc} alt={`Gallery image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;