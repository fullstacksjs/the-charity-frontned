import { ApolloProvider } from '@camp/api-client';
import { AuthProvider } from '@camp/auth';
import { ThemeProvider } from '@camp/design';
import { createRootRouteWithContext, Navigate, Outlet } from '@camp/router';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import type { RouterContext } from '../main';

const Root = () => {
  return (
    <AuthProvider>
      <ApolloProvider>
        <TanStackRouterDevtools />
        <ThemeProvider>
          <ModalsProvider>
            <Outlet />
            <Notifications limit={3} />
          </ModalsProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  );
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Root,
  notFoundComponent: () => <Navigate to="/login" />,
});
