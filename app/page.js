

import FlightInfo from '@/components/home/FlightInfo';
import SideBar from '@/components/home/SideBar';




export default function Home() {
  return (
    <main className="bg-primaryBg  flex">

      <SideBar/>

      <FlightInfo />

    </main>
  );
}
