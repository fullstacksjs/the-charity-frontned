import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { ModalsProvider } from '@mantine/modals';
import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import { mount } from 'cypress/react18';

import { ThemeProvider } from '../../../libs/design';

Cypress.Commands.add(
  'mount',
  (...[element, ...rest]: Parameters<typeof mount>) =>
    mount(
      <ApolloProvider
        client={
          new ApolloClient({
            cache: new InMemoryCache(),
            link: new HttpLink({ uri: '/api' }),
          })
        }
      >
        <ThemeProvider>
          <ModalsProvider>
            <RouterProvider
              router={createRouter({
                routeTree: createRootRoute({ component: () => element }),
              })}
            />
          </ModalsProvider>
        </ThemeProvider>
      </ApolloProvider>,
      ...rest,
    ),
);
