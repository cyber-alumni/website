import React from 'react';
import regtengle from '../img/regtengle.png';
import Image from 'next/image';
const Intro = () => {
  return (
    <section className="py-6 md:py-16 relative bg-white">
      <div className="container lg:pr-72 lg:w-10/12 lg:float-right" id={'intro'}>
        <div className=" w-full text-right relative z-50 space-y-2 md:space-y-5">
          <h1 className=" text-2xl lg:text-5xl font-openSans font-extrabold">
            עמותת בוגרי מערך ההגנה בסייבר
          </h1>
          <p className=" text-base md:text-xl font-normal font-openSans max-sm:py-3.5">
            עמותת בוגרי ההגנה בסייבר (ע&quot;ר 580680007) נוסדה מתוך הרצון
            לסייע ולחבר את בוגרי המערך לדורותיו, בנוסף להנגשת הידע העשיר שצברו
            בוגריה לטובת החברה הישראלית. העמותה פועלת לקידום מטרות אלו באמצעות
            שלל פעילויות ציבוריות אשר נעשות על ידי מתנדבי העמותה, במקביל לכנסי
            נטוורקינג וקידום יזמות בקרב הבוגרים, פעילויות הדרכה והעשרה במגזרים
            שונים ופעילויות סיוע מקצועי לגופים ועמותות ציבוריות
            בנושא ההגנה בסייבר
          </p>
          <button className="btn_primary" onClick={() => {
            window.open("https://hub.cyber-alumni.org/", "_blank");
          }}>להרשמה לניוזלטר</button>
          <span className='pr-2'></span>
          <button className="btn_primary" onClick={() => {
            window.open("https://hub.cyber-alumni.org/register", "_blank");
          }}>בוגרים? הצטרפו בחינם</button>

        </div>
      </div>

      <div className=" hidden lg:block absolute top-[100%]  bottom-0 left-0">
        <Image width={120} src={regtengle} alt="r1" />
      </div>
      <div className=" absolute z-10  top-[30%] lg:top-0 right-0">
        <Image width={120} src={regtengle} alt="r1" />
      </div>
    </section>
  );
};

export default Intro;
