import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'My Profile',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'All Users',
    path: '/allUsers-admin',
    icon: <IoIcons.IoMdPeople />,
    // icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Add',
    path: '/add',
    icon: <FaIcons.FaPlusCircle />,
    cName: 'nav-text'
  },
  {
    title: 'All Classes',
    path: '/allClasses',
    icon: <FaIcons.FaUsers />,
    cName: 'nav-text'
  },

  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];