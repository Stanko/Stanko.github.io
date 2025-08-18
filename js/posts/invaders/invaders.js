var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/two-product/two-product.js
var require_two_product = __commonJS((exports, module) => {
  module.exports = twoProduct;
  var SPLITTER = +(Math.pow(2, 27) + 1);
  function twoProduct(a, b, result) {
    var x = a * b;
    var c = SPLITTER * a;
    var abig = c - a;
    var ahi = c - abig;
    var alo = a - ahi;
    var d = SPLITTER * b;
    var bbig = d - b;
    var bhi = d - bbig;
    var blo = b - bhi;
    var err1 = x - ahi * bhi;
    var err2 = err1 - alo * bhi;
    var err3 = err2 - ahi * blo;
    var y = alo * blo - err3;
    if (result) {
      result[0] = y;
      result[1] = x;
      return result;
    }
    return [y, x];
  }
});

// node_modules/robust-sum/robust-sum.js
var require_robust_sum = __commonJS((exports, module) => {
  module.exports = linearExpansionSum;
  function scalarScalar(a, b) {
    var x = a + b;
    var bv = x - a;
    var av = x - bv;
    var br = b - bv;
    var ar = a - av;
    var y = ar + br;
    if (y) {
      return [y, x];
    }
    return [x];
  }
  function linearExpansionSum(e, f) {
    var ne = e.length | 0;
    var nf = f.length | 0;
    if (ne === 1 && nf === 1) {
      return scalarScalar(e[0], f[0]);
    }
    var n = ne + nf;
    var g = new Array(n);
    var count = 0;
    var eptr = 0;
    var fptr = 0;
    var abs = Math.abs;
    var ei = e[eptr];
    var ea = abs(ei);
    var fi = f[fptr];
    var fa = abs(fi);
    var a, b;
    if (ea < fa) {
      b = ei;
      eptr += 1;
      if (eptr < ne) {
        ei = e[eptr];
        ea = abs(ei);
      }
    } else {
      b = fi;
      fptr += 1;
      if (fptr < nf) {
        fi = f[fptr];
        fa = abs(fi);
      }
    }
    if (eptr < ne && ea < fa || fptr >= nf) {
      a = ei;
      eptr += 1;
      if (eptr < ne) {
        ei = e[eptr];
        ea = abs(ei);
      }
    } else {
      a = fi;
      fptr += 1;
      if (fptr < nf) {
        fi = f[fptr];
        fa = abs(fi);
      }
    }
    var x = a + b;
    var bv = x - a;
    var y = b - bv;
    var q0 = y;
    var q1 = x;
    var _x, _bv, _av, _br, _ar;
    while (eptr < ne && fptr < nf) {
      if (ea < fa) {
        a = ei;
        eptr += 1;
        if (eptr < ne) {
          ei = e[eptr];
          ea = abs(ei);
        }
      } else {
        a = fi;
        fptr += 1;
        if (fptr < nf) {
          fi = f[fptr];
          fa = abs(fi);
        }
      }
      b = q0;
      x = a + b;
      bv = x - a;
      y = b - bv;
      if (y) {
        g[count++] = y;
      }
      _x = q1 + x;
      _bv = _x - q1;
      _av = _x - _bv;
      _br = x - _bv;
      _ar = q1 - _av;
      q0 = _ar + _br;
      q1 = _x;
    }
    while (eptr < ne) {
      a = ei;
      b = q0;
      x = a + b;
      bv = x - a;
      y = b - bv;
      if (y) {
        g[count++] = y;
      }
      _x = q1 + x;
      _bv = _x - q1;
      _av = _x - _bv;
      _br = x - _bv;
      _ar = q1 - _av;
      q0 = _ar + _br;
      q1 = _x;
      eptr += 1;
      if (eptr < ne) {
        ei = e[eptr];
      }
    }
    while (fptr < nf) {
      a = fi;
      b = q0;
      x = a + b;
      bv = x - a;
      y = b - bv;
      if (y) {
        g[count++] = y;
      }
      _x = q1 + x;
      _bv = _x - q1;
      _av = _x - _bv;
      _br = x - _bv;
      _ar = q1 - _av;
      q0 = _ar + _br;
      q1 = _x;
      fptr += 1;
      if (fptr < nf) {
        fi = f[fptr];
      }
    }
    if (q0) {
      g[count++] = q0;
    }
    if (q1) {
      g[count++] = q1;
    }
    if (!count) {
      g[count++] = 0;
    }
    g.length = count;
    return g;
  }
});

// node_modules/two-sum/two-sum.js
var require_two_sum = __commonJS((exports, module) => {
  module.exports = fastTwoSum;
  function fastTwoSum(a, b, result) {
    var x = a + b;
    var bv = x - a;
    var av = x - bv;
    var br = b - bv;
    var ar = a - av;
    if (result) {
      result[0] = ar + br;
      result[1] = x;
      return result;
    }
    return [ar + br, x];
  }
});

// node_modules/robust-scale/robust-scale.js
var require_robust_scale = __commonJS((exports, module) => {
  var twoProduct = require_two_product();
  var twoSum = require_two_sum();
  module.exports = scaleLinearExpansion;
  function scaleLinearExpansion(e, scale) {
    var n = e.length;
    if (n === 1) {
      var ts = twoProduct(e[0], scale);
      if (ts[0]) {
        return ts;
      }
      return [ts[1]];
    }
    var g = new Array(2 * n);
    var q = [0.1, 0.1];
    var t = [0.1, 0.1];
    var count = 0;
    twoProduct(e[0], scale, q);
    if (q[0]) {
      g[count++] = q[0];
    }
    for (var i = 1;i < n; ++i) {
      twoProduct(e[i], scale, t);
      var pq = q[1];
      twoSum(pq, t[0], q);
      if (q[0]) {
        g[count++] = q[0];
      }
      var a = t[1];
      var b = q[1];
      var x = a + b;
      var bv = x - a;
      var y = b - bv;
      q[1] = x;
      if (y) {
        g[count++] = y;
      }
    }
    if (q[1]) {
      g[count++] = q[1];
    }
    if (count === 0) {
      g[count++] = 0;
    }
    g.length = count;
    return g;
  }
});

// node_modules/robust-subtract/robust-diff.js
var require_robust_diff = __commonJS((exports, module) => {
  module.exports = robustSubtract;
  function scalarScalar(a, b) {
    var x = a + b;
    var bv = x - a;
    var av = x - bv;
    var br = b - bv;
    var ar = a - av;
    var y = ar + br;
    if (y) {
      return [y, x];
    }
    return [x];
  }
  function robustSubtract(e, f) {
    var ne = e.length | 0;
    var nf = f.length | 0;
    if (ne === 1 && nf === 1) {
      return scalarScalar(e[0], -f[0]);
    }
    var n = ne + nf;
    var g = new Array(n);
    var count = 0;
    var eptr = 0;
    var fptr = 0;
    var abs = Math.abs;
    var ei = e[eptr];
    var ea = abs(ei);
    var fi = -f[fptr];
    var fa = abs(fi);
    var a, b;
    if (ea < fa) {
      b = ei;
      eptr += 1;
      if (eptr < ne) {
        ei = e[eptr];
        ea = abs(ei);
      }
    } else {
      b = fi;
      fptr += 1;
      if (fptr < nf) {
        fi = -f[fptr];
        fa = abs(fi);
      }
    }
    if (eptr < ne && ea < fa || fptr >= nf) {
      a = ei;
      eptr += 1;
      if (eptr < ne) {
        ei = e[eptr];
        ea = abs(ei);
      }
    } else {
      a = fi;
      fptr += 1;
      if (fptr < nf) {
        fi = -f[fptr];
        fa = abs(fi);
      }
    }
    var x = a + b;
    var bv = x - a;
    var y = b - bv;
    var q0 = y;
    var q1 = x;
    var _x, _bv, _av, _br, _ar;
    while (eptr < ne && fptr < nf) {
      if (ea < fa) {
        a = ei;
        eptr += 1;
        if (eptr < ne) {
          ei = e[eptr];
          ea = abs(ei);
        }
      } else {
        a = fi;
        fptr += 1;
        if (fptr < nf) {
          fi = -f[fptr];
          fa = abs(fi);
        }
      }
      b = q0;
      x = a + b;
      bv = x - a;
      y = b - bv;
      if (y) {
        g[count++] = y;
      }
      _x = q1 + x;
      _bv = _x - q1;
      _av = _x - _bv;
      _br = x - _bv;
      _ar = q1 - _av;
      q0 = _ar + _br;
      q1 = _x;
    }
    while (eptr < ne) {
      a = ei;
      b = q0;
      x = a + b;
      bv = x - a;
      y = b - bv;
      if (y) {
        g[count++] = y;
      }
      _x = q1 + x;
      _bv = _x - q1;
      _av = _x - _bv;
      _br = x - _bv;
      _ar = q1 - _av;
      q0 = _ar + _br;
      q1 = _x;
      eptr += 1;
      if (eptr < ne) {
        ei = e[eptr];
      }
    }
    while (fptr < nf) {
      a = fi;
      b = q0;
      x = a + b;
      bv = x - a;
      y = b - bv;
      if (y) {
        g[count++] = y;
      }
      _x = q1 + x;
      _bv = _x - q1;
      _av = _x - _bv;
      _br = x - _bv;
      _ar = q1 - _av;
      q0 = _ar + _br;
      q1 = _x;
      fptr += 1;
      if (fptr < nf) {
        fi = -f[fptr];
      }
    }
    if (q0) {
      g[count++] = q0;
    }
    if (q1) {
      g[count++] = q1;
    }
    if (!count) {
      g[count++] = 0;
    }
    g.length = count;
    return g;
  }
});

// node_modules/robust-orientation/orientation.js
var require_orientation = __commonJS((exports, module) => {
  var twoProduct = require_two_product();
  var robustSum = require_robust_sum();
  var robustScale = require_robust_scale();
  var robustSubtract = require_robust_diff();
  var NUM_EXPAND = 5;
  var EPSILON = 0.00000000000000011102230246251565;
  var ERRBOUND3 = (3 + 16 * EPSILON) * EPSILON;
  var ERRBOUND4 = (7 + 56 * EPSILON) * EPSILON;
  function orientation_3(sum, prod, scale, sub) {
    return function orientation3Exact(m0, m1, m2) {
      var p = sum(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])));
      var n = sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0]));
      var d = sub(p, n);
      return d[d.length - 1];
    };
  }
  function orientation_4(sum, prod, scale, sub) {
    return function orientation4Exact(m0, m1, m2, m3) {
      var p = sum(sum(scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m1[2]), sum(scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), -m2[2]), scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m3[2]))), sum(scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m3[2]))));
      var n = sum(sum(scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m0[2]), sum(scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), -m2[2]), scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), m3[2]))), sum(scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m2[2]))));
      var d = sub(p, n);
      return d[d.length - 1];
    };
  }
  function orientation_5(sum, prod, scale, sub) {
    return function orientation5Exact(m0, m1, m2, m3, m4) {
      var p = sum(sum(sum(scale(sum(scale(sum(prod(m3[1], m4[0]), prod(-m4[1], m3[0])), m2[2]), sum(scale(sum(prod(m2[1], m4[0]), prod(-m4[1], m2[0])), -m3[2]), scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m4[2]))), m1[3]), sum(scale(sum(scale(sum(prod(m3[1], m4[0]), prod(-m4[1], m3[0])), m1[2]), sum(scale(sum(prod(m1[1], m4[0]), prod(-m4[1], m1[0])), -m3[2]), scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), m4[2]))), -m2[3]), scale(sum(scale(sum(prod(m2[1], m4[0]), prod(-m4[1], m2[0])), m1[2]), sum(scale(sum(prod(m1[1], m4[0]), prod(-m4[1], m1[0])), -m2[2]), scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m4[2]))), m3[3]))), sum(scale(sum(scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m1[2]), sum(scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), -m2[2]), scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m3[2]))), -m4[3]), sum(scale(sum(scale(sum(prod(m3[1], m4[0]), prod(-m4[1], m3[0])), m1[2]), sum(scale(sum(prod(m1[1], m4[0]), prod(-m4[1], m1[0])), -m3[2]), scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), m4[2]))), m0[3]), scale(sum(scale(sum(prod(m3[1], m4[0]), prod(-m4[1], m3[0])), m0[2]), sum(scale(sum(prod(m0[1], m4[0]), prod(-m4[1], m0[0])), -m3[2]), scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), m4[2]))), -m1[3])))), sum(sum(scale(sum(scale(sum(prod(m1[1], m4[0]), prod(-m4[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m4[0]), prod(-m4[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m4[2]))), m3[3]), sum(scale(sum(scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m3[2]))), -m4[3]), scale(sum(scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m1[2]), sum(scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), -m2[2]), scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m3[2]))), m0[3]))), sum(scale(sum(scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m0[2]), sum(scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), -m2[2]), scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), m3[2]))), -m1[3]), sum(scale(sum(scale(sum(prod(m1[1], m3[0]), prod(-m3[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m3[2]))), m2[3]), scale(sum(scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m2[2]))), -m3[3])))));
      var n = sum(sum(sum(scale(sum(scale(sum(prod(m3[1], m4[0]), prod(-m4[1], m3[0])), m2[2]), sum(scale(sum(prod(m2[1], m4[0]), prod(-m4[1], m2[0])), -m3[2]), scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m4[2]))), m0[3]), scale(sum(scale(sum(prod(m3[1], m4[0]), prod(-m4[1], m3[0])), m0[2]), sum(scale(sum(prod(m0[1], m4[0]), prod(-m4[1], m0[0])), -m3[2]), scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), m4[2]))), -m2[3])), sum(scale(sum(scale(sum(prod(m2[1], m4[0]), prod(-m4[1], m2[0])), m0[2]), sum(scale(sum(prod(m0[1], m4[0]), prod(-m4[1], m0[0])), -m2[2]), scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), m4[2]))), m3[3]), scale(sum(scale(sum(prod(m2[1], m3[0]), prod(-m3[1], m2[0])), m0[2]), sum(scale(sum(prod(m0[1], m3[0]), prod(-m3[1], m0[0])), -m2[2]), scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), m3[2]))), -m4[3]))), sum(sum(scale(sum(scale(sum(prod(m2[1], m4[0]), prod(-m4[1], m2[0])), m1[2]), sum(scale(sum(prod(m1[1], m4[0]), prod(-m4[1], m1[0])), -m2[2]), scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m4[2]))), m0[3]), scale(sum(scale(sum(prod(m2[1], m4[0]), prod(-m4[1], m2[0])), m0[2]), sum(scale(sum(prod(m0[1], m4[0]), prod(-m4[1], m0[0])), -m2[2]), scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), m4[2]))), -m1[3])), sum(scale(sum(scale(sum(prod(m1[1], m4[0]), prod(-m4[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m4[0]), prod(-m4[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m4[2]))), m2[3]), scale(sum(scale(sum(prod(m1[1], m2[0]), prod(-m2[1], m1[0])), m0[2]), sum(scale(sum(prod(m0[1], m2[0]), prod(-m2[1], m0[0])), -m1[2]), scale(sum(prod(m0[1], m1[0]), prod(-m1[1], m0[0])), m2[2]))), -m4[3]))));
      var d = sub(p, n);
      return d[d.length - 1];
    };
  }
  function orientation(n) {
    var fn = n === 3 ? orientation_3 : n === 4 ? orientation_4 : orientation_5;
    return fn(robustSum, twoProduct, robustScale, robustSubtract);
  }
  var orientation3Exact = orientation(3);
  var orientation4Exact = orientation(4);
  var CACHED = [
    function orientation0() {
      return 0;
    },
    function orientation1() {
      return 0;
    },
    function orientation2(a, b) {
      return b[0] - a[0];
    },
    function orientation3(a, b, c) {
      var l = (a[1] - c[1]) * (b[0] - c[0]);
      var r = (a[0] - c[0]) * (b[1] - c[1]);
      var det = l - r;
      var s;
      if (l > 0) {
        if (r <= 0) {
          return det;
        } else {
          s = l + r;
        }
      } else if (l < 0) {
        if (r >= 0) {
          return det;
        } else {
          s = -(l + r);
        }
      } else {
        return det;
      }
      var tol = ERRBOUND3 * s;
      if (det >= tol || det <= -tol) {
        return det;
      }
      return orientation3Exact(a, b, c);
    },
    function orientation4(a, b, c, d) {
      var adx = a[0] - d[0];
      var bdx = b[0] - d[0];
      var cdx = c[0] - d[0];
      var ady = a[1] - d[1];
      var bdy = b[1] - d[1];
      var cdy = c[1] - d[1];
      var adz = a[2] - d[2];
      var bdz = b[2] - d[2];
      var cdz = c[2] - d[2];
      var bdxcdy = bdx * cdy;
      var cdxbdy = cdx * bdy;
      var cdxady = cdx * ady;
      var adxcdy = adx * cdy;
      var adxbdy = adx * bdy;
      var bdxady = bdx * ady;
      var det = adz * (bdxcdy - cdxbdy) + bdz * (cdxady - adxcdy) + cdz * (adxbdy - bdxady);
      var permanent = (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * Math.abs(adz) + (Math.abs(cdxady) + Math.abs(adxcdy)) * Math.abs(bdz) + (Math.abs(adxbdy) + Math.abs(bdxady)) * Math.abs(cdz);
      var tol = ERRBOUND4 * permanent;
      if (det > tol || -det > tol) {
        return det;
      }
      return orientation4Exact(a, b, c, d);
    }
  ];
  function slowOrient(args) {
    var proc2 = CACHED[args.length];
    if (!proc2) {
      proc2 = CACHED[args.length] = orientation(args.length);
    }
    return proc2.apply(undefined, args);
  }
  function proc(slow, o0, o1, o2, o3, o4, o5) {
    return function getOrientation(a0, a1, a2, a3, a4) {
      switch (arguments.length) {
        case 0:
        case 1:
          return 0;
        case 2:
          return o2(a0, a1);
        case 3:
          return o3(a0, a1, a2);
        case 4:
          return o4(a0, a1, a2, a3);
        case 5:
          return o5(a0, a1, a2, a3, a4);
      }
      var s = new Array(arguments.length);
      for (var i = 0;i < arguments.length; ++i) {
        s[i] = arguments[i];
      }
      return slow(s);
    };
  }
  function generateOrientationProc() {
    while (CACHED.length <= NUM_EXPAND) {
      CACHED.push(orientation(CACHED.length));
    }
    module.exports = proc.apply(undefined, [slowOrient].concat(CACHED));
    for (var i = 0;i <= NUM_EXPAND; ++i) {
      module.exports[i] = CACHED[i];
    }
  }
  generateOrientationProc();
});

