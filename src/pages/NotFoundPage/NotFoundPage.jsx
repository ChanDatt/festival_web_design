import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.errorMessage}>Oops! Page Not Found</p>
        <p className={styles.errorDescription}>
          The page you are looking for does not exist. It might have been moved
          or deleted.
        </p>
        <Link to="/" className={styles.homeButton}>
          Go Back to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
