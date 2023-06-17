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

import hands_light from '../svg/services/hands_light.svg';
import desk_folders from '../svg/services/desk_folders.svg';
import rich_man from '../svg/services/rich_man.svg';
import teacher_class from '../svg/services/teacher_class.svg';

export const communityData: any[] = [
  {
    image: hands_light,
    name: 'התנדבות מקצועית בקהילה',
  },
  {
    image: hands_light,
    name: 'כנסי נטוורקינג',
  },
  {
    image: rich_man,
    name: 'פורום יזמות',
  },
  {
    image: desk_folders,
    name: 'הטבות לבוגרים',
  },
  {
    image: teacher_class,
    name: 'שימור הקשר עם היחידות',
  },
];
