import React from 'react';
import data from './data'
import Tours from './Components/Tours';
import { useState } from 'react';


const App = () => {
  const [tours, setTours] = useState(data)
       
  function removeTour(id){
     const newTours = tours.filter(tours=> tours.id!==id);
     setTours(newTours);
        
  }
  if(tours.length === 0){
         return(
           <div className='refresh'>
            <h2>No Tours left</h2>
            <button onClick={()=> setTours(data)}>
              Refresh
            </button>
           </div>
         );
  }


  return (
    <div>
     
      <Tours tours={tours} removeTour={removeTour}></Tours>

    </div>
  )

};

export default App;
