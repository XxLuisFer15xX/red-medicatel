import React from 'react';
import { TextCustom } from '../../atoms';

const StatisticSection = ({ isCovid = false, title = '', text='' }) => {
  return (
    <div className="bg-white flex flex-col py-2 px-4">
      <div className="w-full h-10">
        {isCovid && (
          <div className="bg-cyan-400 w-20 py-1 flex justify-center items-center rounded-full">
            <TextCustom text="COVID-19" className="text-xs text-blue-700" />
          </div>
        )}
      </div>
      <div className="flex h-full">
        <div className="w-5/12 flex justify-center items-center">
          <div className="rounded-full w-20 h-20 bg-blue-900"></div>
        </div>
        <div className="w-7/12 flex items-center">
          <div>
            <TextCustom
              text={text}
              className="text-3xl text-blue-900 font-bold"
            />
            <TextCustom
              text={title}
              className="text-sm text-gray-600"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <TextCustom text="10 FEB. 2022" className="text-gray-400 text-sm" />
      </div>
    </div>
  );
};

export default StatisticSection;
