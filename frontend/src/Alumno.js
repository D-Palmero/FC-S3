import './Alumno.css'
import NavbarBtn from './components/NavbarBtn'
import Pdf from './React.pdf'
import profile from './cesar-rincon-XHVpWcr5grQ-unsplash.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCloudArrowUp, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Alumno = () => {
    return (
        <div>
        <NavbarBtn/>
       
        <div class="container">
        
        <div class="studentDetails">
           <header class="header">
              <img alt="profileImg" class="profileImg" src={profile}/>
              <div class="profileDetails">
                 <h2>Nombre del alumno</h2>
                 <div class="location">
                 <FontAwesomeIcon icon={faLocationDot} />
                    <p class="locationText">Valencia | España</p>
                 </div>
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
              <label class="alumno-label" for="buttons">Documento CV</label>
              <div class="formButtons">
                 <label class="alumno-label custom-file-upload">
                 <FontAwesomeIcon icon={faCloudArrowUp}/> Subir de nuevo
                    <input class="alumno-input file-selector" type="file" id="file-selector" accept=".pdf"/>
                 </label>
                 <button onclick="deleteFile()" type="reset" class="alumno-button secondary"><FontAwesomeIcon icon={faTrashCan}/> Borrar</button>
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
        <div class="Cvcontainer">
           <div id="msg"></div>
           <object id="frame" data={Pdf} type="application/pdf" width="100%" frameborder="0" scrolling="none">
              <div id="fallback" class="fallback">
                 <label class="alumno-label" for="buttons">El navegador no puede mostrar el documento PDF</label>
                 <button class="downloadBtn"><a id="PDFLink" href={Pdf}><i class="fa-solid fa-download"></i>Descargar</a></button>
              </div>
              <div id="fallbackNoDownload" class="fallback">
                 <label class="alumno-label" for="buttons">No se ha subido ningún archivo</label>
                 <label class="alumno-label custom-file-upload">
                 <FontAwesomeIcon icon={faCloudArrowUp}/> Subir de nuevo
                    <input class="alumno-input file-selector" type="file" id="file-selector2" style={{ display: 'none' }} accept=".pdf"/>
                 </label>
              </div>
           </object>
        </div>
     </div>
     </div>
    )
}

export default Alumno;