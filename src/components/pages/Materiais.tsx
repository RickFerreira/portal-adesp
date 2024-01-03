import { Link } from 'react-router-dom'
import styles from './Materiais.module.css'

function ADS() {
    return(
        <section className={styles.home_container}>
            <h1 className={styles.titulo}>ADS</h1>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/Periodo1">1° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Periodos">2° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Periodos">3° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Periodos">4° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Periodos">5° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Periodos">6° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Periodos">Disciplinas Optativas</Link>
                </li>
            </ul>
        </section>
    )
}
export default ADS