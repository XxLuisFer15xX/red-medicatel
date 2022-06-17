import React from 'react';
import TextCustom from '../TextCustom';

const DetailItem = ({ icon, title = '', text = '', className = '', ...rest }) => {
  return (
    <div className={`flex ${className}`} {...rest}>
      {icon}
      {title !== '' && <TextCustom text={title} className="text-gray-400 text-sm mr-10" />}
      <TextCustom text={text} className="text-gray-600 text-sm font-semibold" />
    </div>
  );
};

export default DetailItem;
