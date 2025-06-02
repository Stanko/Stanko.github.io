import Code from '@brz/components/code';
import Codepen from '../components/codepen';
import Gallery, { type GalleryProps } from '../components/gallery';
import Grid from '../components/grid';
import Image, { type ImageProps } from '../components/image';
import Img, { type ImgProps } from '../components/img';
import Sidenote from '../components/sidenote';
import Source, { type SourceProps } from '../components/source';
import Spoiler from '../components/spoiler';
import Video, { type VideoProps } from '../components/video';

const createHeadingWithAnchor =
  (Tag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6') =>
  ({ id, children, ...props }: { id: string; children: React.ReactNode }) => {
    return (
      <Tag id={id} {...props}>
        {children}{' '}
        <a className="anchor-link" href={`#${id}`}>
          #
        </a>
      </Tag>
    );
  };

export const getMdxComponents = (pageDir: string, outputDir: string) => {
  // Helper function for components that need pageDir and outputDir
  const withDirs =
    <T,>(Component: any) =>
    (props: T) =>
      <Component {...props} pageDir={pageDir} outputDir={outputDir} />;

  return {
    Sidenote,
    Codepen,
    Grid,
    Spoiler,
    Code,
    h2: createHeadingWithAnchor('h2'),
    h3: createHeadingWithAnchor('h3'),
    h4: createHeadingWithAnchor('h4'),
    h5: createHeadingWithAnchor('h5'),
    h6: createHeadingWithAnchor('h6'),
    Gallery: withDirs<GalleryProps>(Gallery),
    Image: withDirs<ImageProps>(Image),
    img: withDirs<ImgProps>(Img),
    Img: withDirs<ImgProps>(Img),
    Video: withDirs<VideoProps>(Video),
    video: withDirs<VideoProps>(Video),
    Source: withDirs<SourceProps>(Source),
    // TODO audio
    a: (props: any) => {
      // TODO create a Link component which copies the href to the outputDir
      // if (props.href.startsWith('.')) {
      //   return <Link {...props} pageDir={pageDir} outputDir={outputDir}  />
      // }
      return <a {...props} />;
    },
  };
};

const components = getMdxComponents('', '');

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
