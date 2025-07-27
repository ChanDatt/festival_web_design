import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logoInline from '../../assets/images/logo-festival-inline.png';

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.navFooter}>
                <img src={logoInline} alt="Festival Logo" />
            </div>
            <div className={styles.subnavFooter}>
                <ul>
                    <li><Link to="/charity">Charity</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/privacy">Privacy policy</Link></li>
                    <li><Link to="/terms">Terms and conditions</Link></li>
                    
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
