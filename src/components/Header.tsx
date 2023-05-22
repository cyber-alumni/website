import Link from 'next/link';
import React from 'react';
import { LogoDark } from './Logo';

const Header = () => {
  return (
    <header className=" hidden lg:block container py-6 bg-white">
      <div className="flex items-center justify-between">
        <div className=" order-last">
          <Link href={'/'}>
            <LogoDark />
          </Link>
        </div>
        <div>
          <ul className="flex items-center text-base  font-medium  gap-x-6">
            <li>
              <button className="btn_primary">בוגרים? הצטרפו בחינ6</button>
            </li>
            <li>
              <Link href={'#why_us'}>למה להצטרף</Link>
            </li>
            <li>
              <Link href={'#אודות_מערך_הסייבר'}>אודות מערך הסייבר</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
