import style from './SearchBar.module.css';
import { useState} from "react";
import { useDispatch } from 'react-redux';
import { getDriversByName } from '../Redux/actions/actions';

function SearchBar() {

    const [forename, setForename] = useState("");
 
    const handleChange = (event) => {
       setForename(event.target.value);
    }
    const dispatch = useDispatch();
 
    const handleSearch = async (forename) => {
       try {
          await dispatch(getDriversByName(forename));
       } catch (error) {
          alert(error.response.data);
       }
    };
 
    return (
       <div className={style.container}>
          <input className={style.searchBarInput} type='search' onChange={handleChange} value={forename} />
          <button className={style.searchBarButton} onClick={() => { handleSearch(forename); setForename("") }}>Search</button>
       </div>
    );
 }
 
 export default SearchBar;