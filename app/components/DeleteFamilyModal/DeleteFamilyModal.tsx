import { showModal } from '@camp/design';
import { messages } from '@camp/messages';

import { deleteFamilyModalIds as Ids } from './DeleteFamilyModal.ids';

const t = messages.families.list.delete.modal;

interface Props {
  name: string;
  onDeleteFamily: VoidFunction;
}

export const openDeleteFamilyModal = ({ name, onDeleteFamily }: Props) =>
  showModal({
    id: Ids.modal,
    title: t.title,
    children: t.children(name),
    cancelLable: t.cancel,
    confirmLabel: t.confirm,
    size: 'sm',
    onConfirm: () => onDeleteFamily(),
  });
