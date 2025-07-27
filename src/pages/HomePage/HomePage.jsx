import styles from "./HomePage.module.css";
import Countdown from "../../components/Countdown/Countdown";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

import balloonBg from "../../assets/images/balloon-line-static.png";
import clouds from "../../assets/images/static-clouds.png";
import mountain from "../../assets/images/static-mountain-background-4.png";
import gatherImg from "../../assets/images/gather.jpeg";
import powder from "../../assets/images/powder.jpeg";
import bubble from "../../assets/images/bubble.jpeg";

import pulseActiveLogo from "../../assets/images/pulseactive.png";
import nikeLogo from "../../assets/images/nike.png";
import cocaLogo from "../../assets/images/coca.png";
import levisLogo from "../../assets/images/levis.png";
import mcdonaldsLogo from "../../assets/images/mcdonal.png";
import colourpopLogo from "../../assets/images/colourpop.png";

function HomePage() {
  return (
    <div className={styles.main}>
      <section className={styles.slogan}>
        <div className={styles.contentSlogan}>
          <img src={balloonBg} alt="#" className={styles.balloonBackground} />
          <div className={styles.headerSlogan}>
            <p className={styles.centerSlogan}>Are You Ready?</p>
            <Countdown />
          </div>
        </div>
        <img
          src={clouds}
          alt="clouds"
          className={styles.cloud}
          draggable="false"
        />
        <img src={mountain} alt="mountain" className={styles.mountain} />
      </section>

      <section className={styles.content}>
        <div className={styles.content1}>
          <img src={gatherImg} alt="#" className={styles.imgContent} />
          <div className={styles.paraContent}>
            <h2>What Is The Color Run?</h2>
            <p>
              The Color Run is a five-kilometer, untimed event. At each
              kilometer mark, Color Runners are doused from head to toe in a
              different colored powder.
            </p>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.paraContent}>
            <h2>GIVING BACK</h2>
            <p>
              To date, The Color Run has donated more than $5 million to
              charity. As a for-profit event management company, we love getting
              the opportunity to partner with a local charity partner in every
              community we visit and help shine a light on their amazing work.
            </p>
          </div>
          <img src={bubble} alt="#" className={styles.imgContent} />
        </div>
        <div className={styles.content3}>
          <img src={powder} alt="#" className={styles.imgContent} />
          <div className={styles.paraContent}>
            <h2>OUR HISTORY</h2>
            <p>
              Founded in 2011, The Color Run was the world's first COLOR 5K and
              COLOR DASH event. By creating a race that's more about the
              memories you make than your mile-per-minute, we make running
              accessible to everyone, no matter their experience level or
              ability.
            </p>
          </div>
        </div>
      </section>

      <ImageSlider />

      <section className={styles.sponsors}>
        <h2>sponsor</h2>
        <div className={styles.logoSponsors}>
          <div className={styles.imgSponsors}>
            <a
              href="https://www.instagram.com/pulse_active/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pulseActiveLogo} alt="Pulse Active Logo" />
            </a>
          </div>
          <div className={styles.imgSponsors}>
            <a
              href="https://www.nike.com/vn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={nikeLogo} alt="Nike Logo" />
            </a>
          </div>
          <div className={styles.imgSponsors}>
            <a
              href="https://www.coca-cola.com/vn/vi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cocaLogo} alt="Coca-Cola Logo" />
            </a>
          </div>
          <div className={styles.imgSponsors}>
            <a
              href="https://levi.com.vn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={levisLogo} alt="Levi's Logo" />
            </a>
          </div>
          <div className={styles.imgSponsors}>
            <a
              href="https://www.mcdonalds.vn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mcdonaldsLogo} alt="McDonald's Logo" />
            </a>
          </div>
          <div className={styles.imgSponsors}>
            <a
              href="https://colourpop.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={colourpopLogo} alt="ColourPop Logo" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
