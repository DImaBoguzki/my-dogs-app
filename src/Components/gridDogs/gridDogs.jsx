import React from 'react';
import './gridDogs.css';
import { DUMMY_DOG } from '../../data';
import {Link} from 'react-router-dom';

function GridDog(){
  return (
    <div className="Dog-wrapper container">
      <div className='row'>
        {
          DUMMY_DOG.map((el,i)=>{
            return (
              <div key={i} className='Dog col-lg-4 text-center'>
                <div className='Dog'>
                  <img className='Dog-card card' src={el.img} alt={el.name}/>
                  <Link className='underline' to={`/dog/${el.name}`}>
                    {el.name}
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default GridDog;