import { communityData } from '@/data';
import Image from 'next/image';
import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation } from 'swiper';

import matzov from '../svg/units/mobile/matzov.svg';
import electronic from '../svg/units/mobile/electronic.svg';
import hativa from '../svg/units/mobile/hativa.svg';
import intelligence from '../svg/units/mobile/intelligence.svg';
import operations from '../svg/units/mobile/operations.svg';
const UnitsFieldsServices_Mobile = () => {
  const units = [matzov, electronic, hativa, intelligence, operations];

  return (
    <>
      <div className="px-4 pt-6 lg:hidden space-y-4">
        <div className="flex items-center justify-between">
          <Image src={matzov} width={160} alt="Tarif" />
          <Image src={hativa} width={160} alt="Tarif" />
        </div>
        <div className="flex items-center justify-between">
          <Image src={operations} width={160} alt="Tarif" />
          <Image src={intelligence} width={160} alt="Tarif" />
        </div>
        <div className="flex items-center justify-between">
          <p></p>
          <Image src={electronic} width={160} alt="Tarif" />
        </div>
      </div>
      <div className=" lg:hidden services min-w-[100vw] relative    py-10 ">
        <Swiper
            dir={"rtl"}
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="  grid-rows-1 absolute   w-full top-[13%] md:top-[25%] overflow-x-scroll grid grid-cols-4 gap-4"
        >
          {communityData.map((data, key) => (
            <SwiperSlide key={key} className="w-full h-full">
              <div className=" relative w-[120px] h-[120px] h-ful z-50 bg-gradient rounded-xl ">
                <Image
                  src={data.image}
                  className=" w-full h-full   rounded-xl object-cover"
                />
                <div className=" absolute h-[120px]  w-full top-0 bg-gradient rounded-xl "></div>
                <h2 className=" text-sm text-white font-extrabold absolute  top-[70%]  text-center w-full">
                  {data.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" absolute bottom-0">
          <div className=" grid grid-rows-3">
            <div className=" bg-primary relative text-white px-4 py-5">
              <h2 className=" text-2xl font-bold font-openSans text-right">
                עבור הבוגרים
              </h2>
              <p className="text-sm pt-2 text-right font-openSans font-normal">
                הפעילויות אשר העמותה יוזמת עבור הבוגרים שלה כוללים בראש
                ובראשונה ייעוץ והכוונה למשתחררים אשר מתלבטים באיזה אפיק לבחור,
                בדגש על עולם היזמות, בגלל מורכבותו. בנוסף שימור הקשר -
                הנטוורקינג וההדדיות, הינם אבני יסוד בפעילויות העמותה השוטפות
              </p>
              <div className=" absolute bottom-0 left-0">
                <svg
                  width={83}
                  height={80}
                  viewBox="0 0 133 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-7.49984 219.994V173.018H-35.684V201.447H-36.7737V173.018H-57.1255V171.927H-36.7737V143.71H-78.0098V142.619H-36.7737V114.401H-57.1255V113.31H-36.7737V85.0927H-87V84.0017H-36.7737V55.7842H-65.1684V54.6932H-36.7737V30.9637H-35.684V54.6932H-7.49984V0H-6.41011V54.6932H21.7741V34.6706H22.8638V54.6932H51.048V19.3221H52.1377V54.6994H80.3218V30.9699H81.4116V54.6994H109.806V55.7904H81.4116V84.0079H97.9122V85.0989H81.4116V113.316H133V114.407H81.4116V142.625H115.955V143.716H81.4116V171.934H109.806V173.025H81.4116V204.521H80.3218V173.025H52.1377V185.398H51.048V173.025H22.8638V201.453H21.7741V173.025H-6.41011V220H-7.49984V219.994ZM52.1315 171.927H80.3157V143.71H52.1315V171.927ZM22.8576 171.927H51.0418V143.71H22.8576V171.927ZM-6.41631 171.927H21.7679V143.71H-6.41631V171.927ZM-35.6902 171.927H-7.50603V143.71H-35.6902V171.927ZM52.1253 142.619H80.3095V114.401H52.1253V142.619ZM22.8514 142.619H51.0356V114.401H22.8514V142.619ZM-6.42249 142.619H21.7617V114.401H-6.42249V142.619ZM-35.6964 142.619H-7.51221V114.401H-35.6964V142.619ZM52.1191 113.31H80.3033V85.0927H52.1191V113.31ZM22.8452 113.31H51.0294V85.0927H22.8452V113.31ZM-6.42868 113.31H21.7555V85.0927H-6.42868V113.31ZM-35.7026 113.31H-7.51841V85.0927H-35.7026V113.31ZM52.1129 84.0017H80.2971V55.7842H52.1129V84.0017ZM22.839 84.0017H51.0232V55.7842H22.839V84.0017ZM-6.43488 84.0017H21.7493V55.7842H-6.43488V84.0017ZM-35.7088 84.0017H-7.5246V55.7842H-35.7088V84.0017Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                </svg>
              </div>
            </div>
            <div className=" bg_gradient relative text-white px-4 py-5">
              <h2 className=" text-2xl font-bold font-openSans text-right">
                עבור הקהילה
              </h2>
              <p className="text-sm pt-2 text-right font-openSans font-normal">
                העמותה מתכללת מגוון פעילויות אשר הבוגרים תורמים מהידע ומהערכים
                שלהם חזרה לחברה הישראלית. זה מתחיל בבתי הספר ובתנועות הנוער,
                ממשיך בהסברה לתקשורת, ונגמר במתן עזרה ותמיכה באירועי סייבר בזמן
                אמת לגופים אשר נזקקים לכך ברגע האמת.
              </p>
            </div>
            <div className=" bg_gradient2 overflow-hidden relative text-white px-4 py-5">
              <h2 className=" text-2xl font-bold font-openSans text-right">
                עבור המערך
              </h2>
              <p className="text-sm pt-2 text-right font-openSans font-normal">
                אין זה ראוי העמותה תשמר ותטפח את המורשת ואת הערכים אשר מושרשים
                במערך. העמותה מעודדת ומעודדת פעילויות מילואים שונות, כמו כן
                עובדת עם מערכי החינוך והמורשת ביחידות על מנת להנגיש לכלל החברה
                את פעילותיה.
              </p>
              <div className=" absolute left-0 top-0">
                <svg
                  width={228}
                  height={199}
                  viewBox="0 0 228 199"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M225.988 126.339C225.988 132.456 222.264 138.875 212.84 148.471L212.727 148.559L-58.4397 324.571L-59.1947 323.441C-19.3601 295.92 19.5307 260.537 5.82897 206.69C-3.23006 171.042 -27.9536 140.897 -51.872 111.731C-55.0175 107.9 -58.1252 104.107 -61.1574 100.351C-63.8877 96.9597 -66.6684 93.5558 -69.4741 90.1267C-92.1972 62.3049 -115.7 33.5284 -126.483 -0.586304C-134.674 -26.524 -131.78 -50.0878 -117.613 -72.6091C-106.792 -89.8172 -89.3788 -106.372 -62.8309 -124.711L-62.4534 -124.974L-62.0759 -124.736L212.639 51.7162L212.047 52.3191C193.766 70.9466 197.528 76.6742 208.688 93.6437C209.883 95.4775 211.179 97.4244 212.526 99.5346C213.872 101.645 215.155 103.592 216.351 105.413C222.063 114.105 225.963 120.046 225.963 126.301L225.988 126.339ZM211.922 147.466C230.14 128.876 226.378 123.149 215.231 106.192C214.023 104.358 212.739 102.411 211.393 100.301C210.047 98.1906 208.764 96.2437 207.568 94.4224C196.383 77.4153 192.143 70.9466 210.512 51.9926L-62.4031 -123.316C-103.622 -94.7912 -143.167 -57.9383 -125.162 -0.988282C-114.467 32.8752 -91.0522 61.5512 -68.4047 89.2726C-65.5989 92.7016 -62.8183 96.1056 -60.088 99.4969C-57.0557 103.253 -53.948 107.033 -50.8151 110.864C-26.8087 140.131 -1.98443 170.402 7.15008 206.35C18.8387 252.348 -7.1053 284.968 -39.6045 310.717L211.922 147.466ZM182.228 99.5221C161.556 72.3911 152.887 58.2226 181.599 32.825L180.693 31.8076C151.138 57.9588 160.524 73.2954 181.146 100.351C202.9 128.901 209.053 142.919 181.775 167.048L182.681 168.066C195.93 156.346 201.227 146.625 201.227 137.104C201.227 125.422 193.263 114.017 182.228 99.5346L182.228 99.5221ZM151.931 99.5221C138.003 81.7739 129.057 68.1581 127.522 55.0699C125.861 40.8387 133.347 27.5746 151.126 13.2932L150.27 12.2381C111.14 43.6774 125.093 67.5427 150.861 100.364C164.79 118.112 173.735 131.728 175.27 144.816C176.944 159.034 169.445 172.311 151.667 186.593L152.522 187.648C169.973 173.63 176.868 161.12 176.868 148.647C176.868 133.147 166.211 117.71 151.931 99.5221ZM121.646 99.5221C101.465 73.8858 89.4613 54.0776 91.8771 34.7091C93.626 20.7165 103.037 7.31432 120.665 -6.2512L119.834 -7.3314C101.905 6.46019 92.3175 20.1639 90.5308 34.5333C88.0522 54.3917 100.194 74.451 120.577 100.364C140.783 126.038 152.824 145.833 150.408 165.151C148.66 179.131 139.223 192.534 121.545 206.137L122.376 207.217C140.355 193.388 149.955 179.684 151.755 165.327C151.969 163.619 152.069 161.923 152.069 160.215C152.069 142.052 140.305 123.249 121.633 99.5346L121.646 99.5221ZM129.636 161.157C125.471 141.123 110.8 123.274 97.8661 107.536C95.6391 104.823 93.4372 102.147 91.3486 99.5221C89.4865 97.1858 87.574 94.837 85.6616 92.4755C73.5829 77.6289 61.1016 62.2797 55.3264 44.2049C44.8457 11.4217 65.8576 -7.62031 90.2163 -25.7956L89.3984 -26.8883C64.6245 -8.39906 43.2855 10.982 54.0305 44.6194C59.8811 62.9329 72.4505 78.3825 84.6047 93.3297C86.5172 95.6911 88.4296 98.0273 90.2918 100.364C92.3929 102.989 94.5822 105.664 96.8218 108.39C109.655 124.015 124.2 141.726 128.302 161.434C134.417 190.788 114.348 208.574 91.4367 225.681L92.2545 226.774C112.637 211.563 130.793 195.799 130.793 171.884C130.793 168.48 130.428 164.913 129.648 161.157L129.636 161.157ZM104.333 167.224C98.4449 145.268 83.2836 126.741 68.6256 108.842C66.0589 105.702 63.5173 102.599 61.0638 99.5221C58.5978 96.4196 56.0185 93.2794 53.4014 90.089C39.4354 73.0568 23.6073 53.7636 18.0461 32.3226C8.55925 -4.32941 33.4464 -26.1473 59.7553 -45.3525L58.9501 -46.4453C32.2637 -26.9637 7.02425 -4.80671 16.7249 32.6617C22.3491 54.3917 38.2905 73.823 52.3445 90.9557C54.9616 94.1461 57.5283 97.2737 59.9944 100.364C62.4479 103.441 64.9894 106.556 67.5687 109.696C82.1386 127.495 97.1993 145.896 103.012 167.576C112.788 204.027 87.7628 225.932 61.3029 245.238L62.1081 246.331C84.8563 229.726 106.56 211.211 106.56 183.264C106.56 178.24 105.856 172.901 104.333 167.224ZM78.8799 173.266C71.142 148.948 54.2822 128.324 37.9759 108.377C35.5476 105.4 33.1319 102.461 30.779 99.5346C28.3255 96.4698 25.784 93.3799 23.2047 90.2398C6.96134 70.4316 -9.83559 49.9452 -17.0828 26.2432C-29.1112 -13.1344 -7.24371 -38.6702 29.3195 -64.8843L28.5268 -65.9897C-8.50191 -39.4364 -30.6462 -13.5238 -18.3788 26.6452C-11.056 50.6109 5.82897 71.1978 22.1604 91.1064C24.7271 94.234 27.2686 97.3365 29.7221 100.389C32.075 103.315 34.4907 106.267 36.919 109.244C53.1498 129.09 69.9215 149.614 77.584 173.68C90.7573 215.068 63.0644 241.935 31.1817 264.795L31.9743 265.9C58.5978 246.808 82.3148 224.94 82.3148 194.204C82.3148 187.648 81.2327 180.689 78.8673 173.266L78.8799 173.266ZM54.408 182.397C46.0158 155.116 26.9793 131.903 8.57183 109.445C5.84154 106.104 3.12385 102.8 0.494207 99.5221C-2.148 96.2437 -4.85313 92.9403 -7.596 89.5991C-25.9279 67.2412 -44.8764 44.1296 -53.1805 17.1116C-67.5994 -29.7647 -36.6855 -59.3953 -1.12888 -84.4413L-1.90895 -85.5466C-37.8808 -60.2118 -69.147 -30.1792 -54.4764 17.5262C-46.0842 44.8079 -27.0477 68.0325 -8.64031 90.4784C-5.91001 93.8195 -3.2049 97.1104 -0.562678 100.389C2.07953 103.667 4.78466 106.971 7.52753 110.312C25.8595 132.657 44.8079 155.769 53.112 182.799C67.531 229.676 36.617 259.319 1.06041 284.352L1.84048 285.47C31.5843 264.519 58.1071 240.365 58.1071 205.66C58.1071 198.4 56.9495 190.662 54.408 182.397ZM30.6406 194.38C21.5187 162.451 -0.41169 135.571 -21.6375 109.571C-24.3929 106.192 -27.1232 102.851 -29.8032 99.5221C-32.5209 96.1433 -35.2889 92.7519 -38.0821 89.3228C-57.8358 65.131 -78.2438 40.1227 -88.2716 10.982C-106.717 -42.6771 -69.9648 -77.2566 -31.5898 -103.998L-32.3699 -105.116C-71.1601 -78.0855 -108.29 -43.0916 -89.555 11.4217C-79.4642 40.801 -58.9556 65.9098 -39.139 90.1895C-36.3458 93.606 -33.5778 96.9974 -30.8601 100.376C-28.1801 103.705 -25.4498 107.058 -22.6944 110.425C-1.56924 136.312 20.2857 163.079 29.3321 194.744C43.7007 245.05 7.86725 278.147 -29.0608 303.896L-28.2808 305.014C3.24966 283.046 33.9623 255.739 33.9623 216.989C33.9623 209.855 32.918 202.331 30.6532 194.38L30.6406 194.38ZM-117.059 -74.9579L-117.6 -73.7144L199.541 63.1715L200.082 61.928L-117.059 -74.9579ZM-130.56 -25.1926L-130.95 -23.8864L196.735 73.8983L197.125 72.592L-130.56 -25.1926ZM-114.43 24.5852L-114.681 25.9167L200.271 84.5874L200.522 83.256L-114.43 24.5727L-114.43 24.5852ZM-80.5337 74.3631L-80.6218 75.7196L207.644 95.2766L207.732 93.92L-80.5337 74.3631ZM216.187 104.597L-40.7243 124.154L-40.6237 125.51L216.288 105.953L216.187 104.597ZM223.359 115.298L-6.86624 173.969L-6.52653 175.288L223.698 116.617L223.359 115.298ZM226.718 126.012L9.23869 223.797L9.79229 225.041L227.284 127.256L226.731 126.012L226.718 126.012ZM223.761 136.727L-4.26177 273.625L-3.55718 274.793L224.491 137.907L223.786 136.739L223.761 136.727Z"
                    fill="url(#paint0_linear_501_2236)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_501_2236"
                      x1="-236.453"
                      y1="99.7984"
                      x2="94.0797"
                      y2="99.7984"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.458333" stopColor="#00FFF0" />
                      <stop offset={1} stopColor="#00FFF0" stopOpacity="0.04" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnitsFieldsServices_Mobile;
