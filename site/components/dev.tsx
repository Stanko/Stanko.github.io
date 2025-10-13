import { IS_DEV } from '@brz/lib/constants';

interface DevProps {
  children?: React.ReactNode;
}

const Dev = ({ children }: DevProps) => {
  if (IS_DEV) {
    return children;
  }

  return null;
};

export default Dev;
