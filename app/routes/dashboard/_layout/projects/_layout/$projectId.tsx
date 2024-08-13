import { ProjectDetail } from '@camp/pages/Projects';
import { createFileRoute } from '@camp/router';

export const Route = createFileRoute(
  '/dashboard/_layout/projects/_layout/$projectId',
)({
  component: ProjectDetail,
  errorComponent: ({ error }) => <>Error: ${error.message}</>,
  notFoundComponent: () => <>Not Found</>,
});
