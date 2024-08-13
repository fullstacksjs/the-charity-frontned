import { useAuth0 } from '@auth0/auth0-react';
import type { LinkProps } from '@camp/router';
import { Navigate, Outlet } from '@camp/router';

interface Props {
  children?: JSX.Element;
  to?: LinkProps['to'];
}

const defaultChildren = <Outlet />;

export const GuestGuard = ({
  children = defaultChildren,
  to = '/dashboard',
}: Props) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Navigate to={to} /> : children;
};
