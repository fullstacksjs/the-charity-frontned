import { AuthGuard } from '@camp/auth';
import { DashboardLayout } from '@camp/pages/Dashboard';
import { createFileRoute, Outlet } from '@camp/router';

export const Route = createFileRoute('/dashboard/_layout')({
  component: () => (
    <AuthGuard>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AuthGuard>
  ),
});
