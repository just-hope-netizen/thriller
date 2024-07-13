import React from 'react'
import User from '../../../public/img/travel_1.png';

import Image from 'next/image';

const Header = () => {
  return (
    <header className='bg-[#3d5754] rounded-t-3xl flex flex-col gap-y-2 items-center text-white pt-14 pb-10'>
      <Image src={User} alt='user avatar' className='w-20' />
      <h1 className=' text-lg '>Alex johnson</h1>
      <p>alex.johnson@gmail.com</p>
    </header>
  );
}

export default Header