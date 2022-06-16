import React, { useContext } from 'react';
import { Link } from "react-router-dom"

// Hooks
import AuthContext from '../../../hooks/context/authContext';
import { useForm } from '../../../hooks/useForm';

// Icon
import LoginIcon from '../../../assets/images/login-logo.PNG';

// Components
import TextCustom from '../../atoms/TextCustom';
import { ButtonCustom, TextInputCustom } from '../../atoms';

// Const
import { authTypes } from '../../../commons/types';

// Apis
import { apiLogin } from '../../../api/login';

const Login = () => {
  const { dispatchAuth } = useContext(AuthContext);
  const [values, handleInputChange,,resetValues] = useForm({
    email: '',
    password: '',
  });
  const { email,password } = values;

  const handleLogin = async () => {
    const params = {
      email,
      password,
    }
    const response = await apiLogin(params);
    const { success, message, data } = response;
    if (success) {
      dispatchAuth({
        type: authTypes.login,
        payload: data,
      });
    } else {
      console.log(message);
    }
    resetValues();
  };

  return (
    <div className="flex h-screen w-full">
      <div className="h-full w-6/12 bg-gray-400">
        <img src={LoginIcon} alt="logo" className="w-full h-full" />
      </div>
      <div className="h-full w-6/12 px-32 pt-40">
        <div className="w-full mb-20">
          <TextCustom text="INICIA SESIÓN" className="text-blue-800" />
          <TextCustom
            text="EN TU CUENTA"
            variant="h3"
            className="text-blue-800"
          />
        </div>
        <div className="w-full">
          <TextInputCustom
            text="Correo Electrónico"
            targetName={'email'}
            handleInputChange={handleInputChange}
            value={email}
            className="w-full mb-10 border-blue-800"
            maxLength={30}
          />
          <TextInputCustom
            text="Contraseña"
            targetName={'password'}
            handleInputChange={handleInputChange}
            value={password}
            className="w-full mb-2"
            type='password'
            maxLength={25}
          />
          <div className='flex justify-end mb-10'>
            <Link to="/login" className='text-blue-800'>¿Olvidastes tu contraseña?</Link>
          </div>
        </div>
        <div className="w-full h-20">
          <ButtonCustom text='INGRESAR' className='mb-4' onClick={handleLogin} />
          <div className='flex flex-row justify-center'>
            <p className='text-blue-800 mr-2'>¿No tienes cuenta aún?</p>
            <Link to="/login" className='text-blue-800'>Registrate</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
