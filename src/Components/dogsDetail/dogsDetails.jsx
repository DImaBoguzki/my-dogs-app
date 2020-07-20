import React from 'react';
import { DUMMY_DOG } from  '../../data';
import './dogsDetails.css';

function DogDetail({route}){
  let dogName = route.match.params.name;
  const dog = DUMMY_DOG.find(dog=>dog.name===dogName);
  const handleGoBack=()=>{
    route.history.push('/');
  }
  return(
    <div className='Dog-details'>
      <div className='Dog-details-card card'>
        <div className='item card row-md'>
          <img src={dog.img} alt={dog.name}/>
        </div>
        <div className='item'>
          <h5>{dog.name}</h5>
        </div>
        <div className='item'>
          <h5>{`${dog.age}years old.`}</h5>
        </div>
        <div className='item'>
          <h5>{dog.decription}</h5>
        </div>
        <div className='item' onClick={handleGoBack}>
          <button className='btn btn-primary'>Go Back</button>
        </div>
      </div>
    </div>
  )
}
export default DogDetail;