import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <section className="login">
        <div className="loginForm">
                <h1>Open Bootcamp <span>| Alumnos</span></h1>
                <form className="form">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" placeholder="Introduce tu correo"/>
                    <label htmlFor="contraseña">Contraseña</label>
                    <input id="contraseña" type="text" name="contraseña" placeholder="Introduce tu contraseña"/>
                    <fieldset>
                        <div className="checkbox-div">
                            <input className="check" type="checkbox" name="checkbox" id="checkbox"/>
                            <span></span>
                            <label className="checkbox" htmlFor="checkbox">Recuérdame</label>
                        </div>
                        <a className="form-link" href="#">He olvidado la contraseña</a>
                    </fieldset>
                    <Link to="/alumnos">
                    <button href="/alumnos">Iniciar sesión</button>
                    </Link>
                </form>
                </div>
                <footer className="foot">
                <p className="footer-text">Copyright © 2021 Open Bootcamp SL, Imagina Group</p>
                <p className="footer-text">Todos los derechos reservados</p>
                <p className="footer-text"><a>Política de Privacidad</a></p>
            </footer>
        
        </section>
    )
}

export default LoginForm;