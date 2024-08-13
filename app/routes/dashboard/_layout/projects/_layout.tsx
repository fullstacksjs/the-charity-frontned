import { ProjectsLayout } from '@camp/pages/Projects';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/_layout/projects/_layout')({
  component: () => <ProjectsLayout />,
});
