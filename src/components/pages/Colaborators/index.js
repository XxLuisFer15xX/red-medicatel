import React, { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

// Hooks
import { useForm } from '../../../hooks/useForm';

// Components
import { TextCustom, TextInputCustom } from '../../atoms';
import { CardColaborator } from '../../molecules';

// Apis
import { apiColaboratos } from '../../../api';

const Colaborators = () => {
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
      <div className="grid grid-cols-3 gap-4 w-full mb-20">
        {colaborators.map((colaborator, index) => {
          const {
            nombre,
            apellido,
            cargo,
            ciudad,
            id,
            telefono,
            correo,
            pais,
          } = colaborator;
          return (
            <CardColaborator
              key={index}
              name={`${nombre} ${apellido}`}
              position={cargo}
              city={ciudad}
              nid={id}
              phoneNumber={telefono}
              email={correo}
              country={pais}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Colaborators;
