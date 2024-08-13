import { projectMock } from '@camp/fixtures';
import type { Meta, StoryObj } from '@storybook/react';

import { ProjectDetail } from './ProjectDetail';

export default {
  component: ProjectDetail,
  args: {
    router: {
      route: '/dashboard/projects/123',
    },
  },
  parameters: {
    apolloClient: {
      mocks: [projectMock],
    },
  },
} as Meta<typeof ProjectDetail>;

type Story = StoryObj<typeof ProjectDetail>;

export const Default: Story = {};
