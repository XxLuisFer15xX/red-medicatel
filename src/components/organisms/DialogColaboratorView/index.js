import React from 'react';
import { Dialog, DialogContent, Divider } from '@mui/material';

// Icons
import BadgeIcon from '@mui/icons-material/Badge';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import UserIcon from '../../../assets/images/user.PNG';

// Components
import { DetailItem, DialogTitleCustom } from '../../atoms';

const DialogColaboratorView = ({
  open = false,
  setOpen = () => null,
  colaborator = {},
}) => {
  const { nombre, apellido, cargo, ciudad, id, telefono, correo } = colaborator;

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onClose={handleClose}
      maxWidth={false}
      className={
        'fixed inset-0 z-10 overflow-y-auto flex justify-center items-center'
      }>
      <DialogTitleCustom id="customized-dialog-title" onClose={handleClose}>
        {'Información del Colaborador'}
      </DialogTitleCustom>
      <Divider />
      <DialogContent style={{ width: 500 }}>
        <div
          style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              paddingLeft: 40,
              paddingTop: 20,
              paddingBottom: 20,
              width: '100%',
            }}>
            <div style={{ width: '25%' }}>
              <img src={UserIcon} alt="user" />
            </div>
            <div
              style={{
                width: '75%',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <p style={{ fontSize: 24, fontWeight: 'bold', color: '#1e3b8a' }}>
                {`${nombre} ${apellido}`}
              </p>
              <p style={{ fontSize: 16, color: '#67e8f9' }}>{cargo}</p>
              <p style={{ fontSize: 16 }}>{ciudad}</p>
            </div>
          </div>
          <Divider />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: 64,
              paddingRight: 16,
              marginTop: 24,
            }}>
            <DetailItem
              text={id}
              icon={<BadgeIcon style={{ marginRight: 24 }} />}
              style={{ display: 'flex', marginBottom: 8 }}
            />
            <DetailItem
              text={telefono}
              icon={<PhoneIcon style={{ marginRight: 24 }} />}
              style={{ display: 'flex', marginBottom: 8 }}
            />
            <DetailItem
              text={correo}
              icon={<MailOutlineIcon style={{ marginRight: 24 }} />}
              style={{ display: 'flex' }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogColaboratorView;
