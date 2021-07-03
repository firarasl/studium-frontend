import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarDataAdmin = [
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
    title: 'All Subjects',
    path: '/allSubjects',
    icon: <FaIcons.FaBook />,
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