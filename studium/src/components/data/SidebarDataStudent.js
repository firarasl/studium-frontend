import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';





export const SidebarDataStudent = [
  {
    title: 'My Profile',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'My Subjects',
    path: '/mySubjects',
    icon: <FaIcons.FaBookReader />,
    cName: 'nav-text'
  },

  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Inbox',
    path: '/inbox',
    icon:<> <FaIcons.FaEnvelopeOpenText /> <span className="label label-success" id="counter"></span> </>,
    cName: 'nav-text'
  }

];