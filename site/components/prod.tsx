import { IS_PROD } from '@brz';

interface ProdProps {
  children?: React.ReactNode;
}

const Prod = ({ children }: ProdProps) => {
  if (IS_PROD) {
    return children;
  }

  return null;
};

export default Prod;
