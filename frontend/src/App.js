import './App.css';
import Login from './Login'
import Alumnos from './Alumnos'
import Alumno from './Alumno';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Routes, Route } from 'react-router-dom';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

function App() {
  library.add(faLocationArrow)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/alumno" element={<Alumno/>}/>
        <Route path="/alumnos" element={<Alumnos/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
