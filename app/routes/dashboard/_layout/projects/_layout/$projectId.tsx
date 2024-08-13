import { ProjectDetail } from '@camp/pages/Projects';
import { createFileRoute, useParams } from '@camp/router';

const ProjectDetailPage = () => {
  const id = useParams({
    from: '/dashboard/_layout/projects/_layout/$projectId',
    select: params => params.projectId,
  });

  return <ProjectDetail id={id} />;
};

export const Route = createFileRoute(
  '/dashboard/_layout/projects/_layout/$projectId',
)({
  component: ProjectDetailPage,
  errorComponent: ({ error }) => <>Error: ${error.message}</>,
  notFoundComponent: () => <>Not Found</>,
});
