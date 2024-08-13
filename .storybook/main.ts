import { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../libs/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-apollo-client',
    '@chromatic-com/storybook',
  ],
  framework: '@storybook/react-vite',
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
