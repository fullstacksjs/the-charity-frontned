import { HouseholdDetail } from '@camp/pages/Households';
import { createFileRoute, useParams } from '@tanstack/react-router';

const HouseholdDetailPage = () => {
  const id = useParams({
    from: '/dashboard/_layout/households/_layout/$householdId',
    select: params => params.householdId,
  });

  return <HouseholdDetail id={id} />;
};
export const Route = createFileRoute(
  '/dashboard/_layout/households/_layout/$householdId',
)({
  component: HouseholdDetailPage,
});
