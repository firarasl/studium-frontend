import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../index.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
const role = sessionStorage.getItem("role");
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <div className={[role,  "navbar"].join(' ')}>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars  />
          </Link>
        </div>
        <nav className={[role,  "nav-menu active"].join(' ')}>

          <ul className='nav-menu-items'>
            <li className={[role,  "navbar-toggle"].join(' ')}>

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