import Link from 'next/link';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import "../css-files/footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-icons">
          <Link href="https://www.facebook.com/profile.php?id=61566982980894&mibextid=ZbWKwL" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
        
          <Link href="https://www.linkedin.com/in/aatfa-siddiqui-b88630331" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
        </div>
        <p className="footer-text">&copy; All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
