import React from 'react';
import PropTypes from 'prop-types';


const Registro = () => {
    return (
        <>
            <h1>Registro de Usuario</h1>
            <form>
                <input type='text' placeholder='Ingrese su nombre de usuario'/>
                <input type='email' placeholder='Ingrese su email'/>
                <input type='password' placeholder='Ingrese su contraseña'/>
                <input type='password' placeholder='repita la contraseña'/>

                <input type='submit' value='INGRESAR'></input>
            </form>
            
        </>
    );
};


Registro.propTypes = {

};


export default Registro;
