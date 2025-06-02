import { copyAssetToDist } from '../utils/copy-asset-to-dist';

export type SourceProps = React.HTMLAttributes<HTMLSourceElement> & {
  outputDir: string;
  pageDir: string;
  src: string;
};

const Source = async ({ src, pageDir, outputDir, ...props }: SourceProps) => {
  const fileName = await copyAssetToDist(src, pageDir, outputDir);

  return <source {...props} src={`./${fileName}#t=0.001`} />;
};

export default Source;
