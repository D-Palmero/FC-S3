import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Filter.css'

const FilterBar = () => {
    return (
        <div className="filter-container">
      <div className="filter-studentDetails">
         <header className="header">
            <div className="profileDetails">
               <h2>Filtros de búsqueda</h2>
            </div>
         </header>
         <form action="" className="form">
            <label for="buttons">Etiquetas</label>
            <div className="tagContainer">
               <div className="select-wrapper">
                  <input autocomplete="off" className="tagInput input" list="etiquetas" name="etiquetas" id="myInput"
                     placeholder="Escribe para buscar" onkeyup='searchTag(0)' onfocus="searchTag(1)"/>
               </div>
               <ul id="ul">
                  <li>REACT</li>
                  <li>JAVA</li>
                  <li>JAVASCRIPT</li>
                  <li>HTML&CSS</li>
                  <li>SPRING</li>
                  <li>ANGULAR</li>
                  <li>SYMFONY</li>
                  <li>VUE</li>
                  <li>TYPESCRIPT</li>
               </ul>
            </div>
            <div className="tagList">
                <div className="tagFilter">
                    HTML&CSS
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="tagFilter">
                    REACT
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="tagFilter">
                    ANGULAR
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
                  <label for="country">País</label>
                  <div className="select-wrapper">
                     <select className='select' name="country" id="countries">
                        <option disabled selected>País</option>
                        <option value="españa">España</option>
                        <option value="alemania">Alemania</option>
                        <option value="francia">Francia</option>
                        <option value="portugal">Portugal</option>
                     </select>
                  </div>
                  <label for="city">Ciudad</label>
                  <div className="select-wrapper">
                     <select className='select' name="city" id="city">
                        <option disabled selected>Ciudad</option>
                        <option value="madrid">Madrid</option>
                        <option value="valencia">Valencia</option>
                        <option value="gijon">Gijón</option>
                        <option value="barcelona">Barcelona</option>
                     </select>
                  </div>
                  <label for="presencialidad">Presencial / a distancia</label>
                 
                     <label for="presencial"><input type="checkbox"/> Presencial
                     </label>
                    
                 
                     <label for="remoto"><input type="checkbox"/> En remoto
                     </label>
                  <label for="traslado">Posibilidad de traslado</label>
                 
                     <label for="trasladoSi"><input type="checkbox"/> Sí
                     </label>
                    
                 
                     <label for="trasladoNo"><input type="checkbox"/> No
                     </label>
                
         </form>
      </div>
   </div>
    )
}

export default FilterBar;