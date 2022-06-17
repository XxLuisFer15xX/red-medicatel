import React, { useContext } from 'react';

// Hooks
import AuthContext from '../../../hooks/context/authContext';

// Icons
import AddIcon from '@mui/icons-material/Add';

// Components
import { ButtonCustom, ButtonUser } from '../../atoms';

const HeaderMenu = () => {
  const { auth } = useContext(AuthContext);
  const { personalInfo } = auth;

  return (
    <div className="h-24 pr-20 w-full flex flex-row-reverse items-start">
      <ButtonUser className="h-10" textStyle='text-black' iconColor='inherit' text={personalInfo.nombre} />
      <ButtonCustom
        text="Agendar"
        className="h-10 mr-10 bg-blue-500"
        startIcon={<AddIcon />}
      />
    </div>
  );
};

export default HeaderMenu;
