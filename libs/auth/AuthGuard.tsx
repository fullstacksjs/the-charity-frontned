import { useAuth0 } from '@auth0/auth0-react';
import { debug, DebugScopes } from '@camp/debug';
import { Navigate, Outlet } from '@camp/router';
import type { LinkProps } from '@tanstack/react-router';

interface Props {
  children?: JSX.Element;
  to?: LinkProps['to'];
}

const defaultChildren = <Outlet />;

export const AuthGuard = ({
  children = defaultChildren,
  to = '/login',
}: Props) => {
  const { isAuthenticated } = useAuth0();
  debug.log(DebugScopes.Auth, { isAuthenticated });

  return isAuthenticated ? children : <Navigate to={to} />;
};
