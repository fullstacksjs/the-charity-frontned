import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { ModalsProvider } from '@mantine/modals';
import {
  createMemoryHistory,
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
          <RouterProvider
            router={createRouter({
              routeTree: createRootRoute({
                component: () => <ModalsProvider>{element}</ModalsProvider>,
              }),
              history: createMemoryHistory({ initialEntries: ['/'] }),
            })}
          />
        </ThemeProvider>
      </ApolloProvider>,
      ...rest,
    ),
);
