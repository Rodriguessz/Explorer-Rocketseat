import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import { AuthRoutes } from './auth.routes';
import { AccessRoutes } from '../utils/AcessRoutes';

export function Routes() {
  const { user, signOut } = useAuth();  
  
  return (
    <BrowserRouter>
      {user ? <AccessRoutes user={user} /> : <AuthRoutes />}
    </BrowserRouter>
  );
}