// node_modules/robust-point-in-polygon/robust-pnp.js
var require_robust_pnp = __commonJS((exports, module) => {
  module.exports = robustPointInPolygon;
  var orient = require_orientation();
  function robustPointInPolygon(vs, point) {
    var x = point[0];
    var y = point[1];
    var n = vs.length;
    var inside = 1;
    var lim = n;
    for (var i = 0, j = n - 1;i < lim; j = i++) {
      var a = vs[i];
      var b = vs[j];
      var yi = a[1];
      var yj = b[1];
      if (yj < yi) {
        if (yj < y && y < yi) {
          var s = orient(a, b, point);
          if (s === 0) {
            return 0;
          } else {
            inside ^= 0 < s | 0;
          }
        } else if (y === yi) {
          var c = vs[(i + 1) % n];
          var yk = c[1];
          if (yi < yk) {
            var s = orient(a, b, point);
            if (s === 0) {
              return 0;
            } else {
              inside ^= 0 < s | 0;
            }
          }
        }
      } else if (yi < yj) {
        if (yi < y && y < yj) {
          var s = orient(a, b, point);
          if (s === 0) {
            return 0;
          } else {
            inside ^= s < 0 | 0;
          }
        } else if (y === yi) {
          var c = vs[(i + 1) % n];
          var yk = c[1];
          if (yk < yi) {
            var s = orient(a, b, point);
            if (s === 0) {
              return 0;
            } else {
              inside ^= s < 0 | 0;
            }
          }
        }
      } else if (y === yi) {
        var x0 = Math.min(a[0], b[0]);
        var x1 = Math.max(a[0], b[0]);
        if (i === 0) {
          while (j > 0) {
            var k = (j + n - 1) % n;
            var p = vs[k];
            if (p[1] !== y) {
              break;
            }
            var px = p[0];
            x0 = Math.min(x0, px);
            x1 = Math.max(x1, px);
            j = k;
          }
          if (j === 0) {
            if (x0 <= x && x <= x1) {
              return 0;
            }
            return 1;
          }
          lim = j + 1;
        }
        var y0 = vs[(j + n - 1) % n][1];
        while (i + 1 < lim) {
          var p = vs[i + 1];
          if (p[1] !== y) {
            break;
          }
          var px = p[0];
          x0 = Math.min(x0, px);
          x1 = Math.max(x1, px);
          i += 1;
        }
        if (x0 <= x && x <= x1) {
          return 0;
        }
        var y1 = vs[(i + 1) % n][1];
        if (x < x0 && y0 < y !== y1 < y) {
          inside ^= 1;
        }
      }
    }
    return 2 * inside - 1;
  }
});

// node_modules/bezier-easing/src/index.js
var require_src = __commonJS((exports, module) => {
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 0.001;
  var SUBDIVISION_PRECISION = 0.0000001;
  var SUBDIVISION_MAX_ITERATIONS = 10;
  var kSplineTableSize = 11;
  var kSampleStepSize = 1 / (kSplineTableSize - 1);
  var float32ArraySupported = typeof Float32Array === "function";
  function A(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
  }
  function B(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
  }
  function C(aA1) {
    return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
    return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
  }
  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }
  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0;i < NEWTON_ITERATIONS; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  function LinearEasing(x) {
    return x;
  }
  module.exports = function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      throw new Error("bezier x values must be in [0, 1] range");
    }
    if (mX1 === mY1 && mX2 === mY2) {
      return LinearEasing;
    }
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for (var i = 0;i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;
      for (;currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }
    return function BezierEasing(x) {
      if (x === 0) {
        return 0;
      }
      if (x === 1) {
        return 1;
      }
      return calcBezier(getTForX(x), mY1, mY2);
    };
  };
});

// src/drawing/step-by-step.ts
var import_robust_point_in_polygon2 = __toESM(require_robust_pnp(), 1);

// src/utils/svg-utils.ts
var SCALE = 20;
var getCircle = (center, r, props = {}) => {
  const points = [];
  const pointsCount = 36;
  const step = Math.PI * 2 / pointsCount;
  for (let i = 0;i < 36; i += 1) {
    const angle = Math.PI / -2 + step * i;
    const x = center.x + r * Math.cos(angle);
    const y = center.y + r * Math.sin(angle);
    points.push({
      x,
      y
    });
  }
  return getPath(points, true, props);
};
var getRect = (topLeft, size, props = {}) => {
  const attributes = [];
  for (const key in props) {
    const value = props[key];
    attributes.push(`${key}="${value}"`);
  }
  return `<rect x="${(topLeft.x * SCALE).toFixed(2)}" y="${(topLeft.y * SCALE).toFixed(2)}" width="${(size.x * SCALE).toFixed(2)}" height="${(size.y * SCALE).toFixed(2)}" ${attributes.join(" ")} />`;
};
var getPath = (path, isClosed = true, props = {}) => {
  const points = path.map((p) => `${(p.x * SCALE).toFixed(2)} ${(p.y * SCALE).toFixed(2)}`).join(" L ");
  const d = `M ${points} ${isClosed ? "Z" : ""}`;
  const attributes = [];
  for (const key in props) {
    const value = props[key];
    attributes.push(`${key}="${value}"`);
  }
  return `<path d="${d}" ${attributes.join(" ")} />`;
};
var svgUtils = {
  getCircle,
  getRect,
  getPath
};
var svg_utils_default = svgUtils;

// src/drawing/invader.ts
var import_robust_point_in_polygon = __toESM(require_robust_pnp(), 1);

// src/utils/vec.ts
var { abs } = Math;

class Vec {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  rotate(angle) {
    const x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    const y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
    return new Vec(x, y);
  }
  angle() {
    return Math.atan2(this.y, this.x);
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  distance(v) {
    return this.sub(v).length();
  }
  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }
  distanceSquared(v) {
    return this.sub(v).lengthSquared();
  }
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
  normalize() {
    const d = this.length();
    if (d === 0) {
      console.warn("Normalizing zero vector");
      return new Vec(this.x, this.y);
    }
    return new Vec(this.x / d, this.y / d);
  }
  add(v) {
    return new Vec(this.x + v.x, this.y + v.y);
  }
  sub(v) {
    return new Vec(this.x - v.x, this.y - v.y);
  }
  mul(v) {
    return new Vec(this.x * v.x, this.y * v.y);
  }
  abs() {
    return new Vec(abs(this.x), abs(this.y));
  }
  div(v) {
    if (v.x === 0 || v.y === 0) {
      throw new Error(`Dividing by zero, vector: ${v.toString()}`);
    }
    return new Vec(this.x / v.x, this.y / v.y);
  }
  addScalar(n) {
    return new Vec(this.x + n, this.y + n);
  }
  subScalar(n) {
    return new Vec(this.x - n, this.y - n);
  }
  mulScalar(n) {
    return new Vec(this.x * n, this.y * n);
  }
  divScalar(n) {
    if (n === 0) {
      console.warn(`Dividing by zero, vector: ${this.toString()}`);
    }
    return new Vec(this.x / n, this.y / n);
  }
  segmentDistance(p1, p2) {
    const l2 = p1.distanceSquared(p2);
    if (l2 === 0) {
      return this.distance(p1);
    }
    const t = this.sub(p1).dot(p2.sub(p1)) / l2;
    if (t < 0) {
      return this.distance(p1);
    }
    if (t > 1) {
      return this.distance(p2);
    }
    return p1.add(p2.sub(p1).mulScalar(t)).distance(this);
  }
  toString() {
    return `x: ${this.x.toFixed(2)}
` + `y: ${this.y.toFixed(2)})
`;
  }
  max(v) {
    return new Vec(Math.max(this.x, v.x), Math.max(this.y, v.y));
  }
}
var vec_default = Vec;

// src/utils/get-fat-line.ts
var getLength = (points) => {
  let len = 0;
  for (let i = 1;i < points.length; i++)
    len += points[i].distance(points[i - 1]);
  return len;
};
var getCumulativeLengths = (points) => {
  const lengths = [0];
  for (let i = 1;i < points.length; i++) {
    lengths.push(lengths[i - 1] + points[i].distance(points[i - 1]));
  }
  return lengths;
};
var DEFAULT_EASING = (t) => t;
function segmentNormal(a, b) {
  const dir = b.sub(a).normalize();
  return new vec_default(-dir.y, dir.x);
}
function averagedNormal(prev, current, next) {
  const n1 = segmentNormal(prev, current);
  const n2 = segmentNormal(current, next);
  const avg = n1.add(n2).normalize();
  return avg.length() === 0 ? n1 : avg;
}
function computeOffsetPoint(prev, current, next, offset, miterLimit = 4) {
  const normal = averagedNormal(prev, current, next);
  const dir1 = current.sub(prev).normalize();
  const dir2 = next.sub(current).normalize();
  const dot = Math.max(-1, Math.min(1, dir1.dot(dir2)));
  const angle = Math.acos(dot);
  const miterScale = 1 / Math.max(Math.sin(angle / 2), 0.000001);
  const scale = Math.min(miterScale, miterLimit) * offset;
  const left = current.add(normal.mulScalar(scale));
  const right = current.add(normal.mulScalar(-scale));
  return [left, right];
}
var getFatLine = (line, width, easing = DEFAULT_EASING) => {
  if (line.length < 2) {
    return [];
  }
  const first = line[0];
  const last = line[line.length - 1];
  const prefix = first.add(first.sub(line[1]));
  const postfix = last.add(last.sub(line[line.length - 2]));
  const points = [prefix, ...line, postfix];
  const totalLength = getLength(line);
  const cumulativeLengths = getCumulativeLengths(line);
  const left = [];
  const right = [];
  for (let i = 1;i < points.length - 1; i++) {
    const prev = points[i - 1];
    const current = points[i];
    const next = points[i + 1];
    const realIndex = Math.min(i - 1, cumulativeLengths.length - 1);
    const t = 1 - easing(cumulativeLengths[realIndex] / totalLength);
    const [l, r] = computeOffsetPoint(prev, current, next, t * width);
    left.push(l);
    right.push(r);
  }
  return [...right, ...left.reverse()];
};

// src/utils/random.ts
function random(min = 0, max = 1, rng, decimalPlaces = 16) {
  const value = (rng || Math.random)() * (max - min) + min;
  if (decimalPlaces) {
    return parseFloat(value.toFixed(decimalPlaces));
  }
  return Math.round(value);
}

// src/utils/split-line.ts
var splitLine = (line, step) => {
  if (step === 0) {
    return line;
  }
  const newLine = [];
  newLine.push(line[0]);
  for (let i = 0;i < line.length - 1; i++) {
    const start = line[i];
    const end = line[i + 1];
    const d = start.distance(end);
    const vec = end.sub(start).normalize();
    let segments = d / step;
    const rest = segments % 1;
    if (rest < 0.5) {
      segments = Math.floor(segments);
    } else {
      segments = Math.ceil(segments);
    }
    for (let j = 1;j < segments; j++) {
      const point = start.add(vec.mulScalar(d / segments * j));
      newLine.push(point);
    }
    newLine.push(end);
  }
  return newLine;
};

// src/drawing/invader.ts
class Invader {
  height;
  width;
  grid;
  gridAnimation;
  bodyCenter;
  body = [];
  horns = [];
  hornsAnimation = [];
  tentacles = [];
  tentaclesAnimation = [];
  options;
  constructor(width = 15, height = 15, options) {
    if (width % 2 === 0) {
      throw new Error("Width must be odd");
    }
    this.width = width;
    this.height = height;
    this.options = options;
    this.bodyCenter = new vec_default(width / 2, Math.round(height * 0.4));
    this.grid = this.initGrid();
    this.gridAnimation = this.initGrid();
    this.generate();
  }
  initGrid() {
    const grid = [];
    for (let x = 0;x < this.width; x++) {
      const col = [];
      for (let y = 0;y < this.height; y++) {
        col.push(" ");
      }
      grid.push(col);
    }
    return grid;
  }
  fillGrid(grid, hornTentacles) {
    const { body } = this;
    const EXTREMITIES_SEARCH_RADIUS = 0.5;
    const INSIDE = -1;
    const EDGE = 0;
    const bodyArray = body.map((p) => [p.x, p.y]);
    grid.forEach((col, x) => {
      col.forEach((_, y) => {
        const isInBody = import_robust_point_in_polygon.default(bodyArray, [x + 0.5, y + 0.5]);
        if (isInBody === INSIDE || isInBody === EDGE) {
          this.paint(grid, x, y, "x");
        } else if (grid[x][y] === " ") {
          for (const polygon of hornTentacles) {
            const polygonArray = polygon.map((p) => [p.x, p.y]);
            let painted = false;
            for (const point of polygon) {
              const d = point.distance(new vec_default(x + 0.5, y + 0.5));
              const isIn = import_robust_point_in_polygon.default(polygonArray, [x + 0.5, y + 0.5]);
              if (d < EXTREMITIES_SEARCH_RADIUS || isIn === INSIDE || isIn === EDGE) {
                this.paint(grid, x, y, "l");
                painted = true;
                break;
              }
            }
            if (painted) {
              break;
            }
          }
        }
      });
    });
  }
  generate() {
    const {
      width,
      height,
      bodyCenter: { x, y },
      options,
      grid,
      gridAnimation
    } = this;
    const half = height * 0.3;
    const bottom = y + random(1, half, null, 0);
    const top = bottom - random(3, height * 0.4, null, 0);
    const pointsCount = random(1, 5, null, 0);
    const pointsLeft = [];
    while (pointsLeft.length < pointsCount) {
      const px = random(width * 0.1, x - 1, null, 0);
      const py = random(height * 0.2, height * 0.6, null, 0);
      const point = new vec_default(px, py);
      if (!pointsLeft.find((p) => point.distance(p) < 0.2)) {
        pointsLeft.push(point);
      }
    }
    pointsLeft.sort((a, b) => a.y - b.y);
    const cornersRight = this.mirror(pointsLeft);
    const bodyTopPoint = new vec_default(x, top);
    const bodyBottomPoint = new vec_default(x, bottom);
    this.body = [
      bodyTopPoint,
      ...pointsLeft,
      bodyBottomPoint,
      ...cornersRight
    ];
    const leftTentacleStart = pointsLeft[pointsLeft.length - 1];
    const sideTentacles = this.getSideTentacles(leftTentacleStart);
    const midTentacles = this.getMiddleTentacles(bodyBottomPoint, sideTentacles[0].line);
    this.tentacles = [...sideTentacles, ...midTentacles];
    const sideTentaclesAnimation = this.getSideTentaclesAnimation(sideTentacles[0].line);
    this.tentaclesAnimation = [...sideTentaclesAnimation, ...midTentacles];
    this.horns = this.getHorns();
    this.hornsAnimation = this.getHornsAnimation(this.horns[0].line);
    const hornTentacles = [
      ...this.tentacles.map((t) => t.fatLine),
      ...this.horns.map((h) => h.fatLine)
    ];
    this.fillGrid(grid, hornTentacles);
    const hornTentaclesAnimation = [
      ...this.tentaclesAnimation.map((t) => t.fatLine),
      ...this.hornsAnimation.map((h) => h.fatLine)
    ];
    this.fillGrid(gridAnimation, hornTentaclesAnimation);
    const mid = top + (bottom - top) / 2;
    const eyes = this.getEyes();
    eyes(grid, random(mid - 1, mid + 1, options.eyesRng, 0));
    eyes(gridAnimation, random(mid - 1, mid + 1, options.eyesRng, 0));
  }
  eye(grid, x, y) {
    this.paint(grid, x, y, "o");
    this.paint4(grid, x, y, "z");
  }
  getEyes() {
    const {
      bodyCenter: { x },
      options
    } = this;
    const { floor } = Math;
    const eyes = [
      (grid, y) => {
        this.eye(grid, floor(x - 2), y);
        this.eye(grid, floor(x + 2), y);
      },
      (grid, y) => {
        this.eye(grid, floor(x - 2), y);
        this.eye(grid, floor(x), y);
        this.eye(grid, floor(x + 2), y);
      },
      (grid, y) => {
        this.eye(grid, floor(x - 2), y);
        this.eye(grid, floor(x + 2), y);
        this.paint(grid, floor(x - 1), y, "o");
        this.paint(grid, floor(x + 1), y, "o");
      }
    ];
    const index = random(0, eyes.length - 1, options.eyesRng, 0);
    return eyes[index];
  }
  baseLineToFatLine(baseLine, width) {
    const { options } = this;
    const line = splitLine(baseLine, options.split);
    const fatLine = getFatLine(line, width, options.lineThicknessEasing);
    return [
      {
        fatLine,
        line
      },
      {
        fatLine: this.mirror(fatLine),
        line: this.mirror(line)
      }
    ];
  }
  getSideTentacles(start) {
    let baseLine = [start];
    const length = random(1, 6, null, 0);
    for (let i = 0;i < length; i++) {
      const angle = random(-1, 1) * Math.PI * 0.5 + Math.PI * 0.5;
      const d = random(1, 3, null, 0);
      const x = baseLine[i].x + d * Math.cos(angle);
      const y = baseLine[i].y + d * Math.sin(angle);
      baseLine.push(new vec_default(x, y));
    }
    return this.baseLineToFatLine(baseLine, 0.25);
  }
  getSideTentaclesAnimation(baseLine) {
    const pointsToReplace = baseLine.length > 3 ? 2 : 1;
    const baseLineAnimation = baseLine.slice(0, baseLine.length - pointsToReplace);
    for (let i = 0;i < pointsToReplace; i++) {
      const angle = random(-1, 1) * Math.PI * 0.5 + Math.PI * 0.5;
      const d = random(1, 3, null, 0);
      const x = baseLineAnimation[i].x + d * Math.cos(angle);
      const y = baseLineAnimation[i].y + d * Math.sin(angle);
      baseLineAnimation.push(new vec_default(x, y));
    }
    return this.baseLineToFatLine(baseLineAnimation, 0.3);
  }
  getMiddleTentacles(bottom, tentacle) {
    let baseLine = [bottom];
    const length = random(2, 4, null, 0);
    for (let i = 0;i < length; i++) {
      const angle = random(-1, 0, null, 0) * Math.PI * 0.25 + Math.PI * 0.5;
      const d = random(1, 2, null, 0);
      const x = baseLine[i].x + d * Math.cos(angle);
      const y = baseLine[i].y + d * Math.sin(angle);
      const point = new vec_default(x, y);
      let stop = false;
      const MIN_DISTANCE = 4;
      for (const p of tentacle) {
        if (point.distance(p) < MIN_DISTANCE) {
          stop = true;
          break;
        }
      }
      if (stop) {
        break;
      }
      baseLine.push(point);
    }
    if (baseLine.length > 2) {
      return this.baseLineToFatLine(baseLine, 0.2);
    }
    return [];
  }
  getHorns() {
    const {
      bodyCenter: { x, y }
    } = this;
    const getNext = (current2, angle2, r2) => {
      return new vec_default(current2.x + r2 * Math.cos(angle2), current2.y + r2 * Math.sin(angle2));
    };
    let angle = random(0.1, 0.35) * Math.PI + Math.PI;
    let r = y * random(0.5, 0.7);
    let current = new vec_default(x, y - 0.5);
    const length = 2 + random(0, 1, null, 0);
    const baseLine = [current];
    for (let i = 0;i < length; i++) {
      const next = getNext(current, angle, r);
      baseLine.push(next);
      current = next;
      angle = random(-1, 0, null, 0) * random(0, 0.5) * Math.PI + Math.PI;
      r = random(1, 2, null, 0);
    }
    return this.baseLineToFatLine(baseLine, 0.25);
  }
  getHornsAnimation(leftHorn) {
    const horn = leftHorn.map((p, i) => {
      if (i === leftHorn.length - 1) {
        return p.add(new vec_default(-1, 0));
      }
      return p;
    });
    return this.baseLineToFatLine(horn, 0.3);
  }
  mirror(points) {
    const { width } = this;
    return points.map((p) => new vec_default(width - p.x, p.y)).reverse();
  }
  paint(grid, x, y, char) {
    grid[x][y] = char;
  }
  paint4(grid, x, y, char) {
    const neighbors = this.findNeighbors4(x, y);
    neighbors.forEach((neighbor) => {
      this.paint(grid, neighbor.x, neighbor.y, char);
    });
  }
  paint8(grid, x, y, char) {
    const neighbors = this.findNeighbors8(x, y);
    neighbors.forEach((neighbor) => {
      this.paint(grid, neighbor.x, neighbor.y, char);
    });
  }
  findNeighbors(x, y, offsets) {
    const { width, height } = this;
    return offsets.map((d) => new vec_default(x + d.x, y + d.y)).filter((p) => {
      return p.x >= 0 && p.x < width && p.y >= 0 && p.y < height;
    });
  }
  findNeighbors4(x, y) {
    const offsets = [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
      { x: -1, y: 0 }
    ].map((p) => new vec_default(p.x, p.y));
    return this.findNeighbors(x, y, offsets);
  }
  findNeighbors8(x, y) {
    const offsets = [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: -1 },
      { x: 0, y: -1 },
      { x: -1, y: -1 },
      { x: -1, y: 0 },
      { x: -1, y: 1 }
    ].map((p) => new vec_default(p.x, p.y));
    return this.findNeighbors(x, y, offsets);
  }
  toString() {
    const string = [];
    for (let y = 0;y < this.height; y++) {
      const row = [];
      for (let x = 0;x < this.width; x++) {
        const char = this.grid[x][y];
        if (char === " ") {
          row.push(" . ");
        } else {
          row.push(`[${char}]`);
        }
      }
      string.push(row.join(""));
    }
    return string.join(`
`);
  }
}

