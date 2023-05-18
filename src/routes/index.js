import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Logout = lazy(() => import('../pages/Logout'))
const Profile = lazy(() => import('../pages/Profile'))
const Users = lazy(() => import('../pages/Users'))
//const Billing = lazy(() => import('../pages/Billing'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const FailedModals = lazy(() => import('../pages/FailedModals'))
const Feedback = lazy(() => import('../pages/Feedback'))
const PaymentScreen = lazy(() => import('../pages/PaymentScreen'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))
const Homescreen = lazy(() => import('../pages/Homescreen'))
const Bookingslide = lazy(() => import('../pages/Bookingslide'))
const Bookingslot = lazy(() => import('../pages/Bookingslot'))
const Favouritestation = lazy(() => import('../pages/Favouritestation'))
const Profilescreen = lazy(() => import('../pages/Profilescreen'))
const MyBooking = lazy(() => import('../pages/MyBooking'))
const ChargingHistory = lazy(() => import('../pages/ChargingHistory'))




/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/PaymentScreen',
    component: PaymentScreen,
  },

  // {
  //   path: '/users',
  //   component: Users,
  // },
 /* {
    path: '/billing',
    component: Billing,
  },*/
  {
    path: '/logout',
    component: Logout,
  },
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  
  // {
  //   path: '/forms',
  //   component: Forms,
  // },
  // {
  //   path: '/cards',
  //   component: Cards,
  // },
  // {
  //   path: '/charts',
  //   component: Charts,
  // },
  // {
  //   path: '/buttons',
  //   component: Buttons,
  //},
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/failedmodals',
    component: FailedModals,
  },
  {
    path: '/feedback',
    component: Feedback,
  },
  // {
  //   path: '/tables',
  //   component: Tables,
  // },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/Homescreen',
    component: Homescreen
  },
  // {
  //   path: '/Bookingslide',
  //   component: Bookingslide
  // },
  
  {
    path: '/Bookingslot/:stationid/:connectortype',
    component: Bookingslot
  },
  // {
  //   path: '/Favouritestation',
  //   component: Favouritestation
  // },
  {
    path: '/Profilescreen',
    component: Profilescreen
  },
  {
    path: '/MyBooking',
    component: MyBooking
  },
  {
    path: '/ChargingHistory',
    component: ChargingHistory
  }
]

export default routes
