import React from 'react'
import Image from 'next/image';
import Emirate from '../../../public/img/emi.png';
import Qatar from '../../../public/img/qatar.png';
import Lufth from '../../../public/img/lufth.png';

const Booking = () => {
  return (
    <div className='w-fit'>
      <section
        className='relative uppercase  border-b  border-dashed
       font-bold text-secondary flex gap-5 items-center  bg-white  py-5 px-5 rounded-t-3xl'
      >
        <Image src={Emirate} alt='emirate logo' className='h-12 w-12' />
        <div className=' grid gap-4'>
          <p className=' font-light text-lg '>JFK</p>
          <p>13:00</p>
        </div>
        <div className='text-[12px] grid gap-1.5 w-24 text-center'>
          <p className=' font-normal  uppercase'>emirate</p>
          <p className=' text-tertiary'>11H 20M</p>

          <p className='   font-light  uppercase'>non-stop</p>
        </div>
        <div className=' grid gap-4'>
          <p className=' font-light text-lg '>BOM</p>
          <p>14:20</p>
        </div>
        <div className='grid gap-3'>
          <p className='    text-right'>$1,572</p>
          <p className=' bg-tertiaryBg text-white font-normal py-1.5 px-3 text-[12px]  rounded-3xl uppercase '>
            book now
          </p>
        </div>
        <div className=' absolute -bottom-2 -left-2 -right-2  flex justify-between z-10'>
          <span className='w-4 h-4 block rounded-full bg-primaryBg'></span>
          <span className='w-4 h-4 block rounded-full bg-primaryBg'></span>
        </div>
      </section>
      <section
        className='relative uppercase 
         border-b border-dotted font-bold text-secondary flex gap-5 items-center  bg-white  py-5 px-5 '
      >
        <Image src={Qatar} alt='qatar logo' className='h-12 w-12' />
        <div className=' grid gap-4'>
          <p className=' font-light text-lg'>JFK</p>
          <p>13:00</p>
        </div>
        <div className='text-[12px] grid gap-1.5 w-24 text-center'>
          <p className=' font-normal  uppercase'>QATAR AIRWAYS</p>
          <p className=' text-tertiary'>11H 20M</p>

          <p className='   font-light  uppercase'>non-stop</p>
        </div>
        <div className=' grid gap-4'>
          <p className=' font-light text-lg'>BOM</p>
          <p>14:20</p>
        </div>
        <div className='grid gap-3'>
          <p className='    text-right'>$1,572</p>
          <p className=' bg-tertiaryBg text-white font-normal py-1.5 px-3 text-[12px]  rounded-3xl uppercase '>
            book now
          </p>
        </div>
        <div className=' absolute -bottom-2 -left-2 -right-2  flex justify-between z-10'>
          <span className='w-4 h-4 block rounded-full bg-primaryBg'></span>
          <span className='w-4 h-4 block rounded-full bg-primaryBg'></span>
        </div>
      </section>
      <section
        className='relative uppercase  border-b  border-dashed
       font-bold text-secondary flex gap-5 items-center  bg-white  py-5 px-5 '
      >
        <Image src={Lufth} alt='emirate logo' className='h-12 w-12' />
        <div className=' grid gap-4'>
          <p className=' font-light text-lg'>JFK</p>
          <p>13:00</p>
        </div>
        <div className='text-[12px] grid gap-1.5 w-24 text-center'>
          <p className=' font-normal  uppercase'>lufthansa</p>
          <p className=' text-tertiary'>11H 20M</p>

          <p className='   font-light  uppercase'>non-stop</p>
        </div>
        <div className=' grid gap-4'>
          <p className=' font-light text-lg'>BOM</p>
          <p>14:20</p>
        </div>
        <div className='grid gap-3'>
          <p className='    text-right'>$1,572</p>
          <p className=' bg-tertiaryBg text-white font-normal py-1.5 px-3 text-[12px]  rounded-3xl uppercase '>
            book now
          </p>
        </div>
        <div className=' absolute -bottom-2 -left-2 -right-2  flex justify-between z-10'>
          <span className='w-4 h-4 block rounded-full bg-primaryBg'></span>
          <span className='w-4 h-4 block rounded-full bg-primaryBg'></span>
        </div>
      </section>
      <section
        className='relative uppercase  border-b  border-dashed
       font-bold text-secondary flex gap-5 items-center  bg-white  py-5 px-5 rounded-b-3xl'
      >
        <Image src={Emirate} alt='emirate logo' className='h-12 w-12' />
        <div className=' grid gap-4'>
          <p className=' font-light text-lg'>JFK</p>
          <p>13:00</p>
        </div>
        <div className='text-[12px] grid gap-1.5 w-24 text-center'>
          <p className=' font-normal  uppercase'>emirate</p>
          <p className=' text-tertiary'>11H 20M</p>

          <p className='   font-light  uppercase'>non-stop</p>
        </div>
        <div className=' grid gap-4'>
          <p className=' font-light text-lg'>BOM</p>
          <p>14:20</p>
        </div>
        <div className='grid gap-3'>
          <p className='    text-right'>$1,572</p>
          <p className=' bg-tertiaryBg font-normal text-white py-1.5 px-3 text-[12px]  rounded-3xl uppercase '>
            book now
          </p>
        </div>
      </section>
    </div>
  );
}

export default Booking