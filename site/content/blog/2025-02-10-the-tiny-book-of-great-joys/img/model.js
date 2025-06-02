const { draw, makeBox, makeCylinder } = replicad;

const nothing = 0.0001;


const main = () => {
  const holeRadius = 0.5;
  const thickness = 0.8;
  const pageSize = {
    w: 45,
    h: 55,
  };
  const pageOffset = 1;
  const spineWidth = 4;
  const sideSize = {
    w: pageSize.w + 2 * pageOffset,
    h: pageSize.h + 2 * pageOffset,
  };
  const holeYOffset = 10;

  const side = makeBox([sideSize.w, sideSize.h, thickness]);
  const side1 = side
    .clone()
    .translateX(spineWidth + 1)
    .translateY(-1);
  const side2 = side
    .clone()
    .translateX(spineWidth + sideSize.w + 2)
    .translateY(-1);

  const getSpine = (holeXSpacing = 2) => {
    let spine = makeBox([spineWidth, pageSize.h, thickness]);

    const hole = makeCylinder(holeRadius, thickness * 3)
      .translateZ(-1 * thickness)
      .translateX(spineWidth / 2);

    const addHoles = (holeYOffset) => {
      const hole1 = hole
        .clone()
        .translateX(holeXSpacing / 2)
        .translateY(holeYOffset);
      const hole2 = hole
        .clone()
        .translateX(holeXSpacing / -2)
        .translateY(holeYOffset);

      const hole3 = hole
        .clone()
        .translateX(holeXSpacing / 2)
        .translateY(pageSize.h - holeYOffset);
      const hole4 = hole
        .clone()
        .translateX(holeXSpacing / -2)
        .translateY(pageSize.h - holeYOffset);

      spine = spine.clone().cut(hole1).cut(hole2).cut(hole3).cut(hole4);
    };

    addHoles(holeYOffset);
    addHoles(holeYOffset * 2);

    return spine;
  };

  // ---------------- //

  const getPress = () => {
    const wall = 1.5;
    const doubleWall = wall * 2;
    const offset = 0.15;
    const doubleOffset = offset * 2;
    const wallWithOffset = wall - offset;

    let outer = makeBox([
      pageSize.w * 2 + doubleWall,
      pageSize.h + doubleWall,
      doubleWall,
    ]);
    const cut1 = makeBox([
      pageSize.w * 2 + doubleOffset,
      pageSize.h + doubleOffset,
      doubleWall,
    ])
      .translateZ(wall)
      .translateX(wallWithOffset)
      .translateY(wallWithOffset);

    const cut2 = makeBox([1.2, pageSize.h * 2, 10])
      .translateX(pageSize.w + wall - 0.6)
      .translateZ(wall + nothing);

    const handle = makeCylinder(2, 8)
      .fillet(1.5, (e) => {
        return e.inPlane("XY", 8);
      })
      .translateX(10 + wall)
      .translateY(pageSize.h / 2 + wall);

    let insert = makeBox([pageSize.w * 2, pageSize.h, wall])
      .translateX(wall)
      .translateY(wall)
      .fuse(handle);

    const hole = makeCylinder(holeRadius * 1.2, 30)
      .translateX(pageSize.w + wall)
      .translateY(wall)
      .translateZ(-10);

    const addHoles = (holeYOffset) => {
      const hole1 = hole.clone().translateY(holeYOffset);
      const hole2 = hole.clone().translateY(pageSize.h - holeYOffset);

      outer = outer.clone().cut(hole1).cut(hole2);
      insert = insert.clone().cut(hole1).cut(hole2);
    };

    addHoles(holeYOffset);
    addHoles(holeYOffset * 2);

    return [
      outer
        .cut(cut1)
        .cut(cut2)
        .translateY(pageSize.h * 1.2),

      insert.translateY(pageSize.h * 2.4),
    ];
  };

  const pressParts = getPress();

  return [
    side1.fuse(side2),
    getSpine(1.6),
    ...pressParts,
  ].map((shape) => {
    return {
      shape,
      color: "#38d",
    };
  });
};
