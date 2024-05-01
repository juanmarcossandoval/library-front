import React, { useState } from 'react';

const Login = () => {

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleUsernameChange = (event) => {
        setForm((prev) => {
            return {
                ...prev,
                username: event.target.value
            };
        });
        console.log(form.username)
    }

    const handlePasswordChange = (event) => {
        setForm((prev) => {
            return {
                ...prev,
                password: event.target.value
            };
        });
        console.log(form.password)
    }

    const login = (event) => {
        event.preventDefault();
        return console.log(form)
    }

    return (
        <>
            <h1>Login de Usuario</h1>
            <form onSubmit={(event) => login(event)}>
                <input type='text'
                    value={form.username}
                    onChange={(event) => handleUsernameChange(event)}
                    placeholder='Ingrese su usuario' />
                <input type='password'
                    value={form.password}
                    onChange={(event) => handlePasswordChange(event)}
                    placeholder='Ingrese su contraseña' />
                <input type='submit' value='INGRESAR' />
            </form >

        </>
    );
}

export default Login;
