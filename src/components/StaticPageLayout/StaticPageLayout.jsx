import styles from './StaticPageLayout.module.css';
import balloonBg from '../../assets/images/balloon-line-static.png';
import clouds from '../../assets/images/static-clouds.png';
import mountain from '../../assets/images/static-mountain-background-4.png';

function StaticPageLayout({ title, children }) {
  const titleMarkup = { __html: title };

  return (
    <div className={styles.sloganContainer}>
      <div className={styles.contentSlogan}>
        <img src={balloonBg} alt="#" className={styles.balloonBackground} />
        <div className={styles.pageContent}>
          <h2 dangerouslySetInnerHTML={titleMarkup} />
          <div className={styles.textContent}>
            {children}
          </div>
        </div>
      </div>
      <img src={clouds} alt="clouds" className={styles.cloud} />
      <img src={mountain} alt="mountain" className={styles.mountain} />
    </div>
  );
}

export default StaticPageLayout;