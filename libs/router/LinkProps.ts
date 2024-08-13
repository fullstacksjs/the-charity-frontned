import type {
  LinkProps as BasLinkProps,
  RegisteredRouter,
  RoutePaths,
} from '@tanstack/react-router';

export type LinkProps = BasLinkProps<
  RegisteredRouter,
  RoutePaths<RegisteredRouter['routeTree']>,
  '',
  RoutePaths<RegisteredRouter['routeTree']>
>;
