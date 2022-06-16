import { Button } from '@mui/material';
import React, { useContext } from 'react';
// Hooks
import AuthContext from '../../../hooks/context/authContext';

// Const
import { authTypes } from '../../../commons/types';

const Login = () => {
  const { dispatchAuth } = useContext(AuthContext);

  const handleLogin = () => {
    dispatchAuth({
      type: authTypes.login,
      payload: 'Luis'
    });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-blue-400 ">
      <Button variant="contained" onClick={handleLogin}>
        Iniciar sesión
      </Button>
    </div>
  );
};

export default Login;
