const Example = ({ className, playbackSpeed }) => {
  return (
    <div className="example">
      <div className={`animation ${className}`} />
      <div className="animation-monorail" />
      {playbackSpeed && (
        <label className="playback-speed text-sm">
          <span className="playback-speed-label">Playback speed:</span>
          <input
            className="playback-speed-input"
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            defaultValue="1"
          />
          <span className="playback-speed-value"></span>
        </label>
      )}
    </div>
  );
};

export default Example;
