import { HouseholdDetail } from '@camp/pages/Households';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/dashboard/_layout/households/_layout/$householdId',
)({
  component: HouseholdDetail,
});
