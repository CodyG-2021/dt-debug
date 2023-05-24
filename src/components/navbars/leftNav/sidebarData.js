import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Login',
  //   path: '/login',
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text'
  // },
  {
    title: 'TestPie',
    path: '/testPie',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'TestTable',
    path: '/testTable',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'TestForm',
    path: '/testForm',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'TestTree',
    path: '/testTree',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'TestFree',
    path: '/testFree',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
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