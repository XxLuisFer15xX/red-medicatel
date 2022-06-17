import React, { useState } from 'react';
import { CardColaborator } from '../../molecules';
import DialogColaboratorView from '../DialogColaboratorView';

const GridColaborators = ({ colaborators = [] }) => {
  const [showColaborator, setShowColaborator] = useState(false);
  const [colaboratorSelect, setColaboratorSelect] = useState({});

  const handleColaboratorView = selected => {
    setColaboratorSelect(selected);
    setShowColaborator(true);
  };

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
            onClick={() => handleColaboratorView(colaborator)}
          />
        );
      })}
      {showColaborator && (
        <DialogColaboratorView
          open={showColaborator}
          setOpen={setShowColaborator}
          colaborator={colaboratorSelect}
        />
      )}
    </div>
  );
};

export default GridColaborators;
