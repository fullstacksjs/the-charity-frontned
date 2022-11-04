import { PlusIcon } from '@camp/design';
import { messages } from '@camp/messages';
import { Button } from '@mantine/core';

import { createTestAttr } from '../../../utils/createTestAttr';

export const createProjectButtonId = 'create-project';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CreateProjectButton = ({ onClick }: Props) => {
  return (
    <Button
      variant="outline"
      size="sm"
      leftIcon={<PlusIcon width="16" height="16" />}
      onClick={onClick}
      {...createTestAttr(createProjectButtonId)}
    >
      {messages.projects.create}
    </Button>
  );
};