// src/drawing/render.ts
var getGridLines = (width, height, stroke = "#515256") => {
  const d = [];
  for (let i = 0;i <= width; i++) {
    d.push(`M ${i * SCALE} 0 v ${height * SCALE}`);
  }
  for (let j = 0;j <= height; j++) {
    d.push(`M 0 ${j * SCALE} h ${width * SCALE}`);
  }
  return `<path d="${d.join(" ")}" class="invader-grid" stroke="${stroke}" />`;
};

// src/drawing/step-by-step.ts
var import_bezier_easing = __toESM(require_src(), 1);

// node_modules/animejs/lib/anime.esm.js
var isBrowser = typeof window !== "undefined";
var win = isBrowser ? window : null;
var doc = isBrowser ? document : null;
var tweenTypes = {
  OBJECT: 0,
  ATTRIBUTE: 1,
  CSS: 2,
  TRANSFORM: 3,
  CSS_VAR: 4
};
var valueTypes = {
  NUMBER: 0,
  UNIT: 1,
  COLOR: 2,
  COMPLEX: 3
};
var tickModes = {
  NONE: 0,
  AUTO: 1,
  FORCE: 2
};
var compositionTypes = {
  replace: 0,
  none: 1,
  blend: 2
};
var isRegisteredTargetSymbol = Symbol();
var isDomSymbol = Symbol();
var isSvgSymbol = Symbol();
var transformsSymbol = Symbol();
var morphPointsSymbol = Symbol();
var proxyTargetSymbol = Symbol();
var minValue = 0.00000000001;
var maxValue = 1000000000000;
var K = 1000;
var maxFps = 120;
var emptyString = "";
var shortTransforms = /* @__PURE__ */ (() => {
  const map = new Map;
  map.set("x", "translateX");
  map.set("y", "translateY");
  map.set("z", "translateZ");
  return map;
})();
var validTransforms = [
  "translateX",
  "translateY",
  "translateZ",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "scaleZ",
  "skew",
  "skewX",
  "skewY",
  "perspective",
  "matrix",
  "matrix3d"
];
var transformsFragmentStrings = /* @__PURE__ */ validTransforms.reduce((a, v) => ({ ...a, [v]: v + "(" }), {});
var noop = () => {};
var hexTestRgx = /(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i;
var rgbExecRgx = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i;
var rgbaExecRgx = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
var hslExecRgx = /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i;
var hslaExecRgx = /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
var digitWithExponentRgx = /[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi;
var unitsExecRgx = /^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i;
var lowerCaseRgx = /([a-z])([A-Z])/g;
var transformsExecRgx = /(\w+)(\([^)]+\)+)/g;
var relativeValuesExecRgx = /(\*=|\+=|-=)/;
var defaults = {
  id: null,
  keyframes: null,
  playbackEase: null,
  playbackRate: 1,
  frameRate: maxFps,
  loop: 0,
  reversed: false,
  alternate: false,
  autoplay: true,
  duration: K,
  delay: 0,
  loopDelay: 0,
  ease: "out(2)",
  composition: compositionTypes.replace,
  modifier: (v) => v,
  onBegin: noop,
  onBeforeUpdate: noop,
  onUpdate: noop,
  onLoop: noop,
  onPause: noop,
  onComplete: noop,
  onRender: noop
};
var scope = {
  current: null,
  root: doc
};
var globals = {
  defaults,
  precision: 4,
  timeScale: 1,
  tickThreshold: 200
};
var globalVersions = { version: "4.1.3", engine: null };
if (isBrowser) {
  if (!win.AnimeJS)
    win.AnimeJS = [];
  win.AnimeJS.push(globalVersions);
}
var toLowerCase = (str) => str.replace(lowerCaseRgx, "$1-$2").toLowerCase();
var stringStartsWith = (str, sub) => str.indexOf(sub) === 0;
var now = Date.now;
var isArr = Array.isArray;
var isObj = (a) => a && a.constructor === Object;
var isNum = (a) => typeof a === "number" && !isNaN(a);
var isStr = (a) => typeof a === "string";
var isFnc = (a) => typeof a === "function";
var isUnd = (a) => typeof a === "undefined";
var isNil = (a) => isUnd(a) || a === null;
var isSvg = (a) => isBrowser && a instanceof SVGElement;
var isHex = (a) => hexTestRgx.test(a);
var isRgb = (a) => stringStartsWith(a, "rgb");
var isHsl = (a) => stringStartsWith(a, "hsl");
var isCol = (a) => isHex(a) || isRgb(a) || isHsl(a);
var isKey = (a) => !globals.defaults.hasOwnProperty(a);
var parseNumber = (str) => isStr(str) ? parseFloat(str) : str;
var pow = Math.pow;
var sqrt = Math.sqrt;
var sin = Math.sin;
var cos = Math.cos;
var abs2 = Math.abs;
var ceil = Math.ceil;
var floor = Math.floor;
var asin = Math.asin;
var max = Math.max;
var atan2 = Math.atan2;
var PI = Math.PI;
var _round = Math.round;
var clamp = (v, min, max2) => v < min ? min : v > max2 ? max2 : v;
var powCache = {};
var round = (v, decimalLength) => {
  if (decimalLength < 0)
    return v;
  if (!decimalLength)
    return _round(v);
  let p = powCache[decimalLength];
  if (!p)
    p = powCache[decimalLength] = 10 ** decimalLength;
  return _round(v * p) / p;
};
var snap = (v, increment) => isArr(increment) ? increment.reduce((closest, cv) => abs2(cv - v) < abs2(closest - v) ? cv : closest) : increment ? _round(v / increment) * increment : v;
var interpolate = (start, end, progress) => start + (end - start) * progress;
var random2 = (min, max2, decimalLength) => {
  const m = 10 ** (decimalLength || 0);
  return floor((Math.random() * (max2 - min + 1 / m) + min) * m) / m;
};
var shuffle = (items) => {
  let m = items.length, t, i;
  while (m) {
    i = random2(0, --m);
    t = items[m];
    items[m] = items[i];
    items[i] = t;
  }
  return items;
};
var clampInfinity = (v) => v === Infinity ? maxValue : v === -Infinity ? -1000000000000 : v;
var normalizeTime = (v) => v <= minValue ? minValue : clampInfinity(round(v, 11));
var cloneArray = (a) => isArr(a) ? [...a] : a;
var mergeObjects = (o1, o2) => {
  const merged = { ...o1 };
  for (let p in o2) {
    const o1p = o1[p];
    merged[p] = isUnd(o1p) ? o2[p] : o1p;
  }
  return merged;
};
var forEachChildren = (parent, callback, reverse, prevProp = "_prev", nextProp = "_next") => {
  let next = parent._head;
  let adjustedNextProp = nextProp;
  if (reverse) {
    next = parent._tail;
    adjustedNextProp = prevProp;
  }
  while (next) {
    const currentNext = next[adjustedNextProp];
    callback(next);
    next = currentNext;
  }
};
var removeChild = (parent, child, prevProp = "_prev", nextProp = "_next") => {
  const prev = child[prevProp];
  const next = child[nextProp];
  prev ? prev[nextProp] = next : parent._head = next;
  next ? next[prevProp] = prev : parent._tail = prev;
  child[prevProp] = null;
  child[nextProp] = null;
};
var addChild = (parent, child, sortMethod, prevProp = "_prev", nextProp = "_next") => {
  let prev = parent._tail;
  while (prev && sortMethod && sortMethod(prev, child))
    prev = prev[prevProp];
  const next = prev ? prev[nextProp] : parent._head;
  prev ? prev[nextProp] = child : parent._head = child;
  next ? next[prevProp] = child : parent._tail = child;
  child[prevProp] = prev;
  child[nextProp] = next;
};
var createRefreshable = (constructor) => {
  let tracked;
  return (...args) => {
    let currentIteration, currentIterationProgress, reversed, alternate;
    if (tracked) {
      currentIteration = tracked.currentIteration;
      currentIterationProgress = tracked.iterationProgress;
      reversed = tracked.reversed;
      alternate = tracked._alternate;
      tracked.revert();
    }
    const cleanup = constructor(...args);
    if (cleanup && !isFnc(cleanup) && cleanup.revert)
      tracked = cleanup;
    if (!isUnd(currentIterationProgress)) {
      tracked.currentIteration = currentIteration;
      tracked.iterationProgress = (alternate ? !(currentIteration % 2) ? reversed : !reversed : reversed) ? 1 - currentIterationProgress : currentIterationProgress;
    }
    return cleanup || noop;
  };
};

class Clock {
  constructor(initTime = 0) {
    this.deltaTime = 0;
    this._currentTime = initTime;
    this._elapsedTime = initTime;
    this._startTime = initTime;
    this._lastTime = initTime;
    this._scheduledTime = 0;
    this._frameDuration = round(K / maxFps, 0);
    this._fps = maxFps;
    this._speed = 1;
    this._hasChildren = false;
    this._head = null;
    this._tail = null;
  }
  get fps() {
    return this._fps;
  }
  set fps(frameRate) {
    const previousFrameDuration = this._frameDuration;
    const fr = +frameRate;
    const fps = fr < minValue ? minValue : fr;
    const frameDuration = round(K / fps, 0);
    this._fps = fps;
    this._frameDuration = frameDuration;
    this._scheduledTime += frameDuration - previousFrameDuration;
  }
  get speed() {
    return this._speed;
  }
  set speed(playbackRate) {
    const pbr = +playbackRate;
    this._speed = pbr < minValue ? minValue : pbr;
  }
  requestTick(time) {
    const scheduledTime = this._scheduledTime;
    const elapsedTime = this._elapsedTime;
    this._elapsedTime += time - elapsedTime;
    if (elapsedTime < scheduledTime)
      return tickModes.NONE;
    const frameDuration = this._frameDuration;
    const frameDelta = elapsedTime - scheduledTime;
    this._scheduledTime += frameDelta < frameDuration ? frameDuration : frameDelta;
    return tickModes.AUTO;
  }
  computeDeltaTime(time) {
    const delta = time - this._lastTime;
    this.deltaTime = delta;
    this._lastTime = time;
    return delta;
  }
}
var render = (tickable, time, muteCallbacks, internalRender, tickMode) => {
  const parent = tickable.parent;
  const duration = tickable.duration;
  const completed = tickable.completed;
  const iterationDuration = tickable.iterationDuration;
  const iterationCount = tickable.iterationCount;
  const _currentIteration = tickable._currentIteration;
  const _loopDelay = tickable._loopDelay;
  const _reversed = tickable._reversed;
  const _alternate = tickable._alternate;
  const _hasChildren = tickable._hasChildren;
  const tickableDelay = tickable._delay;
  const tickablePrevAbsoluteTime = tickable._currentTime;
  const tickableEndTime = tickableDelay + iterationDuration;
  const tickableAbsoluteTime = time - tickableDelay;
  const tickablePrevTime = clamp(tickablePrevAbsoluteTime, -tickableDelay, duration);
  const tickableCurrentTime = clamp(tickableAbsoluteTime, -tickableDelay, duration);
  const deltaTime = tickableAbsoluteTime - tickablePrevAbsoluteTime;
  const isCurrentTimeAboveZero = tickableCurrentTime > 0;
  const isCurrentTimeEqualOrAboveDuration = tickableCurrentTime >= duration;
  const isSetter = duration <= minValue;
  const forcedTick = tickMode === tickModes.FORCE;
  let isOdd = 0;
  let iterationElapsedTime = tickableAbsoluteTime;
  let hasRendered = 0;
  if (iterationCount > 1) {
    const currentIteration = ~~(tickableCurrentTime / (iterationDuration + (isCurrentTimeEqualOrAboveDuration ? 0 : _loopDelay)));
    tickable._currentIteration = clamp(currentIteration, 0, iterationCount);
    if (isCurrentTimeEqualOrAboveDuration)
      tickable._currentIteration--;
    isOdd = tickable._currentIteration % 2;
    iterationElapsedTime = tickableCurrentTime % (iterationDuration + _loopDelay) || 0;
  }
  const isReversed = _reversed ^ (_alternate && isOdd);
  const _ease = tickable._ease;
  let iterationTime = isCurrentTimeEqualOrAboveDuration ? isReversed ? 0 : duration : isReversed ? iterationDuration - iterationElapsedTime : iterationElapsedTime;
  if (_ease)
    iterationTime = iterationDuration * _ease(iterationTime / iterationDuration) || 0;
  const isRunningBackwards = (parent ? parent.backwards : tickableAbsoluteTime < tickablePrevAbsoluteTime) ? !isReversed : !!isReversed;
  tickable._currentTime = tickableAbsoluteTime;
  tickable._iterationTime = iterationTime;
  tickable.backwards = isRunningBackwards;
  if (isCurrentTimeAboveZero && !tickable.began) {
    tickable.began = true;
    if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) {
      tickable.onBegin(tickable);
    }
  } else if (tickableAbsoluteTime <= 0) {
    tickable.began = false;
  }
  if (!muteCallbacks && !_hasChildren && isCurrentTimeAboveZero && tickable._currentIteration !== _currentIteration) {
    tickable.onLoop(tickable);
  }
  if (forcedTick || tickMode === tickModes.AUTO && (time >= tickableDelay && time <= tickableEndTime || time <= tickableDelay && tickablePrevTime > tickableDelay || time >= tickableEndTime && tickablePrevTime !== duration) || iterationTime >= tickableEndTime && tickablePrevTime !== duration || iterationTime <= tickableDelay && tickablePrevTime > 0 || time <= tickablePrevTime && tickablePrevTime === duration && completed || isCurrentTimeEqualOrAboveDuration && !completed && isSetter) {
    if (isCurrentTimeAboveZero) {
      tickable.computeDeltaTime(tickablePrevTime);
      if (!muteCallbacks)
        tickable.onBeforeUpdate(tickable);
    }
    if (!_hasChildren) {
      const forcedRender = forcedTick || (isRunningBackwards ? deltaTime * -1 : deltaTime) >= globals.tickThreshold;
      const absoluteTime = tickable._offset + (parent ? parent._offset : 0) + tickableDelay + iterationTime;
      let tween = tickable._head;
      let tweenTarget;
      let tweenStyle;
      let tweenTargetTransforms;
      let tweenTargetTransformsProperties;
      let tweenTransformsNeedUpdate = 0;
      while (tween) {
        const tweenComposition = tween._composition;
        const tweenCurrentTime = tween._currentTime;
        const tweenChangeDuration = tween._changeDuration;
        const tweenAbsEndTime = tween._absoluteStartTime + tween._changeDuration;
        const tweenNextRep = tween._nextRep;
        const tweenPrevRep = tween._prevRep;
        const tweenHasComposition = tweenComposition !== compositionTypes.none;
        if ((forcedRender || (tweenCurrentTime !== tweenChangeDuration || absoluteTime <= tweenAbsEndTime + (tweenNextRep ? tweenNextRep._delay : 0)) && (tweenCurrentTime !== 0 || absoluteTime >= tween._absoluteStartTime)) && (!tweenHasComposition || !tween._isOverridden && (!tween._isOverlapped || absoluteTime <= tweenAbsEndTime) && (!tweenNextRep || (tweenNextRep._isOverridden || absoluteTime <= tweenNextRep._absoluteStartTime)) && (!tweenPrevRep || (tweenPrevRep._isOverridden || absoluteTime >= tweenPrevRep._absoluteStartTime + tweenPrevRep._changeDuration + tween._delay)))) {
          const tweenNewTime = tween._currentTime = clamp(iterationTime - tween._startTime, 0, tweenChangeDuration);
          const tweenProgress = tween._ease(tweenNewTime / tween._updateDuration);
          const tweenModifier = tween._modifier;
          const tweenValueType = tween._valueType;
          const tweenType = tween._tweenType;
          const tweenIsObject = tweenType === tweenTypes.OBJECT;
          const tweenIsNumber = tweenValueType === valueTypes.NUMBER;
          const tweenPrecision = tweenIsNumber && tweenIsObject || tweenProgress === 0 || tweenProgress === 1 ? -1 : globals.precision;
          let value;
          let number;
          if (tweenIsNumber) {
            value = number = tweenModifier(round(interpolate(tween._fromNumber, tween._toNumber, tweenProgress), tweenPrecision));
          } else if (tweenValueType === valueTypes.UNIT) {
            number = tweenModifier(round(interpolate(tween._fromNumber, tween._toNumber, tweenProgress), tweenPrecision));
            value = `${number}${tween._unit}`;
          } else if (tweenValueType === valueTypes.COLOR) {
            const fn = tween._fromNumbers;
            const tn = tween._toNumbers;
            const r = round(clamp(tweenModifier(interpolate(fn[0], tn[0], tweenProgress)), 0, 255), 0);
            const g = round(clamp(tweenModifier(interpolate(fn[1], tn[1], tweenProgress)), 0, 255), 0);
            const b = round(clamp(tweenModifier(interpolate(fn[2], tn[2], tweenProgress)), 0, 255), 0);
            const a = clamp(tweenModifier(round(interpolate(fn[3], tn[3], tweenProgress), tweenPrecision)), 0, 1);
            value = `rgba(${r},${g},${b},${a})`;
            if (tweenHasComposition) {
              const ns = tween._numbers;
              ns[0] = r;
              ns[1] = g;
              ns[2] = b;
              ns[3] = a;
            }
          } else if (tweenValueType === valueTypes.COMPLEX) {
            value = tween._strings[0];
            for (let j = 0, l = tween._toNumbers.length;j < l; j++) {
              const n = tweenModifier(round(interpolate(tween._fromNumbers[j], tween._toNumbers[j], tweenProgress), tweenPrecision));
              const s = tween._strings[j + 1];
              value += `${s ? n + s : n}`;
              if (tweenHasComposition) {
                tween._numbers[j] = n;
              }
            }
          }
          if (tweenHasComposition) {
            tween._number = number;
          }
          if (!internalRender && tweenComposition !== compositionTypes.blend) {
            const tweenProperty = tween.property;
            tweenTarget = tween.target;
            if (tweenIsObject) {
              tweenTarget[tweenProperty] = value;
            } else if (tweenType === tweenTypes.ATTRIBUTE) {
              tweenTarget.setAttribute(tweenProperty, value);
            } else {
              tweenStyle = tweenTarget.style;
              if (tweenType === tweenTypes.TRANSFORM) {
                if (tweenTarget !== tweenTargetTransforms) {
                  tweenTargetTransforms = tweenTarget;
                  tweenTargetTransformsProperties = tweenTarget[transformsSymbol];
                }
                tweenTargetTransformsProperties[tweenProperty] = value;
                tweenTransformsNeedUpdate = 1;
              } else if (tweenType === tweenTypes.CSS) {
                tweenStyle[tweenProperty] = value;
              } else if (tweenType === tweenTypes.CSS_VAR) {
                tweenStyle.setProperty(tweenProperty, value);
              }
            }
            if (isCurrentTimeAboveZero)
              hasRendered = 1;
          } else {
            tween._value = value;
          }
        }
        if (tweenTransformsNeedUpdate && tween._renderTransforms) {
          let str = emptyString;
          for (let key in tweenTargetTransformsProperties) {
            str += `${transformsFragmentStrings[key]}${tweenTargetTransformsProperties[key]}) `;
          }
          tweenStyle.transform = str;
          tweenTransformsNeedUpdate = 0;
        }
        tween = tween._next;
      }
      if (!muteCallbacks && hasRendered) {
        tickable.onRender(tickable);
      }
    }
    if (!muteCallbacks && isCurrentTimeAboveZero) {
      tickable.onUpdate(tickable);
    }
  }
  if (parent && isSetter) {
    if (!muteCallbacks && (parent.began && !isRunningBackwards && tickableAbsoluteTime >= duration && !completed || isRunningBackwards && tickableAbsoluteTime <= minValue && completed)) {
      tickable.onComplete(tickable);
      tickable.completed = !isRunningBackwards;
    }
  } else if (isCurrentTimeAboveZero && isCurrentTimeEqualOrAboveDuration) {
    if (iterationCount === Infinity) {
      tickable._startTime += tickable.duration;
    } else if (tickable._currentIteration >= iterationCount - 1) {
      tickable.paused = true;
      if (!completed && !_hasChildren) {
        tickable.completed = true;
        if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) {
          tickable.onComplete(tickable);
          tickable._resolve(tickable);
        }
      }
    }
  } else {
    tickable.completed = false;
  }
  return hasRendered;
};
var tick = (tickable, time, muteCallbacks, internalRender, tickMode) => {
  const _currentIteration = tickable._currentIteration;
  render(tickable, time, muteCallbacks, internalRender, tickMode);
  if (tickable._hasChildren) {
    const tl = tickable;
    const tlIsRunningBackwards = tl.backwards;
    const tlChildrenTime = internalRender ? time : tl._iterationTime;
    const tlCildrenTickTime = now();
    let tlChildrenHasRendered = 0;
    let tlChildrenHaveCompleted = true;
    if (!internalRender && tl._currentIteration !== _currentIteration) {
      const tlIterationDuration = tl.iterationDuration;
      forEachChildren(tl, (child) => {
        if (!tlIsRunningBackwards) {
          if (!child.completed && !child.backwards && child._currentTime < child.iterationDuration) {
            render(child, tlIterationDuration, muteCallbacks, 1, tickModes.FORCE);
          }
          child.began = false;
          child.completed = false;
        } else {
          const childDuration = child.duration;
          const childStartTime = child._offset + child._delay;
          const childEndTime = childStartTime + childDuration;
          if (!muteCallbacks && childDuration <= minValue && (!childStartTime || childEndTime === tlIterationDuration)) {
            child.onComplete(child);
          }
        }
      });
      if (!muteCallbacks)
        tl.onLoop(tl);
    }
    forEachChildren(tl, (child) => {
      const childTime = round((tlChildrenTime - child._offset) * child._speed, 12);
      const childTickMode = child._fps < tl._fps ? child.requestTick(tlCildrenTickTime) : tickMode;
      tlChildrenHasRendered += render(child, childTime, muteCallbacks, internalRender, childTickMode);
      if (!child.completed && tlChildrenHaveCompleted)
        tlChildrenHaveCompleted = false;
    }, tlIsRunningBackwards);
    if (!muteCallbacks && tlChildrenHasRendered)
      tl.onRender(tl);
    if ((tlChildrenHaveCompleted || tlIsRunningBackwards) && tl._currentTime >= tl.duration) {
      tl.paused = true;
      if (!tl.completed) {
        tl.completed = true;
        if (!muteCallbacks) {
          tl.onComplete(tl);
          tl._resolve(tl);
        }
      }
    }
  }
};
var additive = {
  animation: null,
  update: noop
};
var addAdditiveAnimation = (lookups) => {
  let animation = additive.animation;
  if (!animation) {
    animation = {
      duration: minValue,
      computeDeltaTime: noop,
      _offset: 0,
      _delay: 0,
      _head: null,
      _tail: null
    };
    additive.animation = animation;
    additive.update = () => {
      lookups.forEach((propertyAnimation) => {
        for (let propertyName in propertyAnimation) {
          const tweens = propertyAnimation[propertyName];
          const lookupTween = tweens._head;
          if (lookupTween) {
            const valueType = lookupTween._valueType;
            const additiveValues = valueType === valueTypes.COMPLEX || valueType === valueTypes.COLOR ? cloneArray(lookupTween._fromNumbers) : null;
            let additiveValue = lookupTween._fromNumber;
            let tween = tweens._tail;
            while (tween && tween !== lookupTween) {
              if (additiveValues) {
                for (let i = 0, l = tween._numbers.length;i < l; i++)
                  additiveValues[i] += tween._numbers[i];
              } else {
                additiveValue += tween._number;
              }
              tween = tween._prevAdd;
            }
            lookupTween._toNumber = additiveValue;
            lookupTween._toNumbers = additiveValues;
          }
        }
      });
      render(animation, 1, 1, 0, tickModes.FORCE);
    };
  }
  return animation;
};
var engineTickMethod = /* @__PURE__ */ (() => isBrowser ? requestAnimationFrame : setImmediate)();
var engineCancelMethod = /* @__PURE__ */ (() => isBrowser ? cancelAnimationFrame : clearImmediate)();

