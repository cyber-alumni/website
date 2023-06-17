import Image from 'next/image';
import React, { useState } from 'react';

import { teamData } from '@/data';

const Team_Mobile = () => {
  const [selectedValue, setSelectedValue] = useState<string>('leaders');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  let teamMembersData: any[] = [];
  if (selectedValue === 'leaders') {
    teamMembersData = teamData.leaders;
  } else if (selectedValue === 'management') {
    teamMembersData = teamData.management;
  } else if (selectedValue === 'matzov') {
    teamMembersData = teamData.matzov;
  }

  return (
    <div className="bg-primary relative overflow-hidden pt-10 pb-16 text-white">
              <div className="flex justify-center pt-10">
          <div className="lg:hidden">
            <select
              className="rtl focus:outline-none border-2 rounded-md px-3 py-2 text-base border-white bg-transparent"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option className="text-black bg-none" value="leaders">
                הנהלת העמותה
              </option>
              <option className="text-black bg-none" value="matzov">
                ארגון בוגרי מצו"ב
              </option>
              <option className="text-black bg-none" value="management">
                ועד מנהל
              </option>
            </select>
          </div>
        </div>
      {/* Mobile Responsive */}
      <div className="lg:hidden relative z-20">
        <div>
          {/*<div className="text-center text-2xl font-openSans">הנהלת העמותה</div>*/}
          <div className="pt-16 flex flex-col justify-center items-center gap-y-5">
            {teamMembersData.map((data, key) => (
              <div key={key}>
                <Image
                  src={data.image}
                  className=" w-[120px] h-[120px] block object-cover mx-auto"
                  alt={data.name}
                />
                <div className="py-2">
                  <h2 className="text-2xl text-center font-inter font-black">
                    {data.name}
                  </h2>
                  <h2 className="text-lg text-center font-inter font-medium">
                    {data.bio}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      <div className="absolute left-0 top-0 z-10 lg:hidden">
        <svg
          width="104"
          height="211"
          viewBox="0 0 164 211"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG path code */}
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 z-10 lg:hidden">
        <svg
          width="241"
          height="208"
          viewBox="0 0 392 378"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG path code */}
        </svg>
      </div>
    </div>
  );
};

export default Team_Mobile;
