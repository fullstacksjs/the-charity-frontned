import type {
  ApiVisitDetailFragment,
  ApiVisitKeysFragment,
  ApiVisitListItemFragment,
  ApiVisitNameFragment,
} from '@camp/data-layer';
import type {
  VisitDetail,
  VisitKeys,
  VisitListItem,
  VisitName,
} from '@camp/domain';

import { toDate } from './scalar.mapper';

export const getVisitKeys = (data: ApiVisitKeysFragment): VisitKeys => {
  return {
    id: data.id,
    householdId: data.household_id,
  };
};

export const getVisitDetail = (data: ApiVisitDetailFragment): VisitDetail => {
  return {
    name: data.name,
    status: data.status,
    date: toDate(data.date)!,
    description: data.description ?? undefined,
    documents: data.visit_documents.map(d => ({
      storageId: d.document.id,
      url: d.document.url,
      id: d.document.id,
    })),
  };
};

export const getVisitListItem = (
  data: ApiVisitListItemFragment,
): VisitListItem => {
  return {
    date: toDate(data.date)!,
    description: data.description ?? undefined,
    documents: data.visit_documents.map(d => ({
      storageId: d.document.id,
      url: d.document.url,
      id: d.document.id,
    })),
  };
};

export const getVisitName = (data: ApiVisitNameFragment): VisitName => ({
  name: data.name,
});
