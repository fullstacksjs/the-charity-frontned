import { createFileRoute, Navigate } from '@camp/router';

export const Route = createFileRoute('/dashboard/_layout/')({
  component: () => <Navigate to="/dashboard/households" />,
});
