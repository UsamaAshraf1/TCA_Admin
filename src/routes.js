import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  // MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
// import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
// import RTL from 'views/admin/rtl';

// Auth Imports
// import SignInCentered from 'views/auth/signIn';
import SignIn from 'views/auth/signIn';

const routes = [
  {
    name: 'Blogs',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Podcast',
    layout: '/admin',
    path: '/podcast',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Users',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/users',
    component: <DataTables />,
  },

  // {
  //   name: 'Profile',
  //   layout: '/admin',
  //   path: '/profile',
  //   icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  //   component: <Profile />,
  // },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignIn />,
  },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: '/rtl-default',
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: <RTL />,
  // },
];

export default routes;
