import Image from 'next/image';
import Map from '../../../public/img/map1.png';
import Line from '../../../public/img/line.png';

const FlightDestination = () => {
  return (
    <div className='flex flex-col w-[350px]'>
      <section className='ml-5 bg-secondaryBg pt-5 px-4 rounded-t-3xl  '>
        <button className='flex justify-between uppercase text-white'>
          <span>from </span>
          <span>to </span>
        </button>
        <p className='flex justify-between uppercase items-center text-white '>
          <span className='text-lg font-light'>JFK </span>
          <span>non-stop </span>
          <span className='text-lg font-light'>BOM </span>
        </p>
        <div className='my-4 py '>
          <Image src={Map} alt='world map' />
        </div>
      </section>
      <section className='ml-5 bg-[#3d5653] rounded-b-3xl  px-4 py-5'>
        <div className='flex'>
          <p className=' bg-tertiaryBg text-white py-1.5 px-3 text-[12px]  rounded-3xl uppercase '>
            non-stop
          </p>
          <p className='  text-white py-1.5 px-3 text-[12px]  rounded-3xl uppercase '>
            one stop
          </p>
          <p className='  text-white py-1.5 px-3 text-[12px]  rounded-3xl uppercase '>
            more stop
          </p>
        </div>
        <div>
          <p className='  text-white my-3 text-[12px]   uppercase '>price</p>
          <Image src={Line} alt='line' />
        </div>
      </section>
    </div>
  );
};

export default FlightDestination;
