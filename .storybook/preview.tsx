import { MockedProvider } from '@apollo/client/testing';
import { Notifications } from '@mantine/notifications';
import { Decorator, Parameters, Preview } from '@storybook/react';
import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router';
import 'dayjs/locale/fa';
import React from 'react';
import { ThemeProvider } from '../libs/design';
import '../libs/zod-addons/monkeyPatchZod';

const parameters: Parameters = {
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  apolloClient: { MockedProvider },
};

const decorators: Decorator[] = [
  (Story, { args }) => {
    const router = args.router as any;
    const Layout = router?.layout ?? React.Fragment;
    return (
      <RouterProvider
        router={createRouter({
          context: {
            getTitle: () => router.context?.getTitle() ?? '',
          },
          history: createMemoryHistory({
            initialEntries: [router?.route ?? '/'],
          }),
          routeTree: createRootRoute({
            component: () => (
              <Layout>
                <Story />
              </Layout>
            ),
            errorComponent: () => <Story />,
          }),
        })}
        defaultComponent={() => <Story />}
      ></RouterProvider>
    );
  },
  Story => (
    <ThemeProvider>
      <Notifications limit={3} />
      <Story />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters,
  decorators,
};

export default preview;
