import styles from './card.module.css';
import { NavLink } from 'react-router-dom';

const Card = ({id, forename, surname, image, nationality, dob, teams}) => {
  return (
    <NavLink to={`/detail/${id}`} className={styles.card}>
      <div className={styles.text}>`${forename} ${surname}`</div>
      <div className={styles.imagen}>
        <img src={image} alt= 'Driver Picture' loading="lazy" />
      </div>
      <div className={styles.text}><p>Nationality: {nationality}</p></div>
      <div className={styles.text}><p> Date of Birthday: {dob}</p></div>
      <div className={styles.text}><p> Teams: {teams}</p></div>
    </NavLink>
  )
}

export default Card;
