"use client"
import {
  House,
  MapPin,
  PieChart,
  Plane,
  ReceiptText,
  Settings,
  Wallet,
} from 'lucide-react';
import { useState } from 'react';
import Link from './ListItem';
import ListItem from './ListItem';

const Nav = () => {
   const [active, setIsActive] = useState(true)
  //  const [active, setIsActive] = useState({
  //   dashboard:false,
  //   flights:true,
  //   wallet:false,
  //   report:false,
  //   statistics:false,
  //   settings:false,
  //  });

  //  const activeHandler = ()=> setIsActive
  return (
    <nav>
      <ul className='ml-5 mb-4 bg-primaryBg'>
        <ListItem
          text={'dashboard'}
          icon={<House />}
          className='rounded-br-[30px]'
        />
        <ListItem text={'flights'} active={active} icon={<Plane />} />
        <ListItem
          className='rounded-tr-[30px]'
          text={'wallet'}
          icon={<Wallet />}
        />
        <ListItem text={'reports'} icon={<ReceiptText />} />
        <ListItem text={'statistics'} icon={<PieChart />} />
        <ListItem text={'settings'} icon={<Settings />} />
      </ul>
    </nav>
  );
};

export default Nav;
