onmessage = function (e) {
  const { id, code } = e.data;

  try {
    const fn = new Function(`
      "use strict";
      return ${code}
    `);

    let data;

    try {
      data = fn();
    } catch (error) {
      postMessage({
        id,
        error: error.message,
      });
      return;
    }

    postMessage({
      id,
      data,
    });
  } catch (error) {
    postMessage({
      id,
      error: error.message,
    });
  }
};
