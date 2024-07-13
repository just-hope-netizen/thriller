import Map from '../../public/img/map.png';
import Image from 'next/image';
import Header from './sideBar/Header';
import Users from '../../public/img/uu.png';
import Nav from './sideBar/Nav';

const SideBar = () => {
  return (
    <section className='bg-secondaryBg max-w-[250px] rounded-3xl'>
      <Header />
      <Nav />
      <div className='ml-8 pb-8'>
        <h4 className=' uppercase text-tertiary mb-2'>Active Users</h4>
        <Image src={Users} alt='users avatar' />
        <Image src={Map} alt='world map' className=' w-48' />
      </div>
    </section>
  );
};

export default SideBar;
