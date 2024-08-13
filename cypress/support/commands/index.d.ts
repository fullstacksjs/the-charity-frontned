declare namespace Cypress {
  interface Chainable {
    login: (args: { username: string; password: string }) => void;
    mount: typeof import('cypress/react18').mount;
    findNotification: (type: 'failure' | 'success') => Chainable<JQuery>;
    visit(
      url: import('@tanstack/react-router').LinkProps['to'],
      options?: Partial<VisitOptions> & { params?: Record<string, string> },
    ): Chainable<AUTWindow>;
    waitForReq(): void;
  }
}
