import React from 'react';
import vector from '../img/Vector.png';
import Image from 'next/image';

import bg from '../img/bg.png';

import agaf from '../svg/units/agaf.svg';
import hativa from '../svg/units/hativa.svg';
import electronic from '../svg/units/electronic.svg';
import matzov from '../svg/units/matzov.svg';
import prisma from '../svg/units/prisma.svg'

import {communityData} from "@/data";

interface CardProps {
    name: string;

    png: any;
}

const UnitCard: React.FC<CardProps> = ({name, png}) => (
    <div
        className="w-full drop-shadow-lg min-w-[270px] overflow-hidden px-4 py-2 bg-white rounded-3xl flex flex-col sm:flex-row items-center gap-2">
        <h2 className="text-base w-full sm:w-[90%] text-center font-openSans font-bold">
            {name}
        </h2>
        <Image src={png} alt={name} className="block max-w-[45px]"/>
    </div>
);


const UnitsFieldsServices = () => {
    return (
        <>
        <section
            id="units"
            className="relative hidden lg:flex  flex-col gap-10 overflow-hidden  "
        >
            <div className="absolute  lg:top-[6%] 2xl:top-[6%] w-full">
                <div className=" flex gap-y-6  items-center flex-col  container ">
                    <div className="flex items-center gap-6">
                        <UnitCard name="מרכז מודיעין להגנה" png={agaf}/>
                        <UnitCard name="חטיבת ההגנה בסייבר" png={hativa}/>
                        <UnitCard name="מרכז צופן ובטחון (מצו”ב)" png={matzov}/>
                    </div>
                    <div className="flex justify-center items-center gap-6">
                        <UnitCard name="מרכז מבצעים להגנה" png={agaf}/>
                        <UnitCard name="מרכז לוחמה אלקטרונית" png={electronic}/>
                        <UnitCard name=" &nbsp;&nbsp;&nbsp; מרכז פריזמה " png={prisma}/>
                    </div>
                </div>
            </div>
            {/* */}
            <div className="relative" id={'fields'}>
                <div className="container font-openSans gap-6 mt-auto lg:mt-[28%] xl:mt-[25%] 2xl:mt-[20%]   grid grid-cols-5">
                    {communityData.map((data, key) => (
                        <>
                        <div
                            key={key}
                            className=" relative  z-50 bg-gradient rounded-xl h-[292px]"
                        >
                            <Image
                                src={data.image}
                                className=" w-full h-full  rounded-xl object-cover"
                                alt="CommunityDataimg1"
                            />
                            <div className=" absolute w-full top-0 bg-gradient rounded-xl h-[292px]"></div>
                            <h2 className=" text-3xl text-white font-extrabold absolute top-[70%] text-center w-full">
                                {data.name}
                            </h2>
                        </div>
                        </>
                    ))}

                    <div className="absolute z-10">
                        <Image src={bg} alt="bg"/>
                    </div>
                </div>
            </div>
            <div className="flex mt-auto flex-col lg:flex-row  items-end  text-white  justify-center"> {/*add pb-1 if needed padding*/}
                <div
                    className="bg-[#001767] relative px-16 flex flex-col items-end h-[474px] basis-[35%]">
                    <h2 className="text-4xl pt-36 font-openSans font-bold">עבור הבוגרים</h2>
                    <p className="text-lg rtl pt-2 w-full 2xl:w-[70%]]  font-normal font-openSans text-right">
                        הפעילויות אשר העמותה יוזמת עבור הבוגרים שלה כוללים בראש
                        ובראשונה ייעוץ והכוונה למשתחררים אשר מתלבטים באיזה אפיק לבחור,
                        בדגש על עולם היזמות, בגלל מורכבותו. בנוסף שימור הקשר -
                        הנטוורקינג וההדדיות, הינם אבני יסוד בפעילויות העמותה השוטפות.
                    </p>
                    <div className="absolute left-0 ">
                        <Image src={vector} alt="f"/>
                    </div>
                </div>
                <div
                    className="bg-[#001354] w-full flex px-6 flex-col items-start  basis-[30%] h-[474px] ">
                    <h2 className="text-4xl pt-36 text-right 2xl:w-[85%] w-full  font-openSans font-bold">
                        עבור הקהילה
                    </h2>
                    <p className="text-lg rtl pt-2 text-right  w-full 2xl:w-[85%] font-normal font-openSans">
                        העמותה מתכללת מגוון פעילויות אשר הבוגרים תורמים מהידע ומהערכים
                        שלהם חזרה לחברה הישראלית. זה מתחיל בבתי הספר ובתנועות הנוער,
                        ממשיך בהסברה לתקשורת, ונגמר במתן עזרה ותמיכה באירועי סייבר בזמן
                        אמת לגופים אשר נזקקים לכך ברגע האמת.
                    </p>
                </div>
                <div className="bg_2 flex px-6 flex-col items-start basis-[35%] h-[474px]">
                    <h2 className="text-4xl pt-36 2xl:w-[85%] w-full text-right font-openSans font-bold">
                        עבור המערך
                    </h2>
                    <p className="text-lg pt-2 rtl  w-full 2xl:w-[85%] text-right  font-normal font-openSans">
                        אין זה ראוי העמותה תשמר ותטפח את המורשת ואת הערכים אשר מושרשים
                        במערך. העמותה מעודדת ומעודדת פעילויות מילואים שונות, כמו כן
                        עובדת עם מערכי החינוך והמורשת ביחידות על מנת להנגיש לכלל החברה
                        את פעילותיה.
                    </p>
                </div>
            </div>
        </section>
            </>
    );
};

export default UnitsFieldsServices;
