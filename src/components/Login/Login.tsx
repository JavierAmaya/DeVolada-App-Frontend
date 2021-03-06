import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Logo from "../../img/Iconooficial.png"
const login:React.FC = () => (
    <div id="LoginForm">
    <Container>
        <div className="login-form">
            <div className="main-div col-12 col-sm-10 col-md-10 col-xl-5 col-lg-7">
                <div className="panel col-4 imagenPanel">
                    <a href="myapp">
                        <Image src={Logo} alt="" style={{paddingBottom: "30px", width:"100%"}}/>
                    </a>
                </div>
                <div className="panel col-12">
                    <h2>Inicio de sesión</h2>
                    <p>Por favor ingrese el usuario y contraseña.</p>
                </div>
                <form id="Login">
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputEmail" name="name" placeholder="Correo ó usuario"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña"/>
                    </div>
                    <div className="forgot">
                        <a href="reset.html">¿Olvidaste tu contraseña?</a>
                    </div>
                    <a href="appCustomer">
                        <Button className="btn btn-primary">Login</Button>
                    </a>
                    <div id="registrar">
                        <a id="singInReg" href="singIn">Registarse</a>
                    </div>
                </form>
            </div>
        </div>
    </Container>
</div>
) 
export default login;
