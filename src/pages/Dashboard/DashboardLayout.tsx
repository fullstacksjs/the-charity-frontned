import { SideBar } from '@camp/components';
import {
  AppShell as MantineAppShell,
  createStyles,
  MediaQuery,
  Stack,
} from '@mantine/core';
import { Outlet } from '@tanstack/react-location';

const useStyles = createStyles(theme => ({
  main: {
    paddingTop: 30,
    paddingBottom: 0,
    paddingInline: 40,
    backgroundColor: theme.colors.bgCanvas[6],
  },
}));

export const DashboardLayout = () => {
  const { classes } = useStyles();

  return (
    <MantineAppShell
      classNames={{ main: classes.main }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <SideBar />
        </MediaQuery>
      }
    >
      <Stack sx={{ gap: '40px' }}>
        <Outlet />
      </Stack>
    </MantineAppShell>
  );
};
