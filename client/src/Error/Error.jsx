import styles from './Error.module.css';
import { NavLink } from 'react-router-dom';
import LightsFormula from '../assets/LightsFormula.png';

function ErrorCards() {
    return (
        <section className={styles.container}>
            <div className={styles.text}> Error 404 </div>
            <img className={styles.imagen} src= {LightsFormula} />
            <NavLink to='/home'> Go to home</NavLink>
        </section>
    )
}

export default ErrorCards;