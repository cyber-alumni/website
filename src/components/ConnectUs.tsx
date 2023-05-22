import React from 'react';

const ConnectUs = () => {
  return (
    <section className="container gap-4  py-10 lg:!py-16 flex lg:flex-row flex-col justify-between items-center">
      <div className=" lg:order-first order-last">
        <button className="btn_primary">לקבוצת הפייסבוק</button>
      </div>
      <div className="">
        <h2 className=" text-xl lg:text-5xl text-right font-openSens font-bold">
          עדיין לא הצטרפתם לקבוצת הפייסבוק?
        </h2>
        <h3 className=" lg:text-right text-center text-lg lg:text-4xl flex lg:pt-2 justify-center lg:justify-end font-openSens font-normal lg:font-bold">
          למה אתם מחכים? מאות בוגרים כבר שם.​
        </h3>
      </div>
    </section>
  );
};

export default ConnectUs;
