import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed'
import Image from 'next/image';
import { teamData } from '@/data';
import img1 from '../img/footer_vector_1.png';
import img2 from '../img/footer_vector.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const TeamMember = ({ image, name, bio }) => (
  <div className="py-10">
    <Image
      className="block max-w-[100px] w-full mx-auto object-cover rounded-full"
      src={image}
      alt={name}
    />
    <h2 className="py-2 text-center text-2xl font-extrabold font-openSans">
      <span>{name}</span>
      <span className="block">{bio}</span>
    </h2>
  </div>
);

const TeamSection = ({ title, members }) => {
  const numMembers = members.length;
  const gridColumns = `grid-cols-${Math.min(numMembers, 5)}`;

  return (
    <div className="relative z-30 px-3 2xl:px-36">
      <div>
        <h2 className="text-center text-2xl font-extrabold font-openSans">{title}</h2>
      </div>
      <div className={`grid place-items-center ${gridColumns} center`}>
        {members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

const buttonStyles = { float: 'right', margin: 'auto'};
const Team = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <section className="bg-primary relative overflow-hidden pt-10 pb-16 text-white hidden lg:block">
      <div className="relative hidden lg:block">
        <div className="container  space-y-7 justify-center">
          {/* Management */}
          <div className=" relative z-40  px-3 2xl:px-36">
            <div>
              <h2 className=" text-center text-2xl font-extrabold font-openSans">
                הנהלת <br />
                העמותה
              </h2>
            </div>
            <div className="grid place-items-center grid-cols-3">
              {teamData.leaders.map((data, key) => (
                <div key={key} className="py-10">
                  <Image
                    className=" block max-w-[108px]  w-full mx-auto object-cover"
                    src={data.image}
                    alt={data.name}
                  />
                  <h2 className=" py-2 text-center  text-2xl font-extrabold font-openSans">
                    <span>{data.name}</span>
                    <span className=" block">{data.bio}</span>
                  </h2>
                </div>
              ))}
            </div>
          </div>
            <section {...getCollapseProps()} className=" text-center text-2xl font-extrabold font-openSans">
                <TeamSection title="ועד מנהל" members={teamData.management} />
                <TeamSection title="ארגון בוגרי מצו&quot;ב" members={teamData.matzov} />
                <TeamSection title="בעלי תפקידים" members={teamData.officials} />
            </section>
            {/*<section className={"flex flex-col center justify-center"}>*/}
            <button {...getToggleProps({style: buttonStyles})} className={'collapse-button'}>

                { !isExpanded && (<FontAwesomeIcon icon={faChevronDown} className={'w-8 px-2'}/>) }
                { isExpanded && (<FontAwesomeIcon icon={faChevronUp} className={'w-8 px-2'} />) }
                {isExpanded ? 'סגירה' : 'לבעלי התפקידים'}
            </button>
            {/*</section>*/}
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
