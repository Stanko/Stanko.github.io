// Quick 1D Perlin noise
// ref: https://github.com/SRombauts/SimplexNoise/blob/master/src/SimplexNoise.cpp#L166
function Perlin() {
  // Quick and dirty permutation table
  var tmp = [];

  for (var i = 0; i < 256; i++) {
    tmp.push(Math.floor(Math.random() * 256));
  }

  this.perm = tmp.concat(tmp);
}

Perlin.prototype.grad = function(i, x) {
  var h = i & 0xf;
  var grad = 1 + (h & 7);

  if ((h & 8) !== 0) {
    return -grad * x;
  }

  return grad * x;
}

Perlin.prototype.getValue = function(x) {
  var i0 = Math.floor(x);
  var i1 = i0 + 1;

  var x0 = x - i0;
  var x1 = x0 - 1;

  var t0 = 1 - x0 * x0;
  t0 *= t0;

  var t1 = 1 - x1 * x1;
  t1 *= t1;

  var n0 = t0 * t0 * this.grad(this.perm[i0 & 0xff], x0);
  var n1 = t1 * t1 * this.grad(this.perm[i1 & 0xff], x1);

  return 0.395 * (n0 + n1);
}

var sample = [
  0.03,
  0.03,
  0.03,
  0.04,
  0.07,
  0.23,
  0.18,
  0.5,
  0.85,
  1,
  0.78,
  0.7,
  0.5,
  0.3,
  0.12,
  0.07,
  0.23,
  0.5,
  0.58,
  0.4,
  0.2,
  0.13,
  0.05,
  0.15,
  0.2,
  0.15,
  0.12,
  0.08,
  0.05,
  0.04,
  0.03,
  0.03,
  0.04,
  0.03,
  0.03,
];

var jumpTime = 125;

// Full implementation

var sampleCheckbox = document.querySelector('.Spectrum-checkbox--sample');
var randomCheckbox = document.querySelector('.Spectrum-checkbox--random');
var perlinCheckbox = document.querySelector('.Spectrum-checkbox--perlin');

function fakeAudioSpectrum(spectrumElement) {
  var segmentElements = [];

  // Set init sizes of each segment
  sample.forEach(function(value, i) {
    var segment = document.createElement('div');
    segment.classList.add('Spectrum-segment');
    segmentElements.push(segment);
    spectrumElement.appendChild(segment);
  });

  function jump() {
    var useRandom = randomCheckbox.checked;
    var usePerlin = perlinCheckbox.checked;
    var useSample = sampleCheckbox.checked;
    var noise = new Perlin();

    segmentElements.forEach(function (segmentElement, i) {
      var value = 1;

      if (useRandom) {
        // multiply by random value
        value *= Math.random();
      }

      if (usePerlin) {
        value *= (noise.getValue(i * 0.1) + 1) / 2 // normalize [-1, 1] => [0, 1]
      }

      if (useSample) {
        value *= sample[i];
      }

      // Adding a minimum
      value = value < 0.01 ? 0.01 : value;

      // segmentElement.style.transition = `transform ${ jumpTime }ms linear`;
      segmentElement.style.transform = 'scale3d(1, ' + value + ', 1)';
    });
  }

  setInterval(function() { requestAnimationFrame(jump) }, jumpTime);
}

var spectrumElement = document.querySelector('.Spectrum');
fakeAudioSpectrum(spectrumElement);
