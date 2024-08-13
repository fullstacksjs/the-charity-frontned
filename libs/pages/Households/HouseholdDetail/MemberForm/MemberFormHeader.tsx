import { messages } from '@camp/messages';
import { InformationBadge } from '@camp/shared-components';
import { Group, Title } from '@mantine/core';

const t = messages.member;

interface Props {
  name: string;
  surname: string | undefined;
  isCompleted?: boolean;
}

export const MemberFormHeader = ({ isCompleted, name, surname }: Props) => {
  return (
    <Group spacing={10}>
      <Title order={4} color="fg" weight="bold">
        {name ? `${name} ${surname ?? ''}` : t.createForm.title}
      </Title>
      <InformationBadge status={isCompleted ? 'completed' : 'draft'} />
    </Group>
  );
};
