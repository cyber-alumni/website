import React from 'react';
import vector from '../img/Vector.png';
import Image from 'next/image';

import bg from '../img/bg.png';

import s1 from '../svg/sponsars/1.svg';
import s2 from '../svg/sponsars/2.svg';
import s3 from '../svg/sponsars/3.svg';
import s4 from '../svg/sponsars/4.svg';
import s5 from '../svg/sponsars/5.svg';

import ComminityDataimg1 from '../svg/services/1.svg';
import ComminityDataimg2 from '../svg/services/2.svg';
import ComminityDataimg3 from '../svg/services/3.svg';
import ComminityDataimg4 from '../svg/services/4.svg';
import ComminityDataimg5 from '../svg/services/5.svg';

interface CardProps {
  name: string;

  png: any;
}

const Card: React.FC<CardProps> = ({ name, png }) => (
  <div className="w-full  min-w-[290px] shadow_sm overflow-hidden px-4 py-2 bg-white rounded-3xl flex items-center gap-2 ">
    <h2 className="text-xl w-[90%]  font-inter font-bold">{name}</h2>
    <Image src={png} alt={name} className="block" />
  </div>
);

const Community = () => {
  return (
    <section
      id="why_us"
      className="relative hidden lg:flex  flex-col gap-10 overflow-hidden   "
    >
      <div className="absolute  lg:top-[6%] 2xl:top-[10%] w-full">
        <div className=" flex gap-y-6  items-center flex-col  container ">
          <div className="flex items-center gap-6">
            <Card name="מרכז מודיעין להגנה" png={s1} />
            <Card name="חטיבת ההגנה בסייבר" png={s2} />
            <Card name="מרכז צופן ובטחון (מצו”ב)" png={s3} />
          </div>
          <div className="flex justify-center items-center gap-6">
            <Card name="מרכז מבצעים להגנה" png={s4} />
            <Card name="מרכז לוחמה אלקטרונית" png={s5} />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="relative">
        <div className="  container  gap-6 mt-auto lg:mt-[28%] xl:mt-[25%] 2xl:mt-[20%]   grid grid-cols-5">
          <div
            style={{
              backgroundImage: `url(${ComminityDataimg1})`,
            }}
            className=" relative  z-50 bg-gradient rounded-xl h-[292px]"
          >
            <Image
              src={ComminityDataimg1}
              className=" w-full h-full  rounded-xl object-cover"
              alt="ComminityDataimg1"
            />
            <div className=" absolute w-full top-0 bg-gradient rounded-xl h-[292px]"></div>
            <h2 className=" text-3xl text-white font-extrabold absolute  top-[80%]  text-center w-full">
              פרויקטים לקהילה
            </h2>
          </div>
          <div
            style={{
              backgroundImage: `url(${ComminityDataimg2})`,
            }}
            className=" relative  z-50 bg-gradient rounded-xl h-[292px]"
          >
            <Image
              src={ComminityDataimg2}
              className=" w-full h-full  rounded-xl object-cover"
              alt="ComminityDataimg1"
            />
            <div className=" absolute w-full top-0 bg-gradient rounded-xl h-[292px]"></div>
            <h2 className=" text-3xl text-white font-extrabold absolute  top-[80%]  text-center w-full">
              נטוורקינג
            </h2>
          </div>
          <div className=" relative  z-50 bg-gradient rounded-xl h-[292px]">
            <Image
              src={ComminityDataimg3}
              className=" w-full h-full  rounded-xl object-cover"
              alt="ComminityDataimg1"
            />
            <div className=" w-full absolute top-0 bg-gradient rounded-xl h-[292px]"></div>
            <h2 className=" text-3xl text-white font-extrabold absolute  top-[80%]  text-center w-full">
              חיבור למשקיעים
            </h2>
          </div>
          <div className=" relative  z-50 bg-gradient rounded-xl h-[292px]">
            <Image
              src={ComminityDataimg4}
              className=" w-full h-full  rounded-xl object-cover"
              alt="ComminityDataimg1"
            />
            <div className=" w-full absolute top-0 bg-gradient rounded-xl h-[292px]"></div>
            <h2 className=" text-3xl text-white font-extrabold absolute  top-[80%]  text-center w-full">
              הכשרה וקורסים
            </h2>
          </div>
          <div className=" relative  z-50 bg-gradient rounded-xl h-[292px]">
            <Image
              src={ComminityDataimg4}
              className=" w-full h-full  rounded-xl object-cover"
              alt="ComminityDataimg1"
            />
            <div className=" w-full absolute top-0 bg-gradient rounded-xl h-[292px]"></div>
            <h2 className=" text-3xl text-white font-extrabold absolute  top-[80%]  text-center w-full">
              שירותי ייעוץ בחינם
            </h2>
          </div>

          <div className="absolute z-10">
            <Image src={bg} alt="bg" />
          </div>
        </div>
      </div>
      <div className="flex mt-auto pb-2  flex-col lg:flex-row  items-end  text-white  justify-center ">
        <div className="bg-[#001767] relative px-16 flex flex-col justify-center items-end h-[474px] basis-[35%]">
          <h2 className="text-4xl  font-openSens font-bold">עבור המערך</h2>
          <p className="text-lg pt-2 w-full 2xl:w-[70%]]  font-normal font-openSens text-right">
            אין זה ראוי העמותה תשמר ותטפח את המורשת ואת הערכים אשר מושרשים
            במערך. העמותה מעודדת ומעודדת פעילויות מילואים שונות, כמו כן עובדת עם
            מערכי החינוך והמורשת ביחידות על מנת להנגיש לכלל החברה את פעילותיה.
          </p>
          <div className="absolute left-0 ">
            <Image src={vector} alt="f" />
          </div>
        </div>
        <div className="bg-[#001354] w-full flex px-6 flex-col justify-center items-start  basis-[30%] h-[474px] ">
          <h2 className="text-4xl text-right 2xl:w-[80%] w-full  font-openSens font-bold">
            עבור המערך
          </h2>
          <p className="text-lg pt-2 text-right  w-full 2xl:w-[80%] font-normal font-openSens">
            אין זה ראוי העמותה תשמר ותטפח את המורשת ואת הערכים אשר מושרשים
            במערך. העמותה מעודדת ומעודדת פעילויות מילואים שונות, כמו כן עובדת עם
            מערכי החינוך והמורשת ביחידות על מנת להנגיש לכלל החברה את פעילותיה.
          </p>
        </div>
        <div className="bg_2 flex px-6 flex-col justify-center items-start   basis-[35%] h-[474px]">
          <h2 className="text-4xl  2xl:w-[80%] w-full text-right font-openSens font-bold">
            עבור המערך
          </h2>
          <p className="text-lg pt-2  w-full 2xl:w-[80%] text-right  font-normal font-openSens">
            אין זה ראוי העמותה תשמר ותטפח את המורשת ואת הערכים אשר מושרשים
            במערך. העמותה מעודדת ומעודדת פעילויות מילואים שונות, כמו כן עובדת עם
            מערכי החינוך והמורשת ביחידות על מנת להנגיש לכלל החברה את פעילותיה.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
