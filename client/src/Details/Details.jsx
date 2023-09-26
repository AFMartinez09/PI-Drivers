import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { getDriverById } from "../Redux/actions/actions";
import LightsFormula from '../assets/LightsFormula.png';


const Details = () => {
  const { idDriver } = useSelector((state) => state);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {

    try {
      (async function (id) {
        setDetail(await getDriverById(id))
      })(id)
    } catch (error) {
      alert(error.response.data)
    }
  }, [id])


  return (
    <div className={style.container}>
    <img className={style.image} src={typeof idDriver.image === 'object' ? idDriver.image.url : idDriver.image || LightsFormula} alt='Driver picture' />

      <div className={style.driverData}>
        <h2 className={style.id}>ID: {idDriver?.id}</h2>
        <h2 className={style.forename}>Forename: {idDriver?.forename}</h2>
        <h2 className={style.surname}>Surname: {idDriver?.surname}</h2>
        <h2 className={style.nationality}>Nationality: {idDriver?.nationality}</h2>
        <h2 className={style.teams}>Teams: {idDriver?.teams}</h2>
        <h2 className={style.dob}>Date of Birth: {idDriver?.dob}</h2>
        <h2 className={style.description}>Description: {idDriver?.description}</h2>
      </div>
    </div>
  )
}

export default Details

