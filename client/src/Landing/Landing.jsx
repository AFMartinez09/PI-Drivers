import styles from './landing.module.css';
import { NavLink } from 'react-router-dom';
import fBrandRed from'../assets/fBrandRed.png';

function Landing() {
    return (
        <div>
            <h2 className={styles.text}>READY TO RACE</h2>
            <NavLink to="/home" ><img className='logo' src={fBrandRed} alt='formula 1 logo' />
            </NavLink>
        </div>
    )
}
export default Landing

