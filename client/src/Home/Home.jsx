import style from './Home.module.css';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers, getTeams } from '../Redux/actions/actions';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';


function Home() {

  const { drivers, teams } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [driversPerPage, setDriversPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const finalIndex = currentPage * driversPerPage;
  const initialIndex = finalIndex - driversPerPage;

  const driversToShow = drivers.slice(initialIndex, finalIndex)
  const totalPages = Math.ceil(drivers.length / driversPerPage)


  useEffect(() => {
    (async () => {
      try {
        await dispatch(getDrivers());
        await dispatch(getTeams());
      } catch (error) {
        alert("Data not found")
      }
    })();

  }, []);


  return (
    <div className={style.container}>
      <Cards driversToShow={driversToShow} setCurrentPage={setCurrentPage} teams={teams} />
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}

export default Home;