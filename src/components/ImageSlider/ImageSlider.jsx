import { useState, useEffect } from "react";
import styles from "./ImageSlider.module.css";

import stage1 from "../../assets/images/stage-1.jpg";
import stage2 from "../../assets/images/stage-2.jpg";
import stage3 from "../../assets/images/stage-3.jpg";
import stage4 from "../../assets/images/stage-4.jpg";

const slides = [stage1, stage2, stage3, stage4];

function ImageSlider() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive(active === slides.length - 1 ? 0 : active + 1);
  };

  const prevSlide = () => {
    setActive(active === 0 ? slides.length - 1 : active - 1);
  };

  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 3000);
    return () => clearInterval(autoPlay);
  }, [active]);

  return (
    <div className={styles.slider}>
      <div
        className={styles.list}
        style={{ transform: `translateX(-${active * 25}%)` }}
      >
        {slides.map((slide, index) => (
          <div className={styles.item} key={index}>
            <img src={slide} alt={`Stage ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className={styles.buttons}>
        <button onClick={prevSlide}>{`<`}</button>
        <button onClick={nextSlide}>{`>`}</button>
      </div>

      <ul className={styles.dots}>
        {slides.map((_, index) => (
          <li
            key={index}
            className={active === index ? styles.active : ""}
            onClick={() => setActive(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default ImageSlider;
