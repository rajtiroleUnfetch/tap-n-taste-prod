import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentsIcon from '@mui/icons-material/Payments';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const AdminPageroutes = [
  { path: '/dashboard', label: 'Dashboard', icon: DashboardIcon },
  { path: '/orders', label: 'Orders', icon: ShoppingCartIcon },
  { path: '/payments', label: 'Payments', icon: PaymentsIcon },
  { path: '/notifications', label: 'Notifications', icon: NotificationsIcon },
  { path: '/settings', label: 'Settings', icon: SettingsIcon },
  { path: '/logout', label: 'Logout', icon: LogoutIcon },
];

export const BackendUrl = 'http://localhost:3000/api/auth/google'
export const UserRedirecUrl = 'http://localhost:4200/api/auth/google'
export const AdminRedirecUrl = 'http://localhost:3000/api/auth/google'