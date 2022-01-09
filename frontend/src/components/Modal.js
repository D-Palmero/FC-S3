import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCloudArrowUp, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import './Modal.css'
const Modal = ({ setIsOpen }) => {
  return (
    <div class="modal-container">
      <div class="studentDetails">
         <header class="header">
           
            <div class="profileDetails">
               <h2>Nuevo Alumno</h2>
               
            </div>
         </header>
         <form action="" class="form">
            <label class="alumno-label" for="name">Nombre y apellidos</label>
            <input class="alumno-input" id="name" type="text" name="name" placeholder="Nombre y apellidos"/>
            <div class="doubleForm">
               <div class="doubleInput">
                  <label class="alumno-label" for="phone">Nº Teléfono</label>
                  <input class="alumno-input" id="phone" type="text" name="phone" placeholder="Nº Teléfono"/>
               </div>
               <div class="doubleInput">
                  <label class="alumno-label" for="email">Email</label>
                  <input class="alumno-input" id="email" type="text" name="email" placeholder="Email"/>
               </div>
               <div class="doubleInput">
                  <label class="alumno-label" for="country">País</label>
                  <div class="select-wrapper">
                     <select class="alumno-select" name="country" id="countries">
                        <option class="alumno-option" disabled selected>País</option>
                        <option class="alumno-option" value="españa">España</option>
                        <option class="alumno-option" value="alemania">Alemania</option>
                        <option class="alumno-option" value="francia">Francia</option>
                        <option class="alumno-option" value="portugal">Portugal</option>
                     </select>
                  </div>
               </div>
               <div class="doubleInput">
                  <label class="alumno-label" for="city">Ciudad</label>
                  <div class="select-wrapper">
                     <select class="alumno-select" name="city" id="city">
                        <option class="alumno-option" disabled selected>Ciudad</option>
                        <option class="alumno-option" value="madrid">Madrid</option>
                        <option class="alumno-option" value="valencia">Valencia</option>
                        <option class="alumno-option" value="gijon">Gijón</option>
                        <option class="alumno-option" value="barcelona">Barcelona</option>
                     </select>
                  </div>
               </div>
               <div class="doubleInput">
                  <label class="alumno-label" for="traslado">Traslado</label>
                  <div class="select-wrapper">
                     <select class="alumno-select" name="traslado" id="traslado">
                        <option class="alumno-option" disabled selected>Traslado</option>
                        <option class="alumno-option" value="si">Sí</option>
                        <option class="alumno-option" value="no">No</option>
                     </select>
                  </div>
               </div>
               <div class="doubleInput">
                  <label class="alumno-label" for="presencialidad">Presencialidad</label>
                  <div class="select-wrapper">
                     <select class="alumno-select" name="presencialidad" id="presencialidad">
                        <option class="alumno-option" disabled selected>Presencialidad</option>
                        <option class="alumno-option" value="remoto">En remoto</option>
                        <option class="alumno-option" value="mixto">Mixto</option>
                        <option class="alumno-option" value="presencial">Presencial</option>
                     </select>
                  </div>
               </div>
            </div>
         </form>
      </div>
      <div class="studentDetails">
         <form action="" class="form">
           
            <label class="alumno-label">Foto de Perfil</label>
            <div class="uploadButtons">
               <label class="alumno-label custom-file-upload">
               <FontAwesomeIcon icon={faCloudArrowUp}/> Subir Imagen
                  <input class="alumno-input file-selector" type="file" id="file-selector" accept=".pdf"/>
               </label>
               <div>
               <p>Archivos soportados: .png, .jpg, y .jpeg
                  </p>
                  <p>Tamaño de archivo máximo: 2 MB</p>
               </div>
               </div>
            <label class="alumno-label">Documento CV</label>
            <div class="uploadButtons">
               
               <label class="alumno-label custom-file-upload">
               <FontAwesomeIcon icon={faCloudArrowUp}/> Subir documento PDF
                  <input class="alumno-input file-selector" type="file" id="file-selector" accept=".pdf"/>
               </label>
               <div>
                  <p>Archivos soportados: .pdf
                     </p>
                     <p>Tamaño de archivo máximo: 20 MB</p>
                  </div>
            </div>
            <label class="alumno-label" for="buttons">Etiquetas</label>
            <div class="tagContainer">
               <div class="select-wrapper">
                  <input class="alumno-input tagInput" autocomplete="off" list="etiquetas" name="etiquetas" id="myInput"
                     placeholder="Escribe para buscar" onkeyup='searchTag(0)' onfocus="searchTag(1)"/>
               </div>
               <ul id="ul">
                  <li class="alumno-li">REACT</li>
                  <li class="alumno-li">JAVA</li>
                  <li class="alumno-li">JAVASCRIPT</li>
                  <li class="alumno-li">HTML&CSS</li>
                  <li class="alumno-li">SPRING</li>
                  <li class="alumno-li">ANGULAR</li>
                  <li class="alumno-li">SYMFONY</li>
                  <li class="alumno-li">VUE</li>
                  <li class="alumno-li">TYPESCRIPT</li>
               </ul>
            </div>
            <div class="tagList"></div>
         </form>
         
      </div>
      <footer class="modalFoot">
         <button class="footerBtn">Guardar</button>
         <button class="footerBtn" onClick={() => setIsOpen(false)}>Cancelar</button>
      </footer>
   </div>
  )
};

export default Modal;