import { GuestGuard } from '@camp/auth';
import { LoginPage } from '@camp/pages/Auth';
import { createFileRoute } from '@camp/router';

export const Route = createFileRoute('/login')({
  component: () => (
    <GuestGuard>
      <LoginPage />
    </GuestGuard>
  ),
});
