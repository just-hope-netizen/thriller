import { ChevronDown } from 'lucide-react';


const FlightResult = () => {
  return (
    <div>
      {' '}
      <div className='my-5 flex items-center justify-between'>
        <h3 className='uppercase font-bold text-secondary text-base'>
          result (25){' '}
        </h3>
        <div className='flex gap-3'>
          <h3 className='uppercase font-bold text-secondary bg-white  py-3 px-5 rounded-3xl'>
            filter
          </h3>
          <h3 className='uppercase font-bold text-secondary bg-white  py-3 px-5 rounded-3xl flex gap-3'>
            ticket of class <ChevronDown />
          </h3>
        </div>
      </div>
    
    </div>
  );
}

export default FlightResult