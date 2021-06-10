import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../index.css';
import { IconContext } from 'react-icons';

function Navbar({role}) {
  const [sidebar, setSidebar] = useState(false);
console.log("COLOR ISSSSS")
console.log(role)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar '>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars  />
          </Link>
        </div>
        <nav className='nav-menu active'>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <span className='menu-bars'>
              <FaIcons.FaGraduationCap />  <span >STUDIUM</span>
              </span> 
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;