class Engine extends Clock {
  constructor(initTime) {
    super(initTime);
    this.useDefaultMainLoop = true;
    this.pauseOnDocumentHidden = true;
    this.defaults = defaults;
    this.paused = true;
    this.reqId = 0;
  }
  update() {
    const time = this._currentTime = now();
    if (this.requestTick(time)) {
      this.computeDeltaTime(time);
      const engineSpeed = this._speed;
      const engineFps = this._fps;
      let activeTickable = this._head;
      while (activeTickable) {
        const nextTickable = activeTickable._next;
        if (!activeTickable.paused) {
          tick(activeTickable, (time - activeTickable._startTime) * activeTickable._speed * engineSpeed, 0, 0, activeTickable._fps < engineFps ? activeTickable.requestTick(time) : tickModes.AUTO);
        } else {
          removeChild(this, activeTickable);
          this._hasChildren = !!this._tail;
          activeTickable._running = false;
          if (activeTickable.completed && !activeTickable._cancelled) {
            activeTickable.cancel();
          }
        }
        activeTickable = nextTickable;
      }
      additive.update();
    }
  }
  wake() {
    if (this.useDefaultMainLoop && !this.reqId) {
      this.requestTick(now());
      this.reqId = engineTickMethod(tickEngine);
    }
    return this;
  }
  pause() {
    if (!this.reqId)
      return;
    this.paused = true;
    return killEngine();
  }
  resume() {
    if (!this.paused)
      return;
    this.paused = false;
    forEachChildren(this, (child) => child.resetTime());
    return this.wake();
  }
  get speed() {
    return this._speed * (globals.timeScale === 1 ? 1 : K);
  }
  set speed(playbackRate) {
    this._speed = playbackRate * globals.timeScale;
    forEachChildren(this, (child) => child.speed = child._speed);
  }
  get timeUnit() {
    return globals.timeScale === 1 ? "ms" : "s";
  }
  set timeUnit(unit) {
    const secondsScale = 0.001;
    const isSecond = unit === "s";
    const newScale = isSecond ? secondsScale : 1;
    if (globals.timeScale !== newScale) {
      globals.timeScale = newScale;
      globals.tickThreshold = 200 * newScale;
      const scaleFactor = isSecond ? secondsScale : K;
      this.defaults.duration *= scaleFactor;
      this._speed *= scaleFactor;
    }
  }
  get precision() {
    return globals.precision;
  }
  set precision(precision) {
    globals.precision = precision;
  }
}
var engine = /* @__PURE__ */ (() => {
  const engine2 = new Engine(now());
  if (isBrowser) {
    globalVersions.engine = engine2;
    doc.addEventListener("visibilitychange", () => {
      if (!engine2.pauseOnDocumentHidden)
        return;
      doc.hidden ? engine2.pause() : engine2.resume();
    });
  }
  return engine2;
})();
var tickEngine = () => {
  if (engine._head) {
    engine.reqId = engineTickMethod(tickEngine);
    engine.update();
  } else {
    engine.reqId = 0;
  }
};
var killEngine = () => {
  engineCancelMethod(engine.reqId);
  engine.reqId = 0;
  return engine;
};
var parseInlineTransforms = (target, propName, animationInlineStyles) => {
  const inlineTransforms = target.style.transform;
  let inlinedStylesPropertyValue;
  if (inlineTransforms) {
    const cachedTransforms = target[transformsSymbol];
    let t;
    while (t = transformsExecRgx.exec(inlineTransforms)) {
      const inlinePropertyName = t[1];
      const inlinePropertyValue = t[2].slice(1, -1);
      cachedTransforms[inlinePropertyName] = inlinePropertyValue;
      if (inlinePropertyName === propName) {
        inlinedStylesPropertyValue = inlinePropertyValue;
        if (animationInlineStyles) {
          animationInlineStyles[propName] = inlinePropertyValue;
        }
      }
    }
  }
  return inlineTransforms && !isUnd(inlinedStylesPropertyValue) ? inlinedStylesPropertyValue : stringStartsWith(propName, "scale") ? "1" : stringStartsWith(propName, "rotate") || stringStartsWith(propName, "skew") ? "0deg" : "0px";
};
function getNodeList(v) {
  const n = isStr(v) ? scope.root.querySelectorAll(v) : v;
  if (n instanceof NodeList || n instanceof HTMLCollection)
    return n;
}
function parseTargets(targets) {
  if (isNil(targets))
    return [];
  if (!isBrowser)
    return isArr(targets) && targets.flat(Infinity) || [targets];
  if (isArr(targets)) {
    const flattened = targets.flat(Infinity);
    const parsed = [];
    for (let i = 0, l = flattened.length;i < l; i++) {
      const item = flattened[i];
      if (!isNil(item)) {
        const nodeList2 = getNodeList(item);
        if (nodeList2) {
          for (let j = 0, jl = nodeList2.length;j < jl; j++) {
            const subItem = nodeList2[j];
            if (!isNil(subItem)) {
              let isDuplicate = false;
              for (let k = 0, kl = parsed.length;k < kl; k++) {
                if (parsed[k] === subItem) {
                  isDuplicate = true;
                  break;
                }
              }
              if (!isDuplicate) {
                parsed.push(subItem);
              }
            }
          }
        } else {
          let isDuplicate = false;
          for (let j = 0, jl = parsed.length;j < jl; j++) {
            if (parsed[j] === item) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) {
            parsed.push(item);
          }
        }
      }
    }
    return parsed;
  }
  const nodeList = getNodeList(targets);
  if (nodeList)
    return Array.from(nodeList);
  return [targets];
}
function registerTargets(targets) {
  const parsedTargetsArray = parseTargets(targets);
  const parsedTargetsLength = parsedTargetsArray.length;
  if (parsedTargetsLength) {
    for (let i = 0;i < parsedTargetsLength; i++) {
      const target = parsedTargetsArray[i];
      if (!target[isRegisteredTargetSymbol]) {
        target[isRegisteredTargetSymbol] = true;
        const isSvgType = isSvg(target);
        const isDom = target.nodeType || isSvgType;
        if (isDom) {
          target[isDomSymbol] = true;
          target[isSvgSymbol] = isSvgType;
          target[transformsSymbol] = {};
        }
      }
    }
  }
  return parsedTargetsArray;
}
var getPath2 = (path) => {
  const parsedTargets = parseTargets(path);
  const $parsedSvg = parsedTargets[0];
  if (!$parsedSvg || !isSvg($parsedSvg))
    return;
  return $parsedSvg;
};
var morphTo = (path2, precision = 0.33) => ($path1) => {
  const $path2 = getPath2(path2);
  if (!$path2)
    return;
  const isPath = $path1.tagName === "path";
  const separator = isPath ? " " : ",";
  const previousPoints = $path1[morphPointsSymbol];
  if (previousPoints)
    $path1.setAttribute(isPath ? "d" : "points", previousPoints);
  let v1 = "", v2 = "";
  if (!precision) {
    v1 = $path1.getAttribute(isPath ? "d" : "points");
    v2 = $path2.getAttribute(isPath ? "d" : "points");
  } else {
    const length1 = $path1.getTotalLength();
    const length2 = $path2.getTotalLength();
    const maxPoints = Math.max(Math.ceil(length1 * precision), Math.ceil(length2 * precision));
    for (let i = 0;i < maxPoints; i++) {
      const t = i / (maxPoints - 1);
      const pointOnPath1 = $path1.getPointAtLength(length1 * t);
      const pointOnPath2 = $path2.getPointAtLength(length2 * t);
      const prefix = isPath ? i === 0 ? "M" : "L" : "";
      v1 += prefix + round(pointOnPath1.x, 3) + separator + pointOnPath1.y + " ";
      v2 += prefix + round(pointOnPath2.x, 3) + separator + pointOnPath2.y + " ";
    }
  }
  $path1[morphPointsSymbol] = v2;
  return [v1, v2];
};
var getScaleFactor = ($el) => {
  let scaleFactor = 1;
  if ($el && $el.getCTM) {
    const ctm = $el.getCTM();
    if (ctm) {
      const scaleX = sqrt(ctm.a * ctm.a + ctm.b * ctm.b);
      const scaleY = sqrt(ctm.c * ctm.c + ctm.d * ctm.d);
      scaleFactor = (scaleX + scaleY) / 2;
    }
  }
  return scaleFactor;
};
var createDrawableProxy = ($el, start, end) => {
  const pathLength = K;
  const computedStyles = getComputedStyle($el);
  const strokeLineCap = computedStyles.strokeLinecap;
  const $scalled = computedStyles.vectorEffect === "non-scaling-stroke" ? $el : null;
  let currentCap = strokeLineCap;
  const proxy = new Proxy($el, {
    get(target, property) {
      const value = target[property];
      if (property === proxyTargetSymbol)
        return target;
      if (property === "setAttribute") {
        return (...args) => {
          if (args[0] === "draw") {
            const value2 = args[1];
            const values = value2.split(" ");
            const v1 = +values[0];
            const v2 = +values[1];
            const scaleFactor = getScaleFactor($scalled);
            const os = v1 * -1000 * scaleFactor;
            const d1 = v2 * pathLength * scaleFactor + os;
            const d2 = pathLength * scaleFactor + (v1 === 0 && v2 === 1 || v1 === 1 && v2 === 0 ? 0 : 10 * scaleFactor) - d1;
            if (strokeLineCap !== "butt") {
              const newCap = v1 === v2 ? "butt" : strokeLineCap;
              if (currentCap !== newCap) {
                target.style.strokeLinecap = `${newCap}`;
                currentCap = newCap;
              }
            }
            target.setAttribute("stroke-dashoffset", `${os}`);
            target.setAttribute("stroke-dasharray", `${d1} ${d2}`);
          }
          return Reflect.apply(value, target, args);
        };
      }
      if (isFnc(value)) {
        return (...args) => Reflect.apply(value, target, args);
      } else {
        return value;
      }
    }
  });
  if ($el.getAttribute("pathLength") !== `${pathLength}`) {
    $el.setAttribute("pathLength", `${pathLength}`);
    proxy.setAttribute("draw", `${start} ${end}`);
  }
  return proxy;
};
var createDrawable = (selector, start = 0, end = 0) => {
  const els = parseTargets(selector);
  return els.map(($el) => createDrawableProxy($el, start, end));
};
var getPathPoint = ($path, progress, lookup = 0) => {
  return $path.getPointAtLength(progress + lookup >= 1 ? progress + lookup : 0);
};
var getPathProgess = ($path, pathProperty) => {
  return ($el) => {
    const totalLength = +$path.getTotalLength();
    const inSvg = $el[isSvgSymbol];
    const ctm = $path.getCTM();
    return {
      from: 0,
      to: totalLength,
      modifier: (progress) => {
        if (pathProperty === "a") {
          const p0 = getPathPoint($path, progress, -1);
          const p1 = getPathPoint($path, progress, 1);
          return atan2(p1.y - p0.y, p1.x - p0.x) * 180 / PI;
        } else {
          const p = getPathPoint($path, progress, 0);
          return pathProperty === "x" ? inSvg || !ctm ? p.x : p.x * ctm.a + p.y * ctm.c + ctm.e : inSvg || !ctm ? p.y : p.x * ctm.b + p.y * ctm.d + ctm.f;
        }
      }
    };
  };
};
var createMotionPath = (path) => {
  const $path = getPath2(path);
  if (!$path)
    return;
  return {
    translateX: getPathProgess($path, "x"),
    translateY: getPathProgess($path, "y"),
    rotate: getPathProgess($path, "a")
  };
};
var cssReservedProperties = ["opacity", "rotate", "overflow", "color"];
var isValidSVGAttribute = (el, propertyName) => {
  if (cssReservedProperties.includes(propertyName))
    return false;
  if (el.getAttribute(propertyName) || propertyName in el) {
    if (propertyName === "scale") {
      const elParentNode = el.parentNode;
      return elParentNode && elParentNode.tagName === "filter";
    }
    return true;
  }
};
var svg = {
  morphTo,
  createMotionPath,
  createDrawable
};
var rgbToRgba = (rgbValue) => {
  const rgba = rgbExecRgx.exec(rgbValue) || rgbaExecRgx.exec(rgbValue);
  const a = !isUnd(rgba[4]) ? +rgba[4] : 1;
  return [
    +rgba[1],
    +rgba[2],
    +rgba[3],
    a
  ];
};
var hexToRgba = (hexValue) => {
  const hexLength = hexValue.length;
  const isShort = hexLength === 4 || hexLength === 5;
  return [
    +("0x" + hexValue[1] + hexValue[isShort ? 1 : 2]),
    +("0x" + hexValue[isShort ? 2 : 3] + hexValue[isShort ? 2 : 4]),
    +("0x" + hexValue[isShort ? 3 : 5] + hexValue[isShort ? 3 : 6]),
    hexLength === 5 || hexLength === 9 ? +(+("0x" + hexValue[isShort ? 4 : 7] + hexValue[isShort ? 4 : 8]) / 255).toFixed(3) : 1
  ];
};
var hue2rgb = (p, q, t) => {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  return t < 1 / 6 ? p + (q - p) * 6 * t : t < 1 / 2 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p;
};
var hslToRgba = (hslValue) => {
  const hsla = hslExecRgx.exec(hslValue) || hslaExecRgx.exec(hslValue);
  const h = +hsla[1] / 360;
  const s = +hsla[2] / 100;
  const l = +hsla[3] / 100;
  const a = !isUnd(hsla[4]) ? +hsla[4] : 1;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = round(hue2rgb(p, q, h + 1 / 3) * 255, 0);
    g = round(hue2rgb(p, q, h) * 255, 0);
    b = round(hue2rgb(p, q, h - 1 / 3) * 255, 0);
  }
  return [r, g, b, a];
};
var convertColorStringValuesToRgbaArray = (colorString) => {
  return isRgb(colorString) ? rgbToRgba(colorString) : isHex(colorString) ? hexToRgba(colorString) : isHsl(colorString) ? hslToRgba(colorString) : [0, 0, 0, 1];
};
var setValue = (targetValue, defaultValue) => {
  return isUnd(targetValue) ? defaultValue : targetValue;
};
var getFunctionValue = (value, target, index, total, store) => {
  if (isFnc(value)) {
    const func = () => {
      const computed = value(target, index, total);
      return !isNaN(+computed) ? +computed : computed || 0;
    };
    if (store) {
      store.func = func;
    }
    return func();
  } else {
    return value;
  }
};
var getTweenType = (target, prop) => {
  return !target[isDomSymbol] ? tweenTypes.OBJECT : target[isSvgSymbol] && isValidSVGAttribute(target, prop) ? tweenTypes.ATTRIBUTE : validTransforms.includes(prop) || shortTransforms.get(prop) ? tweenTypes.TRANSFORM : stringStartsWith(prop, "--") ? tweenTypes.CSS_VAR : (prop in target.style) ? tweenTypes.CSS : (prop in target) ? tweenTypes.OBJECT : tweenTypes.ATTRIBUTE;
};
var getCSSValue = (target, propName, animationInlineStyles) => {
  const inlineStyles = target.style[propName];
  if (inlineStyles && animationInlineStyles) {
    animationInlineStyles[propName] = inlineStyles;
  }
  const value = inlineStyles || getComputedStyle(target[proxyTargetSymbol] || target).getPropertyValue(propName);
  return value === "auto" ? "0" : value;
};
var getOriginalAnimatableValue = (target, propName, tweenType, animationInlineStyles) => {
  const type = !isUnd(tweenType) ? tweenType : getTweenType(target, propName);
  return type === tweenTypes.OBJECT ? target[propName] || 0 : type === tweenTypes.ATTRIBUTE ? target.getAttribute(propName) : type === tweenTypes.TRANSFORM ? parseInlineTransforms(target, propName, animationInlineStyles) : type === tweenTypes.CSS_VAR ? getCSSValue(target, propName, animationInlineStyles).trimStart() : getCSSValue(target, propName, animationInlineStyles);
};
var getRelativeValue = (x, y, operator) => {
  return operator === "-" ? x - y : operator === "+" ? x + y : x * y;
};
var createDecomposedValueTargetObject = () => {
  return {
    t: valueTypes.NUMBER,
    n: 0,
    u: null,
    o: null,
    d: null,
    s: null
  };
};
var decomposeRawValue = (rawValue, targetObject) => {
  targetObject.t = valueTypes.NUMBER;
  targetObject.n = 0;
  targetObject.u = null;
  targetObject.o = null;
  targetObject.d = null;
  targetObject.s = null;
  if (!rawValue)
    return targetObject;
  const num = +rawValue;
  if (!isNaN(num)) {
    targetObject.n = num;
    return targetObject;
  } else {
    let str = rawValue;
    if (str[1] === "=") {
      targetObject.o = str[0];
      str = str.slice(2);
    }
    const unitMatch = str.includes(" ") ? false : unitsExecRgx.exec(str);
    if (unitMatch) {
      targetObject.t = valueTypes.UNIT;
      targetObject.n = +unitMatch[1];
      targetObject.u = unitMatch[2];
      return targetObject;
    } else if (targetObject.o) {
      targetObject.n = +str;
      return targetObject;
    } else if (isCol(str)) {
      targetObject.t = valueTypes.COLOR;
      targetObject.d = convertColorStringValuesToRgbaArray(str);
      return targetObject;
    } else {
      const matchedNumbers = str.match(digitWithExponentRgx);
      targetObject.t = valueTypes.COMPLEX;
      targetObject.d = matchedNumbers ? matchedNumbers.map(Number) : [];
      targetObject.s = str.split(digitWithExponentRgx) || [];
      return targetObject;
    }
  }
};
var decomposeTweenValue = (tween, targetObject) => {
  targetObject.t = tween._valueType;
  targetObject.n = tween._toNumber;
  targetObject.u = tween._unit;
  targetObject.o = null;
  targetObject.d = cloneArray(tween._toNumbers);
  targetObject.s = cloneArray(tween._strings);
  return targetObject;
};
var decomposedOriginalValue = createDecomposedValueTargetObject();
var lookups = {
  _rep: new WeakMap,
  _add: new Map
};
var getTweenSiblings = (target, property, lookup = "_rep") => {
  const lookupMap = lookups[lookup];
  let targetLookup = lookupMap.get(target);
  if (!targetLookup) {
    targetLookup = {};
    lookupMap.set(target, targetLookup);
  }
  return targetLookup[property] ? targetLookup[property] : targetLookup[property] = {
    _head: null,
    _tail: null
  };
};
var addTweenSortMethod = (p, c) => {
  return p._isOverridden || p._absoluteStartTime > c._absoluteStartTime;
};
var overrideTween = (tween) => {
  tween._isOverlapped = 1;
  tween._isOverridden = 1;
  tween._changeDuration = minValue;
  tween._currentTime = minValue;
};
var composeTween = (tween, siblings) => {
  const tweenCompositionType = tween._composition;
  if (tweenCompositionType === compositionTypes.replace) {
    const tweenAbsStartTime = tween._absoluteStartTime;
    addChild(siblings, tween, addTweenSortMethod, "_prevRep", "_nextRep");
    const prevSibling = tween._prevRep;
    if (prevSibling) {
      const prevParent = prevSibling.parent;
      const prevAbsEndTime = prevSibling._absoluteStartTime + prevSibling._changeDuration;
      if (tween.parent.id !== prevParent.id && prevParent.iterationCount > 1 && prevAbsEndTime + (prevParent.duration - prevParent.iterationDuration) > tweenAbsStartTime) {
        overrideTween(prevSibling);
        let prevPrevSibling = prevSibling._prevRep;
        while (prevPrevSibling && prevPrevSibling.parent.id === prevParent.id) {
          overrideTween(prevPrevSibling);
          prevPrevSibling = prevPrevSibling._prevRep;
        }
      }
      const absoluteUpdateStartTime = tweenAbsStartTime - tween._delay;
      if (prevAbsEndTime > absoluteUpdateStartTime) {
        const prevChangeStartTime = prevSibling._startTime;
        const prevTLOffset = prevAbsEndTime - (prevChangeStartTime + prevSibling._updateDuration);
        const updatedPrevChangeDuration = round(absoluteUpdateStartTime - prevTLOffset - prevChangeStartTime, 12);
        prevSibling._changeDuration = updatedPrevChangeDuration;
        prevSibling._currentTime = updatedPrevChangeDuration;
        prevSibling._isOverlapped = 1;
        if (updatedPrevChangeDuration < minValue) {
          overrideTween(prevSibling);
        }
      }
      let pausePrevParentAnimation = true;
      forEachChildren(prevParent, (t) => {
        if (!t._isOverlapped)
          pausePrevParentAnimation = false;
      });
      if (pausePrevParentAnimation) {
        const prevParentTL = prevParent.parent;
        if (prevParentTL) {
          let pausePrevParentTL = true;
          forEachChildren(prevParentTL, (a) => {
            if (a !== prevParent) {
              forEachChildren(a, (t) => {
                if (!t._isOverlapped)
                  pausePrevParentTL = false;
              });
            }
          });
          if (pausePrevParentTL) {
            prevParentTL.cancel();
          }
        } else {
          prevParent.cancel();
        }
      }
    }
  } else if (tweenCompositionType === compositionTypes.blend) {
    const additiveTweenSiblings = getTweenSiblings(tween.target, tween.property, "_add");
    const additiveAnimation = addAdditiveAnimation(lookups._add);
    let lookupTween = additiveTweenSiblings._head;
    if (!lookupTween) {
      lookupTween = { ...tween };
      lookupTween._composition = compositionTypes.replace;
      lookupTween._updateDuration = minValue;
      lookupTween._startTime = 0;
      lookupTween._numbers = cloneArray(tween._fromNumbers);
      lookupTween._number = 0;
      lookupTween._next = null;
      lookupTween._prev = null;
      addChild(additiveTweenSiblings, lookupTween);
      addChild(additiveAnimation, lookupTween);
    }
    const toNumber = tween._toNumber;
    tween._fromNumber = lookupTween._fromNumber - toNumber;
    tween._toNumber = 0;
    tween._numbers = cloneArray(tween._fromNumbers);
    tween._number = 0;
    lookupTween._fromNumber = toNumber;
    if (tween._toNumbers) {
      const toNumbers = cloneArray(tween._toNumbers);
      if (toNumbers) {
        toNumbers.forEach((value, i) => {
          tween._fromNumbers[i] = lookupTween._fromNumbers[i] - value;
          tween._toNumbers[i] = 0;
        });
      }
      lookupTween._fromNumbers = toNumbers;
    }
    addChild(additiveTweenSiblings, tween, null, "_prevAdd", "_nextAdd");
  }
  return tween;
};
var removeTweenSliblings = (tween) => {
  const tweenComposition = tween._composition;
  if (tweenComposition !== compositionTypes.none) {
    const tweenTarget = tween.target;
    const tweenProperty = tween.property;
    const replaceTweensLookup = lookups._rep;
    const replaceTargetProps = replaceTweensLookup.get(tweenTarget);
    const tweenReplaceSiblings = replaceTargetProps[tweenProperty];
    removeChild(tweenReplaceSiblings, tween, "_prevRep", "_nextRep");
    if (tweenComposition === compositionTypes.blend) {
      const addTweensLookup = lookups._add;
      const addTargetProps = addTweensLookup.get(tweenTarget);
      if (!addTargetProps)
        return;
      const additiveTweenSiblings = addTargetProps[tweenProperty];
      const additiveAnimation = additive.animation;
      removeChild(additiveTweenSiblings, tween, "_prevAdd", "_nextAdd");
      const lookupTween = additiveTweenSiblings._head;
      if (lookupTween && lookupTween === additiveTweenSiblings._tail) {
        removeChild(additiveTweenSiblings, lookupTween, "_prevAdd", "_nextAdd");
        removeChild(additiveAnimation, lookupTween);
        let shouldClean = true;
        for (let prop in addTargetProps) {
          if (addTargetProps[prop]._head) {
            shouldClean = false;
            break;
          }
        }
        if (shouldClean) {
          addTweensLookup.delete(tweenTarget);
        }
      }
    }
  }
  return tween;
};
var resetTimerProperties = (timer) => {
  timer.paused = true;
  timer.began = false;
  timer.completed = false;
  return timer;
};
var reviveTimer = (timer) => {
  if (!timer._cancelled)
    return timer;
  if (timer._hasChildren) {
    forEachChildren(timer, reviveTimer);
  } else {
    forEachChildren(timer, (tween) => {
      if (tween._composition !== compositionTypes.none) {
        composeTween(tween, getTweenSiblings(tween.target, tween.property));
      }
    });
  }
  timer._cancelled = 0;
  return timer;
};
var timerId = 0;

