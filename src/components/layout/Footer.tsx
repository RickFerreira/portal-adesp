import {FaInstagram, FaLinkedin, FaGithub, FaMousePointer} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy_right}>
        <span>ADEPS - By Rick & Lucas & Paty</span> &copy; 2024
      </p>
    </footer>
  )
}

export default Footer