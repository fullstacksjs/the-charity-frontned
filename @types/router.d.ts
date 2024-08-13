declare module '@tanstack/react-router' {
  interface Register {
    router: typeof import('../app/main').router;
  }
  type AllRouteIds = import('@tanstack/react-router').RouteIds<
    typeof import('../app/routeTree.gen').routeTree
  >;
}

export {};
