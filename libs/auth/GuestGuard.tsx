import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet } from '@camp/router';

interface Props {
  children?: JSX.Element;
  to?: AppRoute;
}

export const GuestGuard = ({
  children = <Outlet />,
  to = '/dashboard',
}: Props) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Navigate to={to} /> : children;
};
