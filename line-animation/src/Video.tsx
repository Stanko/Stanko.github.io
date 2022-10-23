import {Composition} from 'remotion';
import {LineAnimation} from './LineAnimation';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
  const duration = 5;
  const fps = 100;
  const width = 1200;
  const height = 800;

  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render src/index.tsx <id> out/video.mp4
        id="HelloWorld"
        component={LineAnimation}
        durationInFrames={duration * fps}
        fps={fps}
        width={width}
        height={height}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        defaultProps={{
          width,
          height,
        }}
      />
    </>
  );
};
