import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import { useForm } from '../../../hooks/useForm';
import { TextCustom, TextInputCustom } from '../../atoms';
import { CardColaborator } from '../../molecules';

const Colaborators = () => {
  const [values, handleInputChange] = useForm({
    search: '',
  });
  const { search } = values;

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
        <CardColaborator />
        <CardColaborator />
        <CardColaborator />
        <CardColaborator />
        <CardColaborator />
        <CardColaborator />
        <CardColaborator />
        <CardColaborator />
      </div>
    </div>
  );
};

export default Colaborators;