class Timer extends Clock {
  constructor(parameters = {}, parent = null, parentPosition = 0) {
    super(0);
    const {
      id,
      delay,
      duration,
      reversed,
      alternate,
      loop,
      loopDelay,
      autoplay,
      frameRate,
      playbackRate,
      onComplete,
      onLoop,
      onPause,
      onBegin,
      onBeforeUpdate,
      onUpdate
    } = parameters;
    if (scope.current)
      scope.current.register(this);
    const timerInitTime = parent ? 0 : engine._elapsedTime;
    const timerDefaults = parent ? parent.defaults : globals.defaults;
    const timerDelay = isFnc(delay) || isUnd(delay) ? timerDefaults.delay : +delay;
    const timerDuration = isFnc(duration) || isUnd(duration) ? Infinity : +duration;
    const timerLoop = setValue(loop, timerDefaults.loop);
    const timerLoopDelay = setValue(loopDelay, timerDefaults.loopDelay);
    const timerIterationCount = timerLoop === true || timerLoop === Infinity || timerLoop < 0 ? Infinity : timerLoop + 1;
    let offsetPosition = 0;
    if (parent) {
      offsetPosition = parentPosition;
    } else {
      if (!engine.reqId)
        engine.requestTick(now());
      offsetPosition = (engine._elapsedTime - engine._startTime) * globals.timeScale;
    }
    this.id = !isUnd(id) ? id : ++timerId;
    this.parent = parent;
    this.duration = clampInfinity((timerDuration + timerLoopDelay) * timerIterationCount - timerLoopDelay) || minValue;
    this.backwards = false;
    this.paused = true;
    this.began = false;
    this.completed = false;
    this.onBegin = onBegin || timerDefaults.onBegin;
    this.onBeforeUpdate = onBeforeUpdate || timerDefaults.onBeforeUpdate;
    this.onUpdate = onUpdate || timerDefaults.onUpdate;
    this.onLoop = onLoop || timerDefaults.onLoop;
    this.onPause = onPause || timerDefaults.onPause;
    this.onComplete = onComplete || timerDefaults.onComplete;
    this.iterationDuration = timerDuration;
    this.iterationCount = timerIterationCount;
    this._autoplay = parent ? false : setValue(autoplay, timerDefaults.autoplay);
    this._offset = offsetPosition;
    this._delay = timerDelay;
    this._loopDelay = timerLoopDelay;
    this._iterationTime = 0;
    this._currentIteration = 0;
    this._resolve = noop;
    this._running = false;
    this._reversed = +setValue(reversed, timerDefaults.reversed);
    this._reverse = this._reversed;
    this._cancelled = 0;
    this._alternate = setValue(alternate, timerDefaults.alternate);
    this._prev = null;
    this._next = null;
    this._elapsedTime = timerInitTime;
    this._startTime = timerInitTime;
    this._lastTime = timerInitTime;
    this._fps = setValue(frameRate, timerDefaults.frameRate);
    this._speed = setValue(playbackRate, timerDefaults.playbackRate);
  }
  get cancelled() {
    return !!this._cancelled;
  }
  set cancelled(cancelled) {
    cancelled ? this.cancel() : this.reset(1).play();
  }
  get currentTime() {
    return clamp(round(this._currentTime, globals.precision), -this._delay, this.duration);
  }
  set currentTime(time) {
    const paused = this.paused;
    this.pause().seek(+time);
    if (!paused)
      this.resume();
  }
  get iterationCurrentTime() {
    return round(this._iterationTime, globals.precision);
  }
  set iterationCurrentTime(time) {
    this.currentTime = this.iterationDuration * this._currentIteration + time;
  }
  get progress() {
    return clamp(round(this._currentTime / this.duration, 10), 0, 1);
  }
  set progress(progress) {
    this.currentTime = this.duration * progress;
  }
  get iterationProgress() {
    return clamp(round(this._iterationTime / this.iterationDuration, 10), 0, 1);
  }
  set iterationProgress(progress) {
    const iterationDuration = this.iterationDuration;
    this.currentTime = iterationDuration * this._currentIteration + iterationDuration * progress;
  }
  get currentIteration() {
    return this._currentIteration;
  }
  set currentIteration(iterationCount) {
    this.currentTime = this.iterationDuration * clamp(+iterationCount, 0, this.iterationCount - 1);
  }
  get reversed() {
    return !!this._reversed;
  }
  set reversed(reverse) {
    reverse ? this.reverse() : this.play();
  }
  get speed() {
    return super.speed;
  }
  set speed(playbackRate) {
    super.speed = playbackRate;
    this.resetTime();
  }
  reset(internalRender = 0) {
    reviveTimer(this);
    if (this._reversed && !this._reverse)
      this.reversed = false;
    this._iterationTime = this.iterationDuration;
    tick(this, 0, 1, internalRender, tickModes.FORCE);
    resetTimerProperties(this);
    if (this._hasChildren) {
      forEachChildren(this, resetTimerProperties);
    }
    return this;
  }
  init(internalRender = 0) {
    this.fps = this._fps;
    this.speed = this._speed;
    if (!internalRender && this._hasChildren) {
      tick(this, this.duration, 1, internalRender, tickModes.FORCE);
    }
    this.reset(internalRender);
    const autoplay = this._autoplay;
    if (autoplay === true) {
      this.resume();
    } else if (autoplay && !isUnd(autoplay.linked)) {
      autoplay.link(this);
    }
    return this;
  }
  resetTime() {
    const timeScale = 1 / (this._speed * engine._speed);
    this._startTime = now() - (this._currentTime + this._delay) * timeScale;
    return this;
  }
  pause() {
    if (this.paused)
      return this;
    this.paused = true;
    this.onPause(this);
    return this;
  }
  resume() {
    if (!this.paused)
      return this;
    this.paused = false;
    if (this.duration <= minValue && !this._hasChildren) {
      tick(this, minValue, 0, 0, tickModes.FORCE);
    } else {
      if (!this._running) {
        addChild(engine, this);
        engine._hasChildren = true;
        this._running = true;
      }
      this.resetTime();
      this._startTime -= 12;
      engine.wake();
    }
    return this;
  }
  restart() {
    return this.reset(0).resume();
  }
  seek(time, muteCallbacks = 0, internalRender = 0) {
    reviveTimer(this);
    this.completed = false;
    const isPaused = this.paused;
    this.paused = true;
    tick(this, time + this._delay, ~~muteCallbacks, ~~internalRender, tickModes.AUTO);
    return isPaused ? this : this.resume();
  }
  alternate() {
    const reversed = this._reversed;
    const count = this.iterationCount;
    const duration = this.iterationDuration;
    const iterations = count === Infinity ? floor(maxValue / duration) : count;
    this._reversed = +(this._alternate && !(iterations % 2) ? reversed : !reversed);
    if (count === Infinity) {
      this.iterationProgress = this._reversed ? 1 - this.iterationProgress : this.iterationProgress;
    } else {
      this.seek(duration * iterations - this._currentTime);
    }
    this.resetTime();
    return this;
  }
  play() {
    if (this._reversed)
      this.alternate();
    return this.resume();
  }
  reverse() {
    if (!this._reversed)
      this.alternate();
    return this.resume();
  }
  cancel() {
    if (this._hasChildren) {
      forEachChildren(this, (child) => child.cancel(), true);
    } else {
      forEachChildren(this, removeTweenSliblings);
    }
    this._cancelled = 1;
    return this.pause();
  }
  stretch(newDuration) {
    const currentDuration = this.duration;
    const normlizedDuration = normalizeTime(newDuration);
    if (currentDuration === normlizedDuration)
      return this;
    const timeScale = newDuration / currentDuration;
    const isSetter = newDuration <= minValue;
    this.duration = isSetter ? minValue : normlizedDuration;
    this.iterationDuration = isSetter ? minValue : normalizeTime(this.iterationDuration * timeScale);
    this._offset *= timeScale;
    this._delay *= timeScale;
    this._loopDelay *= timeScale;
    return this;
  }
  revert() {
    tick(this, 0, 1, 0, tickModes.AUTO);
    const ap = this._autoplay;
    if (ap && ap.linked && ap.linked === this)
      ap.revert();
    return this.cancel();
  }
  complete() {
    return this.seek(this.duration).cancel();
  }
  then(callback = noop) {
    const then = this.then;
    const onResolve = () => {
      this.then = null;
      callback(this);
      this.then = then;
      this._resolve = noop;
    };
    return new Promise((r) => {
      this._resolve = () => r(onResolve());
      if (this.completed)
        this._resolve();
      return this;
    });
  }
}
var none = (t) => t;
var calcBezier = (aT, aA1, aA2) => (((1 - 3 * aA2 + 3 * aA1) * aT + (3 * aA2 - 6 * aA1)) * aT + 3 * aA1) * aT;
var binarySubdivide = (aX, mX1, mX2) => {
  let aA = 0, aB = 1, currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (abs2(currentX) > 0.0000001 && ++i < 100);
  return currentT;
};
var cubicBezier = (mX1 = 0.5, mY1 = 0, mX2 = 0.5, mY2 = 1) => mX1 === mY1 && mX2 === mY2 ? none : (t) => t === 0 || t === 1 ? t : calcBezier(binarySubdivide(t, mX1, mX2), mY1, mY2);
var steps = (steps2 = 10, fromStart) => {
  const roundMethod = fromStart ? ceil : floor;
  return (t) => roundMethod(clamp(t, 0, 1) * steps2) * (1 / steps2);
};
var linear = (...args) => {
  const argsLength = args.length;
  if (!argsLength)
    return none;
  const totalPoints = argsLength - 1;
  const firstArg = args[0];
  const lastArg = args[totalPoints];
  const xPoints = [0];
  const yPoints = [parseNumber(firstArg)];
  for (let i = 1;i < totalPoints; i++) {
    const arg = args[i];
    const splitValue = isStr(arg) ? arg.trim().split(" ") : [arg];
    const value = splitValue[0];
    const percent = splitValue[1];
    xPoints.push(!isUnd(percent) ? parseNumber(percent) / 100 : i / totalPoints);
    yPoints.push(parseNumber(value));
  }
  yPoints.push(parseNumber(lastArg));
  xPoints.push(1);
  return function easeLinear(t) {
    for (let i = 1, l = xPoints.length;i < l; i++) {
      const currentX = xPoints[i];
      if (t <= currentX) {
        const prevX = xPoints[i - 1];
        const prevY = yPoints[i - 1];
        return prevY + (yPoints[i] - prevY) * (t - prevX) / (currentX - prevX);
      }
    }
    return yPoints[yPoints.length - 1];
  };
};
var irregular = (length = 10, randomness = 1) => {
  const values = [0];
  const total = length - 1;
  for (let i = 1;i < total; i++) {
    const previousValue = values[i - 1];
    const spacing = i / total;
    const segmentEnd = (i + 1) / total;
    const randomVariation = spacing + (segmentEnd - spacing) * Math.random();
    const randomValue = spacing * (1 - randomness) + randomVariation * randomness;
    values.push(clamp(randomValue, previousValue, 1));
  }
  values.push(1);
  return linear(...values);
};
var halfPI = PI / 2;
var doublePI = PI * 2;
var easeInPower = (p = 1.68) => (t) => pow(t, +p);
var easeInFunctions = {
  [emptyString]: easeInPower,
  Quad: easeInPower(2),
  Cubic: easeInPower(3),
  Quart: easeInPower(4),
  Quint: easeInPower(5),
  Sine: (t) => 1 - cos(t * halfPI),
  Circ: (t) => 1 - sqrt(1 - t * t),
  Expo: (t) => t ? pow(2, 10 * t - 10) : 0,
  Bounce: (t) => {
    let pow2, b = 4;
    while (t < ((pow2 = pow(2, --b)) - 1) / 11)
      ;
    return 1 / pow(4, 3 - b) - 7.5625 * pow((pow2 * 3 - 2) / 22 - t, 2);
  },
  Back: (overshoot = 1.70158) => (t) => (+overshoot + 1) * t * t * t - +overshoot * t * t,
  Elastic: (amplitude = 1, period = 0.3) => {
    const a = clamp(+amplitude, 1, 10);
    const p = clamp(+period, minValue, 2);
    const s = p / doublePI * asin(1 / a);
    const e = doublePI / p;
    return (t) => t === 0 || t === 1 ? t : -a * pow(2, -10 * (1 - t)) * sin((1 - t - s) * e);
  }
};
var easeTypes = {
  in: (easeIn) => (t) => easeIn(t),
  out: (easeIn) => (t) => 1 - easeIn(1 - t),
  inOut: (easeIn) => (t) => t < 0.5 ? easeIn(t * 2) / 2 : 1 - easeIn(t * -2 + 2) / 2,
  outIn: (easeIn) => (t) => t < 0.5 ? (1 - easeIn(1 - t * 2)) / 2 : (easeIn(t * 2 - 1) + 1) / 2
};
var parseEaseString = (string, easesFunctions, easesLookups) => {
  if (easesLookups[string])
    return easesLookups[string];
  if (string.indexOf("(") <= -1) {
    const hasParams = easeTypes[string] || string.includes("Back") || string.includes("Elastic");
    const parsedFn = hasParams ? easesFunctions[string]() : easesFunctions[string];
    return parsedFn ? easesLookups[string] = parsedFn : none;
  } else {
    const split = string.slice(0, -1).split("(");
    const parsedFn = easesFunctions[split[0]];
    return parsedFn ? easesLookups[string] = parsedFn(...split[1].split(",")) : none;
  }
};
var eases = /* @__PURE__ */ (() => {
  const list = { linear, irregular, steps, cubicBezier };
  for (let type in easeTypes) {
    for (let name in easeInFunctions) {
      const easeIn = easeInFunctions[name];
      const easeType = easeTypes[type];
      list[type + name] = name === emptyString || name === "Back" || name === "Elastic" ? (a, b) => easeType(easeIn(a, b)) : easeType(easeIn);
    }
  }
  return list;
})();
var JSEasesLookups = { linear: none };
var parseEasings = (ease) => isFnc(ease) ? ease : isStr(ease) ? parseEaseString(ease, eases, JSEasesLookups) : none;
var propertyNamesCache = {};
var sanitizePropertyName = (propertyName, target, tweenType) => {
  if (tweenType === tweenTypes.TRANSFORM) {
    const t = shortTransforms.get(propertyName);
    return t ? t : propertyName;
  } else if (tweenType === tweenTypes.CSS || tweenType === tweenTypes.ATTRIBUTE && (isSvg(target) && (propertyName in target.style))) {
    const cachedPropertyName = propertyNamesCache[propertyName];
    if (cachedPropertyName) {
      return cachedPropertyName;
    } else {
      const lowerCaseName = propertyName ? toLowerCase(propertyName) : propertyName;
      propertyNamesCache[propertyName] = lowerCaseName;
      return lowerCaseName;
    }
  } else {
    return propertyName;
  }
};
var angleUnitsMap = { deg: 1, rad: 180 / PI, turn: 360 };
var convertedValuesCache = {};
var convertValueUnit = (el, decomposedValue, unit, force = false) => {
  const currentUnit = decomposedValue.u;
  const currentNumber = decomposedValue.n;
  if (decomposedValue.t === valueTypes.UNIT && currentUnit === unit) {
    return decomposedValue;
  }
  const cachedKey = currentNumber + currentUnit + unit;
  const cached = convertedValuesCache[cachedKey];
  if (!isUnd(cached) && !force) {
    decomposedValue.n = cached;
  } else {
    let convertedValue;
    if (currentUnit in angleUnitsMap) {
      convertedValue = currentNumber * angleUnitsMap[currentUnit] / angleUnitsMap[unit];
    } else {
      const baseline = 100;
      const tempEl = el.cloneNode();
      const parentNode = el.parentNode;
      const parentEl = parentNode && parentNode !== doc ? parentNode : doc.body;
      parentEl.appendChild(tempEl);
      const elStyle = tempEl.style;
      elStyle.width = baseline + currentUnit;
      const currentUnitWidth = tempEl.offsetWidth || baseline;
      elStyle.width = baseline + unit;
      const newUnitWidth = tempEl.offsetWidth || baseline;
      const factor = currentUnitWidth / newUnitWidth;
      parentEl.removeChild(tempEl);
      convertedValue = factor * currentNumber;
    }
    decomposedValue.n = convertedValue;
    convertedValuesCache[cachedKey] = convertedValue;
  }
  decomposedValue.t, valueTypes.UNIT;
  decomposedValue.u = unit;
  return decomposedValue;
};
var cleanInlineStyles = (renderable) => {
  if (renderable._hasChildren) {
    forEachChildren(renderable, cleanInlineStyles, true);
  } else {
    const animation = renderable;
    animation.pause();
    forEachChildren(animation, (tween) => {
      const tweenProperty = tween.property;
      const tweenTarget = tween.target;
      if (tweenTarget[isDomSymbol]) {
        const targetStyle = tweenTarget.style;
        const originalInlinedValue = animation._inlineStyles[tweenProperty];
        if (tween._tweenType === tweenTypes.TRANSFORM) {
          const cachedTransforms = tweenTarget[transformsSymbol];
          if (isUnd(originalInlinedValue) || originalInlinedValue === emptyString) {
            delete cachedTransforms[tweenProperty];
          } else {
            cachedTransforms[tweenProperty] = originalInlinedValue;
          }
          if (tween._renderTransforms) {
            if (!Object.keys(cachedTransforms).length) {
              targetStyle.removeProperty("transform");
            } else {
              let str = emptyString;
              for (let key in cachedTransforms) {
                str += transformsFragmentStrings[key] + cachedTransforms[key] + ") ";
              }
              targetStyle.transform = str;
            }
          }
        } else {
          if (isUnd(originalInlinedValue) || originalInlinedValue === emptyString) {
            targetStyle.removeProperty(tweenProperty);
          } else {
            targetStyle[tweenProperty] = originalInlinedValue;
          }
        }
        if (animation._tail === tween) {
          animation.targets.forEach((t) => {
            if (t.getAttribute && t.getAttribute("style") === emptyString) {
              t.removeAttribute("style");
            }
          });
        }
      }
    });
  }
  return renderable;
};
var fromTargetObject = createDecomposedValueTargetObject();
var toTargetObject = createDecomposedValueTargetObject();
var toFunctionStore = { func: null };
var keyframesTargetArray = [null];
var fastSetValuesArray = [null, null];
var keyObjectTarget = { to: null };
var tweenId = 0;
var keyframes;
var key;
var generateKeyframes = (keyframes2, parameters) => {
  const properties = {};
  if (isArr(keyframes2)) {
    const propertyNames = [].concat(...keyframes2.map((key2) => Object.keys(key2))).filter(isKey);
    for (let i = 0, l = propertyNames.length;i < l; i++) {
      const propName = propertyNames[i];
      const propArray = keyframes2.map((key2) => {
        const newKey = {};
        for (let p in key2) {
          const keyValue = key2[p];
          if (isKey(p)) {
            if (p === propName) {
              newKey.to = keyValue;
            }
          } else {
            newKey[p] = keyValue;
          }
        }
        return newKey;
      });
      properties[propName] = propArray;
    }
  } else {
    const totalDuration = setValue(parameters.duration, globals.defaults.duration);
    const keys = Object.keys(keyframes2).map((key2) => {
      return { o: parseFloat(key2) / 100, p: keyframes2[key2] };
    }).sort((a, b) => a.o - b.o);
    keys.forEach((key2) => {
      const offset = key2.o;
      const prop = key2.p;
      for (let name in prop) {
        if (isKey(name)) {
          let propArray = properties[name];
          if (!propArray)
            propArray = properties[name] = [];
          const duration = offset * totalDuration;
          let length = propArray.length;
          let prevKey = propArray[length - 1];
          const keyObj = { to: prop[name] };
          let durProgress = 0;
          for (let i = 0;i < length; i++) {
            durProgress += propArray[i].duration;
          }
          if (length === 1) {
            keyObj.from = prevKey.to;
          }
          if (prop.ease) {
            keyObj.ease = prop.ease;
          }
          keyObj.duration = duration - (length ? durProgress : 0);
          propArray.push(keyObj);
        }
      }
      return key2;
    });
    for (let name in properties) {
      const propArray = properties[name];
      let prevEase;
      for (let i = 0, l = propArray.length;i < l; i++) {
        const prop = propArray[i];
        const currentEase = prop.ease;
        prop.ease = prevEase ? prevEase : undefined;
        prevEase = currentEase;
      }
      if (!propArray[0].duration) {
        propArray.shift();
      }
    }
  }
  return properties;
};

