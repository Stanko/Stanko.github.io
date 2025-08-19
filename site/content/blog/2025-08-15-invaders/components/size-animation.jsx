const SizeAnimation = ({ ...props }) => {
  return (
    <div className="size-animation">
      <div className="size-animation-inner">
        <svg
          viewBox="0 0 220 220"
          xmlns="http://www.w3.org/2000/svg"
          style={{ '--invader-width': 11 }}
        >
          {/* <!-- https://muffinman.io/invaders/#/size:5/main-seed:lay-to-small/gap:0/split:2.25/line-thickness:0.86,0.27,0.51,0.23/color:furniture-does-roof/eyes:pie-plastic-basis/animate:false/flip:false/show-grid:false/debug:false -->*/}
          <g className="invader-pixels-wrapper">
            <g className="invader-pixels" fill="var(--invader-color)">
              <rect
                x="20.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="40.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="40.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="40.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="60.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="60.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="60.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="60.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="40.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="80.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="80.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="80.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="40.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="100.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="120.00"
                y="40.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="120.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="40.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="140.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="140.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="160.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
            </g>
          </g>
        </svg>

        <svg
          viewBox="0 0 260 260"
          xmlns="http://www.w3.org/2000/svg"
          style={{ '--invader-width': 13 }}
        >
          {/* <!-- https://muffinman.io/invaders/#/size:6/main-seed:lay-to-small/gap:0/split:2.25/line-thickness:0.86,0.27,0.51,0.23/color:furniture-does-roof/eyes:pie-plastic-basis/animate:false/flip:false/show-grid:false/debug:false -->*/}
          <g className="invader-pixels-wrapper">
            <g className="invader-pixels" fill="var(--invader-color)">
              <rect
                x="20.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="60.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="60.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="40.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="80.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="80.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="80.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="80.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="120.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="120.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="140.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="160.00"
                y="40.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="160.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="160.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="180.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
            </g>
          </g>
        </svg>

        <svg
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
          style={{ '--invader-width': 15 }}
        >
          {/* <!-- https://muffinman.io/invaders/#/size:7/main-seed:lay-to-small/gap:0/split:2.25/line-thickness:0.86,0.27,0.51,0.23/color:furniture-does-roof/eyes:pie-plastic-basis/animate:false/flip:false/show-grid:false/debug:false -->*/}
          <g className="invader-pixels-wrapper">
            <g className="invader-pixels" fill="var(--invader-color)">
              <rect
                x="20.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="20.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="20.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="60.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="40.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="80.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="80.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="100.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="100.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="100.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="120.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="140.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="140.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="160.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="180.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="180.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="40.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="220.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
            </g>
          </g>
        </svg>

        <svg
          viewBox="0 0 340 340"
          xmlns="http://www.w3.org/2000/svg"
          style={{ '--invader-width': 17 }}
        >
          {/* <!-- https://muffinman.io/invaders/#/size:8/main-seed:lay-to-small/gap:0/split:2.25/line-thickness:0.86,0.27,0.51,0.23/color:furniture-does-roof/eyes:pie-plastic-basis/animate:false/flip:false/show-grid:false/debug:false -->*/}
          <g className="invader-pixels-wrapper">
            <g className="invader-pixels" fill="var(--invader-color)">
              <rect
                x="20.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="20.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="20.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="60.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="120.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="120.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="120.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="140.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="160.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="160.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="180.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="200.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="200.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="240.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
            </g>
          </g>
        </svg>

        <svg
          viewBox="0 0 380 380"
          xmlns="http://www.w3.org/2000/svg"
          style={{ '--invader-width': 19 }}
        >
          {/* <!-- https://muffinman.io/invaders/#/size:9/main-seed:lay-to-small/gap:0/split:2.25/line-thickness:0.86,0.27,0.51,0.23/color:furniture-does-roof/eyes:pie-plastic-basis/animate:false/flip:false/show-grid:false/debug:false -->*/}
          <g className="invader-pixels-wrapper">
            <g className="invader-pixels" fill="var(--invader-color)">
              <rect
                x="40.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="80.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="140.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="140.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="140.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="160.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="180.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="180.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="200.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="220.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="220.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="260.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
            </g>
          </g>
        </svg>

        <svg
          viewBox="0 0 420 420"
          xmlns="http://www.w3.org/2000/svg"
          style={{ '--invader-width': 21 }}
        >
          {/* <!-- https://muffinman.io/invaders/#/size:10/main-seed:lay-to-small/gap:0/split:2.25/line-thickness:0.86,0.27,0.51,0.23/color:furniture-does-roof/eyes:pie-plastic-basis/animate:false/flip:false/show-grid:false/debug:false -->*/}
          <g className="invader-pixels-wrapper">
            <g className="invader-pixels" fill="var(--invader-color)">
              <rect
                x="40.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="80.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="160.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="160.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="160.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="180.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="200.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="200.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="220.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="240.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="240.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="280.00"
                y="60.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
            </g>
          </g>
        </svg>

        <svg
          viewBox="0 0 460 460"
          xmlns="http://www.w3.org/2000/svg"
          style={{ '--invader-width': 23 }}
        >
          {/* <!-- https://muffinman.io/invaders/#/size:11/main-seed:lay-to-small/gap:0/split:2.25/line-thickness:0.86,0.27,0.51,0.23/color:furniture-does-roof/eyes:pie-plastic-basis/animate:false/flip:false/show-grid:false/debug:false -->*/}
          <g className="invader-pixels-wrapper">
            <g className="invader-pixels" fill="var(--invader-color)">
              <rect
                x="40.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="440.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="180.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="180.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="180.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="200.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="220.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="220.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="240.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="260.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="260.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="300.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="380.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="380.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="380.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="380.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="380.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="380.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="380.00"
                y="440.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="400.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="400.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="400.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
            </g>
          </g>
        </svg>

        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          style={{ '--invader-width': 25 }}
        >
          {/* <!-- https://muffinman.io/invaders/#/size:12/main-seed:lay-to-small/gap:0/split:2.25/line-thickness:0.86,0.27,0.51,0.23/color:furniture-does-roof/eyes:pie-plastic-basis/animate:false/flip:false/show-grid:false/debug:false -->*/}
          <g className="invader-pixels-wrapper">
            <g className="invader-pixels" fill="var(--invader-color)">
              <rect
                x="40.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="40.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="440.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="460.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="120.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="200.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="200.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="200.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="220.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="240.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="240.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="260.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="280.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="280.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="320.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="80.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="400.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="400.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="400.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="400.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="420.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="420.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="420.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="420.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="420.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="420.00"
                y="440.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="420.00"
                y="460.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="440.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="440.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="440.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
            </g>
          </g>
        </svg>

        <svg
          viewBox="0 0 540 540"
          xmlns="http://www.w3.org/2000/svg"
          style={{ '--invader-width': 27 }}
        >
          {/* <!-- https://muffinman.io/invaders/#/size:13/main-seed:lay-to-small/gap:0/split:2.25/line-thickness:0.86,0.27,0.51,0.23/color:furniture-does-roof/eyes:pie-plastic-basis/animate:false/flip:false/show-grid:false/debug:false -->*/}
          <g className="invader-pixels-wrapper">
            <g className="invader-pixels" fill="var(--invader-color)">
              <rect
                x="60.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="480.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="500.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="440.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="140.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="220.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="220.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="220.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="240.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="260.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="260.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="280.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="300.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="300.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="340.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="380.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="400.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="420.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="420.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="420.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="420.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="420.00"
                y="440.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="440.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="440.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="440.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="440.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="440.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="440.00"
                y="480.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="440.00"
                y="500.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="460.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="460.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="460.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
            </g>
          </g>
        </svg>

        <svg
          viewBox="0 0 580 580"
          xmlns="http://www.w3.org/2000/svg"
          style={{ '--invader-width': 29 }}
        >
          {/* <!-- https://muffinman.io/invaders/#/size:14/main-seed:lay-to-small/gap:0/split:2.25/line-thickness:0.86,0.27,0.51,0.23/color:furniture-does-roof/eyes:pie-plastic-basis/animate:false/flip:false/show-grid:false/debug:false -->*/}
          <g className="invader-pixels-wrapper">
            <g className="invader-pixels" fill="var(--invader-color)">
              <rect
                x="60.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="500.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="520.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="440.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="460.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="160.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="240.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="240.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="240.00"
                y="460.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="260.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="280.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="280.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="300.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="320.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="320.00"
                y="460.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="360.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="380.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="380.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="400.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="400.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="400.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="400.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="400.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="420.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="420.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="420.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="440.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="460.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="460.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="460.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="460.00"
                y="440.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="460.00"
                y="460.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="480.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="480.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="480.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="480.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="480.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="480.00"
                y="500.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="480.00"
                y="520.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="500.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="500.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="500.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
            </g>
          </g>
        </svg>

        <svg
          viewBox="0 0 620 620"
          xmlns="http://www.w3.org/2000/svg"
          style={{ '--invader-width': 31 }}
        >
          {/* <!-- https://muffinman.io/invaders/#/size:15/main-seed:lay-to-small/gap:0/split:2.25/line-thickness:0.86,0.27,0.51,0.23/color:furniture-does-roof/eyes:pie-plastic-basis/animate:false/flip:false/show-grid:false/debug:false -->*/}
          <g className="invader-pixels-wrapper">
            <g className="invader-pixels" fill="var(--invader-color)">
              <rect
                x="60.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="60.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="440.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="520.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="80.00"
                y="540.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="100.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="440.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="460.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="100.00"
                y="480.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="120.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="140.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="160.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="180.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="180.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="200.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="200.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="220.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="220.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="240.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="240.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="260.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="260.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="260.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="260.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="260.00"
                y="460.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="280.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="280.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="280.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="300.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="300.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="300.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="300.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="320.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="320.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="320.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="200.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="340.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="340.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="340.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="340.00"
                y="460.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="180.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="360.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="360.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--z"
              />
              <rect
                x="380.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="380.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="380.00"
                y="160.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="380.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="380.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="400.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="400.00"
                y="140.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="400.00"
                y="220.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="400.00"
                y="240.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="400.00"
                y="260.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="400.00"
                y="280.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="400.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="400.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="400.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="400.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="420.00"
                y="100.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="420.00"
                y="120.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="420.00"
                y="300.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="420.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="420.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="440.00"
                y="320.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="440.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="460.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="480.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="500.00"
                y="340.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--x"
              />
              <rect
                x="500.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="500.00"
                y="440.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="500.00"
                y="460.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="500.00"
                y="480.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="520.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="520.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="520.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="520.00"
                y="420.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="520.00"
                y="440.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="520.00"
                y="520.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="520.00"
                y="540.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="540.00"
                y="360.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="540.00"
                y="380.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
              <rect
                x="540.00"
                y="400.00"
                width="20.00"
                height="20.00"
                className="invader-pixel invader-pixel--l"
              />
            </g>
          </g>
        </svg>
      </div>
      <button className="animation-pause">
        <span>Pause</span>
        <span>Resume</span>
      </button>
    </div>
  );
};

export default SizeAnimation;
