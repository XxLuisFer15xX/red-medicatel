import React from 'react';
import { CardColaborator } from '../../molecules';

const GridColaborators = ({ colaborators = [] }) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full mb-20">
      {colaborators.map((colaborator, index) => {
        const { nombre, apellido, cargo, ciudad, id, telefono, correo, pais } =
          colaborator;
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
  );
};

export default GridColaborators;
