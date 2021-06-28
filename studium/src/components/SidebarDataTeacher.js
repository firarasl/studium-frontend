import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarDataTeacher = [
  {
    title: 'My Profile',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'All Subjects',
    path: '/allTeachersSubject',
    icon: <FaIcons.FaBook />,
    // icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },

  {
    title: 'All Students',
    path: '/allMyStudents',
    icon: <FaIcons.FaUsers />,
    cName: 'nav-text'
  },
  {
    title: 'Add Test',
    path: '/addTest',
    icon: <FaIcons.FaPlusSquare />,
    cName: 'nav-text'
  },

  {
    title: 'All Tests',
    path: '/allTests',
    icon: <FaIcons.FaPen />,
    cName: 'nav-text'
  },
  {
    title: 'Upload Grades',
    path: '/upload',
    icon: <FaIcons.FaUpload />,
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