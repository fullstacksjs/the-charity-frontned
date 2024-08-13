import { debug, DebugScopes } from '@camp/debug';
import { useRouterState } from '@camp/router';
import { tid } from '@camp/test';
import { Group } from '@mantine/core';

import type { BreadcrumbItem } from '../Breadcrumbs';
import { Breadcrumbs } from '../Breadcrumbs';
import { dashboardHeaderId as ids } from './DashboardHeader.ids';

export interface HeaderProps {
  button: React.ReactNode;
}

export const useBreadcrumbsItems = (): BreadcrumbItem[] => {
  const matches = useRouterState().matches;
  debug.log(DebugScopes.Breadcrumbs, matches);

  return matches
    .map(match => ({
      name: match.context.getTitle(match.routeId),
      path: match.pathname,
    }))
    .filter(path => path.name);
};

export const DashboardHeader = ({ button }: HeaderProps) => {
  const items = useBreadcrumbsItems();

  return (
    <Group position="apart" {...tid(ids)}>
      <Breadcrumbs items={items} />
      {button}
    </Group>
  );
};
