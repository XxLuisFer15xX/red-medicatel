import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

// Hooks
import { useForm } from '../../../hooks/useForm';

// Components
import { TextCustom, TextInputCustom } from '../../atoms';
import { GridColaborators } from '../../organisms';

// Apis
import { apiColaboratos } from '../../../api';

const Colaborators = () => {
  const [loader, setLoader] = useState(false);
  const [values, handleInputChange, setValues] = useForm({
    search: '',
    colaborators: [],
  });
  const { search, colaborators } = values;

  useEffect(() => {
    loadInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadInfo = async () => {
    setLoader(true);
    const response = await apiColaboratos();
    const { success, message, data } = response;
    if (success) {
      setValues({
        ...values,
        colaborators: data,
      });
    } else {
      console.log(message);
    }
    setLoader(false);
  };

  return (
    <div className="flex flex-col w-full px-20">
      <div className="flex w-full mb-10">
        <div className="flex flex-col w-6/12">
          <TextCustom
            text="Colaboradores"
            className="text-2xl text-blue-900 font-bold mb-4"
          />
          <TextCustom
            text="Aquí podrás encontrar todos tus colaboradores."
            className="text-lg text-gray-600"
          />
        </div>
        <div className="flex items-end w-6/12">
          <TextInputCustom
            text="Buscar"
            targetName={'search'}
            handleInputChange={handleInputChange}
            value={search}
            className="w-full"
            maxLength={50}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      {colaborators.length !== 0 ? (
        <GridColaborators colaborators={colaborators} />
      ) : loader ? (
        <div className="flex w-full justify-center items-center mb-20 mt-10">
          <TextCustom text="¡Cargando Colaboradores!" variant="h3" />
        </div>
      ) : (
        <div className="flex w-full justify-center items-center mb-20 mt-10">
          <TextCustom text="¡Sin colaboradores que mostrar!" variant="h3" />
        </div>
      )}
    </div>
  );
};

export default Colaborators;
