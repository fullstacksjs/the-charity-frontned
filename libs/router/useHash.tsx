import { useLocation, useNavigate } from '@tanstack/react-router';

export const useHash = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const setHash = (hash: string) => {
    return navigate({ hash });
  };

  const hash = location.hash;
  return [hash, setHash] as const;
};
