import FlightSearch from './flightInfo/FlightSearch';
import FlightResult from './flightInfo/FlightResult';
import FlightDestination from './flightInfo/FlightDestination';
import Booking from './flightInfo/Booking';

const FlightInfo = () => {
  return (
    <div className='px-7'>
      <FlightSearch />
     <FlightResult />
      <div className=' flex'>
<Booking />
     <FlightDestination />
      </div>
     
    </div>
  );
}

export default FlightInfo