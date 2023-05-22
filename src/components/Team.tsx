import React from 'react';
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

      {/* Mobile Responsive  */}
      <div className=" lg:hidden relative z-20">
        <div>
          <div className=" text-center text-2xl font-openSens">
            הנהלת העמותה
          </div>
          <div className=" pt-16 flex flex-col justify-center items-center gap-y-5">
            {teamMobileData.map((data, key) => (
              <div key={key}>
                <Image src={data.image} alt={data.name} />
                <div className="py-2">
                  <h2 className="text-2xl text-center font-inter font-black  ">
                    {data.name}
                  </h2>
                  <h2 className="text-lg text-center font-inter font-medium  ">
                    {data.bio}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex justify-center pt-10">
            <button className=" border border-white rounded-md px-4 py-2">
              <span className="flex items-center gap-3">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z"
                    fill="white"
                  />
                </svg>
                <span className=" text-sm font-bold">לכל חברי העמותה </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className=" absolute left-0 top-0 z-10 lg:hidden">
        <svg
          width="104"
          height="211"
          viewBox="0 0 164 211"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M163.863 105.956V104.486H104.083V69.09H133.374V67.6197H104.083V32.2241H161.754V30.7539H104.083V-4.64172H112.875V-6.112H104.083V-41.5076H161.754V-42.9778H104.083V-78.3734H140.207V-79.8437H104.083V-107.561H102.613V-79.8437H67.2231V-140.166H65.7531V-79.8573H30.3637V-83.9278H28.8937V-79.8573H-6.49573V-115.988H-7.96574V-79.8573H-43.3552V-140.166H-44.8252V-79.8573H-80.2146V-97.5959H-81.6846V-79.8573H-117.074V-147H-118.544V-79.8573H-154.668V-78.387H-118.544V-42.9915H-133.122V-41.5212H-118.544V-6.12561H-182V-4.65533H-118.544V30.7402H-133.122V32.2105H-118.544V67.6061H-161.501V69.0764H-118.544V104.472H-131.012V105.942H-118.544V141.338H-154.668V142.808H-118.544V147.927H-117.074V142.808H-81.6846V197.331H-80.2146V142.808H-44.8252V154.761H-43.3552V142.808H-7.96574V178.939H-6.49573V142.808H28.8937V210.999H30.3637V142.808H65.7531V154.761H67.2231V142.808H102.613V187.352H104.083V142.808H140.207V141.338H104.083V105.942H163.863V105.956ZM102.613 104.486H67.2231V69.09H102.613V104.486ZM-7.96574 30.7539H-43.3552V-4.64172H-7.96574V30.7539ZM-6.49573 -4.64172H28.8937V30.7539H-6.49573V-4.64172ZM-7.96574 32.2241V67.6197H-43.3552V32.2241H-7.96574ZM-6.49573 32.2241H28.8937V67.6197H-6.49573V32.2241ZM30.3637 32.2241H65.7531V67.6197H30.3637V32.2241ZM30.3637 30.7539V-4.64172H65.7531V30.7539H30.3637ZM30.3637 -6.112V-41.5076H65.7531V-6.112H30.3637ZM28.8937 -6.112H-6.49573V-41.5076H28.8937V-6.112ZM-7.96574 -6.112H-43.3552V-41.5076H-7.96574V-6.112ZM-44.8252 -6.112H-80.2146V-41.5076H-44.8252V-6.112ZM-44.8252 -4.64172V30.7539H-80.2146V-4.64172H-44.8252ZM-44.8252 32.2241V67.6197H-80.2146V32.2241H-44.8252ZM-44.8252 69.09V104.486H-80.2146V69.09H-44.8252ZM-43.3552 69.09H-7.96574V104.486H-43.3552V69.09ZM-6.49573 69.09H28.8937V104.486H-6.49573V69.09ZM30.3637 69.09H65.7531V104.486H30.3637V69.09ZM102.613 67.6197H67.2231V32.2241H102.613V67.6197ZM102.613 30.7539H67.2231V-4.64172H102.613V30.7539ZM102.613 -6.112H67.2231V-41.5076H102.613V-6.112ZM102.613 -78.3734V-42.9778H67.2231V-78.3734H102.613ZM65.7531 -78.3734V-42.9778H30.3637V-78.3734H65.7531ZM28.8937 -78.3734V-42.9778H-6.49573V-78.3734H28.8937ZM-7.96574 -78.3734V-42.9778H-43.3552V-78.3734H-7.96574ZM-44.8252 -78.3734V-42.9778H-80.2146V-78.3734H-44.8252ZM-117.074 -78.3734H-81.6846V-42.9778H-117.074V-78.3734ZM-117.074 -41.5076H-81.6846V-6.112H-117.074V-41.5076ZM-117.074 -4.64172H-81.6846V30.7539H-117.074V-4.64172ZM-117.074 32.2241H-81.6846V67.6197H-117.074V32.2241ZM-117.074 69.09H-81.6846V104.486H-117.074V69.09ZM-117.074 141.351V105.956H-81.6846V141.351H-117.074ZM-80.2146 141.351V105.956H-44.8252V141.351H-80.2146ZM-43.3552 141.351V105.956H-7.96574V141.351H-43.3552ZM-6.49573 141.351V105.956H28.8937V141.351H-6.49573ZM30.3637 141.351V105.956H65.7531V141.351H30.3637ZM102.613 141.351H67.2231V105.956H102.613V141.351Z"
            fill="url(#paint0_linear_501_545)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_501_545"
              x1="733.958"
              y1="167.421"
              x2="-9.06828"
              y2="77.9053"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.458333" stopColor="#00FFF0" />
              <stop offset="1" stopColor="#00FFF0" stopOpacity="0.04" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className=" absolute bottom-0 right-0 z-10 lg:hidden">
        <svg
          width="241"
          height="208"
          viewBox="0 0 392 378"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M441.735 228.991C327.536 203.193 219.414 265.617 184.666 377.41L183.451 377.033C200.483 322.25 235.676 277.179 282.541 250.108C329.412 223.047 386.041 215.105 442.017 227.75L441.735 228.991ZM450.208 197.216C317.745 166.687 192.715 238.874 152.912 368.86L154.121 369.227C193.723 239.896 318.117 168.078 449.921 198.447L450.208 197.216ZM458.394 166.672C386.203 149.691 312.542 159.917 250.998 195.45C189.453 230.983 143.767 289.662 122.377 360.672L123.586 361.038C167.9 213.969 308.584 132.744 458.117 167.897L458.404 166.666L458.394 166.672ZM466.58 136.128C386.364 117.04 304.231 128.449 235.284 168.256C166.347 208.057 115.39 273.487 91.8219 352.495L93.0314 352.861C141.367 190.877 301.832 98.2326 466.283 137.365L466.57 136.134L466.58 136.128ZM474.766 105.584C292.21 61.5759 114.443 164.21 61.277 344.312L62.4908 344.663C115.471 165.221 292.581 62.966 474.473 106.805L474.776 105.578L474.766 105.584ZM482.952 75.0398C386.626 51.6364 287.478 65.3598 203.787 113.679C120.096 161.998 58.6274 241.006 30.7423 336.123L31.956 336.474C89.6528 139.722 283.412 27.8411 482.669 76.2547L482.972 75.0281L482.952 75.0398ZM491.138 44.4958C386.716 18.9579 279.063 33.8303 188.021 86.3938C96.978 138.957 30.2817 224.745 0.187286 327.946L1.40108 328.297C63.8183 114.218 274.229 -7.26211 490.841 45.7325L491.144 44.5059L491.138 44.4958ZM413.47 0.559304L412.209 0.478072L397.3 253.055L398.56 253.136L413.47 0.559304ZM328.647 3.76047L327.396 3.92975L362.167 254.558L363.418 254.389L328.647 3.76047ZM247.451 23.1222L246.257 23.5287L328.571 262.738L329.765 262.332L247.462 23.1164L247.451 23.1222ZM172.026 57.4067L170.934 58.0373L297.411 277.102L298.503 276.471L172.026 57.4067ZM270.48 296.29L104.476 105.4L103.526 106.231L269.531 297.121L270.48 296.29ZM246.592 321.286L46.9327 165.869L46.1608 166.867L245.826 322.294L246.598 321.296L246.592 321.286ZM227.724 350.96L1.54721 237.587L0.987355 238.719L227.18 352.096L227.74 350.964L227.724 350.96Z"
            fill="url(#paint0_linear_501_2617)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_501_2617"
              x1="57.8523"
              y1="-238.783"
              x2="226.33"
              y2="148.493"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.458333" stopColor="#00FFF0" />
              <stop offset="1" stopColor="#00FFF0" stopOpacity="0.04" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Team;
