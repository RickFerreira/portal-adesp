import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'

import {FaHome, FaGraduationCap, FaPhoneSquareAlt} from 'react-icons/fa'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/"><FaHome className={styles.icon}/>Inicio</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/"><FaHome className={styles.icon}/>Matriz</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/"><FaHome className={styles.icon}/>Horários</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/materiais"><FaGraduationCap className={styles.icon}/>Materiais</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/"><FaHome className={styles.icon}/>Fórum</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact"><FaPhoneSquareAlt className={styles.icon}/>Contatos</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar