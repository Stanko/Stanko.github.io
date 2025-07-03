const Example = ({ className }) => {
  return (
    <div className="example">
      <div className="glitch">
        <div
          className="strip"
          style={{ backgroundPosition: '0 -0em', height: '30em' }}
        />
        <div
          className={`strip animation ${className}`}
          style={{ backgroundPosition: '0 -30em', height: '8em' }}
        />
        <div
          className="strip"
          style={{ backgroundPosition: '0 -38em', height: '38em' }}
        />
      </div>
      <div className="animation-monorail" />
    </div>
  );
};

export default Example;
