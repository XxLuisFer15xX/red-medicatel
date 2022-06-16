import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Hooks
import AuthContext from '../../../hooks/context/authContext';

// Components
import { ButtonCustom, TextCustom } from '../../atoms';

const PageNotFound = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const handleGoBack = () => {
    if (auth.isLogin) {
      navigate('/dashboard/home');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="h-screen w-full bg-red-600 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <TextCustom
          text="Página no encontrada"
          variant="h2"
          className="text-white"
        />
        <ButtonCustom
          text="¿Regresar al Dashboard?"
          variant="text"
          className="text-white text-xl"
          onClick={handleGoBack}
          style={{textTransform: 'none'}}
        />
      </div>
    </div>
  );
};

export default PageNotFound;
