type Team = {
  name: string;
  job: string;
  img: string;
};

type Events = {
  name: string;
  date: string;
  des: string;
  img: any;
};
type TeamMeb = {
  name: string;
  bio: string;
  image: string;
};


import matan from '../svg/team/leaders/matan.svg';
import assaf from '../svg/team/leaders/assaf.svg';
import danny from '../svg/team/leaders/danny.svg';
import amitai from '@/svg/team/management/amitai.svg';
import amir from '@/svg/team/management/amir.svg';
import idan from '@/svg/team/management/idan.svg';
import hila from '@/svg/team/management/hila.svg';
import or from '@/svg/team/management/or.svg';

export const teamData: {
  leaders: TeamMeb[];
  management: TeamMeb[];
  matzov: TeamMeb[];
} = {
  leaders: [
    {
      name: 'מתן דוברושין',
      bio: 'מנכ”ל העמותה',
      image: matan,
    },
    {
      name: 'אסף נקש',
      bio: 'יו”ר העמותה',
      image: assaf,
    },
    {
      name: 'דני ברן',
      bio: 'נשיא העמותה',
      image: danny,
    },
  ],
  management: [
    {
      name: 'אמיתי בן שושן',
      bio: '',
      image: amitai,
    },
    {
      name: 'אמיר קריידן',
      bio: '',
      image: amir,
    },
    {
      name: 'עידן פטלסקי',
      bio: '',
      image: idan,
    },
    {
      name: 'הילה אוחנה ברומר',
      bio: '',
      image: hila,
    },
    {
      name: 'אור שוורץ',
      bio: '',
      image: or,
    },
  ],
  matzov: [
    // {
    //   name: 'אור אפשטיין',
    //   bio: 'רכז התנדבויות',
    //   image: teamMeb4,
    // },
    // {
    //   name: 'שי שוורץ',
    //   bio: 'מדיה ודיגיטל',
    //   image: teamMeb5,
    // },
    // {
    //   name: 'מתן אבוטבול',
    //   bio: 'רכז התנדבויות',
    //   image: teamMeb6,
    // },
    // {
    //   name: 'יובל חשביה',
    //   bio: 'הסברה וחינוך',
    //   image: teamMeb7,
    // },
    // {
    //   name: 'יוסף הרוש',
    //   bio: 'מדיה וקוד פתוח',
    //   image: teamMeb8,
    // },
  ],
};

import img1 from '../svg/event/event1.svg';
import img2 from '../svg/event/event2.svg';

export const EventsData: Events[] = [
  // {
  //   name: 'כנס בוגרי מצו”ב 2023',
  //   date: '26 פברואר, 2023',
  //   des: 'האירוע השנתי של בוגרי יחידת מצו”ב לשנת 2023. על הפרק הרצאות מבוגרי היחידההאירוע בחסות GotFriends ובנק לאומי',
  //   img: img1,
  // }

  // , {
  //   name: 'נותנים במה',
  //   date: '26 פברואר, 2023',
  //   des: 'העמותה מארגנת מיט-אפים מקצועיים שמטרתם לתת במה לחבריה להציג מחקרים ועבודות שביצעו, תוך כדי העשרת שאר חברי העמותה והקהל הרחב',
  //   img: img2,
  // },
];

import CommunityDataimg1 from '../svg/services/1.svg';
import CommunityDataimg2 from '../svg/services/2.svg';
import CommunityDataimg3 from '../svg/services/3.svg';
import CommunityDataimg4 from '../svg/services/4.svg';
import CommunityDataimg5 from '../svg/services/5.svg';

export const communityData: any[] = [
  {
    image: CommunityDataimg1,
    name: 'פרויקטים לקהילה',
  },
  {
    image: CommunityDataimg2,
    name: 'נטוורקינג',
  },
  {
    image: CommunityDataimg3,
    name: 'חיבור למשקיעים',
  },
  {
    image: CommunityDataimg4,
    name: 'הכשרה וקורסים',
  },
  {
    image: CommunityDataimg4,
    name: 'שירותי ייעוץ בחינם',
  },
];

import temMangement1 from '../svg/team/management/manger1.svg';
import temMangement2 from '../svg/team/management/manger2.svg';
import temMangement3 from '../svg/team/management/manger3.svg';

import boardOfDerector1 from '@/svg/team/matzov/1.svg';
import boardOfDerector2 from '@/svg/team/matzov/2.svg';
import boardOfDerector3 from '@/svg/team/matzov/3.svg';
import boardOfDerector4 from '@/svg/team/matzov/4.svg';
import boardOfDerector5 from '@/svg/team/matzov/5.svg';
