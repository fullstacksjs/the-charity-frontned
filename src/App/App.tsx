import { useQuery } from '@apollo/client';
import { Title } from '@mantine/core';
import { ReactLocation, Router } from '@tanstack/react-location';

import { GetAdminsIdQuery } from '../operations/queries';

const location = new ReactLocation();

export const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { data, loading, error } = useQuery(GetAdminsIdQuery);
  return (
    <Router routes={[{ path: '/' }]} location={location}>
      <Title order={1}>The Charity App</Title>
      <br />
      <Title order={3}>
        {loading
          ? 'loading data'
          : error != null
          ? 'error occurred while loading admins ids'
          : data.admin.map(({ id }: { id: number }) => (
              <Title order={4} key={id}>
                admin with id: {id}
              </Title>
            ))}
      </Title>
    </Router>
  );
};
