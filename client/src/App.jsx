import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import Form from './Form/Form';
import Home from './Home/Home';
import Error from './Error/Error';
import Details from './Details/Details';
import Navbar from './Navbar/Navbar';
import Landing from './Landing/Landing';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <h1>FORMULA 1</h1>

      <Routes>
          <Route path={'*'} element={<Navbar />} />
          <Route exact path={'/'} element={<Landing />} />
          <Route path={'/form'} element={<Form />} />
          <Route path={'/home'} element={<Home />} />
          <Route path={'/details/:id'} element={<Details />} />
          <Route path={'/*'} element ={<Error />} />
      </Routes>
      
    </div>
  )
}

export default App;