class JSAnimation extends Timer {
  constructor(targets, parameters, parent, parentPosition, fastSet = false, index = 0, length = 0) {
    super(parameters, parent, parentPosition);
    const parsedTargets = registerTargets(targets);
    const targetsLength = parsedTargets.length;
    const kfParams = parameters.keyframes;
    const params = kfParams ? mergeObjects(generateKeyframes(kfParams, parameters), parameters) : parameters;
    const {
      delay,
      duration,
      ease,
      playbackEase,
      modifier,
      composition,
      onRender
    } = params;
    const animDefaults = parent ? parent.defaults : globals.defaults;
    const animaPlaybackEase = setValue(playbackEase, animDefaults.playbackEase);
    const animEase = animaPlaybackEase ? parseEasings(animaPlaybackEase) : null;
    const hasSpring = !isUnd(ease) && !isUnd(ease.ease);
    const tEasing = hasSpring ? ease.ease : setValue(ease, animEase ? "linear" : animDefaults.ease);
    const tDuration = hasSpring ? ease.duration : setValue(duration, animDefaults.duration);
    const tDelay = setValue(delay, animDefaults.delay);
    const tModifier = modifier || animDefaults.modifier;
    const tComposition = isUnd(composition) && targetsLength >= K ? compositionTypes.none : !isUnd(composition) ? composition : animDefaults.composition;
    const animInlineStyles = {};
    const absoluteOffsetTime = this._offset + (parent ? parent._offset : 0);
    let iterationDuration = NaN;
    let iterationDelay = NaN;
    let animationAnimationLength = 0;
    let shouldTriggerRender = 0;
    for (let targetIndex = 0;targetIndex < targetsLength; targetIndex++) {
      const target = parsedTargets[targetIndex];
      const ti = index || targetIndex;
      const tl = length || targetsLength;
      let lastTransformGroupIndex = NaN;
      let lastTransformGroupLength = NaN;
      for (let p in params) {
        if (isKey(p)) {
          const tweenType = getTweenType(target, p);
          const propName = sanitizePropertyName(p, target, tweenType);
          let propValue = params[p];
          const isPropValueArray = isArr(propValue);
          if (fastSet && !isPropValueArray) {
            fastSetValuesArray[0] = propValue;
            fastSetValuesArray[1] = propValue;
            propValue = fastSetValuesArray;
          }
          if (isPropValueArray) {
            const arrayLength = propValue.length;
            const isNotObjectValue = !isObj(propValue[0]);
            if (arrayLength === 2 && isNotObjectValue) {
              keyObjectTarget.to = propValue;
              keyframesTargetArray[0] = keyObjectTarget;
              keyframes = keyframesTargetArray;
            } else if (arrayLength > 2 && isNotObjectValue) {
              keyframes = [];
              propValue.forEach((v, i) => {
                if (!i) {
                  fastSetValuesArray[0] = v;
                } else if (i === 1) {
                  fastSetValuesArray[1] = v;
                  keyframes.push(fastSetValuesArray);
                } else {
                  keyframes.push(v);
                }
              });
            } else {
              keyframes = propValue;
            }
          } else {
            keyframesTargetArray[0] = propValue;
            keyframes = keyframesTargetArray;
          }
          let siblings = null;
          let prevTween = null;
          let firstTweenChangeStartTime = NaN;
          let lastTweenChangeEndTime = 0;
          let tweenIndex = 0;
          for (let l = keyframes.length;tweenIndex < l; tweenIndex++) {
            const keyframe = keyframes[tweenIndex];
            if (isObj(keyframe)) {
              key = keyframe;
            } else {
              keyObjectTarget.to = keyframe;
              key = keyObjectTarget;
            }
            toFunctionStore.func = null;
            const computedToValue = getFunctionValue(key.to, target, ti, tl, toFunctionStore);
            let tweenToValue;
            if (isObj(computedToValue) && !isUnd(computedToValue.to)) {
              key = computedToValue;
              tweenToValue = computedToValue.to;
            } else {
              tweenToValue = computedToValue;
            }
            const tweenFromValue = getFunctionValue(key.from, target, ti, tl);
            const keyEasing = key.ease;
            const hasSpring2 = !isUnd(keyEasing) && !isUnd(keyEasing.ease);
            const tweenEasing = hasSpring2 ? keyEasing.ease : keyEasing || tEasing;
            const tweenDuration = hasSpring2 ? keyEasing.duration : getFunctionValue(setValue(key.duration, l > 1 ? getFunctionValue(tDuration, target, ti, tl) / l : tDuration), target, ti, tl);
            const tweenDelay = getFunctionValue(setValue(key.delay, !tweenIndex ? tDelay : 0), target, ti, tl);
            const computedComposition = getFunctionValue(setValue(key.composition, tComposition), target, ti, tl);
            const tweenComposition = isNum(computedComposition) ? computedComposition : compositionTypes[computedComposition];
            const tweenModifier = key.modifier || tModifier;
            const hasFromvalue = !isUnd(tweenFromValue);
            const hasToValue = !isUnd(tweenToValue);
            const isFromToArray = isArr(tweenToValue);
            const isFromToValue = isFromToArray || hasFromvalue && hasToValue;
            const tweenStartTime = prevTween ? lastTweenChangeEndTime + tweenDelay : tweenDelay;
            const absoluteStartTime = round(absoluteOffsetTime + tweenStartTime, 12);
            if (!shouldTriggerRender && (hasFromvalue || isFromToArray))
              shouldTriggerRender = 1;
            let prevSibling = prevTween;
            if (tweenComposition !== compositionTypes.none) {
              if (!siblings)
                siblings = getTweenSiblings(target, propName);
              let nextSibling = siblings._head;
              while (nextSibling && !nextSibling._isOverridden && nextSibling._absoluteStartTime <= absoluteStartTime) {
                prevSibling = nextSibling;
                nextSibling = nextSibling._nextRep;
                if (nextSibling && nextSibling._absoluteStartTime >= absoluteStartTime) {
                  while (nextSibling) {
                    overrideTween(nextSibling);
                    nextSibling = nextSibling._nextRep;
                  }
                }
              }
            }
            if (isFromToValue) {
              decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[0], target, ti, tl) : tweenFromValue, fromTargetObject);
              decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[1], target, ti, tl, toFunctionStore) : tweenToValue, toTargetObject);
              if (fromTargetObject.t === valueTypes.NUMBER) {
                if (prevSibling) {
                  if (prevSibling._valueType === valueTypes.UNIT) {
                    fromTargetObject.t = valueTypes.UNIT;
                    fromTargetObject.u = prevSibling._unit;
                  }
                } else {
                  decomposeRawValue(getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), decomposedOriginalValue);
                  if (decomposedOriginalValue.t === valueTypes.UNIT) {
                    fromTargetObject.t = valueTypes.UNIT;
                    fromTargetObject.u = decomposedOriginalValue.u;
                  }
                }
              }
            } else {
              if (hasToValue) {
                decomposeRawValue(tweenToValue, toTargetObject);
              } else {
                if (prevTween) {
                  decomposeTweenValue(prevTween, toTargetObject);
                } else {
                  decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value : getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), toTargetObject);
                }
              }
              if (hasFromvalue) {
                decomposeRawValue(tweenFromValue, fromTargetObject);
              } else {
                if (prevTween) {
                  decomposeTweenValue(prevTween, fromTargetObject);
                } else {
                  decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value : getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), fromTargetObject);
                }
              }
            }
            if (fromTargetObject.o) {
              fromTargetObject.n = getRelativeValue(!prevSibling ? decomposeRawValue(getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), decomposedOriginalValue).n : prevSibling._toNumber, fromTargetObject.n, fromTargetObject.o);
            }
            if (toTargetObject.o) {
              toTargetObject.n = getRelativeValue(fromTargetObject.n, toTargetObject.n, toTargetObject.o);
            }
            if (fromTargetObject.t !== toTargetObject.t) {
              if (fromTargetObject.t === valueTypes.COMPLEX || toTargetObject.t === valueTypes.COMPLEX) {
                const complexValue = fromTargetObject.t === valueTypes.COMPLEX ? fromTargetObject : toTargetObject;
                const notComplexValue = fromTargetObject.t === valueTypes.COMPLEX ? toTargetObject : fromTargetObject;
                notComplexValue.t = valueTypes.COMPLEX;
                notComplexValue.s = cloneArray(complexValue.s);
                notComplexValue.d = complexValue.d.map(() => notComplexValue.n);
              } else if (fromTargetObject.t === valueTypes.UNIT || toTargetObject.t === valueTypes.UNIT) {
                const unitValue = fromTargetObject.t === valueTypes.UNIT ? fromTargetObject : toTargetObject;
                const notUnitValue = fromTargetObject.t === valueTypes.UNIT ? toTargetObject : fromTargetObject;
                notUnitValue.t = valueTypes.UNIT;
                notUnitValue.u = unitValue.u;
              } else if (fromTargetObject.t === valueTypes.COLOR || toTargetObject.t === valueTypes.COLOR) {
                const colorValue = fromTargetObject.t === valueTypes.COLOR ? fromTargetObject : toTargetObject;
                const notColorValue = fromTargetObject.t === valueTypes.COLOR ? toTargetObject : fromTargetObject;
                notColorValue.t = valueTypes.COLOR;
                notColorValue.s = colorValue.s;
                notColorValue.d = [0, 0, 0, 1];
              }
            }
            if (fromTargetObject.u !== toTargetObject.u) {
              let valueToConvert = toTargetObject.u ? fromTargetObject : toTargetObject;
              valueToConvert = convertValueUnit(target, valueToConvert, toTargetObject.u ? toTargetObject.u : fromTargetObject.u, false);
            }
            if (toTargetObject.d && fromTargetObject.d && toTargetObject.d.length !== fromTargetObject.d.length) {
              const longestValue = fromTargetObject.d.length > toTargetObject.d.length ? fromTargetObject : toTargetObject;
              const shortestValue = longestValue === fromTargetObject ? toTargetObject : fromTargetObject;
              shortestValue.d = longestValue.d.map((_, i) => isUnd(shortestValue.d[i]) ? 0 : shortestValue.d[i]);
              shortestValue.s = cloneArray(longestValue.s);
            }
            const tweenUpdateDuration = round(+tweenDuration || minValue, 12);
            const tween = {
              parent: this,
              id: tweenId++,
              property: propName,
              target,
              _value: null,
              _func: toFunctionStore.func,
              _ease: parseEasings(tweenEasing),
              _fromNumbers: cloneArray(fromTargetObject.d),
              _toNumbers: cloneArray(toTargetObject.d),
              _strings: cloneArray(toTargetObject.s),
              _fromNumber: fromTargetObject.n,
              _toNumber: toTargetObject.n,
              _numbers: cloneArray(fromTargetObject.d),
              _number: fromTargetObject.n,
              _unit: toTargetObject.u,
              _modifier: tweenModifier,
              _currentTime: 0,
              _startTime: tweenStartTime,
              _delay: +tweenDelay,
              _updateDuration: tweenUpdateDuration,
              _changeDuration: tweenUpdateDuration,
              _absoluteStartTime: absoluteStartTime,
              _tweenType: tweenType,
              _valueType: toTargetObject.t,
              _composition: tweenComposition,
              _isOverlapped: 0,
              _isOverridden: 0,
              _renderTransforms: 0,
              _prevRep: null,
              _nextRep: null,
              _prevAdd: null,
              _nextAdd: null,
              _prev: null,
              _next: null
            };
            if (tweenComposition !== compositionTypes.none) {
              composeTween(tween, siblings);
            }
            if (isNaN(firstTweenChangeStartTime)) {
              firstTweenChangeStartTime = tween._startTime;
            }
            lastTweenChangeEndTime = round(tweenStartTime + tweenUpdateDuration, 12);
            prevTween = tween;
            animationAnimationLength++;
            addChild(this, tween);
          }
          if (isNaN(iterationDelay) || firstTweenChangeStartTime < iterationDelay) {
            iterationDelay = firstTweenChangeStartTime;
          }
          if (isNaN(iterationDuration) || lastTweenChangeEndTime > iterationDuration) {
            iterationDuration = lastTweenChangeEndTime;
          }
          if (tweenType === tweenTypes.TRANSFORM) {
            lastTransformGroupIndex = animationAnimationLength - tweenIndex;
            lastTransformGroupLength = animationAnimationLength;
          }
        }
      }
      if (!isNaN(lastTransformGroupIndex)) {
        let i = 0;
        forEachChildren(this, (tween) => {
          if (i >= lastTransformGroupIndex && i < lastTransformGroupLength) {
            tween._renderTransforms = 1;
            if (tween._composition === compositionTypes.blend) {
              forEachChildren(additive.animation, (additiveTween) => {
                if (additiveTween.id === tween.id) {
                  additiveTween._renderTransforms = 1;
                }
              });
            }
          }
          i++;
        });
      }
    }
    if (!targetsLength) {
      console.warn(`No target found. Make sure the element you're trying to animate is accessible before creating your animation.`);
    }
    if (iterationDelay) {
      forEachChildren(this, (tween) => {
        if (!(tween._startTime - tween._delay)) {
          tween._delay -= iterationDelay;
        }
        tween._startTime -= iterationDelay;
      });
      iterationDuration -= iterationDelay;
    } else {
      iterationDelay = 0;
    }
    if (!iterationDuration) {
      iterationDuration = minValue;
      this.iterationCount = 0;
    }
    this.targets = parsedTargets;
    this.duration = iterationDuration === minValue ? minValue : clampInfinity((iterationDuration + this._loopDelay) * this.iterationCount - this._loopDelay) || minValue;
    this.onRender = onRender || animDefaults.onRender;
    this._ease = animEase;
    this._delay = iterationDelay;
    this.iterationDuration = iterationDuration;
    this._inlineStyles = animInlineStyles;
    if (!this._autoplay && shouldTriggerRender)
      this.onRender(this);
  }
  stretch(newDuration) {
    const currentDuration = this.duration;
    if (currentDuration === normalizeTime(newDuration))
      return this;
    const timeScale = newDuration / currentDuration;
    forEachChildren(this, (tween) => {
      tween._updateDuration = normalizeTime(tween._updateDuration * timeScale);
      tween._changeDuration = normalizeTime(tween._changeDuration * timeScale);
      tween._currentTime *= timeScale;
      tween._startTime *= timeScale;
      tween._absoluteStartTime *= timeScale;
    });
    return super.stretch(newDuration);
  }
  refresh() {
    forEachChildren(this, (tween) => {
      const tweenFunc = tween._func;
      if (tweenFunc) {
        const ogValue = getOriginalAnimatableValue(tween.target, tween.property, tween._tweenType);
        decomposeRawValue(ogValue, decomposedOriginalValue);
        decomposeRawValue(tweenFunc(), toTargetObject);
        tween._fromNumbers = cloneArray(decomposedOriginalValue.d);
        tween._fromNumber = decomposedOriginalValue.n;
        tween._toNumbers = cloneArray(toTargetObject.d);
        tween._strings = cloneArray(toTargetObject.s);
        tween._toNumber = toTargetObject.o ? getRelativeValue(decomposedOriginalValue.n, toTargetObject.n, toTargetObject.o) : toTargetObject.n;
      }
    });
    return this;
  }
  revert() {
    super.revert();
    return cleanInlineStyles(this);
  }
  then(callback) {
    return super.then(callback);
  }
}
var transformsShorthands = ["x", "y", "z"];
var commonDefaultPXProperties = [
  "perspective",
  "width",
  "height",
  "margin",
  "padding",
  "top",
  "right",
  "bottom",
  "left",
  "borderWidth",
  "fontSize",
  "borderRadius",
  ...transformsShorthands
];
var WAAPIAnimationsLookups = {
  _head: null,
  _tail: null
};
var removeWAAPIAnimation = ($el, property, parent) => {
  let nextLookup = WAAPIAnimationsLookups._head;
  while (nextLookup) {
    const next = nextLookup._next;
    const matchTarget = nextLookup.$el === $el;
    const matchProperty = !property || nextLookup.property === property;
    const matchParent = !parent || nextLookup.parent === parent;
    if (matchTarget && matchProperty && matchParent) {
      const anim = nextLookup.animation;
      try {
        anim.commitStyles();
      } catch {}
      anim.cancel();
      removeChild(WAAPIAnimationsLookups, nextLookup);
      const lookupParent = nextLookup.parent;
      if (lookupParent) {
        lookupParent._completed++;
        if (lookupParent.animations.length === lookupParent._completed) {
          lookupParent.completed = true;
          if (!lookupParent.muteCallbacks) {
            lookupParent.paused = true;
            lookupParent.onComplete(lookupParent);
            lookupParent._resolve(lookupParent);
          }
        }
      }
    }
    nextLookup = next;
  }
};
var sync = (callback = noop) => {
  return new Timer({ duration: 1 * globals.timeScale, onComplete: callback }, null, 0).resume();
};
function getTargetValue(targetSelector, propName, unit) {
  const targets = registerTargets(targetSelector);
  if (!targets.length)
    return;
  const [target] = targets;
  const tweenType = getTweenType(target, propName);
  const normalizePropName = sanitizePropertyName(propName, target, tweenType);
  let originalValue = getOriginalAnimatableValue(target, normalizePropName);
  if (isUnd(unit)) {
    return originalValue;
  } else {
    decomposeRawValue(originalValue, decomposedOriginalValue);
    if (decomposedOriginalValue.t === valueTypes.NUMBER || decomposedOriginalValue.t === valueTypes.UNIT) {
      if (unit === false) {
        return decomposedOriginalValue.n;
      } else {
        const convertedValue = convertValueUnit(target, decomposedOriginalValue, unit, false);
        return `${round(convertedValue.n, globals.precision)}${convertedValue.u}`;
      }
    }
  }
}
var setTargetValues = (targets, parameters) => {
  if (isUnd(parameters))
    return;
  parameters.duration = minValue;
  parameters.composition = setValue(parameters.composition, compositionTypes.none);
  return new JSAnimation(targets, parameters, null, 0, true).resume();
};
var removeTargetsFromAnimation = (targetsArray, animation, propertyName) => {
  let tweensMatchesTargets = false;
  forEachChildren(animation, (tween) => {
    const tweenTarget = tween.target;
    if (targetsArray.includes(tweenTarget)) {
      const tweenName = tween.property;
      const tweenType = tween._tweenType;
      const normalizePropName = sanitizePropertyName(propertyName, tweenTarget, tweenType);
      if (!normalizePropName || normalizePropName && normalizePropName === tweenName) {
        if (tween.parent._tail === tween && tween._tweenType === tweenTypes.TRANSFORM && tween._prev && tween._prev._tweenType === tweenTypes.TRANSFORM) {
          tween._prev._renderTransforms = 1;
        }
        removeChild(animation, tween);
        removeTweenSliblings(tween);
        tweensMatchesTargets = true;
      }
    }
  }, true);
  return tweensMatchesTargets;
};
var remove = (targets, renderable, propertyName) => {
  const targetsArray = parseTargets(targets);
  const parent = renderable ? renderable : engine;
  const waapiAnimation = renderable && renderable.controlAnimation && renderable;
  for (let i = 0, l = targetsArray.length;i < l; i++) {
    const $el = targetsArray[i];
    removeWAAPIAnimation($el, propertyName, waapiAnimation);
  }
  let removeMatches;
  if (parent._hasChildren) {
    let iterationDuration = 0;
    forEachChildren(parent, (child) => {
      if (!child._hasChildren) {
        removeMatches = removeTargetsFromAnimation(targetsArray, child, propertyName);
        if (removeMatches && !child._head) {
          child.cancel();
          removeChild(parent, child);
        } else {
          const childTLOffset = child._offset + child._delay;
          const childDur = childTLOffset + child.duration;
          if (childDur > iterationDuration) {
            iterationDuration = childDur;
          }
        }
      }
      if (child._head) {
        remove(targets, child, propertyName);
      } else {
        child._hasChildren = false;
      }
    }, true);
    if (!isUnd(parent.iterationDuration)) {
      parent.iterationDuration = iterationDuration;
    }
  } else {
    removeMatches = removeTargetsFromAnimation(targetsArray, parent, propertyName);
  }
  if (removeMatches && !parent._head) {
    parent._hasChildren = false;
    if (parent.cancel)
      parent.cancel();
  }
  return targetsArray;
};
var keepTime = createRefreshable;
var randomPick = (items) => items[random2(0, items.length - 1)];
var roundPad = (v, decimalLength) => (+v).toFixed(decimalLength);
var padStart = (v, totalLength, padString) => `${v}`.padStart(totalLength, padString);
var padEnd = (v, totalLength, padString) => `${v}`.padEnd(totalLength, padString);
var wrap = (v, min, max2) => ((v - min) % (max2 - min) + (max2 - min)) % (max2 - min) + min;
var mapRange = (value, inLow, inHigh, outLow, outHigh) => outLow + (value - inLow) / (inHigh - inLow) * (outHigh - outLow);
var degToRad = (degrees) => degrees * PI / 180;
var radToDeg = (radians) => radians * 180 / PI;
var lerp = (start, end, amount, renderable) => {
  let dt = K / globals.defaults.frameRate;
  if (renderable !== false) {
    const ticker = renderable || engine._hasChildren && engine;
    if (ticker && ticker.deltaTime) {
      dt = ticker.deltaTime;
    }
  }
  const t = 1 - Math.exp(-amount * dt * 0.1);
  return !amount ? start : amount === 1 ? end : (1 - t) * start + t * end;
};
var curry = (fn, last = 0) => (...args) => last ? (v) => fn(...args, v) : (v) => fn(v, ...args);
var chain = (fn) => {
  return (...args) => {
    const result = fn(...args);
    return new Proxy(noop, {
      apply: (_, __, [v]) => result(v),
      get: (_, prop) => chain((...nextArgs) => {
        const nextResult = utils[prop](...nextArgs);
        return (v) => nextResult(result(v));
      })
    });
  };
};
var makeChainable = (fn, right = 0) => (...args) => (args.length < fn.length ? chain(curry(fn, right)) : fn)(...args);
var utils = {
  $: registerTargets,
  get: getTargetValue,
  set: setTargetValues,
  remove,
  cleanInlineStyles,
  random: random2,
  randomPick,
  shuffle,
  lerp,
  sync,
  keepTime,
  clamp: makeChainable(clamp),
  round: makeChainable(round),
  snap: makeChainable(snap),
  wrap: makeChainable(wrap),
  interpolate: makeChainable(interpolate, 1),
  mapRange: makeChainable(mapRange),
  roundPad: makeChainable(roundPad),
  padStart: makeChainable(padStart),
  padEnd: makeChainable(padEnd),
  degToRad: makeChainable(degToRad),
  radToDeg: makeChainable(radToDeg)
};
var getPrevChildOffset = (timeline, timePosition) => {
  if (stringStartsWith(timePosition, "<")) {
    const goToPrevAnimationOffset = timePosition[1] === "<";
    const prevAnimation = timeline._tail;
    const prevOffset = prevAnimation ? prevAnimation._offset + prevAnimation._delay : 0;
    return goToPrevAnimationOffset ? prevOffset : prevOffset + prevAnimation.duration;
  }
};
var parseTimelinePosition = (timeline, timePosition) => {
  let tlDuration = timeline.iterationDuration;
  if (tlDuration === minValue)
    tlDuration = 0;
  if (isUnd(timePosition))
    return tlDuration;
  if (isNum(+timePosition))
    return +timePosition;
  const timePosStr = timePosition;
  const tlLabels = timeline ? timeline.labels : null;
  const hasLabels = !isNil(tlLabels);
  const prevOffset = getPrevChildOffset(timeline, timePosStr);
  const hasSibling = !isUnd(prevOffset);
  const matchedRelativeOperator = relativeValuesExecRgx.exec(timePosStr);
  if (matchedRelativeOperator) {
    const fullOperator = matchedRelativeOperator[0];
    const split = timePosStr.split(fullOperator);
    const labelOffset = hasLabels && split[0] ? tlLabels[split[0]] : tlDuration;
    const parsedOffset = hasSibling ? prevOffset : hasLabels ? labelOffset : tlDuration;
    const parsedNumericalOffset = +split[1];
    return getRelativeValue(parsedOffset, parsedNumericalOffset, fullOperator[0]);
  } else {
    return hasSibling ? prevOffset : hasLabels ? !isUnd(tlLabels[timePosStr]) ? tlLabels[timePosStr] : tlDuration : tlDuration;
  }
};
function getTimelineTotalDuration(tl) {
  return clampInfinity((tl.iterationDuration + tl._loopDelay) * tl.iterationCount - tl._loopDelay) || minValue;
}
function addTlChild(childParams, tl, timePosition, targets, index, length) {
  const isSetter = isNum(childParams.duration) && childParams.duration <= minValue;
  const adjustedPosition = isSetter ? timePosition - minValue : timePosition;
  tick(tl, adjustedPosition, 1, 1, tickModes.AUTO);
  const tlChild = targets ? new JSAnimation(targets, childParams, tl, adjustedPosition, false, index, length) : new Timer(childParams, tl, adjustedPosition);
  tlChild.init(1);
  addChild(tl, tlChild);
  forEachChildren(tl, (child) => {
    const childTLOffset = child._offset + child._delay;
    const childDur = childTLOffset + child.duration;
    if (childDur > tl.iterationDuration)
      tl.iterationDuration = childDur;
  });
  tl.duration = getTimelineTotalDuration(tl);
  return tl;
}

