import styles from './ContactPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import background from '../../assets/images/background3.png'; 

function ContactPage() {
  return (
    <div className={styles.pageContainer}>
      <img src={background} alt="Background" className={styles.backgroundImg} />
      <div className={styles.formWrapper}>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;