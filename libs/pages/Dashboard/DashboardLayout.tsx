import {
  AppShell as MantineAppShell,
  createStyles,
  MediaQuery,
  Stack,
} from '@mantine/core';

import { DashboardSidebar } from './DashboardSidebar';

const useStyles = createStyles(theme => ({
  body: {
    height: '100vh',
  },
  main: {
    paddingTop: 30,
    paddingBottom: 0,
    paddingInline: 40,
    backgroundColor: theme.colors.bg[6],
    overflow: 'auto',
  },
}));

export const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  const { classes } = useStyles();

  return (
    <MantineAppShell
      classNames={{ body: classes.body, main: classes.main }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <DashboardSidebar />
        </MediaQuery>
      }
    >
      <Stack sx={{ gap: '40px', minHeight: '100%' }}>{children}</Stack>
    </MantineAppShell>
  );
};
