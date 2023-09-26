import style from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import fBrandBlack from '../assets/fBrandBlack.png';

const Navbar = () => {
  return (
    <div className={style.container}>
      <NavLink to='/'><img src={fBrandBlack} alt="Formula 1 logo"/></NavLink>
      <NavLink to='/home'name='home'>Home</NavLink>
      <NavLink to='/create' name='form'>New Driver</NavLink>
      <NavLink to='/details' name='detail'>Details</NavLink>
      <NavLink to='/logout' name='logout'>Logout</NavLink>
    </div>
  )
}

export default Navbar;