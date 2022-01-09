import Navbar from "./components/Navbar";
import './Alumnos.css'
import FilterBar from "./components/FilterBar";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaDown, faSortNumericDown, faSearch} from "@fortawesome/free-solid-svg-icons";
import Modal from './components/Modal.js'

const Alumnos = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="alumnos-container">
            <Navbar/>
        <div className="alumnos-wrapper">
        {isOpen && <Modal setIsOpen={setIsOpen} />}
            <div className="full-table">
        <div className="table-controls">
            <div className="left-controls">
           <h2>Alumnos</h2>
           <div className="table-input">
           <FontAwesomeIcon icon={faSearch} /> 
              <input id='myInput' onkeyup='searchTable()' onfocus='setActive()' onfocusout='setActive()' type='text'
                 placeholder="Buscar por Nombre, Email o Palabra clave..."/>
           </div>
           </div>
           <button onClick={() => setIsOpen(true)} className="addButton">+ Añadir Alumnos</button>
        </div>
        <section className="table-container">
           <table id="table" className="table">
              <thead>
                 <tr>
                 
                    <th onclick="sortTable(0)">NOMBRE <FontAwesomeIcon icon={faSortAlphaDown} /> </th>
                    <th onclick="sortTable(1)">CIUDAD <FontAwesomeIcon icon={faSortAlphaDown} /> </th>
                    <th onclick="sortTable(2)">PAÍS <FontAwesomeIcon icon={faSortAlphaDown} /> </th>
                    <th onclick="sortTable(3)">TELÉFONO <FontAwesomeIcon icon={faSortNumericDown} /> </th>
                    <th onclick="sortTable(4)">CORREO ELECTRÓNICO <FontAwesomeIcon icon={faSortAlphaDown} /> </th>
                    <th onclick="sortTable(5)">ETIQUETAS <FontAwesomeIcon icon={faSortAlphaDown} /> </th>
                 </tr>
              </thead>
              <tbody>
                 <tr>
                    <td><Link to="/alumno" style={{ textDecoration: 'none' }}>Álvaro Sánchez Monteagudo</Link></td>
                    <td>Valencia</td>
                    <td>España</td>
                    <td>+34 657 85 25 46</td>
                    <td className="email-column">smonteagudo@gmail.com</td>
                    <td className="tags">
                       <div className="tag tagGreen">HTML&CSS </div>
                       <div className="tag tagGreen">ANGULAR</div>
                       <div className="tag tagGreen">+4</div>
                    </td>
                 </tr>
                 <tr>
                 <td><Link to="/alumno" style={{ textDecoration: 'none' }}>Amparo Herrera Climent</Link></td>
                    <td>Sevilla</td>
                    <td>España</td>
                    <td>+34 689 25 48 65</td>
                    <td className="email-column">hcliment@gmail.com</td>
                    <td className="tags">
                       <div className="tag tagGreen">ANGULAR</div>
                       <div className="tag tagGreen">REACT</div>
                       <div className="tag tagGreen">+2</div>
                    </td>
                 </tr>
                 <tr>
                 <td><Link to="/alumno" style={{ textDecoration: 'none' }}>Ana Gutierrez Lozano</Link></td>
                    <td>Valencia</td>
                    <td>España</td>
                    <td>+34 925 65 87 65</td>
                    <td className="email-column">glozano@gmail.com</td>
                    <td className="tags">
                       <div className="tag tagGreen">ANGULAR</div>
                       <div className="tag tagGreen">REACT</div>
                       <div className="tag tagGreen">+2</div>
                    </td>
                 </tr>
                 <tr>
                 <td><Link to="/alumno" style={{ textDecoration: 'none' }}>Antonio Miguel Lacunza</Link></td>
                    <td>Madrid</td>
                    <td>España</td>
                    <td>+34 658 95 24 56</td>
                    <td className="email-column">mlacunza@gmail.com</td>
                    <td className="tags">
                       <div className="tag tagGreen">ANGULAR</div>
                       <div className="tag tagGreen">HTML&CSS</div>
                       <div className="tag tagGreen">+3</div>
                    </td>
                 </tr>
                 <tr>
                 <td><Link to="/alumno" style={{ textDecoration: 'none' }}>Antonio Delgado Jimeno</Link></td>
                    <td>Gijón</td>
                    <td>España</td>
                    <td>+34 925 65 54 25</td>
                    <td className="email-column">djimeno@gmail.com</td>
                    <td className="tags">
                       <div className="tag tagGreen">HTML&CSS</div>
                       <div className="tag tagGreen">REACT</div>
                       <div className="tag tagGreen">+1</div>
                    </td>
                 </tr>
                 <tr>
                 <td><Link to="/alumno" style={{ textDecoration: 'none' }}>Belén Jerez Rivera</Link></td>
                    <td>Barcelona</td>
                    <td>España</td>
                    <td>+34 697 82 95 24</td>
                    <td className="email-column">jrivera@gmail.com</td>
                    <td className="tags">
                       <div className="tag tagGreen">ANGULAR</div>
                       <div className="tag tagGreen">HTML&CSS</div>
                       <div className="tag tagGreen">+4</div>
                    </td>
                 </tr>
                 <tr>
                 <td><Link to="/alumno" style={{ textDecoration: 'none' }}>Carla Barroso Soriano</Link></td>
                    <td>Valencia</td>
                    <td>España</td>
                    <td>+34 958 65 41 54</td>
                    <td className="email-column">bsoriano@gmail.com</td>
                    <td className="tags">
                       <div className="tag tagGreen">REACT</div>
                       <div className="tag tagGreen">SYMFONY</div>
                       <div className="tag tagGreen">+5</div>
                    </td>
                 </tr>
              </tbody>
           </table>
        </section>
     </div>
            <FilterBar/>
        </div>
        </div>
    )
}

export default Alumnos;