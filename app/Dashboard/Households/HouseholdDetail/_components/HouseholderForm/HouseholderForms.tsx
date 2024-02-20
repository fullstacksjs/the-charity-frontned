import type {
  Householder,
  HouseholderContact,
  HouseholderIdentity,
} from '@camp/domain';
import { Stack } from '@mantine/core';

import { HouseholderContactForm } from './_components/HouseholderContactForm';
import { HouseholderIdentityForm } from './_components/HouseholderIdentityForm';

interface Props {
  initialHouseholder?: HouseholderContact & HouseholderIdentity;
  householdId: string;
  householdName: string;
}

export const HouseholderForms = ({
  initialHouseholder,
  householdId,
  householdName,
}: Props) => {
  return (
    <Stack spacing={30}>
      <HouseholderIdentityForm
        initialHouseholder={initialHouseholder}
        householdId={householdId}
        householdName={householdName}
      />
      <HouseholderContactForm
        householdId={householdId}
        householdName={householdName}
        initialHouseholder={initialHouseholder}
      />
    </Stack>
  );
};