class Timeline extends Timer {
  constructor(parameters = {}) {
    super(parameters, null, 0);
    this.duration = 0;
    this.labels = {};
    const defaultsParams = parameters.defaults;
    const globalDefaults = globals.defaults;
    this.defaults = defaultsParams ? mergeObjects(defaultsParams, globalDefaults) : globalDefaults;
    this.onRender = parameters.onRender || globalDefaults.onRender;
    const tlPlaybackEase = setValue(parameters.playbackEase, globalDefaults.playbackEase);
    this._ease = tlPlaybackEase ? parseEasings(tlPlaybackEase) : null;
    this.iterationDuration = 0;
  }
  add(a1, a2, a3) {
    const isAnim = isObj(a2);
    const isTimer = isObj(a1);
    if (isAnim || isTimer) {
      this._hasChildren = true;
      if (isAnim) {
        const childParams = a2;
        if (isFnc(a3)) {
          const staggeredPosition = a3;
          const parsedTargetsArray = parseTargets(a1);
          const tlDuration = this.duration;
          const tlIterationDuration = this.iterationDuration;
          const id = childParams.id;
          let i = 0;
          const parsedLength = parsedTargetsArray.length;
          parsedTargetsArray.forEach((target) => {
            const staggeredChildParams = { ...childParams };
            this.duration = tlDuration;
            this.iterationDuration = tlIterationDuration;
            if (!isUnd(id))
              staggeredChildParams.id = id + "-" + i;
            addTlChild(staggeredChildParams, this, parseTimelinePosition(this, staggeredPosition(target, i, parsedLength, this)), target, i, parsedLength);
            i++;
          });
        } else {
          addTlChild(childParams, this, parseTimelinePosition(this, a3), a1);
        }
      } else {
        addTlChild(a1, this, parseTimelinePosition(this, a2));
      }
      return this.init(1);
    }
  }
  sync(synced, position) {
    if (isUnd(synced) || synced && isUnd(synced.pause))
      return this;
    synced.pause();
    const duration = +(synced.effect ? synced.effect.getTiming().duration : synced.duration);
    return this.add(synced, { currentTime: [0, duration], duration, ease: "linear" }, position);
  }
  set(targets, parameters, position) {
    if (isUnd(parameters))
      return this;
    parameters.duration = minValue;
    parameters.composition = compositionTypes.replace;
    return this.add(targets, parameters, position);
  }
  call(callback, position) {
    if (isUnd(callback) || callback && !isFnc(callback))
      return this;
    return this.add({ duration: 0, onComplete: () => callback(this) }, position);
  }
  label(labelName, position) {
    if (isUnd(labelName) || labelName && !isStr(labelName))
      return this;
    this.labels[labelName] = parseTimelinePosition(this, position);
    return this;
  }
  remove(targets, propertyName) {
    remove(targets, this, propertyName);
    return this;
  }
  stretch(newDuration) {
    const currentDuration = this.duration;
    if (currentDuration === normalizeTime(newDuration))
      return this;
    const timeScale = newDuration / currentDuration;
    const labels = this.labels;
    forEachChildren(this, (child) => child.stretch(child.duration * timeScale));
    for (let labelName in labels)
      labels[labelName] *= timeScale;
    return super.stretch(newDuration);
  }
  refresh() {
    forEachChildren(this, (child) => {
      if (child.refresh)
        child.refresh();
    });
    return this;
  }
  revert() {
    super.revert();
    forEachChildren(this, (child) => child.revert, true);
    return cleanInlineStyles(this);
  }
  then(callback) {
    return super.then(callback);
  }
}
var createTimeline = (parameters) => new Timeline(parameters).init();
var maxSpringParamValue = K * 10;
var scrollContainers = new Map;
var segmenter = typeof Intl !== "undefined" && Intl.Segmenter;
var stagger = (val, params = {}) => {
  let values = [];
  let maxValue2 = 0;
  const from = params.from;
  const reversed = params.reversed;
  const ease = params.ease;
  const hasEasing = !isUnd(ease);
  const hasSpring = hasEasing && !isUnd(ease.ease);
  const staggerEase = hasSpring ? ease.ease : hasEasing ? parseEasings(ease) : null;
  const grid = params.grid;
  const axis = params.axis;
  const customTotal = params.total;
  const fromFirst = isUnd(from) || from === 0 || from === "first";
  const fromCenter = from === "center";
  const fromLast = from === "last";
  const fromRandom = from === "random";
  const isRange = isArr(val);
  const useProp = params.use;
  const val1 = isRange ? parseNumber(val[0]) : parseNumber(val);
  const val2 = isRange ? parseNumber(val[1]) : 0;
  const unitMatch = unitsExecRgx.exec((isRange ? val[1] : val) + emptyString);
  const start = params.start || 0 + (isRange ? val1 : 0);
  let fromIndex = fromFirst ? 0 : isNum(from) ? from : 0;
  return (target, i, t, tl) => {
    const [registeredTarget] = registerTargets(target);
    const total = isUnd(customTotal) ? t : customTotal;
    const customIndex = !isUnd(useProp) ? isFnc(useProp) ? useProp(registeredTarget, i, total) : getOriginalAnimatableValue(registeredTarget, useProp) : false;
    const staggerIndex = isNum(customIndex) || isStr(customIndex) && isNum(+customIndex) ? +customIndex : i;
    if (fromCenter)
      fromIndex = (total - 1) / 2;
    if (fromLast)
      fromIndex = total - 1;
    if (!values.length) {
      for (let index = 0;index < total; index++) {
        if (!grid) {
          values.push(abs2(fromIndex - index));
        } else {
          const fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          const fromY = !fromCenter ? floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          const toX = index % grid[0];
          const toY = floor(index / grid[0]);
          const distanceX = fromX - toX;
          const distanceY = fromY - toY;
          let value = sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === "x")
            value = -distanceX;
          if (axis === "y")
            value = -distanceY;
          values.push(value);
        }
        maxValue2 = max(...values);
      }
      if (staggerEase)
        values = values.map((val3) => staggerEase(val3 / maxValue2) * maxValue2);
      if (reversed)
        values = values.map((val3) => axis ? val3 < 0 ? val3 * -1 : -val3 : abs2(maxValue2 - val3));
      if (fromRandom)
        values = shuffle(values);
    }
    const spacing = isRange ? (val2 - val1) / maxValue2 : val1;
    const offset = tl ? parseTimelinePosition(tl, isUnd(params.start) ? tl.iterationDuration : start) : start;
    let output = offset + (spacing * round(values[staggerIndex], 2) || 0);
    if (params.modifier)
      output = params.modifier(output);
    if (unitMatch)
      output = `${output}${unitMatch[2]}`;
    return output;
  };
};

