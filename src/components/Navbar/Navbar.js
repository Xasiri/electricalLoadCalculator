import React from 'react';
import {Link} from 'react-router-dom';
import '../../CSS/nav.css'

function Navigation(){
  return(
    <nav>
      <ul className="ul">
      <Link to='/solar-load-calculator'>
      <li className="li"> <a className="a"> Solar Load Calculator </a></li>
      </Link>
      <Link to='/tray-calculator'>
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


