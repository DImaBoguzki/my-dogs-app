import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import { DUMMY_DOG } from '../../data';
import './navbar.css';

function NavBar(){
  return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to="/" className="navbar-brand">
    My Dogs App
  </Link>
  <button className="navbar-toggler" 
      type="button" 
      data-toggle="collapse" 
      data-target="#navBarNav" 
      aria-controls="navBarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navBarNav">
      <ul className="navbar-nav">
        <li className='nav-item'>
            <NavLink className='NavBar-Link nav-link' activeClassName='active-link' exact to="/" >Home</NavLink>
        </li>
        {
          DUMMY_DOG.map((el,i)=>{
          return (
            <li key={i} className='nav-item'>
              <NavLink className='NavBar-Link nav-link' activeClassName='active-link' exact to={`/dog/${el.name}`}>
                {el.name}
              </NavLink>
          </li>
          )
        })
        }
      </ul>
  </div>
</nav>
  )
}
export default NavBar;