// src/drawing/step-by-step.ts
var colors = {
  transparent: "rgba(0,0,0,0)",
  whiteTransparent: "rgba(255, 255, 255, 0.5)",
  outline1: "rgba(100, 160, 250)",
  outline2: "rgba(160, 200, 255)",
  outline3: "rgba(60, 100, 200)",
  c1: "rgb(53, 108, 222)",
  cTransparent1: "rgba(50, 110, 210, 0.75)",
  cTransparent2: "rgba(30, 80, 170, 0.75)",
  cTransparent3: "rgba(100, 160, 250, 0.75)"
};
var renderStepByStep = (options, invader) => {
  const { size } = options;
  const width = size * 2 + 1;
  const height = width;
  let svgContent = getGridLines(width, height, "rgba(255, 255, 255, 0.15)");
  svgContent += svg_utils_default.getCircle(invader.bodyCenter, 0.2, {
    fill: colors.transparent,
    stroke: "rgb(255,255,255)",
    class: "body-center"
  });
  const bottomIndex = Math.floor(invader.body.length / 2);
  svgContent += svg_utils_default.getCircle(invader.body[0], 0.2, {
    fill: colors.transparent,
    stroke: colors.outline1,
    class: "body-point body-point--top-bottom"
  });
  svgContent += svg_utils_default.getCircle(invader.body[bottomIndex], 0.2, {
    fill: colors.transparent,
    stroke: colors.outline1,
    class: "body-point body-point--top-bottom"
  });
  for (let i = 1;i < bottomIndex; i++) {
    svgContent += svg_utils_default.getCircle(invader.body[i], 0.2, {
      fill: colors.transparent,
      stroke: colors.outline1,
      class: "body-point body-point--left"
    });
  }
  for (let i = bottomIndex + 1;i < invader.body.length; i++) {
    svgContent += svg_utils_default.getCircle(invader.body[i], 0.2, {
      fill: colors.transparent,
      stroke: colors.outline1,
      class: "body-point body-point--right"
    });
  }
  svgContent += svg_utils_default.getPath(invader.body, true, {
    fill: colors.transparent,
    stroke: colors.outline1,
    class: "body-path"
  });
  svgContent += svg_utils_default.getCircle(invader.tentacles[0].line[0], 0.2, {
    fill: colors.transparent,
    stroke: colors.outline1,
    class: "tentacle-point tentacle-point--start"
  });
  invader.tentacles[0].line.slice(1).forEach((point) => {
    svgContent += svg_utils_default.getCircle(point, 0.2, {
      fill: colors.transparent,
      stroke: colors.outline1,
      class: "tentacle-point tentacle-point--rest"
    });
  });
  svgContent += svg_utils_default.getPath(invader.tentacles[0].line, false, {
    fill: colors.transparent,
    stroke: colors.outline2,
    class: "tentacle-mid-path tentacle-mid-path--left"
  });
  const normals = (horn) => {
    const { fatLine } = horn;
    for (let i = 0;i < fatLine.length / 2; i++) {
      svgContent += svg_utils_default.getPath([fatLine[i], fatLine[fatLine.length - i - 1]], false, {
        stroke: colors.outline1,
        class: "normal-path"
      });
    }
    svgContent += svg_utils_default.getPath(fatLine, true, {
      fill: colors.transparent,
      stroke: colors.outline2,
      class: "tentancle-path"
    });
  };
  normals(invader.tentacles[0]);
  invader.tentacles.slice(1).forEach((tentacle) => {
    svgContent += svg_utils_default.getPath(tentacle.fatLine, true, {
      fill: colors.transparent,
      stroke: colors.outline2,
      class: "other-tentancle-path"
    });
  });
  invader.horns.forEach((horn) => {
    svgContent += svg_utils_default.getPath(horn.fatLine, true, {
      fill: colors.transparent,
      stroke: colors.outline2,
      class: "horn-path"
    });
  });
  const INSIDE = -1;
  const EDGE = 0;
  const EXTREMITIES_SEARCH_RADIUS = 0.5;
  const bodyArray = invader.body.map((p) => [p.x, p.y]);
  const hornTentacles = [
    ...invader.tentacles.map((t) => t.fatLine),
    ...invader.horns.map((h) => h.fatLine)
  ];
  invader.grid.forEach((col, x) => {
    col.forEach((_, y) => {
      const isInBody = import_robust_point_in_polygon2.default(bodyArray, [x + 0.5, y + 0.5]);
      if (isInBody === INSIDE || isInBody === EDGE) {
        svgContent += svg_utils_default.getRect({ x, y }, { x: 1, y: 1 }, {
          fill: colors.transparent,
          stroke: colors.c1,
          class: `body-rect body-rect--${invader.grid[x][y]}`
        });
        svgContent += svg_utils_default.getCircle({ x: x + 0.5, y: y + 0.5 }, 0.05, {
          fill: colors.transparent,
          class: "body-rect-center",
          stroke: colors.outline2
        });
      } else {
        for (const polygon of hornTentacles) {
          const polygonArray = polygon.map((p) => [p.x, p.y]);
          let painted = false;
          for (const point of polygon) {
            const d = point.distance(new vec_default(x + 0.5, y + 0.5));
            const isIn = import_robust_point_in_polygon2.default(polygonArray, [x + 0.5, y + 0.5]);
            if (d < EXTREMITIES_SEARCH_RADIUS || isIn === INSIDE || isIn === EDGE) {
              svgContent += svg_utils_default.getRect({ x, y }, { x: 1, y: 1 }, {
                fill: colors.transparent,
                stroke: colors.c1,
                class: `horn-tentacle-rect horn-tentacle-rect--${invader.grid[x][y]}`
              });
              painted = true;
              break;
            }
          }
          if (painted) {
            break;
          }
        }
      }
    });
  });
  invader.grid.forEach((col, x) => {
    col.forEach((_, y) => {
      if (invader.grid[x][y] === "z") {
        svgContent += svg_utils_default.getRect({ x, y }, { x: 1, y: 1 }, {
          fill: colors.transparent,
          stroke: colors.c1,
          class: "around-eyes-rect"
        });
      }
    });
  });
  return svgContent;
};
var prepareStepByStepAnimation = (svgEl) => {
  const offsets = [0];
  let nextPauseIndex = -1;
  const getStateClass = (index) => {
    if (index < 0) {
      return "";
    }
    return new Array(index).fill("").map((_, index2) => index2).join(" ");
  };
  const timeline = createTimeline({
    autoplay: false,
    onUpdate: (tl) => {
      svgEl.dataset.state = getStateClass(nextPauseIndex);
      if (!tl.paused && tl.currentTime >= offsets[nextPauseIndex]) {
        tl.pause();
        tl.seek(offsets[nextPauseIndex]);
        svgEl.dataset.state = `${getStateClass(nextPauseIndex)} ${nextPauseIndex - 1}--end`;
      }
    },
    onComplete: () => {
      svgEl.dataset.state = `${getStateClass(offsets.length + 1)} ${offsets.length}--end`;
    }
  });
  const addPoints = (selector, options) => {
    const { addStop, position = timeline.duration, duration = 300, fill = colors.cTransparent3 } = options;
    if (addStop) {
      offsets.push(timeline.duration);
    }
    timeline.add(svg.createDrawable(selector), {
      draw: "0 1",
      ease: "inQuad",
      duration,
      delay: stagger(duration * 0.75),
      fill: {
        to: fill,
        delay: stagger(duration * 0.75)
      }
    }, position);
  };
  const addPath = (selector, options) => {
    const { addStop, position = timeline.duration, duration = 1000, fill, draw = "0 1" } = options;
    if (addStop) {
      offsets.push(timeline.duration);
    }
    const o = {
      draw,
      ease: "outQuad",
      duration,
      delay: stagger(duration * 0.75)
    };
    if (fill) {
      o.fill = {
        to: fill,
        delay: stagger(duration * 0.75)
      };
    }
    timeline.add(svg.createDrawable(selector), o, position);
  };
  addPoints(".body-center", { fill: colors.whiteTransparent });
  addPoints(".body-point--top-bottom", { addStop: true });
  addPoints(".body-point--left", { addStop: true });
  addPoints(".body-point--right", { addStop: true });
  addPath(".body-path", { addStop: true });
  addPoints(".tentacle-point--start", { addStop: true });
  const tentaclePosition = timeline.duration;
  addPoints(".tentacle-point--rest", { addStop: true, position: tentaclePosition });
  addPath(".tentacle-mid-path", { position: tentaclePosition, duration: 2000 });
  addPath(".normal-path", { addStop: true, duration: 500 });
  addPath(".tentancle-path", { addStop: true });
  addPath(".other-tentancle-path", { addStop: true });
  addPath(".horn-path", { addStop: true });
  const bodyPaintPosition = timeline.duration;
  addPoints(".body-rect-center", {
    addStop: true,
    duration: 250,
    position: bodyPaintPosition,
    fill: colors.transparent
  });
  addPath(".body-rect", { duration: 250, position: bodyPaintPosition + 500, fill: colors.cTransparent1 });
  addPath(".horn-tentacle-rect", { addStop: true, duration: 250, fill: colors.cTransparent2 });
  addPath(".around-eyes-rect", { addStop: true, duration: 250, fill: colors.cTransparent3 });
  const jumpTo = (index, play = true) => {
    timeline.seek(offsets[index]);
    if (play) {
      nextPauseIndex = index + 1;
    } else {
      nextPauseIndex = index;
    }
    if (play) {
      timeline.play();
    }
  };
  return {
    timeline,
    offsets,
    jumpTo
  };
};
var export_BezierEasing = import_bezier_easing.default;

export {
  renderStepByStep,
  prepareStepByStepAnimation,
  SCALE,
  Invader,
  export_BezierEasing as BezierEasing
};
