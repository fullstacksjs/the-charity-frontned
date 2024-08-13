import { ProjectList } from '@camp/pages/Projects';
import { createFileRoute } from '@camp/router';

export const Route = createFileRoute('/dashboard/_layout/projects/_layout/')({
  component: ProjectList,
});
