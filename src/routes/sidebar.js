/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/auth/profile',
    icon: 'ProfileIcon',
    name: 'My Profile',
  },
  {
    path: '/auth/booking-slot',
    icon: 'Booking',
    name: 'My Booking',
  },
  {
    path: '/app/billing',
    icon: 'HistoryIcon',
    name: 'Charging History',
  },
  {
    path: '/app/billing',
    icon: 'WalletIcon',
    name: 'Payment',
  },
  {
    path: '/app/billing',
    icon: 'FavouriteIcon',
    name: 'Favourite Stations',
  },
  {
    path: '/app/logout',
    icon: 'OutlineLogoutIcon',
    name: 'Logout',
  },
]

export default routes