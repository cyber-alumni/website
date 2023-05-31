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

export const teamMembers: Team[] = [
  {
    name: 'עמיתי בן-שושן',
    job: 'ועד מנהל',
    img: '/image/team/2.png',
  },
  {
    name: 'אור שוורץ',
    job: 'ועד מנהל',
    img: '/image/team/1.png',
  },
  {
    name: 'אור שוורץ',
    job: 'ועד מנהל',
    img: '/image/team/3.png',
  },
  {
    name: 'אור שוורץ',
    job: 'ועד מנהל',
    img: '/image/team/4.png',
  },
  {
    name: 'אור שוורץ',
    job: 'ועד מנהל',
    img: '/image/team/5.png',
  },
];

import teamMeb1 from '../svg/team/1.svg';
import teamMeb2 from '../svg/team/2.svg';
import teamMeb3 from '../svg/team/3.svg';
import teamMeb4 from '../svg/team/directors/1.svg';
import teamMeb5 from '../svg/team/directors/2.svg';
import teamMeb6 from '../svg/team/directors/3.svg';
import teamMeb7 from '../svg/team/directors/4.svg';
import teamMeb8 from '../svg/team/directors/5.svg';

export const teamMobileData: {
  management: TeamMeb[];
  officials: TeamMeb[];
  directors: TeamMeb[];
} = {
  management: [
    {
      name: 'מתן דוברושין',
      bio: 'מנכ”ל העמותה',
      image: teamMeb1,
    },
    {
      name: 'אסף נקש',
      bio: 'יו”ר העמותה',
      image: teamMeb2,
    },
    {
      name: 'דני ברן',
      bio: 'נשיא העמותה',
      image: teamMeb3,
    },
  ],
  officials: [
    {
      name: 'אור אפשטיין',
      bio: 'רכז התנדבויות',
      image: teamMeb4,
    },
    {
      name: 'שי שוורץ',
      bio: 'מדיה ודיגיטל',
      image: teamMeb5,
    },
    {
      name: 'מתן אבוטבול',
      bio: 'רכז התנדבויות',
      image: teamMeb6,
    },
    {
      name: 'יובל חשביה',
      bio: 'הסברה וחינוך',
      image: teamMeb7,
    },
    {
      name: 'יוסף הרוש',
      bio: 'מדיה וקוד פתוח',
      image: teamMeb8,
    },
  ],
  directors: [
    {
      name: 'אור אפשטיין',
      bio: 'רכז התנדבויות',
      image: teamMeb4,
    },
    {
      name: 'שי שוורץ',
      bio: 'מדיה ודיגיטל',
      image: teamMeb5,
    },
    {
      name: 'מתן אבוטבול',
      bio: 'רכז התנדבויות',
      image: teamMeb6,
    },
    {
      name: 'יובל חשביה',
      bio: 'הסברה וחינוך',
      image: teamMeb7,
    },
    {
      name: 'יוסף הרוש',
      bio: 'מדיה וקוד פתוח',
      image: teamMeb8,
    },
  ],
};

import img1 from '../svg/event/event1.svg';
import img2 from '../svg/event/event2.svg';

export const EventsData: Events[] = [
  {
    name: 'כנס בוגרי מצו”ב 2023',
    date: '26 פברואר, 2023',
    des: 'האירוע השנתי של בוגרי יחידת מצו”ב לשנת 2023. על הפרק הרצאות מבוגרי היחידההאירוע בחסות GotFriends ובנק לאומי',
    img: img1,
  },
  {
    name: 'נותנים במה',
    date: '26 פברואר, 2023',
    des: 'העמותה מארגנת מיט-אפים מקצועיים שמטרתם לתת במה לחבריה להציג מחקרים ועבודות שביצעו, תוך כדי העשרת שאר חברי העמותה והקהל הרחב',
    img: img2,
  },
];

import comminityDataimg1 from '../svg/services/1.svg';
import comminityDataimg2 from '../svg/services/2.svg';
import comminityDataimg3 from '../svg/services/3.svg';
import comminityDataimg4 from '../svg/services/4.svg';
import comminityDataimg5 from '../svg/services/5.svg';

export const communityData: any[] = [
  {
    image: comminityDataimg1,
    name: 'פרויקטים לקהילה',
  },
  {
    image: comminityDataimg2,
    name: 'נטוורקינג',
  },
  {
    image: comminityDataimg3,
    name: 'חיבור למשקיעים',
  },
  {
    image: comminityDataimg4,
    name: 'הכשרה וקורסים',
  },
  {
    image: comminityDataimg4,
    name: 'שירותי ייעוץ בחינם',
  },
];

import temMangement1 from '../svg/team/management/manger1.svg';
import temMangement2 from '../svg/team/management/manger2.svg';
import temMangement3 from '../svg/team/management/manger3.svg';

import boardOfDerector1 from '../svg/team/directors/1.svg';
import boardOfDerector2 from '../svg/team/directors/2.svg';
import boardOfDerector3 from '../svg/team/directors/3.svg';
import boardOfDerector4 from '../svg/team/directors/4.svg';
import boardOfDerector5 from '../svg/team/directors/5.svg';

export const teamData = {
  manement: [
    {
      name: 'דני ברן',
      role: 'נשיא העמותה',
      profileImage: temMangement1,
    },
    {
      name: 'אסף נקש',
      role: 'יו”ר העמותה',
      profileImage: temMangement2,
    },
    {
      name: 'מתן דוברושין',
      role: 'מנכ”ל העמותה',
      profileImage: temMangement3,
    },
  ],
  directors: [
    {
      name: 'עמיתי בן-שושן',
      role: 'עמיתי בן-שושן',
      profileImage: boardOfDerector1,
    },
    {
      name: 'אור שוורץ',
      role: 'ועד מנהל',
      profileImage: boardOfDerector2,
    },
    {
      name: 'הילה ברומר',
      role: 'ועד מנהל',
      profileImage: boardOfDerector3,
    },
    {
      name: 'עידן פטלסקי',
      role: 'ועד מנהל',
      profileImage: boardOfDerector4,
    },
    {
      name: 'אמיר קריידן',
      role: 'ועד מנהל',
      profileImage: boardOfDerector5,
    },
  ],
};
