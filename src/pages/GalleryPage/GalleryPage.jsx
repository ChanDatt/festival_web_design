import { useState } from "react";
import styles from "./GalleryPage.module.css";
import Modal from "../../components/Modal/Modal";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import UploadForm from "../../components/UploadForm/UploadForm";

import background5 from "../../assets/images/background5.png";
import iconArtist from "../../assets/images/icon-artist.png";

function GalleryPage() {
  const [viewingImage, setViewingImage] = useState(null);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.titleContainer}>
        <img
          src={background5}
          alt="Abstract background"
          className={styles.titleBackground}
          draggable="false"
        />
        <h1>Gallery 2023</h1>
      </div>

      <ImageGrid onImageClick={(imgSrc) => setViewingImage(imgSrc)} />

      <div className={styles.sendPhoto}>
        <div className={styles.sendPhotoImage}>
          <img src={iconArtist} alt="Artist icon" draggable="false" />
        </div>
        <div className={styles.sendPhotoParagraph}>
          <p>
            "If you have any unforgettable memories at THE COLOR RUN, please let
            us know."
          </p>
          <button onClick={() => setUploadModalOpen(true)}>Send</button>
        </div>
      </div>

      <Modal
        isOpen={!!viewingImage}
        onClose={() => setViewingImage(null)}
        variant="image"
      >
        <div className={styles.fullImgContainer}>
          <img src={viewingImage} alt="Full gallery view" />
        </div>
      </Modal>

      <Modal
        isOpen={isUploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
      >
        <UploadForm />
      </Modal>
    </div>
  );
}

export default GalleryPage;
