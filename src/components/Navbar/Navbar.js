import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css'

function Navigation(){
  return(
    <nav>
      <ul className="ul">
      <Link to='/electrical-load-calculator'>
      <li className="li"> <a className="a"> Electrical Load Calculator </a></li>
      </Link>
      <Link to='/cable-tray-calculator'>
      <li className="li"> <a className="a">Tray Calculator </a></li>
      </Link>
      <Link>
      <li className="li"> <a className="a">Item three</a></li>
      </Link>
      <Link>
      <li className="li"> <a className="a">Item Four </a></li>
      </Link>
      
      </ul>
    </nav>
  )
}

export default Navigation;
