"use client"
import { Armchair, Calendar, CalendarDays, MapPin, User } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import Round from "../../../public/img/round.png"

const FlightSearch = () => {
  const [active, setActive] = useState({
oneWay: true,
round: false,
multi: false
  });
  return (
    <article className='bg-white p-5 h-fit rounded-3xl  gap-3 mt-5 flex'>
      <div className=' flex flex-col gap-3 '>
        <div className='bg-primaryBg  py-2 px-5 rounded-3xl flex items-center gap-6'>
          <p className=' uppercase text-secondary flex  font-bold gap-2'>
            <MapPin />
            new york (jfk)
          </p>

          <Image src={Round} alt='icon' className='h-5 w-7' />
          <p className=' uppercase text-secondary flex gap-2   font-bold'>
            <MapPin />
            mumbai (bom)
          </p>
        </div>
        <div className='bg-primaryBg  w-full py-1 pl-1 pr-5 rounded-3xl flex items-center gap-8'>
          <button
            onClick={() =>
              setActive({
                oneWay: true,
                round: false,
                multi: false,
              })
            }
            className={` uppercase    flex  font-bold  ${
              active.oneWay
                ? 'py-1 rounded-3xl px-5 bg-secondaryBg text-white'
                : ' text-secondary'
            } `}
          >
            one way
          </button>
          <button
            onClick={() =>
              setActive({
                oneWay: false,
                round: true,
                multi: false,
              })
            }
            className={` uppercase    flex  font-bold  ${
              active.round
                ? 'py-1 rounded-3xl px-5 bg-secondaryBg text-white'
                : ' text-secondary'
            } `}
          >
            round trip
          </button>
          <button
            onClick={() =>
              setActive({
                oneWay: false,
                round: false,
                multi: true,
              })

            }
                className={` uppercase    flex  font-bold  ${
              active.multi
                ? 'py-1 rounded-3xl px-5 bg-secondaryBg text-white'
                : ' text-secondary'
            } `}
          >
            multi city
          </button>
        </div>
      </div>
      <div className=' flex flex-col gap-3 '>
        <div className='bg-primaryBg py-2 px-5 rounded-3xl flex items-center gap-3 text-secondary'>
          <CalendarDays />
          <p className='font-bold '>29 JULY 2019</p>
        </div>
        <div className='bg-primaryBg py-2 px-5 rounded-3xl flex items-center gap-3'>
          <Armchair className='fill-secondary' />
          <p className='font-bold uppercase text-secondary'>First class</p>
        </div>
      </div>
      <div className=' flex flex-col gap-3  h-[60px] '>
        <div className='bg-primaryBg py-2 px-5 rounded-3xl flex items-center gap-3'>
          <User className='fill-secondary' />
          <p className='font-bold text-secondary'>2 TRAVELLER</p>
        </div>

        <p className=' uppercase flex items-center py-2 px-5 rounded-3xl   justify-center w-[182px] bg-tertiaryBg text-white'>
          Search
        </p>
      </div>
    </article>
  );
}

export default FlightSearch