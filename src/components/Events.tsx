import { EventsData } from '@/data';
import React from 'react';
import Image from 'next/image';
import e1 from '../img/e1.png';
import e2 from '../img/e2.png';

const Events = () => {
  return (
    <>
      <section className="relative px-2 lg:block overflow-hidden py-16 bg-[#d9d9d9] ">
        <div className="container relative px-0  z-50 space-y-6">
          <h2 className="text-right pr-2 text-2xl  font-extrabold font-openSens">
            לוח אירועים
          </h2>
          {EventsData.map((data, i) => (
            <div
              key={i}
              className="flex lg:max-h-[240px] px-0 overflow-hidden lg:pl-5 pr-0 rounded-2xl border bg-[#ffff] border-[#D9D9D9] items-center justify-between"
            >
              <div className=" hidden lg:block">
                <button className="px-5  text-base font-bold font-inter py-2.5 rounded-3xl border border-black">
                  הרשמה
                </button>
              </div>
              <div className="flex  w-full pb-5 md:pb-0 lg:max-w-[80%]  flex-col md:flex-row gap-3 items-center">
                <div className=" w-full text-right px-5 lg:px-0 order-last md:order-first ">
                  <h2 className=" text-xl md:text-2xl  font-extrabold font-openSens">
                    {data.name}
                  </h2>
                  <h4 className="text-base py-2 font-normal text-black font-openSens">
                    {data.date}
                  </h4>
                  <p className=" text-base md:text-xl text-right font-openSens font-medium">
                    {data.des}
                  </p>
                </div>
                <Image
                  className="lg:rounded-r-2xl w-full md:w-auto"
                  src={data.img}
                  alt={data.name}
                />
              </div>
            </div>
          ))}
          <h2 className=" text-base lg:pl-10 font-bold underline">
            לעוד אירועים
          </h2>
        </div>
        <div className="absolute z-10 top-0 left-0">
          <Image
            width={800}
            className="w-full object-cover"
            src={e1}
            alt="tar"
          />
        </div>
        <div className="absolute z-10 bottom-0 right-0">
          <Image className="w-full object-cover" src={e2} alt="tar" />
        </div>
      </section>
    </>
  );
};

export default Events;
