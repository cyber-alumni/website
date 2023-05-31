import React, { useState } from 'react';
import Image from 'next/image';
import { teamData, teamMembers, teamMobileData } from '@/data';
import img1 from '../img/footer_vector_1.png';
import img2 from '../img/footer_vector.png';
const Team = () => {
  return (
    <section className=" bg-primary relative overflow-hidden  pt-10 pb-16 text-white">
      <div className="relative hidden lg:block">
        <div className="container  space-y-7 justify-center">
          {/* The management of the association */}

          <div className=" relative z-40  px-3 2xl:px-36">
            <div>
              <h2 className=" text-center text-2xl font-extrabold font-openSens">
                הנהלת <br />
                העמותה
              </h2>
            </div>
            <div className="grid place-items-center grid-cols-3">
              {teamData.manement.map((data, key) => (
                <div key={key} className="py-10">
                  <Image
                    className=" block max-w-[108px]  w-full mx-auto object-cover"
                    src={data.profileImage}
                    alt={data.name}
                  />
                  <h2 className=" py-2 text-center  text-2xl font-extrabold font-openSens">
                    <span>{data.name}</span>
                    <span className=" block">{data.role}</span>
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {/* Board of Directors */}
          <div className=" z-30 relative px-3 2xl:px-36">
            <div>
              <h2 className=" text-center text-2xl font-extrabold font-openSens">
                ועד <br />
                מנהל
              </h2>
            </div>
            <div className="grid place-items-center grid-cols-5">
              {teamData.directors.map((data, key) => (
                <div key={key} className="py-10">
                  <Image
                    className=" block  max-w-[79px] w-full mx-auto object-cover"
                    src={data.profileImage}
                    alt={data.name}
                  />
                  <h2 className=" py-2 text-center  text-2xl font-extrabold font-openSens">
                    <span>{data.name}</span>
                    <span className=" block">{data.role}</span>
                  </h2>
                </div>
              ))}
            </div>
          </div>
          {/* Officials*/}
          <div className=" z-30 relative px-3 2xl:px-36">
            <div>
              <h2 className=" text-center text-2xl font-extrabold font-openSens">
                בעלי <br />
                תפקידים
              </h2>
            </div>
            <div className="grid place-items-center grid-cols-5">
              {teamData.directors.map((data, key) => (
                <div key={key} className="py-10">
                  <Image
                    className=" block  max-w-[79px] w-full mx-auto object-cover"
                    src={data.profileImage}
                    alt={data.name}
                  />
                  <h2 className=" py-2 text-center  text-2xl font-extrabold font-openSens">
                    <span>{data.name}</span>
                    <span className=" block">{data.role}</span>
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0">
          <Image src={img1} width={300} alt="abal" />
        </div>
        <div className="absolute z-10 right-[43%] inset-0 transform translate-x-1/2 translate-y-1/2">
          <Image src={img2} alt="abal" />
        </div>
      </div>
    </section>
  );
};

export default Team;
