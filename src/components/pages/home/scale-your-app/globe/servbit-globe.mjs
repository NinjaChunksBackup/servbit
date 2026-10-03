/* eslint-disable */

//#region src/app/globe-constants.ts
var e = {
    defaultValue: 100,
    min: 25,
    max: 135,
  },
  t = {
    background: 'appearance.background',
    band1Position: 'bands.band1.position',
    band1Width: 'bands.band1.width',
    band2Position: 'bands.band2.position',
    band2Width: 'bands.band2.width',
    band3Position: 'bands.band3.position',
    band3Width: 'bands.band3.width',
    band4Position: 'bands.band4.position',
    band4Width: 'bands.band4.width',
    bandColumnSpacing: 'bands.columnSpacing',
    bandDistance: 'bands.distance',
    bandDotSize: 'bands.dotSize',
    crtIntensity: 'effects.crtIntensity',
    includeBackground: 'export.includeBackground',
    latitudeCount: 'globe.latitudeCount',
    lineColor: 'globe.lineColor',
    lineWidth: 'globe.lineWidth',
    logoAppFinalPosition: 'logos.app.finalPosition',
    logoAppScale: 'logos.app.scale',
    logoHoldSeconds: 'logos.holdSeconds',
    logoIntroRun: 'logos.intro.run',
    logoWebFinalPosition: 'logos.web.finalPosition',
    logoWebScale: 'logos.web.scale',
    logoCloudFinalPosition: 'logos.cloud.finalPosition',
    logoCloudScale: 'logos.cloud.scale',
    logoSpeed: 'logos.speed',
    logoAiFinalPosition: 'logos.ai.finalPosition',
    logoAiScale: 'logos.ai.scale',
    meridianCount: 'globe.meridianCount',
    orientation: 'globe.orientation',
    outline: 'globe.outline',
    sphereColor: 'globe.sphereColor',
  },
  n = {
    background: '#000000',
    band1Position: 69,
    band1Width: 17,
    band2Position: 6,
    band2Width: 50,
    band3Position: -30,
    band3Width: 16,
    band4Position: 46,
    band4Width: 24,
    bandColumnSpacing: 3.5,
    bandDistance: 1,
    bandDotSize: 1.25,
    crtIntensity: 100,
    includeBackground: !0,
    latitudeCount: 8,
    lineColor: '#FFFFFF',
    lineWidth: 1.5,
    logoAppFinalPosition: 60,
    logoHoldSeconds: 3,
    logoWebFinalPosition: 71,
    logoCloudFinalPosition: 76,
    logoSpeed: 2.5,
    logoAiFinalPosition: 68,
    meridianCount: 16,
    orientation: {
      position: [2.2, 1.5, 5],
      up: [0, 1, 0],
    },
    outline: !0,
    sphereColor: '#000000',
  },
  r = {
    height: 1080,
    width: 1920,
  },
  i = /^#[0-9A-F]{6}$/u;
function a(e, t, n, r) {
  let i = typeof e == 'number' ? e : r;
  return Number.isFinite(i) ? Math.min(n, Math.max(t, i)) : r;
}
function o(e, t) {
  if (typeof e != 'string') return t;
  let n = e.toUpperCase();
  return i.test(n) ? n : t;
}
function s(e, t) {
  return typeof e == 'boolean' ? e : t;
}
function c(e) {
  return (
    Array.isArray(e) && e.length === 3 && e.every((e) => typeof e == 'number' && Number.isFinite(e))
  );
}
function l(e) {
  return typeof e == 'object' && e && c(e.position) && c(e.up)
    ? {
        position: e.position,
        up: e.up,
      }
    : n.orientation;
}
function u(r) {
  return {
    background: o(r[t.background], n.background),
    bandColumnSpacing: a(r[t.bandColumnSpacing], 3, 18, n.bandColumnSpacing),
    bandDistance: a(r[t.bandDistance], 0, 24, n.bandDistance),
    bandDotSize: a(r[t.bandDotSize], 1, 6, n.bandDotSize),
    bands: [
      {
        id: 1,
        position: a(r[t.band1Position], -76, 76, n.band1Position),
        width: a(r[t.band1Width], 4, 60, n.band1Width),
      },
      {
        id: 2,
        position: a(r[t.band2Position], -76, 76, n.band2Position),
        width: a(r[t.band2Width], 4, 60, n.band2Width),
      },
      {
        id: 3,
        position: a(r[t.band3Position], -76, 76, n.band3Position),
        width: a(r[t.band3Width], 4, 60, n.band3Width),
      },
      {
        id: 4,
        position: a(r[t.band4Position], -76, 76, n.band4Position),
        width: a(r[t.band4Width], 4, 60, n.band4Width),
      },
    ],
    crtIntensity: a(r[t.crtIntensity], 0, 100, n.crtIntensity),
    includeBackground: s(r[t.includeBackground], n.includeBackground),
    latitudeCount: Math.round(a(r[t.latitudeCount], 3, 25, n.latitudeCount)),
    lineColor: o(r[t.lineColor], n.lineColor),
    lineWidth: a(r[t.lineWidth], 0.5, 8, n.lineWidth),
    logoHoldSeconds: a(r[t.logoHoldSeconds], 0, 8, n.logoHoldSeconds),
    logoSpeed: a(r[t.logoSpeed], 0.5, 2.5, n.logoSpeed),
    logos: [
      {
        bandId: 1,
        logoId: 'app',
        scale: a(r[t.logoAppScale], e.min, e.max, e.defaultValue),
        position: a(r[t.logoAppFinalPosition], 0, 100, n.logoAppFinalPosition),
      },
      {
        bandId: 2,
        logoId: 'web',
        scale: a(r[t.logoWebScale], e.min, e.max, e.defaultValue),
        position: a(r[t.logoWebFinalPosition], 0, 100, n.logoWebFinalPosition),
      },
      {
        bandId: 3,
        logoId: 'cloud',
        scale: a(r[t.logoCloudScale], e.min, e.max, e.defaultValue),
        position: a(r[t.logoCloudFinalPosition], 0, 100, n.logoCloudFinalPosition),
      },
      {
        bandId: 4,
        logoId: 'ai',
        scale: a(r[t.logoAiScale], e.min, e.max, e.defaultValue),
        position: a(r[t.logoAiFinalPosition], 0, 100, n.logoAiFinalPosition),
      },
    ],
    meridianCount: Math.round(a(r[t.meridianCount], 4, 48, n.meridianCount)),
    orientation: l(r[t.orientation]),
    outline: s(r[t.outline], n.outline),
    sphereColor: o(r[t.sphereColor], n.sphereColor),
  };
}
function d(e, t) {
  return { points: Array.from({ length: e + 1 }, (n, r) => t(r / e)) };
}
function f({ latitudeCount: e, meridianCount: t }) {
  return {
    latitudes: Array.from({ length: e }, (t, n) => {
      let r = (n + 1) / (e + 1),
        i = -Math.PI / 2 + r * Math.PI,
        a = Math.sin(i),
        o = Math.cos(i);
      return d(160, (e) => {
        let t = e * Math.PI * 2;
        return [Math.cos(t) * o, a, Math.sin(t) * o];
      });
    }),
    meridians: Array.from({ length: t }, (e, n) => {
      let r = (n / t) * Math.PI * 2,
        i = Math.cos(r),
        a = Math.sin(r);
      return d(160, (e) => {
        let t = -Math.PI / 2 + e * Math.PI,
          n = Math.cos(t);
        return [i * n, Math.sin(t), a * n];
      });
    }),
  };
}
//#endregion
//#region src/app/globe-crt-effect.ts
var p = 3,
  m = 0.9,
  h = 0.09,
  g = 0.035,
  _ = 0.02,
  v = 0.035,
  y = 56,
  b = 0.05,
  x = 0.032,
  S = 90,
  C = 1280;
function w(e) {
  return Number.isFinite(e) ? Math.max(0, e) : 0;
}
function T(e) {
  return Number.isFinite(e) ? Math.min(100, Math.max(0, e)) / 100 : 0;
}
function E(e, t, n = 100) {
  let r = w(e),
    i = Math.max(1, t),
    a = T(n),
    o = 0.5 + 0.5 * Math.sin(r * 0.031),
    s = 0.5 + 0.5 * Math.sin(r * 0.083 + 1.7);
  return {
    flickerAlpha: (_ + (o * 0.75 + s * 0.25) * v) * a,
    rollAlpha: b * a,
    rollY: ((r * x) % (i + y)) - y,
    scanlineAlpha: (h + o * g) * a,
    scanlineOffset: Math.floor(r / S) % p,
  };
}
function D(e, t, n, r, i = 100) {
  if (t <= 0 || n <= 0) return;
  let a = E(r, n, i);
  if (a.flickerAlpha <= 0 && a.scanlineAlpha <= 0 && a.rollAlpha <= 0) return;
  (e.save(),
    (e.globalCompositeOperation = 'source-atop'),
    (e.fillStyle = `rgba(0, 0, 0, ${a.flickerAlpha})`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `rgba(0, 0, 0, ${a.scanlineAlpha})`));
  for (let r = a.scanlineOffset; r < n; r += p) e.fillRect(0, r, t, m);
  let o = a.rollY,
    s = o + y;
  if (s > 0 && o < n) {
    let r = e.createLinearGradient(0, o, 0, s);
    (r.addColorStop(0, 'rgba(0, 0, 0, 0)'),
      r.addColorStop(0.5, `rgba(0, 0, 0, ${a.rollAlpha})`),
      r.addColorStop(1, 'rgba(0, 0, 0, 0)'),
      (e.fillStyle = r),
      e.fillRect(0, Math.max(0, o), t, Math.min(y, n - o)));
  }
  e.restore();
}
var O = 1e3,
  k = 1001,
  A = 1002,
  ee = 1006,
  te = 1008,
  ne = 1009,
  re = 1023,
  j = 2300,
  M = 2301,
  ie = 2302,
  ae = 2303,
  oe = 2400,
  se = 2401,
  ce = 2402,
  N = 'srgb',
  le = 'srgb-linear',
  ue = 'linear',
  de = 'srgb',
  fe = 2e3;
function pe(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function me(e) {
  return document.createElementNS('http://www.w3.org/1999/xhtml', e);
}
var he = {};
function ge(e) {
  let t = e[0];
  if (typeof t == 'string' && t.startsWith('TSL:')) {
    let t = e[1];
    t && t.isStackTrace
      ? (e[0] += ' ' + t.getLocation())
      : (e[1] =
          'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.');
  }
  return e;
}
function P(...e) {
  e = ge(e);
  let t = 'THREE.' + e.shift();
  {
    let n = e[0];
    n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
  }
}
function F(...e) {
  e = ge(e);
  let t = 'THREE.' + e.shift();
  {
    let n = e[0];
    n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
  }
}
function _e(...e) {
  let t = e.join(' ');
  t in he || ((he[t] = !0), P(...e));
}
var ve = class {
    addEventListener(e, t) {
      this._listeners === void 0 && (this._listeners = {});
      let n = this._listeners;
      (n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t));
    }
    hasEventListener(e, t) {
      let n = this._listeners;
      return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
    }
    removeEventListener(e, t) {
      let n = this._listeners;
      if (n === void 0) return;
      let r = n[e];
      if (r !== void 0) {
        let e = r.indexOf(t);
        e !== -1 && r.splice(e, 1);
      }
    }
    dispatchEvent(e) {
      let t = this._listeners;
      if (t === void 0) return;
      let n = t[e.type];
      if (n !== void 0) {
        e.target = this;
        let t = n.slice(0);
        for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
        e.target = null;
      }
    }
  },
  I =
    /* @__PURE__ */ '00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff'.split(
      '.'
    );
(Math.PI / 180, 180 / Math.PI);
function ye() {
  let e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0,
    r = (Math.random() * 4294967295) | 0;
  return (
    I[e & 255] +
    I[(e >> 8) & 255] +
    I[(e >> 16) & 255] +
    I[(e >> 24) & 255] +
    '-' +
    I[t & 255] +
    I[(t >> 8) & 255] +
    '-' +
    I[((t >> 16) & 15) | 64] +
    I[(t >> 24) & 255] +
    '-' +
    I[(n & 63) | 128] +
    I[(n >> 8) & 255] +
    '-' +
    I[(n >> 16) & 255] +
    I[(n >> 24) & 255] +
    I[r & 255] +
    I[(r >> 8) & 255] +
    I[(r >> 16) & 255] +
    I[(r >> 24) & 255]
  ).toLowerCase();
}
function L(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function be(e, t) {
  return ((e % t) + t) % t;
}
function xe(e, t, n) {
  return (1 - n) * e + n * t;
}
var Se = class e {
    static {
      e.prototype.isVector2 = !0;
    }
    constructor(e = 0, t = 0) {
      ((this.x = e), (this.y = t));
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return ((this.x = e), (this.y = t), this);
    }
    setScalar(e) {
      return ((this.x = e), (this.y = e), this);
    }
    setX(e) {
      return ((this.x = e), this);
    }
    setY(e) {
      return ((this.y = e), this);
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw Error('THREE.Vector2: index is out of range: ' + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw Error('THREE.Vector2: index is out of range: ' + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return ((this.x = e.x), (this.y = e.y), this);
    }
    add(e) {
      return ((this.x += e.x), (this.y += e.y), this);
    }
    addScalar(e) {
      return ((this.x += e), (this.y += e), this);
    }
    addVectors(e, t) {
      return ((this.x = e.x + t.x), (this.y = e.y + t.y), this);
    }
    addScaledVector(e, t) {
      return ((this.x += e.x * t), (this.y += e.y * t), this);
    }
    sub(e) {
      return ((this.x -= e.x), (this.y -= e.y), this);
    }
    subScalar(e) {
      return ((this.x -= e), (this.y -= e), this);
    }
    subVectors(e, t) {
      return ((this.x = e.x - t.x), (this.y = e.y - t.y), this);
    }
    multiply(e) {
      return ((this.x *= e.x), (this.y *= e.y), this);
    }
    multiplyScalar(e) {
      return ((this.x *= e), (this.y *= e), this);
    }
    divide(e) {
      return ((this.x /= e.x), (this.y /= e.y), this);
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      let t = this.x,
        n = this.y,
        r = e.elements;
      return ((this.x = r[0] * t + r[3] * n + r[6]), (this.y = r[1] * t + r[4] * n + r[7]), this);
    }
    min(e) {
      return ((this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this);
    }
    max(e) {
      return ((this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this);
    }
    clamp(e, t) {
      return ((this.x = L(this.x, e.x, t.x)), (this.y = L(this.y, e.y, t.y)), this);
    }
    clampScalar(e, t) {
      return ((this.x = L(this.x, e, t)), (this.y = L(this.y, e, t)), this);
    }
    clampLength(e, t) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(L(n, e, t));
    }
    floor() {
      return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this);
    }
    ceil() {
      return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
    }
    round() {
      return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this);
    }
    roundToZero() {
      return ((this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this);
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), this);
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(e) {
      let t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      let n = this.dot(e) / t;
      return Math.acos(L(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      let t = this.x - e.x,
        n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return ((this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this);
    }
    lerpVectors(e, t, n) {
      return ((this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this);
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return ((this.x = e[t]), (this.y = e[t + 1]), this);
    }
    toArray(e = [], t = 0) {
      return ((e[t] = this.x), (e[t + 1] = this.y), e);
    }
    fromBufferAttribute(e, t) {
      return ((this.x = e.getX(t)), (this.y = e.getY(t)), this);
    }
    rotateAround(e, t) {
      let n = Math.cos(t),
        r = Math.sin(t),
        i = this.x - e.x,
        a = this.y - e.y;
      return ((this.x = i * n - a * r + e.x), (this.y = i * r + a * n + e.y), this);
    }
    random() {
      return ((this.x = Math.random()), (this.y = Math.random()), this);
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y);
    }
  },
  R = class {
    constructor(e = 0, t = 0, n = 0, r = 1) {
      ((this.isQuaternion = !0), (this._x = e), (this._y = t), (this._z = n), (this._w = r));
    }
    static slerpFlat(e, t, n, r, i, a, o) {
      let s = n[r + 0],
        c = n[r + 1],
        l = n[r + 2],
        u = n[r + 3],
        d = i[a + 0],
        f = i[a + 1],
        p = i[a + 2],
        m = i[a + 3];
      if (u !== m || s !== d || c !== f || l !== p) {
        let e = s * d + c * f + l * p + u * m;
        e < 0 && ((d = -d), (f = -f), (p = -p), (m = -m), (e = -e));
        let t = 1 - o;
        if (e < 0.9995) {
          let n = Math.acos(e),
            r = Math.sin(n);
          ((t = Math.sin(t * n) / r),
            (o = Math.sin(o * n) / r),
            (s = s * t + d * o),
            (c = c * t + f * o),
            (l = l * t + p * o),
            (u = u * t + m * o));
        } else {
          ((s = s * t + d * o), (c = c * t + f * o), (l = l * t + p * o), (u = u * t + m * o));
          let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
          ((s *= e), (c *= e), (l *= e), (u *= e));
        }
      }
      ((e[t] = s), (e[t + 1] = c), (e[t + 2] = l), (e[t + 3] = u));
    }
    static multiplyQuaternionsFlat(e, t, n, r, i, a) {
      let o = n[r],
        s = n[r + 1],
        c = n[r + 2],
        l = n[r + 3],
        u = i[a],
        d = i[a + 1],
        f = i[a + 2],
        p = i[a + 3];
      return (
        (e[t] = o * p + l * u + s * f - c * d),
        (e[t + 1] = s * p + l * d + c * u - o * f),
        (e[t + 2] = c * p + l * f + o * d - s * u),
        (e[t + 3] = l * p - o * u - s * d - c * f),
        e
      );
    }
    get x() {
      return this._x;
    }
    set x(e) {
      ((this._x = e), this._onChangeCallback());
    }
    get y() {
      return this._y;
    }
    set y(e) {
      ((this._y = e), this._onChangeCallback());
    }
    get z() {
      return this._z;
    }
    set z(e) {
      ((this._z = e), this._onChangeCallback());
    }
    get w() {
      return this._w;
    }
    set w(e) {
      ((this._w = e), this._onChangeCallback());
    }
    set(e, t, n, r) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._w = r),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
      return (
        (this._x = e.x),
        (this._y = e.y),
        (this._z = e.z),
        (this._w = e.w),
        this._onChangeCallback(),
        this
      );
    }
    setFromEuler(e, t = !0) {
      let n = e._x,
        r = e._y,
        i = e._z,
        a = e._order,
        o = Math.cos,
        s = Math.sin,
        c = o(n / 2),
        l = o(r / 2),
        u = o(i / 2),
        d = s(n / 2),
        f = s(r / 2),
        p = s(i / 2);
      switch (a) {
        case 'XYZ':
          ((this._x = d * l * u + c * f * p),
            (this._y = c * f * u - d * l * p),
            (this._z = c * l * p + d * f * u),
            (this._w = c * l * u - d * f * p));
          break;
        case 'YXZ':
          ((this._x = d * l * u + c * f * p),
            (this._y = c * f * u - d * l * p),
            (this._z = c * l * p - d * f * u),
            (this._w = c * l * u + d * f * p));
          break;
        case 'ZXY':
          ((this._x = d * l * u - c * f * p),
            (this._y = c * f * u + d * l * p),
            (this._z = c * l * p + d * f * u),
            (this._w = c * l * u - d * f * p));
          break;
        case 'ZYX':
          ((this._x = d * l * u - c * f * p),
            (this._y = c * f * u + d * l * p),
            (this._z = c * l * p - d * f * u),
            (this._w = c * l * u + d * f * p));
          break;
        case 'YZX':
          ((this._x = d * l * u + c * f * p),
            (this._y = c * f * u + d * l * p),
            (this._z = c * l * p - d * f * u),
            (this._w = c * l * u - d * f * p));
          break;
        case 'XZY':
          ((this._x = d * l * u - c * f * p),
            (this._y = c * f * u - d * l * p),
            (this._z = c * l * p + d * f * u),
            (this._w = c * l * u + d * f * p));
          break;
        default:
          P('Quaternion: .setFromEuler() encountered an unknown order: ' + a);
      }
      return (t === !0 && this._onChangeCallback(), this);
    }
    setFromAxisAngle(e, t) {
      let n = t / 2,
        r = Math.sin(n);
      return (
        (this._x = e.x * r),
        (this._y = e.y * r),
        (this._z = e.z * r),
        (this._w = Math.cos(n)),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e) {
      let t = e.elements,
        n = t[0],
        r = t[4],
        i = t[8],
        a = t[1],
        o = t[5],
        s = t[9],
        c = t[2],
        l = t[6],
        u = t[10],
        d = n + o + u;
      if (d > 0) {
        let e = 0.5 / Math.sqrt(d + 1);
        ((this._w = 0.25 / e),
          (this._x = (l - s) * e),
          (this._y = (i - c) * e),
          (this._z = (a - r) * e));
      } else if (n > o && n > u) {
        let e = 2 * Math.sqrt(1 + n - o - u);
        ((this._w = (l - s) / e),
          (this._x = 0.25 * e),
          (this._y = (r + a) / e),
          (this._z = (i + c) / e));
      } else if (o > u) {
        let e = 2 * Math.sqrt(1 + o - n - u);
        ((this._w = (i - c) / e),
          (this._x = (r + a) / e),
          (this._y = 0.25 * e),
          (this._z = (s + l) / e));
      } else {
        let e = 2 * Math.sqrt(1 + u - n - o);
        ((this._w = (a - r) / e),
          (this._x = (i + c) / e),
          (this._y = (s + l) / e),
          (this._z = 0.25 * e));
      }
      return (this._onChangeCallback(), this);
    }
    setFromUnitVectors(e, t) {
      let n = e.dot(t) + 1;
      return (
        n < 1e-8
          ? ((n = 0),
            Math.abs(e.x) > Math.abs(e.z)
              ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
              : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
          : ((this._x = e.y * t.z - e.z * t.y),
            (this._y = e.z * t.x - e.x * t.z),
            (this._z = e.x * t.y - e.y * t.x),
            (this._w = n)),
        this.normalize()
      );
    }
    angleTo(e) {
      return 2 * Math.acos(Math.abs(L(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
      let n = this.angleTo(e);
      if (n === 0) return this;
      let r = Math.min(1, t / n);
      return (this.slerp(e, r), this);
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return ((this._x *= -1), (this._y *= -1), (this._z *= -1), this._onChangeCallback(), this);
    }
    dot(e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(
        this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
      );
    }
    normalize() {
      let e = this.length();
      return (
        e === 0
          ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
          : ((e = 1 / e), (this._x *= e), (this._y *= e), (this._z *= e), (this._w *= e)),
        this._onChangeCallback(),
        this
      );
    }
    multiply(e) {
      return this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
      return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions(e, t) {
      let n = e._x,
        r = e._y,
        i = e._z,
        a = e._w,
        o = t._x,
        s = t._y,
        c = t._z,
        l = t._w;
      return (
        (this._x = n * l + a * o + r * c - i * s),
        (this._y = r * l + a * s + i * o - n * c),
        (this._z = i * l + a * c + n * s - r * o),
        (this._w = a * l - n * o - r * s - i * c),
        this._onChangeCallback(),
        this
      );
    }
    slerp(e, t) {
      let n = e._x,
        r = e._y,
        i = e._z,
        a = e._w,
        o = this.dot(e);
      o < 0 && ((n = -n), (r = -r), (i = -i), (a = -a), (o = -o));
      let s = 1 - t;
      if (o < 0.9995) {
        let e = Math.acos(o),
          c = Math.sin(e);
        ((s = Math.sin(s * e) / c),
          (t = Math.sin(t * e) / c),
          (this._x = this._x * s + n * t),
          (this._y = this._y * s + r * t),
          (this._z = this._z * s + i * t),
          (this._w = this._w * s + a * t),
          this._onChangeCallback());
      } else
        ((this._x = this._x * s + n * t),
          (this._y = this._y * s + r * t),
          (this._z = this._z * s + i * t),
          (this._w = this._w * s + a * t),
          this.normalize());
      return this;
    }
    slerpQuaternions(e, t, n) {
      return this.copy(e).slerp(t, n);
    }
    random() {
      let e = 2 * Math.PI * Math.random(),
        t = 2 * Math.PI * Math.random(),
        n = Math.random(),
        r = Math.sqrt(1 - n),
        i = Math.sqrt(n);
      return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
    }
    equals(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
    }
    fromArray(e, t = 0) {
      return (
        (this._x = e[t]),
        (this._y = e[t + 1]),
        (this._z = e[t + 2]),
        (this._w = e[t + 3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._w),
        e
      );
    }
    fromBufferAttribute(e, t) {
      return (
        (this._x = e.getX(t)),
        (this._y = e.getY(t)),
        (this._z = e.getZ(t)),
        (this._w = e.getW(t)),
        this._onChangeCallback(),
        this
      );
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(e) {
      return ((this._onChangeCallback = e), this);
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      (yield this._x, yield this._y, yield this._z, yield this._w);
    }
  },
  z = class e {
    static {
      e.prototype.isVector3 = !0;
    }
    constructor(e = 0, t = 0, n = 0) {
      ((this.x = e), (this.y = t), (this.z = n));
    }
    set(e, t, n) {
      return (n === void 0 && (n = this.z), (this.x = e), (this.y = t), (this.z = n), this);
    }
    setScalar(e) {
      return ((this.x = e), (this.y = e), (this.z = e), this);
    }
    setX(e) {
      return ((this.x = e), this);
    }
    setY(e) {
      return ((this.y = e), this);
    }
    setZ(e) {
      return ((this.z = e), this);
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw Error('THREE.Vector3: index is out of range: ' + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw Error('THREE.Vector3: index is out of range: ' + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
      return ((this.x = e.x), (this.y = e.y), (this.z = e.z), this);
    }
    add(e) {
      return ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
    }
    addScalar(e) {
      return ((this.x += e), (this.y += e), (this.z += e), this);
    }
    addVectors(e, t) {
      return ((this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this);
    }
    addScaledVector(e, t) {
      return ((this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this);
    }
    sub(e) {
      return ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
    }
    subScalar(e) {
      return ((this.x -= e), (this.y -= e), (this.z -= e), this);
    }
    subVectors(e, t) {
      return ((this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this);
    }
    multiply(e) {
      return ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
    }
    multiplyScalar(e) {
      return ((this.x *= e), (this.y *= e), (this.z *= e), this);
    }
    multiplyVectors(e, t) {
      return ((this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this);
    }
    applyEuler(e) {
      return this.applyQuaternion(we.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
      return this.applyQuaternion(we.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[3] * n + i[6] * r),
        (this.y = i[1] * t + i[4] * n + i[7] * r),
        (this.z = i[2] * t + i[5] * n + i[8] * r),
        this
      );
    }
    applyNormalMatrix(e) {
      return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements,
        a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
      return (
        (this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a),
        (this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a),
        (this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a),
        this
      );
    }
    applyQuaternion(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.x,
        a = e.y,
        o = e.z,
        s = e.w,
        c = 2 * (a * r - o * n),
        l = 2 * (o * t - i * r),
        u = 2 * (i * n - a * t);
      return (
        (this.x = t + s * c + a * u - o * l),
        (this.y = n + s * l + o * c - i * u),
        (this.z = r + s * u + i * l - a * c),
        this
      );
    }
    project(e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
    }
    unproject(e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
    }
    transformDirection(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[4] * n + i[8] * r),
        (this.y = i[1] * t + i[5] * n + i[9] * r),
        (this.z = i[2] * t + i[6] * n + i[10] * r),
        this.normalize()
      );
    }
    divide(e) {
      return ((this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this);
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = L(this.x, e.x, t.x)),
        (this.y = L(this.y, e.y, t.y)),
        (this.z = L(this.z, e.z, t.z)),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = L(this.x, e, t)),
        (this.y = L(this.y, e, t)),
        (this.z = L(this.z, e, t)),
        this
      );
    }
    clampLength(e, t) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(L(n, e, t));
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        this
      );
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        this
      );
    }
    cross(e) {
      return this.crossVectors(this, e);
    }
    crossVectors(e, t) {
      let n = e.x,
        r = e.y,
        i = e.z,
        a = t.x,
        o = t.y,
        s = t.z;
      return ((this.x = r * s - i * o), (this.y = i * a - n * s), (this.z = n * o - r * a), this);
    }
    projectOnVector(e) {
      let t = e.lengthSq();
      if (t === 0) return this.set(0, 0, 0);
      let n = e.dot(this) / t;
      return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
      return (Ce.copy(this).projectOnVector(e), this.sub(Ce));
    }
    reflect(e) {
      return this.sub(Ce.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
      let t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      let n = this.dot(e) / t;
      return Math.acos(L(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      let t = this.x - e.x,
        n = this.y - e.y,
        r = this.z - e.z;
      return t * t + n * n + r * r;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
    }
    setFromSpherical(e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
      let r = Math.sin(t) * e;
      return (
        (this.x = r * Math.sin(n)),
        (this.y = Math.cos(t) * e),
        (this.z = r * Math.cos(n)),
        this
      );
    }
    setFromCylindrical(e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
      return ((this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this);
    }
    setFromMatrixPosition(e) {
      let t = e.elements;
      return ((this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this);
    }
    setFromMatrixScale(e) {
      let t = this.setFromMatrixColumn(e, 0).length(),
        n = this.setFromMatrixColumn(e, 1).length(),
        r = this.setFromMatrixColumn(e, 2).length();
      return ((this.x = t), (this.y = n), (this.z = r), this);
    }
    setFromMatrixColumn(e, t) {
      return this.fromArray(e.elements, t * 4);
    }
    setFromMatrix3Column(e, t) {
      return this.fromArray(e.elements, t * 3);
    }
    setFromEuler(e) {
      return ((this.x = e._x), (this.y = e._y), (this.z = e._z), this);
    }
    setFromColor(e) {
      return ((this.x = e.r), (this.y = e.g), (this.z = e.b), this);
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
      return ((this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this);
    }
    toArray(e = [], t = 0) {
      return ((e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e);
    }
    fromBufferAttribute(e, t) {
      return ((this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this);
    }
    random() {
      return ((this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), this);
    }
    randomDirection() {
      let e = Math.random() * Math.PI * 2,
        t = Math.random() * 2 - 1,
        n = Math.sqrt(1 - t * t);
      return ((this.x = n * Math.cos(e)), (this.y = t), (this.z = n * Math.sin(e)), this);
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y, yield this.z);
    }
  },
  Ce = /*@__PURE__*/ new z(),
  we = /*@__PURE__*/ new R(),
  Te = class e {
    static {
      e.prototype.isMatrix3 = !0;
    }
    constructor(e, t, n, r, i, a, o, s, c) {
      ((this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        e !== void 0 && this.set(e, t, n, r, i, a, o, s, c));
    }
    set(e, t, n, r, i, a, o, s, c) {
      let l = this.elements;
      return (
        (l[0] = e),
        (l[1] = r),
        (l[2] = o),
        (l[3] = t),
        (l[4] = i),
        (l[5] = s),
        (l[6] = n),
        (l[7] = a),
        (l[8] = c),
        this
      );
    }
    identity() {
      return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
    }
    copy(e) {
      let t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        this
      );
    }
    extractBasis(e, t, n) {
      return (
        e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(e) {
      let t = e.elements;
      return (this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this);
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      let n = e.elements,
        r = t.elements,
        i = this.elements,
        a = n[0],
        o = n[3],
        s = n[6],
        c = n[1],
        l = n[4],
        u = n[7],
        d = n[2],
        f = n[5],
        p = n[8],
        m = r[0],
        h = r[3],
        g = r[6],
        _ = r[1],
        v = r[4],
        y = r[7],
        b = r[2],
        x = r[5],
        S = r[8];
      return (
        (i[0] = a * m + o * _ + s * b),
        (i[3] = a * h + o * v + s * x),
        (i[6] = a * g + o * y + s * S),
        (i[1] = c * m + l * _ + u * b),
        (i[4] = c * h + l * v + u * x),
        (i[7] = c * g + l * y + u * S),
        (i[2] = d * m + f * _ + p * b),
        (i[5] = d * h + f * v + p * x),
        (i[8] = d * g + f * y + p * S),
        this
      );
    }
    multiplyScalar(e) {
      let t = this.elements;
      return (
        (t[0] *= e),
        (t[3] *= e),
        (t[6] *= e),
        (t[1] *= e),
        (t[4] *= e),
        (t[7] *= e),
        (t[2] *= e),
        (t[5] *= e),
        (t[8] *= e),
        this
      );
    }
    determinant() {
      let e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        c = e[7],
        l = e[8];
      return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
    }
    invert() {
      let e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        c = e[7],
        l = e[8],
        u = l * a - o * c,
        d = o * s - l * i,
        f = c * i - a * s,
        p = t * u + n * d + r * f;
      if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      let m = 1 / p;
      return (
        (e[0] = u * m),
        (e[1] = (r * c - l * n) * m),
        (e[2] = (o * n - r * a) * m),
        (e[3] = d * m),
        (e[4] = (l * t - r * s) * m),
        (e[5] = (r * i - o * t) * m),
        (e[6] = f * m),
        (e[7] = (n * s - c * t) * m),
        (e[8] = (a * t - n * i) * m),
        this
      );
    }
    transpose() {
      let e,
        t = this.elements;
      return (
        (e = t[1]),
        (t[1] = t[3]),
        (t[3] = e),
        (e = t[2]),
        (t[2] = t[6]),
        (t[6] = e),
        (e = t[5]),
        (t[5] = t[7]),
        (t[7] = e),
        this
      );
    }
    getNormalMatrix(e) {
      return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
      let t = this.elements;
      return (
        (e[0] = t[0]),
        (e[1] = t[3]),
        (e[2] = t[6]),
        (e[3] = t[1]),
        (e[4] = t[4]),
        (e[5] = t[7]),
        (e[6] = t[2]),
        (e[7] = t[5]),
        (e[8] = t[8]),
        this
      );
    }
    setUvTransform(e, t, n, r, i, a, o) {
      let s = Math.cos(i),
        c = Math.sin(i);
      return (
        this.set(
          n * s,
          n * c,
          -n * (s * a + c * o) + a + e,
          -r * c,
          r * s,
          -r * (-c * a + s * o) + o + t,
          0,
          0,
          1
        ),
        this
      );
    }
    scale(e, t) {
      return (
        _e('Matrix3: .scale() is deprecated. Use .makeScale() instead.'),
        this.premultiply(Ee.makeScale(e, t)),
        this
      );
    }
    rotate(e) {
      return (
        _e('Matrix3: .rotate() is deprecated. Use .makeRotation() instead.'),
        this.premultiply(Ee.makeRotation(-e)),
        this
      );
    }
    translate(e, t) {
      return (
        _e('Matrix3: .translate() is deprecated. Use .makeTranslation() instead.'),
        this.premultiply(Ee.makeTranslation(e, t)),
        this
      );
    }
    makeTranslation(e, t) {
      return (
        e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
        this
      );
    }
    makeRotation(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(t, -n, 0, n, t, 0, 0, 0, 1), this);
    }
    makeScale(e, t) {
      return (this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this);
    }
    equals(e) {
      let t = this.elements,
        n = e.elements;
      for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      let n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        e
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  },
  Ee = /*@__PURE__*/ new Te(),
  De = /*@__PURE__*/ new Te().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  ),
  Oe = /*@__PURE__*/ new Te().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  );
function ke() {
  let e = {
      enabled: !0,
      workingColorSpace: le,
      spaces: {},
      convert: function (e, t, n) {
        return this.enabled === !1 || t === n || !t || !n
          ? e
          : (this.spaces[t].transfer === 'srgb' && ((e.r = V(e.r)), (e.g = V(e.g)), (e.b = V(e.b))),
            this.spaces[t].primaries !== this.spaces[n].primaries &&
              (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)),
            this.spaces[n].transfer === 'srgb' && ((e.r = H(e.r)), (e.g = H(e.g)), (e.b = H(e.b))),
            e);
      },
      workingToColorSpace: function (e, t) {
        return this.convert(e, this.workingColorSpace, t);
      },
      colorSpaceToWorking: function (e, t) {
        return this.convert(e, t, this.workingColorSpace);
      },
      getPrimaries: function (e) {
        return this.spaces[e].primaries;
      },
      getTransfer: function (e) {
        return e === '' ? ue : this.spaces[e].transfer;
      },
      getToneMappingMode: function (e) {
        return this.spaces[e].outputColorSpaceConfig.toneMappingMode || 'standard';
      },
      getLuminanceCoefficients: function (e, t = this.workingColorSpace) {
        return e.fromArray(this.spaces[t].luminanceCoefficients);
      },
      define: function (e) {
        Object.assign(this.spaces, e);
      },
      _getMatrix: function (e, t, n) {
        return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (e) {
        return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (e = this.workingColorSpace) {
        return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (t, n) {
        return (
          _e(
            'ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().'
          ),
          e.workingToColorSpace(t, n)
        );
      },
      toWorkingColorSpace: function (t, n) {
        return (
          _e('ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().'),
          e.colorSpaceToWorking(t, n)
        );
      },
    },
    t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    n = [0.2126, 0.7152, 0.0722],
    r = [0.3127, 0.329];
  return (
    e.define({
      [le]: {
        primaries: t,
        whitePoint: r,
        transfer: ue,
        toXYZ: De,
        fromXYZ: Oe,
        luminanceCoefficients: n,
        workingColorSpaceConfig: { unpackColorSpace: N },
        outputColorSpaceConfig: { drawingBufferColorSpace: N },
      },
      [N]: {
        primaries: t,
        whitePoint: r,
        transfer: de,
        toXYZ: De,
        fromXYZ: Oe,
        luminanceCoefficients: n,
        outputColorSpaceConfig: { drawingBufferColorSpace: N },
      },
    }),
    e
  );
}
var B = /*@__PURE__*/ ke();
function V(e) {
  return e < 0.04045 ? e * 0.0773993808 : (e * 0.9478672986 + 0.0521327014) ** 2.4;
}
function H(e) {
  return e < 0.0031308 ? e * 12.92 : 1.055 * e ** 0.41666 - 0.055;
}
var U,
  Ae = class {
    static getDataURL(e, t = 'image/png') {
      if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > 'u') return e.src;
      let n;
      if (e instanceof HTMLCanvasElement) n = e;
      else {
        (U === void 0 && (U = me('canvas')), (U.width = e.width), (U.height = e.height));
        let t = U.getContext('2d');
        (e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height),
          (n = U));
      }
      return n.toDataURL(t);
    }
    static sRGBToLinear(e) {
      if (
        (typeof HTMLImageElement < 'u' && e instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < 'u' && e instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < 'u' && e instanceof ImageBitmap)
      ) {
        let t = me('canvas');
        ((t.width = e.width), (t.height = e.height));
        let n = t.getContext('2d');
        n.drawImage(e, 0, 0, e.width, e.height);
        let r = n.getImageData(0, 0, e.width, e.height),
          i = r.data;
        for (let e = 0; e < i.length; e++) i[e] = V(i[e] / 255) * 255;
        return (n.putImageData(r, 0, 0), t);
      }
      if (e.data) {
        let t = e.data.slice(0);
        for (let e = 0; e < t.length; e++)
          t instanceof Uint8Array || t instanceof Uint8ClampedArray
            ? (t[e] = Math.floor(V(t[e] / 255) * 255))
            : (t[e] = V(t[e]));
        return {
          data: t,
          width: e.width,
          height: e.height,
        };
      }
      return (
        P('ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.'),
        e
      );
    }
  },
  je = 0,
  Me = class {
    constructor(e = null) {
      ((this.isSource = !0),
        Object.defineProperty(this, 'id', { value: je++ }),
        (this.uuid = ye()),
        (this.data = e),
        (this.dataReady = !0),
        (this.version = 0));
    }
    getSize(e) {
      let t = this.data;
      return (
        typeof HTMLVideoElement < 'u' && t instanceof HTMLVideoElement
          ? e.set(t.videoWidth, t.videoHeight, 0)
          : typeof VideoFrame < 'u' && t instanceof VideoFrame
            ? e.set(t.displayWidth, t.displayHeight, 0)
            : t === null
              ? e.set(0, 0, 0)
              : e.set(t.width, t.height, t.depth || 0),
        e
      );
    }
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == 'string';
      if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
      let n = {
          uuid: this.uuid,
          url: '',
        },
        r = this.data;
      if (r !== null) {
        let e;
        if (Array.isArray(r)) {
          e = [];
          for (let t = 0, n = r.length; t < n; t++)
            r[t].isDataTexture ? e.push(Ne(r[t].image)) : e.push(Ne(r[t]));
        } else e = Ne(r);
        n.url = e;
      }
      return (t || (e.images[this.uuid] = n), n);
    }
  };
function Ne(e) {
  return (typeof HTMLImageElement < 'u' && e instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < 'u' && e instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < 'u' && e instanceof ImageBitmap)
    ? Ae.getDataURL(e)
    : e.data
      ? {
          data: Array.from(e.data),
          width: e.width,
          height: e.height,
          type: e.data.constructor.name,
        }
      : (P('Texture: Unable to serialize Texture.'), {});
}
var Pe = 0,
  Fe = /*@__PURE__*/ new z(),
  Ie = class e extends ve {
    constructor(
      t = e.DEFAULT_IMAGE,
      n = e.DEFAULT_MAPPING,
      r = k,
      i = k,
      a = ee,
      o = te,
      s = re,
      c = ne,
      l = e.DEFAULT_ANISOTROPY,
      u = ''
    ) {
      (super(),
        (this.isTexture = !0),
        Object.defineProperty(this, 'id', { value: Pe++ }),
        (this.uuid = ye()),
        (this.name = ''),
        (this.source = new Me(t)),
        (this.mipmaps = []),
        (this.mapping = n),
        (this.channel = 0),
        (this.wrapS = r),
        (this.wrapT = i),
        (this.magFilter = a),
        (this.minFilter = o),
        (this.anisotropy = l),
        (this.format = s),
        (this.internalFormat = null),
        (this.type = c),
        (this.offset = new Se(0, 0)),
        (this.repeat = new Se(1, 1)),
        (this.center = new Se(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new Te()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.colorSpace = u),
        (this.userData = {}),
        (this.updateRanges = []),
        (this.version = 0),
        (this.onUpdate = null),
        (this.renderTarget = null),
        (this.isRenderTargetTexture = !1),
        (this.isArrayTexture = !!(t && t.depth && t.depth > 1)),
        (this.pmremVersion = 0),
        (this.normalized = !1));
    }
    get width() {
      return this.source.getSize(Fe).x;
    }
    get height() {
      return this.source.getSize(Fe).y;
    }
    get depth() {
      return this.source.getSize(Fe).z;
    }
    get image() {
      return this.source.data;
    }
    set image(e) {
      this.source.data = e;
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y
      );
    }
    addUpdateRange(e, t) {
      this.updateRanges.push({
        start: e,
        count: t,
      });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.source = e.source),
        (this.mipmaps = e.mipmaps.slice(0)),
        (this.mapping = e.mapping),
        (this.channel = e.channel),
        (this.wrapS = e.wrapS),
        (this.wrapT = e.wrapT),
        (this.magFilter = e.magFilter),
        (this.minFilter = e.minFilter),
        (this.anisotropy = e.anisotropy),
        (this.format = e.format),
        (this.internalFormat = e.internalFormat),
        (this.type = e.type),
        (this.normalized = e.normalized),
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        (this.rotation = e.rotation),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this.matrix.copy(e.matrix),
        (this.generateMipmaps = e.generateMipmaps),
        (this.premultiplyAlpha = e.premultiplyAlpha),
        (this.flipY = e.flipY),
        (this.unpackAlignment = e.unpackAlignment),
        (this.colorSpace = e.colorSpace),
        (this.renderTarget = e.renderTarget),
        (this.isRenderTargetTexture = e.isRenderTargetTexture),
        (this.isArrayTexture = e.isArrayTexture),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        (this.needsUpdate = !0),
        this
      );
    }
    setValues(e) {
      for (let t in e) {
        let n = e[t];
        if (n === void 0) {
          P(`Texture.setValues(): parameter '${t}' has value of undefined.`);
          continue;
        }
        let r = this[t];
        if (r === void 0) {
          P(`Texture.setValues(): property '${t}' does not exist.`);
          continue;
        }
        (r && n && r.isVector2 && n.isVector2) ||
        (r && n && r.isVector3 && n.isVector3) ||
        (r && n && r.isMatrix3 && n.isMatrix3)
          ? r.copy(n)
          : (this[t] = n);
      }
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == 'string';
      if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
      let n = {
        metadata: {
          version: 4.7,
          type: 'Texture',
          generator: 'Texture.toJSON',
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(e).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        normalized: this.normalized,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      return (
        Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
      );
    }
    dispose() {
      this.dispatchEvent({ type: 'dispose' });
    }
    transformUv(e) {
      if (this.mapping !== 300) return e;
      if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
        switch (this.wrapS) {
          case O:
            e.x -= Math.floor(e.x);
            break;
          case k:
            e.x = e.x < 0 ? 0 : 1;
            break;
          case A:
            Math.abs(Math.floor(e.x) % 2) === 1
              ? (e.x = Math.ceil(e.x) - e.x)
              : (e.x -= Math.floor(e.x));
        }
      if (e.y < 0 || e.y > 1)
        switch (this.wrapT) {
          case O:
            e.y -= Math.floor(e.y);
            break;
          case k:
            e.y = e.y < 0 ? 0 : 1;
            break;
          case A:
            Math.abs(Math.floor(e.y) % 2) === 1
              ? (e.y = Math.ceil(e.y) - e.y)
              : (e.y -= Math.floor(e.y));
        }
      return (this.flipY && (e.y = 1 - e.y), e);
    }
    set needsUpdate(e) {
      e === !0 && (this.version++, (this.source.needsUpdate = !0));
    }
    set needsPMREMUpdate(e) {
      e === !0 && this.pmremVersion++;
    }
  };
((Ie.DEFAULT_IMAGE = null),
  (Ie.DEFAULT_MAPPING = 300),
  (Ie.DEFAULT_ANISOTROPY = 1),
  class e {
    static {
      e.prototype.isVector4 = !0;
    }
    constructor(e = 0, t = 0, n = 0, r = 1) {
      ((this.x = e), (this.y = t), (this.z = n), (this.w = r));
    }
    get width() {
      return this.z;
    }
    set width(e) {
      this.z = e;
    }
    get height() {
      return this.w;
    }
    set height(e) {
      this.w = e;
    }
    set(e, t, n, r) {
      return ((this.x = e), (this.y = t), (this.z = n), (this.w = r), this);
    }
    setScalar(e) {
      return ((this.x = e), (this.y = e), (this.z = e), (this.w = e), this);
    }
    setX(e) {
      return ((this.x = e), this);
    }
    setY(e) {
      return ((this.y = e), this);
    }
    setZ(e) {
      return ((this.z = e), this);
    }
    setW(e) {
      return ((this.w = e), this);
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw Error('THREE.Vector4: index is out of range: ' + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw Error('THREE.Vector4: index is out of range: ' + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e) {
      return (
        (this.x = e.x),
        (this.y = e.y),
        (this.z = e.z),
        (this.w = e.w === void 0 ? 1 : e.w),
        this
      );
    }
    add(e) {
      return ((this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this);
    }
    addScalar(e) {
      return ((this.x += e), (this.y += e), (this.z += e), (this.w += e), this);
    }
    addVectors(e, t) {
      return (
        (this.x = e.x + t.x),
        (this.y = e.y + t.y),
        (this.z = e.z + t.z),
        (this.w = e.w + t.w),
        this
      );
    }
    addScaledVector(e, t) {
      return (
        (this.x += e.x * t),
        (this.y += e.y * t),
        (this.z += e.z * t),
        (this.w += e.w * t),
        this
      );
    }
    sub(e) {
      return ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this);
    }
    subScalar(e) {
      return ((this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this);
    }
    subVectors(e, t) {
      return (
        (this.x = e.x - t.x),
        (this.y = e.y - t.y),
        (this.z = e.z - t.z),
        (this.w = e.w - t.w),
        this
      );
    }
    multiply(e) {
      return ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this);
    }
    multiplyScalar(e) {
      return ((this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this);
    }
    applyMatrix4(e) {
      let t = this.x,
        n = this.y,
        r = this.z,
        i = this.w,
        a = e.elements;
      return (
        (this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i),
        (this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i),
        (this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i),
        (this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i),
        this
      );
    }
    divide(e) {
      return ((this.x /= e.x), (this.y /= e.y), (this.z /= e.z), (this.w /= e.w), this);
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
      this.w = 2 * Math.acos(e.w);
      let t = Math.sqrt(1 - e.w * e.w);
      return (
        t < 1e-4
          ? ((this.x = 1), (this.y = 0), (this.z = 0))
          : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
        this
      );
    }
    setAxisAngleFromRotationMatrix(e) {
      let t,
        n,
        r,
        i,
        a = 0.01,
        o = 0.1,
        s = e.elements,
        c = s[0],
        l = s[4],
        u = s[8],
        d = s[1],
        f = s[5],
        p = s[9],
        m = s[2],
        h = s[6],
        g = s[10];
      if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
        if (
          Math.abs(l + d) < o &&
          Math.abs(u + m) < o &&
          Math.abs(p + h) < o &&
          Math.abs(c + f + g - 3) < o
        )
          return (this.set(1, 0, 0, 0), this);
        t = Math.PI;
        let e = (c + 1) / 2,
          s = (f + 1) / 2,
          _ = (g + 1) / 2,
          v = (l + d) / 4,
          y = (u + m) / 4,
          b = (p + h) / 4;
        return (
          e > s && e > _
            ? e < a
              ? ((n = 0), (r = 0.707106781), (i = 0.707106781))
              : ((n = Math.sqrt(e)), (r = v / n), (i = y / n))
            : s > _
              ? s < a
                ? ((n = 0.707106781), (r = 0), (i = 0.707106781))
                : ((r = Math.sqrt(s)), (n = v / r), (i = b / r))
              : _ < a
                ? ((n = 0.707106781), (r = 0.707106781), (i = 0))
                : ((i = Math.sqrt(_)), (n = y / i), (r = b / i)),
          this.set(n, r, i, t),
          this
        );
      }
      let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
      return (
        Math.abs(_) < 0.001 && (_ = 1),
        (this.x = (h - p) / _),
        (this.y = (u - m) / _),
        (this.z = (d - l) / _),
        (this.w = Math.acos((c + f + g - 1) / 2)),
        this
      );
    }
    setFromMatrixPosition(e) {
      let t = e.elements;
      return ((this.x = t[12]), (this.y = t[13]), (this.z = t[14]), (this.w = t[15]), this);
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        (this.w = Math.min(this.w, e.w)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        (this.w = Math.max(this.w, e.w)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = L(this.x, e.x, t.x)),
        (this.y = L(this.y, e.y, t.y)),
        (this.z = L(this.z, e.z, t.z)),
        (this.w = L(this.w, e.w, t.w)),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = L(this.x, e, t)),
        (this.y = L(this.y, e, t)),
        (this.z = L(this.z, e, t)),
        (this.w = L(this.w, e, t)),
        this
      );
    }
    clampLength(e, t) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(L(n, e, t));
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        (this.w = Math.trunc(this.w)),
        this
      );
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), (this.w = -this.w), this);
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        (this.w += (e.w - this.w) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        (this.w = e.w + (t.w - e.w) * n),
        this
      );
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
    }
    fromArray(e, t = 0) {
      return ((this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), (this.w = e[t + 3]), this);
    }
    toArray(e = [], t = 0) {
      return ((e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), (e[t + 3] = this.w), e);
    }
    fromBufferAttribute(e, t) {
      return (
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        (this.z = e.getZ(t)),
        (this.w = e.getW(t)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        (this.w = Math.random()),
        this
      );
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y, yield this.z, yield this.w);
    }
  });
var W = class e {
    static {
      e.prototype.isMatrix4 = !0;
    }
    constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      ((this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        e !== void 0 && this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h));
    }
    set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      let g = this.elements;
      return (
        (g[0] = e),
        (g[4] = t),
        (g[8] = n),
        (g[12] = r),
        (g[1] = i),
        (g[5] = a),
        (g[9] = o),
        (g[13] = s),
        (g[2] = c),
        (g[6] = l),
        (g[10] = u),
        (g[14] = d),
        (g[3] = f),
        (g[7] = p),
        (g[11] = m),
        (g[15] = h),
        this
      );
    }
    identity() {
      return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    clone() {
      return new e().fromArray(this.elements);
    }
    copy(e) {
      let t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        (t[9] = n[9]),
        (t[10] = n[10]),
        (t[11] = n[11]),
        (t[12] = n[12]),
        (t[13] = n[13]),
        (t[14] = n[14]),
        (t[15] = n[15]),
        this
      );
    }
    copyPosition(e) {
      let t = this.elements,
        n = e.elements;
      return ((t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this);
    }
    setFromMatrix3(e) {
      let t = e.elements;
      return (
        this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
        this
      );
    }
    extractBasis(e, t, n) {
      return this.determinantAffine() === 0
        ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this)
        : (e.setFromMatrixColumn(this, 0),
          t.setFromMatrixColumn(this, 1),
          n.setFromMatrixColumn(this, 2),
          this);
    }
    makeBasis(e, t, n) {
      return (this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this);
    }
    extractRotation(e) {
      if (e.determinantAffine() === 0) return this.identity();
      let t = this.elements,
        n = e.elements,
        r = 1 / Le.setFromMatrixColumn(e, 0).length(),
        i = 1 / Le.setFromMatrixColumn(e, 1).length(),
        a = 1 / Le.setFromMatrixColumn(e, 2).length();
      return (
        (t[0] = n[0] * r),
        (t[1] = n[1] * r),
        (t[2] = n[2] * r),
        (t[3] = 0),
        (t[4] = n[4] * i),
        (t[5] = n[5] * i),
        (t[6] = n[6] * i),
        (t[7] = 0),
        (t[8] = n[8] * a),
        (t[9] = n[9] * a),
        (t[10] = n[10] * a),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromEuler(e) {
      let t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z,
        a = Math.cos(n),
        o = Math.sin(n),
        s = Math.cos(r),
        c = Math.sin(r),
        l = Math.cos(i),
        u = Math.sin(i);
      if (e.order === 'XYZ') {
        let e = a * l,
          n = a * u,
          r = o * l,
          i = o * u;
        ((t[0] = s * l),
          (t[4] = -s * u),
          (t[8] = c),
          (t[1] = n + r * c),
          (t[5] = e - i * c),
          (t[9] = -o * s),
          (t[2] = i - e * c),
          (t[6] = r + n * c),
          (t[10] = a * s));
      } else if (e.order === 'YXZ') {
        let e = s * l,
          n = s * u,
          r = c * l,
          i = c * u;
        ((t[0] = e + i * o),
          (t[4] = r * o - n),
          (t[8] = a * c),
          (t[1] = a * u),
          (t[5] = a * l),
          (t[9] = -o),
          (t[2] = n * o - r),
          (t[6] = i + e * o),
          (t[10] = a * s));
      } else if (e.order === 'ZXY') {
        let e = s * l,
          n = s * u,
          r = c * l,
          i = c * u;
        ((t[0] = e - i * o),
          (t[4] = -a * u),
          (t[8] = r + n * o),
          (t[1] = n + r * o),
          (t[5] = a * l),
          (t[9] = i - e * o),
          (t[2] = -a * c),
          (t[6] = o),
          (t[10] = a * s));
      } else if (e.order === 'ZYX') {
        let e = a * l,
          n = a * u,
          r = o * l,
          i = o * u;
        ((t[0] = s * l),
          (t[4] = r * c - n),
          (t[8] = e * c + i),
          (t[1] = s * u),
          (t[5] = i * c + e),
          (t[9] = n * c - r),
          (t[2] = -c),
          (t[6] = o * s),
          (t[10] = a * s));
      } else if (e.order === 'YZX') {
        let e = a * s,
          n = a * c,
          r = o * s,
          i = o * c;
        ((t[0] = s * l),
          (t[4] = i - e * u),
          (t[8] = r * u + n),
          (t[1] = u),
          (t[5] = a * l),
          (t[9] = -o * l),
          (t[2] = -c * l),
          (t[6] = n * u + r),
          (t[10] = e - i * u));
      } else if (e.order === 'XZY') {
        let e = a * s,
          n = a * c,
          r = o * s,
          i = o * c;
        ((t[0] = s * l),
          (t[4] = -u),
          (t[8] = c * l),
          (t[1] = e * u + i),
          (t[5] = a * l),
          (t[9] = n * u - r),
          (t[2] = r * u - n),
          (t[6] = o * l),
          (t[10] = i * u + e));
      }
      return (
        (t[3] = 0),
        (t[7] = 0),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(e) {
      return this.compose(Re, e, ze);
    }
    lookAt(e, t, n) {
      let r = this.elements;
      return (
        q.subVectors(e, t),
        q.lengthSq() === 0 && (q.z = 1),
        q.normalize(),
        K.crossVectors(n, q),
        K.lengthSq() === 0 &&
          (Math.abs(n.z) === 1 ? (q.x += 1e-4) : (q.z += 1e-4),
          q.normalize(),
          K.crossVectors(n, q)),
        K.normalize(),
        Be.crossVectors(q, K),
        (r[0] = K.x),
        (r[4] = Be.x),
        (r[8] = q.x),
        (r[1] = K.y),
        (r[5] = Be.y),
        (r[9] = q.y),
        (r[2] = K.z),
        (r[6] = Be.z),
        (r[10] = q.z),
        this
      );
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      let n = e.elements,
        r = t.elements,
        i = this.elements,
        a = n[0],
        o = n[4],
        s = n[8],
        c = n[12],
        l = n[1],
        u = n[5],
        d = n[9],
        f = n[13],
        p = n[2],
        m = n[6],
        h = n[10],
        g = n[14],
        _ = n[3],
        v = n[7],
        y = n[11],
        b = n[15],
        x = r[0],
        S = r[4],
        C = r[8],
        w = r[12],
        T = r[1],
        E = r[5],
        D = r[9],
        O = r[13],
        k = r[2],
        A = r[6],
        ee = r[10],
        te = r[14],
        ne = r[3],
        re = r[7],
        j = r[11],
        M = r[15];
      return (
        (i[0] = a * x + o * T + s * k + c * ne),
        (i[4] = a * S + o * E + s * A + c * re),
        (i[8] = a * C + o * D + s * ee + c * j),
        (i[12] = a * w + o * O + s * te + c * M),
        (i[1] = l * x + u * T + d * k + f * ne),
        (i[5] = l * S + u * E + d * A + f * re),
        (i[9] = l * C + u * D + d * ee + f * j),
        (i[13] = l * w + u * O + d * te + f * M),
        (i[2] = p * x + m * T + h * k + g * ne),
        (i[6] = p * S + m * E + h * A + g * re),
        (i[10] = p * C + m * D + h * ee + g * j),
        (i[14] = p * w + m * O + h * te + g * M),
        (i[3] = _ * x + v * T + y * k + b * ne),
        (i[7] = _ * S + v * E + y * A + b * re),
        (i[11] = _ * C + v * D + y * ee + b * j),
        (i[15] = _ * w + v * O + y * te + b * M),
        this
      );
    }
    multiplyScalar(e) {
      let t = this.elements;
      return (
        (t[0] *= e),
        (t[4] *= e),
        (t[8] *= e),
        (t[12] *= e),
        (t[1] *= e),
        (t[5] *= e),
        (t[9] *= e),
        (t[13] *= e),
        (t[2] *= e),
        (t[6] *= e),
        (t[10] *= e),
        (t[14] *= e),
        (t[3] *= e),
        (t[7] *= e),
        (t[11] *= e),
        (t[15] *= e),
        this
      );
    }
    determinant() {
      let e = this.elements,
        t = e[0],
        n = e[4],
        r = e[8],
        i = e[12],
        a = e[1],
        o = e[5],
        s = e[9],
        c = e[13],
        l = e[2],
        u = e[6],
        d = e[10],
        f = e[14],
        p = e[3],
        m = e[7],
        h = e[11],
        g = e[15],
        _ = s * f - c * d,
        v = o * f - c * u,
        y = o * d - s * u,
        b = a * f - c * l,
        x = a * d - s * l,
        S = a * u - o * l;
      return (
        t * (m * _ - h * v + g * y) -
        n * (p * _ - h * b + g * x) +
        r * (p * v - m * b + g * S) -
        i * (p * y - m * x + h * S)
      );
    }
    determinantAffine() {
      let e = this.elements,
        t = e[0],
        n = e[4],
        r = e[8],
        i = e[1],
        a = e[5],
        o = e[9],
        s = e[2],
        c = e[6],
        l = e[10];
      return t * (a * l - o * c) - n * (i * l - o * s) + r * (i * c - a * s);
    }
    transpose() {
      let e = this.elements,
        t;
      return (
        (t = e[1]),
        (e[1] = e[4]),
        (e[4] = t),
        (t = e[2]),
        (e[2] = e[8]),
        (e[8] = t),
        (t = e[6]),
        (e[6] = e[9]),
        (e[9] = t),
        (t = e[3]),
        (e[3] = e[12]),
        (e[12] = t),
        (t = e[7]),
        (e[7] = e[13]),
        (e[13] = t),
        (t = e[11]),
        (e[11] = e[14]),
        (e[14] = t),
        this
      );
    }
    setPosition(e, t, n) {
      let r = this.elements;
      return (
        e.isVector3
          ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
          : ((r[12] = e), (r[13] = t), (r[14] = n)),
        this
      );
    }
    invert() {
      let e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        c = e[7],
        l = e[8],
        u = e[9],
        d = e[10],
        f = e[11],
        p = e[12],
        m = e[13],
        h = e[14],
        g = e[15],
        _ = t * o - n * a,
        v = t * s - r * a,
        y = t * c - i * a,
        b = n * s - r * o,
        x = n * c - i * o,
        S = r * c - i * s,
        C = l * m - u * p,
        w = l * h - d * p,
        T = l * g - f * p,
        E = u * h - d * m,
        D = u * g - f * m,
        O = d * g - f * h,
        k = _ * O - v * D + y * E + b * T - x * w + S * C;
      if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      let A = 1 / k;
      return (
        (e[0] = (o * O - s * D + c * E) * A),
        (e[1] = (r * D - n * O - i * E) * A),
        (e[2] = (m * S - h * x + g * b) * A),
        (e[3] = (d * x - u * S - f * b) * A),
        (e[4] = (s * T - a * O - c * w) * A),
        (e[5] = (t * O - r * T + i * w) * A),
        (e[6] = (h * y - p * S - g * v) * A),
        (e[7] = (l * S - d * y + f * v) * A),
        (e[8] = (a * D - o * T + c * C) * A),
        (e[9] = (n * T - t * D - i * C) * A),
        (e[10] = (p * x - m * y + g * _) * A),
        (e[11] = (u * y - l * x - f * _) * A),
        (e[12] = (o * w - a * E - s * C) * A),
        (e[13] = (t * E - n * w + r * C) * A),
        (e[14] = (m * v - p * b - h * _) * A),
        (e[15] = (l * b - u * v + d * _) * A),
        this
      );
    }
    scale(e) {
      let t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z;
      return (
        (t[0] *= n),
        (t[4] *= r),
        (t[8] *= i),
        (t[1] *= n),
        (t[5] *= r),
        (t[9] *= i),
        (t[2] *= n),
        (t[6] *= r),
        (t[10] *= i),
        (t[3] *= n),
        (t[7] *= r),
        (t[11] *= i),
        this
      );
    }
    getMaxScaleOnAxis() {
      let e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, r));
    }
    makeTranslation(e, t, n) {
      return (
        e.isVector3
          ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
          : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
        this
      );
    }
    makeRotationX(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this);
    }
    makeRotationY(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this);
    }
    makeRotationZ(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    makeRotationAxis(e, t) {
      let n = Math.cos(t),
        r = Math.sin(t),
        i = 1 - n,
        a = e.x,
        o = e.y,
        s = e.z,
        c = i * a,
        l = i * o;
      return (
        this.set(
          c * a + n,
          c * o - r * s,
          c * s + r * o,
          0,
          c * o + r * s,
          l * o + n,
          l * s - r * a,
          0,
          c * s - r * o,
          l * s + r * a,
          i * s * s + n,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    makeScale(e, t, n) {
      return (this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
    }
    makeShear(e, t, n, r, i, a) {
      return (this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this);
    }
    compose(e, t, n) {
      let r = this.elements,
        i = t._x,
        a = t._y,
        o = t._z,
        s = t._w,
        c = i + i,
        l = a + a,
        u = o + o,
        d = i * c,
        f = i * l,
        p = i * u,
        m = a * l,
        h = a * u,
        g = o * u,
        _ = s * c,
        v = s * l,
        y = s * u,
        b = n.x,
        x = n.y,
        S = n.z;
      return (
        (r[0] = (1 - (m + g)) * b),
        (r[1] = (f + y) * b),
        (r[2] = (p - v) * b),
        (r[3] = 0),
        (r[4] = (f - y) * x),
        (r[5] = (1 - (d + g)) * x),
        (r[6] = (h + _) * x),
        (r[7] = 0),
        (r[8] = (p + v) * S),
        (r[9] = (h - _) * S),
        (r[10] = (1 - (d + m)) * S),
        (r[11] = 0),
        (r[12] = e.x),
        (r[13] = e.y),
        (r[14] = e.z),
        (r[15] = 1),
        this
      );
    }
    decompose(e, t, n) {
      let r = this.elements;
      ((e.x = r[12]), (e.y = r[13]), (e.z = r[14]));
      let i = this.determinantAffine();
      if (i === 0) return (n.set(1, 1, 1), t.identity(), this);
      let a = Le.set(r[0], r[1], r[2]).length(),
        o = Le.set(r[4], r[5], r[6]).length(),
        s = Le.set(r[8], r[9], r[10]).length();
      (i < 0 && (a = -a), G.copy(this));
      let c = 1 / a,
        l = 1 / o,
        u = 1 / s;
      return (
        (G.elements[0] *= c),
        (G.elements[1] *= c),
        (G.elements[2] *= c),
        (G.elements[4] *= l),
        (G.elements[5] *= l),
        (G.elements[6] *= l),
        (G.elements[8] *= u),
        (G.elements[9] *= u),
        (G.elements[10] *= u),
        t.setFromRotationMatrix(G),
        (n.x = a),
        (n.y = o),
        (n.z = s),
        this
      );
    }
    makePerspective(e, t, n, r, i, a, o = fe, s = !1) {
      let c = this.elements,
        l = (2 * i) / (t - e),
        u = (2 * i) / (n - r),
        d = (t + e) / (t - e),
        f = (n + r) / (n - r),
        p,
        m;
      if (s) ((p = i / (a - i)), (m = (a * i) / (a - i)));
      else if (o === 2e3) ((p = -(a + i) / (a - i)), (m = (-2 * a * i) / (a - i)));
      else if (o === 2001) ((p = -a / (a - i)), (m = (-a * i) / (a - i)));
      else throw Error('THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + o);
      return (
        (c[0] = l),
        (c[4] = 0),
        (c[8] = d),
        (c[12] = 0),
        (c[1] = 0),
        (c[5] = u),
        (c[9] = f),
        (c[13] = 0),
        (c[2] = 0),
        (c[6] = 0),
        (c[10] = p),
        (c[14] = m),
        (c[3] = 0),
        (c[7] = 0),
        (c[11] = -1),
        (c[15] = 0),
        this
      );
    }
    makeOrthographic(e, t, n, r, i, a, o = fe, s = !1) {
      let c = this.elements,
        l = 2 / (t - e),
        u = 2 / (n - r),
        d = -(t + e) / (t - e),
        f = -(n + r) / (n - r),
        p,
        m;
      if (s) ((p = 1 / (a - i)), (m = a / (a - i)));
      else if (o === 2e3) ((p = -2 / (a - i)), (m = -(a + i) / (a - i)));
      else if (o === 2001) ((p = -1 / (a - i)), (m = -i / (a - i)));
      else throw Error('THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + o);
      return (
        (c[0] = l),
        (c[4] = 0),
        (c[8] = 0),
        (c[12] = d),
        (c[1] = 0),
        (c[5] = u),
        (c[9] = 0),
        (c[13] = f),
        (c[2] = 0),
        (c[6] = 0),
        (c[10] = p),
        (c[14] = m),
        (c[3] = 0),
        (c[7] = 0),
        (c[11] = 0),
        (c[15] = 1),
        this
      );
    }
    equals(e) {
      let t = this.elements,
        n = e.elements;
      for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      let n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        (e[t + 9] = n[9]),
        (e[t + 10] = n[10]),
        (e[t + 11] = n[11]),
        (e[t + 12] = n[12]),
        (e[t + 13] = n[13]),
        (e[t + 14] = n[14]),
        (e[t + 15] = n[15]),
        e
      );
    }
  },
  Le = /*@__PURE__*/ new z(),
  G = /*@__PURE__*/ new W(),
  Re = /*@__PURE__*/ new z(0, 0, 0),
  ze = /*@__PURE__*/ new z(1, 1, 1),
  K = /*@__PURE__*/ new z(),
  Be = /*@__PURE__*/ new z(),
  q = /*@__PURE__*/ new z(),
  Ve = /*@__PURE__*/ new W(),
  He = /*@__PURE__*/ new R(),
  Ue = class e {
    constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
      ((this.isEuler = !0), (this._x = t), (this._y = n), (this._z = r), (this._order = i));
    }
    get x() {
      return this._x;
    }
    set x(e) {
      ((this._x = e), this._onChangeCallback());
    }
    get y() {
      return this._y;
    }
    set y(e) {
      ((this._y = e), this._onChangeCallback());
    }
    get z() {
      return this._z;
    }
    set z(e) {
      ((this._z = e), this._onChangeCallback());
    }
    get order() {
      return this._order;
    }
    set order(e) {
      ((this._order = e), this._onChangeCallback());
    }
    set(e, t, n, r = this._order) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._order = r),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
      return (
        (this._x = e._x),
        (this._y = e._y),
        (this._z = e._z),
        (this._order = e._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e, t = this._order, n = !0) {
      let r = e.elements,
        i = r[0],
        a = r[4],
        o = r[8],
        s = r[1],
        c = r[5],
        l = r[9],
        u = r[2],
        d = r[6],
        f = r[10];
      switch (t) {
        case 'XYZ':
          ((this._y = Math.asin(L(o, -1, 1))),
            Math.abs(o) < 0.9999999
              ? ((this._x = Math.atan2(-l, f)), (this._z = Math.atan2(-a, i)))
              : ((this._x = Math.atan2(d, c)), (this._z = 0)));
          break;
        case 'YXZ':
          ((this._x = Math.asin(-L(l, -1, 1))),
            Math.abs(l) < 0.9999999
              ? ((this._y = Math.atan2(o, f)), (this._z = Math.atan2(s, c)))
              : ((this._y = Math.atan2(-u, i)), (this._z = 0)));
          break;
        case 'ZXY':
          ((this._x = Math.asin(L(d, -1, 1))),
            Math.abs(d) < 0.9999999
              ? ((this._y = Math.atan2(-u, f)), (this._z = Math.atan2(-a, c)))
              : ((this._y = 0), (this._z = Math.atan2(s, i))));
          break;
        case 'ZYX':
          ((this._y = Math.asin(-L(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._x = Math.atan2(d, f)), (this._z = Math.atan2(s, i)))
              : ((this._x = 0), (this._z = Math.atan2(-a, c))));
          break;
        case 'YZX':
          ((this._z = Math.asin(L(s, -1, 1))),
            Math.abs(s) < 0.9999999
              ? ((this._x = Math.atan2(-l, c)), (this._y = Math.atan2(-u, i)))
              : ((this._x = 0), (this._y = Math.atan2(o, f))));
          break;
        case 'XZY':
          ((this._z = Math.asin(-L(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(o, i)))
              : ((this._x = Math.atan2(-l, f)), (this._y = 0)));
          break;
        default:
          P('Euler: .setFromRotationMatrix() encountered an unknown order: ' + t);
      }
      return ((this._order = t), n === !0 && this._onChangeCallback(), this);
    }
    setFromQuaternion(e, t, n) {
      return (Ve.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ve, t, n));
    }
    setFromVector3(e, t = this._order) {
      return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
      return (He.setFromEuler(this), this.setFromQuaternion(He, e));
    }
    equals(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
    }
    fromArray(e) {
      return (
        (this._x = e[0]),
        (this._y = e[1]),
        (this._z = e[2]),
        e[3] !== void 0 && (this._order = e[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._order),
        e
      );
    }
    _onChange(e) {
      return ((this._onChangeCallback = e), this);
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      (yield this._x, yield this._y, yield this._z, yield this._order);
    }
  };
Ue.DEFAULT_ORDER = 'XYZ';
var We = class {
    constructor() {
      this.mask = 1;
    }
    set(e) {
      this.mask = ((1 << e) | 0) >>> 0;
    }
    enable(e) {
      this.mask |= (1 << e) | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(e) {
      this.mask ^= (1 << e) | 0;
    }
    disable(e) {
      this.mask &= ~((1 << e) | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(e) {
      return (this.mask & e.mask) !== 0;
    }
    isEnabled(e) {
      return !!(this.mask & ((1 << e) | 0));
    }
  },
  Ge = 0,
  Ke = /*@__PURE__*/ new z(),
  qe = /*@__PURE__*/ new R(),
  J = /*@__PURE__*/ new W(),
  Je = /*@__PURE__*/ new z(),
  Ye = /*@__PURE__*/ new z(),
  Xe = /*@__PURE__*/ new z(),
  Ze = /*@__PURE__*/ new R(),
  Qe = /*@__PURE__*/ new z(1, 0, 0),
  $e = /*@__PURE__*/ new z(0, 1, 0),
  et = /*@__PURE__*/ new z(0, 0, 1),
  tt = { type: 'added' },
  nt = { type: 'removed' },
  rt = {
    type: 'childadded',
    child: null,
  },
  it = {
    type: 'childremoved',
    child: null,
  },
  at = class e extends ve {
    constructor() {
      (super(),
        (this.isObject3D = !0),
        Object.defineProperty(this, 'id', { value: Ge++ }),
        (this.uuid = ye()),
        (this.name = ''),
        (this.type = 'Object3D'),
        (this.parent = null),
        (this.children = []),
        (this.up = e.DEFAULT_UP.clone()));
      let t = new z(),
        n = new Ue(),
        r = new R(),
        i = new z(1, 1, 1);
      function a() {
        r.setFromEuler(n, !1);
      }
      function o() {
        n.setFromQuaternion(r, void 0, !1);
      }
      (n._onChange(a),
        r._onChange(o),
        Object.defineProperties(this, {
          position: {
            configurable: !0,
            enumerable: !0,
            value: t,
          },
          rotation: {
            configurable: !0,
            enumerable: !0,
            value: n,
          },
          quaternion: {
            configurable: !0,
            enumerable: !0,
            value: r,
          },
          scale: {
            configurable: !0,
            enumerable: !0,
            value: i,
          },
          modelViewMatrix: { value: new W() },
          normalMatrix: { value: new Te() },
        }),
        (this.matrix = new W()),
        (this.matrixWorld = new W()),
        (this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE),
        (this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
        (this.matrixWorldNeedsUpdate = !1),
        (this.layers = new We()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.customDepthMaterial = void 0),
        (this.customDistanceMaterial = void 0),
        (this.static = !1),
        (this.userData = {}),
        (this.pivot = null));
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
      (this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale));
    }
    applyQuaternion(e) {
      return (this.quaternion.premultiply(e), this);
    }
    setRotationFromAxisAngle(e, t) {
      this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
      this.quaternion.setFromEuler(e, !0);
    }
    setRotationFromMatrix(e) {
      this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
      this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
      return (qe.setFromAxisAngle(e, t), this.quaternion.multiply(qe), this);
    }
    rotateOnWorldAxis(e, t) {
      return (qe.setFromAxisAngle(e, t), this.quaternion.premultiply(qe), this);
    }
    rotateX(e) {
      return this.rotateOnAxis(Qe, e);
    }
    rotateY(e) {
      return this.rotateOnAxis($e, e);
    }
    rotateZ(e) {
      return this.rotateOnAxis(et, e);
    }
    translateOnAxis(e, t) {
      return (
        Ke.copy(e).applyQuaternion(this.quaternion),
        this.position.add(Ke.multiplyScalar(t)),
        this
      );
    }
    translateX(e) {
      return this.translateOnAxis(Qe, e);
    }
    translateY(e) {
      return this.translateOnAxis($e, e);
    }
    translateZ(e) {
      return this.translateOnAxis(et, e);
    }
    localToWorld(e) {
      return (this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld));
    }
    worldToLocal(e) {
      return (this.updateWorldMatrix(!0, !1), e.applyMatrix4(J.copy(this.matrixWorld).invert()));
    }
    lookAt(e, t, n) {
      e.isVector3 ? Je.copy(e) : Je.set(e, t, n);
      let r = this.parent;
      (this.updateWorldMatrix(!0, !1),
        Ye.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight ? J.lookAt(Ye, Je, this.up) : J.lookAt(Je, Ye, this.up),
        this.quaternion.setFromRotationMatrix(J),
        r &&
          (J.extractRotation(r.matrixWorld),
          qe.setFromRotationMatrix(J),
          this.quaternion.premultiply(qe.invert())));
    }
    add(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this;
      }
      return e === this
        ? (F("Object3D.add: object can't be added as a child of itself.", e), this)
        : (e && e.isObject3D
            ? (e.removeFromParent(),
              (e.parent = this),
              this.children.push(e),
              e.dispatchEvent(tt),
              (rt.child = e),
              this.dispatchEvent(rt),
              (rt.child = null))
            : F('Object3D.add: object not an instance of THREE.Object3D.', e),
          this);
    }
    remove(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
        return this;
      }
      let t = this.children.indexOf(e);
      return (
        t !== -1 &&
          ((e.parent = null),
          this.children.splice(t, 1),
          e.dispatchEvent(nt),
          (it.child = e),
          this.dispatchEvent(it),
          (it.child = null)),
        this
      );
    }
    removeFromParent() {
      let e = this.parent;
      return (e !== null && e.remove(this), this);
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        J.copy(this.matrixWorld).invert(),
        e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), J.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(J),
        e.removeFromParent(),
        (e.parent = this),
        this.children.push(e),
        e.updateWorldMatrix(!1, !0),
        e.dispatchEvent(tt),
        (rt.child = e),
        this.dispatchEvent(rt),
        (rt.child = null),
        this
      );
    }
    getObjectById(e) {
      return this.getObjectByProperty('id', e);
    }
    getObjectByName(e) {
      return this.getObjectByProperty('name', e);
    }
    getObjectByProperty(e, t) {
      if (this[e] === t) return this;
      for (let n = 0, r = this.children.length; n < r; n++) {
        let r = this.children[n].getObjectByProperty(e, t);
        if (r !== void 0) return r;
      }
    }
    getObjectsByProperty(e, t, n = []) {
      this[e] === t && n.push(this);
      let r = this.children;
      for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
      return n;
    }
    getWorldPosition(e) {
      return (this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld));
    }
    getWorldQuaternion(e) {
      return (this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ye, e, Xe), e);
    }
    getWorldScale(e) {
      return (this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ye, Ze, e), e);
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(!0, !1);
      let t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {}
    traverse(e) {
      e(this);
      let t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
    }
    traverseVisible(e) {
      if (this.visible === !1) return;
      e(this);
      let t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
    }
    traverseAncestors(e) {
      let t = this.parent;
      t !== null && (e(t), t.traverseAncestors(e));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale);
      let e = this.pivot;
      if (e !== null) {
        let t = e.x,
          n = e.y,
          r = e.z,
          i = this.matrix.elements;
        ((i[12] += t - i[0] * t - i[4] * n - i[8] * r),
          (i[13] += n - i[1] * t - i[5] * n - i[9] * r),
          (i[14] += r - i[2] * t - i[6] * n - i[10] * r));
      }
      this.matrixWorldNeedsUpdate = !0;
    }
    updateMatrixWorld(e) {
      (this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) &&
          (this.matrixWorldAutoUpdate === !0 &&
            (this.parent === null
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
          (this.matrixWorldNeedsUpdate = !1),
          (e = !0)));
      let t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
    }
    updateWorldMatrix(e, t, n = !1) {
      let r = this.parent;
      if (
        (e === !0 && r !== null && r.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || n) &&
          (this.matrixWorldAutoUpdate === !0 &&
            (this.parent === null
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
          (this.matrixWorldNeedsUpdate = !1),
          (n = !0)),
        t === !0)
      ) {
        let e = this.children;
        for (let t = 0, r = e.length; t < r; t++) e[t].updateWorldMatrix(!1, !0, n);
      }
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == 'string',
        n = {};
      t &&
        ((e = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {},
        }),
        (n.metadata = {
          version: 4.7,
          type: 'Object',
          generator: 'Object3D.toJSON',
        }));
      let r = {};
      ((r.uuid = this.uuid),
        (r.type = this.type),
        this.name !== '' && (r.name = this.name),
        this.castShadow === !0 && (r.castShadow = !0),
        this.receiveShadow === !0 && (r.receiveShadow = !0),
        this.visible === !1 && (r.visible = !1),
        this.frustumCulled === !1 && (r.frustumCulled = !1),
        this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
        this.static !== !1 && (r.static = this.static),
        Object.keys(this.userData).length > 0 && (r.userData = this.userData),
        (r.layers = this.layers.mask),
        (r.matrix = this.matrix.toArray()),
        (r.up = this.up.toArray()),
        this.pivot !== null && (r.pivot = this.pivot.toArray()),
        this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
        this.morphTargetDictionary !== void 0 &&
          (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)),
        this.morphTargetInfluences !== void 0 &&
          (r.morphTargetInfluences = this.morphTargetInfluences.slice()),
        this.isInstancedMesh &&
          ((r.type = 'InstancedMesh'),
          (r.count = this.count),
          (r.instanceMatrix = this.instanceMatrix.toJSON()),
          this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh &&
          ((r.type = 'BatchedMesh'),
          (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
          (r.sortObjects = this.sortObjects),
          (r.drawRanges = this._drawRanges),
          (r.reservedRanges = this._reservedRanges),
          (r.geometryInfo = this._geometryInfo.map((e) => ({
            ...e,
            boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
            boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0,
          }))),
          (r.instanceInfo = this._instanceInfo.map((e) => ({ ...e }))),
          (r.availableInstanceIds = this._availableInstanceIds.slice()),
          (r.availableGeometryIds = this._availableGeometryIds.slice()),
          (r.nextIndexStart = this._nextIndexStart),
          (r.nextVertexStart = this._nextVertexStart),
          (r.geometryCount = this._geometryCount),
          (r.maxInstanceCount = this._maxInstanceCount),
          (r.maxVertexCount = this._maxVertexCount),
          (r.maxIndexCount = this._maxIndexCount),
          (r.geometryInitialized = this._geometryInitialized),
          (r.matricesTexture = this._matricesTexture.toJSON(e)),
          (r.indirectTexture = this._indirectTexture.toJSON(e)),
          this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)),
          this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()),
          this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON())));
      function i(t, n) {
        return (t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid);
      }
      if (this.isScene)
        (this.background &&
          (this.background.isColor
            ? (r.background = this.background.toJSON())
            : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)),
          this.environment &&
            this.environment.isTexture &&
            this.environment.isRenderTargetTexture !== !0 &&
            (r.environment = this.environment.toJSON(e).uuid));
      else if (this.isMesh || this.isLine || this.isPoints) {
        r.geometry = i(e.geometries, this.geometry);
        let t = this.geometry.parameters;
        if (t !== void 0 && t.shapes !== void 0) {
          let n = t.shapes;
          if (Array.isArray(n))
            for (let t = 0, r = n.length; t < r; t++) {
              let r = n[t];
              i(e.shapes, r);
            }
          else i(e.shapes, n);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((r.bindMode = this.bindMode),
          (r.bindMatrix = this.bindMatrix.toArray()),
          this.skeleton !== void 0 &&
            (i(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
        this.material !== void 0)
      ) {
        if (Array.isArray(this.material)) {
          let t = [];
          for (let n = 0, r = this.material.length; n < r; n++)
            t.push(i(e.materials, this.material[n]));
          r.material = t;
        } else r.material = i(e.materials, this.material);
      }
      if (this.children.length > 0) {
        r.children = [];
        for (let t = 0; t < this.children.length; t++)
          r.children.push(this.children[t].toJSON(e).object);
      }
      if (this.animations.length > 0) {
        r.animations = [];
        for (let t = 0; t < this.animations.length; t++) {
          let n = this.animations[t];
          r.animations.push(i(e.animations, n));
        }
      }
      if (t) {
        let t = a(e.geometries),
          r = a(e.materials),
          i = a(e.textures),
          o = a(e.images),
          s = a(e.shapes),
          c = a(e.skeletons),
          l = a(e.animations),
          u = a(e.nodes);
        (t.length > 0 && (n.geometries = t),
          r.length > 0 && (n.materials = r),
          i.length > 0 && (n.textures = i),
          o.length > 0 && (n.images = o),
          s.length > 0 && (n.shapes = s),
          c.length > 0 && (n.skeletons = c),
          l.length > 0 && (n.animations = l),
          u.length > 0 && (n.nodes = u));
      }
      return ((n.object = r), n);
      function a(e) {
        let t = [];
        for (let n in e) {
          let r = e[n];
          (delete r.metadata, t.push(r));
        }
        return t;
      }
    }
    clone(e) {
      return new this.constructor().copy(this, e);
    }
    copy(e, t = !0) {
      if (
        ((this.name = e.name),
        this.up.copy(e.up),
        this.position.copy(e.position),
        (this.rotation.order = e.rotation.order),
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        (this.pivot = e.pivot === null ? null : e.pivot.clone()),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
        (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
        (this.layers.mask = e.layers.mask),
        (this.visible = e.visible),
        (this.castShadow = e.castShadow),
        (this.receiveShadow = e.receiveShadow),
        (this.frustumCulled = e.frustumCulled),
        (this.renderOrder = e.renderOrder),
        (this.static = e.static),
        (this.animations = e.animations.slice()),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        t === !0)
      )
        for (let t = 0; t < e.children.length; t++) {
          let n = e.children[t];
          this.add(n.clone());
        }
      return this;
    }
  };
((at.DEFAULT_UP = /*@__PURE__*/ new z(0, 1, 0)),
  (at.DEFAULT_MATRIX_AUTO_UPDATE = !0),
  (at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0));
var ot = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Y = {
    h: 0,
    s: 0,
    l: 0,
  },
  st = {
    h: 0,
    s: 0,
    l: 0,
  };
function ct(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e
  );
}
var lt = class {
    constructor(e, t, n) {
      return ((this.isColor = !0), (this.r = 1), (this.g = 1), (this.b = 1), this.set(e, t, n));
    }
    set(e, t, n) {
      if (t === void 0 && n === void 0) {
        let t = e;
        t && t.isColor
          ? this.copy(t)
          : typeof t == 'number'
            ? this.setHex(t)
            : typeof t == 'string' && this.setStyle(t);
      } else this.setRGB(e, t, n);
      return this;
    }
    setScalar(e) {
      return ((this.r = e), (this.g = e), (this.b = e), this);
    }
    setHex(e, t = N) {
      return (
        (e = Math.floor(e)),
        (this.r = ((e >> 16) & 255) / 255),
        (this.g = ((e >> 8) & 255) / 255),
        (this.b = (e & 255) / 255),
        B.colorSpaceToWorking(this, t),
        this
      );
    }
    setRGB(e, t, n, r = B.workingColorSpace) {
      return ((this.r = e), (this.g = t), (this.b = n), B.colorSpaceToWorking(this, r), this);
    }
    setHSL(e, t, n, r = B.workingColorSpace) {
      if (((e = be(e, 1)), (t = L(t, 0, 1)), (n = L(n, 0, 1)), t === 0))
        this.r = this.g = this.b = n;
      else {
        let r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
          i = 2 * n - r;
        ((this.r = ct(i, r, e + 1 / 3)), (this.g = ct(i, r, e)), (this.b = ct(i, r, e - 1 / 3)));
      }
      return (B.colorSpaceToWorking(this, r), this);
    }
    setStyle(e, t = N) {
      function n(t) {
        t !== void 0 &&
          parseFloat(t) < 1 &&
          P('Color: Alpha component of ' + e + ' will be ignored.');
      }
      let r;
      if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
        let i,
          a = r[1],
          o = r[2];
        switch (a) {
          case 'rgb':
          case 'rgba':
            if ((i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)))
              return (
                n(i[4]),
                this.setRGB(
                  Math.min(255, parseInt(i[1], 10)) / 255,
                  Math.min(255, parseInt(i[2], 10)) / 255,
                  Math.min(255, parseInt(i[3], 10)) / 255,
                  t
                )
              );
            if ((i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)))
              return (
                n(i[4]),
                this.setRGB(
                  Math.min(100, parseInt(i[1], 10)) / 100,
                  Math.min(100, parseInt(i[2], 10)) / 100,
                  Math.min(100, parseInt(i[3], 10)) / 100,
                  t
                )
              );
            break;
          case 'hsl':
          case 'hsla':
            if (
              (i =
                /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  o
                ))
            )
              return (
                n(i[4]),
                this.setHSL(
                  parseFloat(i[1]) / 360,
                  parseFloat(i[2]) / 100,
                  parseFloat(i[3]) / 100,
                  t
                )
              );
            break;
          default:
            P('Color: Unknown color model ' + e);
        }
      } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
        let n = r[1],
          i = n.length;
        if (i === 3)
          return this.setRGB(
            parseInt(n.charAt(0), 16) / 15,
            parseInt(n.charAt(1), 16) / 15,
            parseInt(n.charAt(2), 16) / 15,
            t
          );
        if (i === 6) return this.setHex(parseInt(n, 16), t);
        P('Color: Invalid hex color ' + e);
      } else if (e && e.length > 0) return this.setColorName(e, t);
      return this;
    }
    setColorName(e, t = N) {
      let n = ot[e.toLowerCase()];
      return (n === void 0 ? P('Color: Unknown color ' + e) : this.setHex(n, t), this);
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
      return ((this.r = e.r), (this.g = e.g), (this.b = e.b), this);
    }
    copySRGBToLinear(e) {
      return ((this.r = V(e.r)), (this.g = V(e.g)), (this.b = V(e.b)), this);
    }
    copyLinearToSRGB(e) {
      return ((this.r = H(e.r)), (this.g = H(e.g)), (this.b = H(e.b)), this);
    }
    convertSRGBToLinear() {
      return (this.copySRGBToLinear(this), this);
    }
    convertLinearToSRGB() {
      return (this.copyLinearToSRGB(this), this);
    }
    getHex(e = N) {
      return (
        B.workingToColorSpace(X.copy(this), e),
        Math.round(L(X.r * 255, 0, 255)) * 65536 +
          Math.round(L(X.g * 255, 0, 255)) * 256 +
          Math.round(L(X.b * 255, 0, 255))
      );
    }
    getHexString(e = N) {
      return ('000000' + this.getHex(e).toString(16)).slice(-6);
    }
    getHSL(e, t = B.workingColorSpace) {
      B.workingToColorSpace(X.copy(this), t);
      let n = X.r,
        r = X.g,
        i = X.b,
        a = Math.max(n, r, i),
        o = Math.min(n, r, i),
        s,
        c,
        l = (o + a) / 2;
      if (o === a) ((s = 0), (c = 0));
      else {
        let e = a - o;
        switch (((c = l <= 0.5 ? e / (a + o) : e / (2 - a - o)), a)) {
          case n:
            s = (r - i) / e + (r < i ? 6 : 0);
            break;
          case r:
            s = (i - n) / e + 2;
            break;
          case i:
            s = (n - r) / e + 4;
        }
        s /= 6;
      }
      return ((e.h = s), (e.s = c), (e.l = l), e);
    }
    getRGB(e, t = B.workingColorSpace) {
      return (B.workingToColorSpace(X.copy(this), t), (e.r = X.r), (e.g = X.g), (e.b = X.b), e);
    }
    getStyle(e = N) {
      B.workingToColorSpace(X.copy(this), e);
      let t = X.r,
        n = X.g,
        r = X.b;
      return e === 'srgb'
        ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`
        : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
    }
    offsetHSL(e, t, n) {
      return (this.getHSL(Y), this.setHSL(Y.h + e, Y.s + t, Y.l + n));
    }
    add(e) {
      return ((this.r += e.r), (this.g += e.g), (this.b += e.b), this);
    }
    addColors(e, t) {
      return ((this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this);
    }
    addScalar(e) {
      return ((this.r += e), (this.g += e), (this.b += e), this);
    }
    sub(e) {
      return (
        (this.r = Math.max(0, this.r - e.r)),
        (this.g = Math.max(0, this.g - e.g)),
        (this.b = Math.max(0, this.b - e.b)),
        this
      );
    }
    multiply(e) {
      return ((this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this);
    }
    multiplyScalar(e) {
      return ((this.r *= e), (this.g *= e), (this.b *= e), this);
    }
    lerp(e, t) {
      return (
        (this.r += (e.r - this.r) * t),
        (this.g += (e.g - this.g) * t),
        (this.b += (e.b - this.b) * t),
        this
      );
    }
    lerpColors(e, t, n) {
      return (
        (this.r = e.r + (t.r - e.r) * n),
        (this.g = e.g + (t.g - e.g) * n),
        (this.b = e.b + (t.b - e.b) * n),
        this
      );
    }
    lerpHSL(e, t) {
      (this.getHSL(Y), e.getHSL(st));
      let n = xe(Y.h, st.h, t),
        r = xe(Y.s, st.s, t),
        i = xe(Y.l, st.l, t);
      return (this.setHSL(n, r, i), this);
    }
    setFromVector3(e) {
      return ((this.r = e.x), (this.g = e.y), (this.b = e.z), this);
    }
    applyMatrix3(e) {
      let t = this.r,
        n = this.g,
        r = this.b,
        i = e.elements;
      return (
        (this.r = i[0] * t + i[3] * n + i[6] * r),
        (this.g = i[1] * t + i[4] * n + i[7] * r),
        (this.b = i[2] * t + i[5] * n + i[8] * r),
        this
      );
    }
    equals(e) {
      return e.r === this.r && e.g === this.g && e.b === this.b;
    }
    fromArray(e, t = 0) {
      return ((this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this);
    }
    toArray(e = [], t = 0) {
      return ((e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e);
    }
    fromBufferAttribute(e, t) {
      return ((this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this);
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      (yield this.r, yield this.g, yield this.b);
    }
  },
  X = /*@__PURE__*/ new lt();
lt.NAMES = ot;
function ut(e, t) {
  return !e || e.constructor === t
    ? e
    : typeof t.BYTES_PER_ELEMENT == 'number'
      ? new t(e)
      : Array.prototype.slice.call(e);
}
var dt = class {
    constructor(e, t, n, r) {
      ((this.parameterPositions = e),
        (this._cachedIndex = 0),
        (this.resultBuffer = r === void 0 ? new t.constructor(n) : r),
        (this.sampleValues = t),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {}));
    }
    evaluate(e) {
      let t = this.parameterPositions,
        n = this._cachedIndex,
        r = t[n],
        i = t[n - 1];
      validate_interval: {
        seek: {
          let a;
          linear_scan: {
            forward_scan: if (!(e < r)) {
              for (let a = n + 2; ; ) {
                if (r === void 0) {
                  if (e < i) break forward_scan;
                  return ((n = t.length), (this._cachedIndex = n), this.copySampleValue_(n - 1));
                }
                if (n === a) break;
                if (((i = r), (r = t[++n]), e < r)) break seek;
              }
              a = t.length;
              break linear_scan;
            }
            if (!(e >= i)) {
              let o = t[1];
              e < o && ((n = 2), (i = o));
              for (let a = n - 2; ; ) {
                if (i === void 0) return ((this._cachedIndex = 0), this.copySampleValue_(0));
                if (n === a) break;
                if (((r = i), (i = t[--n - 1]), e >= i)) break seek;
              }
              ((a = n), (n = 0));
              break linear_scan;
            }
            break validate_interval;
          }
          for (; n < a; ) {
            let r = (n + a) >>> 1;
            e < t[r] ? (a = r) : (n = r + 1);
          }
          if (((r = t[n]), (i = t[n - 1]), i === void 0))
            return ((this._cachedIndex = 0), this.copySampleValue_(0));
          if (r === void 0)
            return ((n = t.length), (this._cachedIndex = n), this.copySampleValue_(n - 1));
        }
        ((this._cachedIndex = n), this.intervalChanged_(n, i, r));
      }
      return this.interpolate_(n, i, e, r);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
      let t = this.resultBuffer,
        n = this.sampleValues,
        r = this.valueSize,
        i = e * r;
      for (let e = 0; e !== r; ++e) t[e] = n[i + e];
      return t;
    }
    interpolate_() {
      throw Error('THREE.Interpolant: Call to abstract method.');
    }
    intervalChanged_() {}
  },
  ft = class extends dt {
    constructor(e, t, n, r) {
      (super(e, t, n, r),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = {
          endingStart: oe,
          endingEnd: oe,
        }));
    }
    intervalChanged_(e, t, n) {
      let r = this.parameterPositions,
        i = e - 2,
        a = e + 1,
        o = r[i],
        s = r[a];
      if (o === void 0)
        switch (this.getSettings_().endingStart) {
          case se:
            ((i = e), (o = 2 * t - n));
            break;
          case ce:
            ((i = r.length - 2), (o = t + r[i] - r[i + 1]));
            break;
          default:
            ((i = e), (o = n));
        }
      if (s === void 0)
        switch (this.getSettings_().endingEnd) {
          case se:
            ((a = e), (s = 2 * n - t));
            break;
          case ce:
            ((a = 1), (s = n + r[1] - r[0]));
            break;
          default:
            ((a = e - 1), (s = t));
        }
      let c = (n - t) * 0.5,
        l = this.valueSize;
      ((this._weightPrev = c / (t - o)),
        (this._weightNext = c / (s - n)),
        (this._offsetPrev = i * l),
        (this._offsetNext = a * l));
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = this._offsetPrev,
        u = this._offsetNext,
        d = this._weightPrev,
        f = this._weightNext,
        p = (n - t) / (r - t),
        m = p * p,
        h = m * p,
        g = -d * h + 2 * d * m - d * p,
        _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-0.5 + d) * p + 1,
        v = (-1 - f) * h + (1.5 + f) * m + 0.5 * p,
        y = f * h - f * m;
      for (let e = 0; e !== o; ++e)
        i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
      return i;
    }
  },
  pt = class extends dt {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = (n - t) / (r - t),
        u = 1 - l;
      for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
      return i;
    }
  },
  mt = class extends dt {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1);
    }
  },
  ht = class extends dt {
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = this.inTangents,
        u = this.outTangents;
      if (!l || !u) {
        let e = (n - t) / (r - t),
          l = 1 - e;
        for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
        return i;
      }
      let d = o * 2,
        f = e - 1;
      for (let p = 0; p !== o; ++p) {
        let o = a[c + p],
          m = a[s + p],
          h = f * d + p * 2,
          g = u[h],
          _ = u[h + 1],
          v = e * d + p * 2,
          y = l[v],
          b = l[v + 1],
          x = (n - t) / (r - t),
          S,
          C,
          w,
          T,
          E;
        for (let e = 0; e < 8; e++) {
          ((S = x * x), (C = S * x), (w = 1 - x), (T = w * w), (E = T * w));
          let e = E * t + 3 * T * x * g + 3 * w * S * y + C * r - n;
          if (Math.abs(e) < 1e-10) break;
          let i = 3 * T * (g - t) + 6 * w * x * (y - g) + 3 * S * (r - y);
          if (Math.abs(i) < 1e-10) break;
          ((x -= e / i), (x = Math.max(0, Math.min(1, x))));
        }
        i[p] = E * o + 3 * T * x * _ + 3 * w * S * b + C * m;
      }
      return i;
    }
  },
  Z = class {
    constructor(e, t, n, r) {
      if (e === void 0) throw Error('THREE.KeyframeTrack: track name is undefined');
      if (t === void 0 || t.length === 0)
        throw Error('THREE.KeyframeTrack: no keyframes in track named ' + e);
      ((this.name = e),
        (this.times = ut(t, this.TimeBufferType)),
        (this.values = ut(n, this.ValueBufferType)),
        this.setInterpolation(r || this.DefaultInterpolation));
    }
    static toJSON(e) {
      let t = e.constructor,
        n;
      if (t.toJSON !== this.toJSON) n = t.toJSON(e);
      else {
        n = {
          name: e.name,
          times: ut(e.times, Array),
          values: ut(e.values, Array),
        };
        let t = e.getInterpolation();
        t !== e.DefaultInterpolation && (n.interpolation = t);
      }
      return ((n.type = e.ValueTypeName), n);
    }
    InterpolantFactoryMethodDiscrete(e) {
      return new mt(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodLinear(e) {
      return new pt(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodSmooth(e) {
      return new ft(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodBezier(e) {
      let t = new ht(this.times, this.values, this.getValueSize(), e);
      return (
        this.settings &&
          ((t.inTangents = this.settings.inTangents), (t.outTangents = this.settings.outTangents)),
        t
      );
    }
    setInterpolation(e) {
      let t;
      switch (e) {
        case j:
          t = this.InterpolantFactoryMethodDiscrete;
          break;
        case M:
          t = this.InterpolantFactoryMethodLinear;
          break;
        case ie:
          t = this.InterpolantFactoryMethodSmooth;
          break;
        case ae:
          t = this.InterpolantFactoryMethodBezier;
      }
      if (t === void 0) {
        let t =
          'unsupported interpolation for ' +
          this.ValueTypeName +
          ' keyframe track named ' +
          this.name;
        if (this.createInterpolant === void 0) {
          if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
          else throw Error(t);
        }
        return (P('KeyframeTrack:', t), this);
      }
      return ((this.createInterpolant = t), this);
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return j;
        case this.InterpolantFactoryMethodLinear:
          return M;
        case this.InterpolantFactoryMethodSmooth:
          return ie;
        case this.InterpolantFactoryMethodBezier:
          return ae;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(e) {
      if (e !== 0) {
        let t = this.times;
        for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
      }
      return this;
    }
    scale(e) {
      if (e !== 1) {
        let t = this.times;
        for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
      }
      return this;
    }
    trim(e, t) {
      let n = this.times,
        r = n.length,
        i = 0,
        a = r - 1;
      for (; i !== r && n[i] < e; ) ++i;
      for (; a !== -1 && n[a] > t; ) --a;
      if ((++a, i !== 0 || a !== r)) {
        i >= a && ((a = Math.max(a, 1)), (i = a - 1));
        let e = this.getValueSize();
        ((this.times = n.slice(i, a)), (this.values = this.values.slice(i * e, a * e)));
      }
      return this;
    }
    validate() {
      let e = !0,
        t = this.getValueSize();
      t - Math.floor(t) !== 0 && (F('KeyframeTrack: Invalid value size in track.', this), (e = !1));
      let n = this.times,
        r = this.values,
        i = n.length;
      i === 0 && (F('KeyframeTrack: Track is empty.', this), (e = !1));
      let a = null;
      for (let t = 0; t !== i; t++) {
        let r = n[t];
        if (typeof r == 'number' && isNaN(r)) {
          (F('KeyframeTrack: Time is not a valid number.', this, t, r), (e = !1));
          break;
        }
        if (a !== null && a > r) {
          (F('KeyframeTrack: Out of order keys.', this, t, r, a), (e = !1));
          break;
        }
        a = r;
      }
      if (r !== void 0 && pe(r))
        for (let t = 0, n = r.length; t !== n; ++t) {
          let n = r[t];
          if (isNaN(n)) {
            (F('KeyframeTrack: Value is not a valid number.', this, t, n), (e = !1));
            break;
          }
        }
      return e;
    }
    optimize() {
      let e = this.times.slice(),
        t = this.values.slice(),
        n = this.getValueSize(),
        r = this.getInterpolation() === ie,
        i = e.length - 1,
        a = 1;
      for (let o = 1; o < i; ++o) {
        let i = !1,
          s = e[o];
        if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
          if (r) i = !0;
          else {
            let e = o * n,
              r = e - n,
              a = e + n;
            for (let o = 0; o !== n; ++o) {
              let n = t[e + o];
              if (n !== t[r + o] || n !== t[a + o]) {
                i = !0;
                break;
              }
            }
          }
        }
        if (i) {
          if (o !== a) {
            e[a] = e[o];
            let r = o * n,
              i = a * n;
            for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
          }
          ++a;
        }
      }
      if (i > 0) {
        e[a] = e[i];
        for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
        ++a;
      }
      return (
        a === e.length
          ? ((this.times = e), (this.values = t))
          : ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n))),
        this
      );
    }
    clone() {
      let e = this.times.slice(),
        t = this.values.slice(),
        n = this.constructor,
        r = new n(this.name, e, t);
      return ((r.createInterpolant = this.createInterpolant), r);
    }
  };
((Z.prototype.ValueTypeName = ''),
  (Z.prototype.TimeBufferType = Float32Array),
  (Z.prototype.ValueBufferType = Float32Array),
  (Z.prototype.DefaultInterpolation = M));
var gt = class extends Z {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
((gt.prototype.ValueTypeName = 'bool'),
  (gt.prototype.ValueBufferType = Array),
  (gt.prototype.DefaultInterpolation = j),
  (gt.prototype.InterpolantFactoryMethodLinear = void 0),
  (gt.prototype.InterpolantFactoryMethodSmooth = void 0));
var _t = class extends Z {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
_t.prototype.ValueTypeName = 'color';
var vt = class extends Z {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
vt.prototype.ValueTypeName = 'number';
var yt = class extends dt {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = (n - t) / (r - t),
        c = e * o;
      for (let e = c + o; c !== e; c += 4) R.slerpFlat(i, 0, a, c - o, a, c, s);
      return i;
    }
  },
  bt = class extends Z {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    InterpolantFactoryMethodLinear(e) {
      return new yt(this.times, this.values, this.getValueSize(), e);
    }
  };
((bt.prototype.ValueTypeName = 'quaternion'),
  (bt.prototype.InterpolantFactoryMethodSmooth = void 0));
var xt = class extends Z {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
((xt.prototype.ValueTypeName = 'string'),
  (xt.prototype.ValueBufferType = Array),
  (xt.prototype.DefaultInterpolation = j),
  (xt.prototype.InterpolantFactoryMethodLinear = void 0),
  (xt.prototype.InterpolantFactoryMethodSmooth = void 0));
var St = class extends Z {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
};
St.prototype.ValueTypeName = 'vector';
var Ct = '\\[\\]\\.:\\/',
  wt = /* @__PURE__ */ RegExp('[\\[\\]\\.:\\/]', 'g'),
  Tt = '[^\\[\\]\\.:\\/]',
  Et = '[^' + Ct.replace('\\.', '') + ']',
  Dt = /*@__PURE__*/ '((?:WC+[\\/:])*)'.replace('WC', Tt),
  Ot = /*@__PURE__*/ '(WCOD+)?'.replace('WCOD', Et),
  kt = /*@__PURE__*/ '(?:\\.(WC+)(?:\\[(.+)\\])?)?'.replace('WC', Tt),
  At = /*@__PURE__*/ '\\.(WC+)(?:\\[(.+)\\])?'.replace('WC', Tt),
  jt = RegExp('^' + Dt + Ot + kt + At + '$'),
  Mt = ['material', 'materials', 'bones', 'map'],
  Nt = class {
    constructor(e, t, n) {
      let r = n || Q.parseTrackName(t);
      ((this._targetGroup = e), (this._bindings = e.subscribe_(t, r)));
    }
    getValue(e, t) {
      this.bind();
      let n = this._targetGroup.nCachedObjects_,
        r = this._bindings[n];
      r !== void 0 && r.getValue(e, t);
    }
    setValue(e, t) {
      let n = this._bindings;
      for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r)
        n[r].setValue(e, t);
    }
    bind() {
      let e = this._bindings;
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
    }
    unbind() {
      let e = this._bindings;
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
    }
  },
  Q = class e {
    constructor(t, n, r) {
      ((this.path = n),
        (this.parsedPath = r || e.parseTrackName(n)),
        (this.node = e.findNode(t, this.parsedPath.nodeName)),
        (this.rootNode = t),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
    static create(t, n, r) {
      return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, '_').replace(wt, '');
    }
    static parseTrackName(e) {
      let t = jt.exec(e);
      if (t === null) throw Error('THREE.PropertyBinding: Cannot parse trackName: ' + e);
      let n = {
          nodeName: t[2],
          objectName: t[3],
          objectIndex: t[4],
          propertyName: t[5],
          propertyIndex: t[6],
        },
        r = n.nodeName && n.nodeName.lastIndexOf('.');
      if (r !== void 0 && r !== -1) {
        let e = n.nodeName.substring(r + 1);
        Mt.indexOf(e) !== -1 && ((n.nodeName = n.nodeName.substring(0, r)), (n.objectName = e));
      }
      if (n.propertyName === null || n.propertyName.length === 0)
        throw Error('THREE.PropertyBinding: can not parse propertyName from trackName: ' + e);
      return n;
    }
    static findNode(e, t) {
      if (t === void 0 || t === '' || t === '.' || t === -1 || t === e.name || t === e.uuid)
        return e;
      if (e.skeleton) {
        let n = e.skeleton.getBoneByName(t);
        if (n !== void 0) return n;
      }
      if (e.children) {
        let n = function (e) {
            for (let r = 0; r < e.length; r++) {
              let i = e[r];
              if (i.name === t || i.uuid === t) return i;
              let a = n(i.children);
              if (a) return a;
            }
            return null;
          },
          r = n(e.children);
        if (r) return r;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
      e[t] = this.targetObject[this.propertyName];
    }
    _getValue_array(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
    }
    _getValue_arrayElement(e, t) {
      e[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e, t) {
      this.resolvedProperty.toArray(e, t);
    }
    _setValue_direct(e, t) {
      this.targetObject[this.propertyName] = e[t];
    }
    _setValue_direct_setNeedsUpdate(e, t) {
      ((this.targetObject[this.propertyName] = e[t]), (this.targetObject.needsUpdate = !0));
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
      ((this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_array(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
    }
    _setValue_array_setNeedsUpdate(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
      ((this.resolvedProperty[this.propertyIndex] = e[t]), (this.targetObject.needsUpdate = !0));
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
      ((this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_fromArray(e, t) {
      this.resolvedProperty.fromArray(e, t);
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
      (this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0));
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
      (this.resolvedProperty.fromArray(e, t), (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _getValue_unbound(e, t) {
      (this.bind(), this.getValue(e, t));
    }
    _setValue_unbound(e, t) {
      (this.bind(), this.setValue(e, t));
    }
    bind() {
      let t = this.node,
        n = this.parsedPath,
        r = n.objectName,
        i = n.propertyName,
        a = n.propertyIndex;
      if (
        (t || ((t = e.findNode(this.rootNode, n.nodeName)), (this.node = t)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !t)
      ) {
        P('PropertyBinding: No target node found for track: ' + this.path + '.');
        return;
      }
      if (r) {
        let e = n.objectIndex;
        switch (r) {
          case 'materials':
            if (!t.material) {
              F(
                'PropertyBinding: Can not bind to material as node does not have a material.',
                this
              );
              return;
            }
            if (!t.material.materials) {
              F(
                'PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.',
                this
              );
              return;
            }
            t = t.material.materials;
            break;
          case 'bones':
            if (!t.skeleton) {
              F('PropertyBinding: Can not bind to bones as node does not have a skeleton.', this);
              return;
            }
            t = t.skeleton.bones;
            for (let n = 0; n < t.length; n++)
              if (t[n].name === e) {
                e = n;
                break;
              }
            break;
          case 'map':
            if ('map' in t) {
              t = t.map;
              break;
            }
            if (!t.material) {
              F(
                'PropertyBinding: Can not bind to material as node does not have a material.',
                this
              );
              return;
            }
            if (!t.material.map) {
              F(
                'PropertyBinding: Can not bind to material.map as node.material does not have a map.',
                this
              );
              return;
            }
            t = t.material.map;
            break;
          default:
            if (t[r] === void 0) {
              F('PropertyBinding: Can not bind to objectName of node undefined.', this);
              return;
            }
            t = t[r];
        }
        if (e !== void 0) {
          if (t[e] === void 0) {
            F(
              'PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.',
              this,
              t
            );
            return;
          }
          t = t[e];
        }
      }
      let o = t[i];
      if (o === void 0) {
        let e = n.nodeName;
        F(
          'PropertyBinding: Trying to update property for track: ' +
            e +
            '.' +
            i +
            " but it wasn't found.",
          t
        );
        return;
      }
      let s = this.Versioning.None;
      ((this.targetObject = t),
        t.isMaterial === !0
          ? (s = this.Versioning.NeedsUpdate)
          : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate));
      let c = this.BindingType.Direct;
      if (a !== void 0) {
        if (i === 'morphTargetInfluences') {
          if (!t.geometry) {
            F(
              'PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.',
              this
            );
            return;
          }
          if (!t.geometry.morphAttributes) {
            F(
              'PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.',
              this
            );
            return;
          }
          t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
        }
        ((c = this.BindingType.ArrayElement),
          (this.resolvedProperty = o),
          (this.propertyIndex = a));
      } else
        o.fromArray !== void 0 && o.toArray !== void 0
          ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = o))
          : Array.isArray(o)
            ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = o))
            : (this.propertyName = i);
      ((this.getValue = this.GetterByBindingType[c]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[c][s]));
    }
    unbind() {
      ((this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
  };
((Q.Composite = Nt),
  (Q.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (Q.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (Q.prototype.GetterByBindingType = [
    Q.prototype._getValue_direct,
    Q.prototype._getValue_array,
    Q.prototype._getValue_arrayElement,
    Q.prototype._getValue_toArray,
  ]),
  (Q.prototype.SetterByBindingTypeAndVersioning = [
    [
      Q.prototype._setValue_direct,
      Q.prototype._setValue_direct_setNeedsUpdate,
      Q.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      Q.prototype._setValue_array,
      Q.prototype._setValue_array_setNeedsUpdate,
      Q.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      Q.prototype._setValue_arrayElement,
      Q.prototype._setValue_arrayElement_setNeedsUpdate,
      Q.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      Q.prototype._setValue_fromArray,
      Q.prototype._setValue_fromArray_setNeedsUpdate,
      Q.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]),
  class e {
    static {
      e.prototype.isMatrix2 = !0;
    }
    constructor(e, t, n, r) {
      ((this.elements = [1, 0, 0, 1]), e !== void 0 && this.set(e, t, n, r));
    }
    identity() {
      return (this.set(1, 0, 0, 1), this);
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
      return this;
    }
    set(e, t, n, r) {
      let i = this.elements;
      return ((i[0] = e), (i[2] = t), (i[1] = n), (i[3] = r), this);
    }
  },
  typeof __THREE_DEVTOOLS__ < 'u' &&
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('register', { detail: { revision: '185' } })),
  typeof window < 'u' &&
    (window.__THREE__
      ? P('WARNING: Multiple instances of Three.js being imported.')
      : (window.__THREE__ = '185')));
//#endregion
//#region src/app/globe-projection.ts
var Pt = 0.02,
  Ft = 0.08;
function It(e) {
  let t = new z(
    e.orientation.position[0],
    e.orientation.position[1],
    e.orientation.position[2]
  ).normalize();
  return new R().setFromUnitVectors(new z(0, 0, 1), t);
}
function Lt(e) {
  return e.clone().normalize().multiplyScalar(1);
}
function Rt(e, t) {
  let n = t.z - e.z,
    r = Math.abs(n) < 1e-6 ? 0.5 : (Pt - e.z) / n;
  return Lt(e.local.clone().lerp(t.local, Math.min(1, Math.max(0, r))));
}
function zt(e) {
  return e.length < 3 ? !1 : e[0].distanceToSquared(e[e.length - 1]) < 1e-8;
}
function Bt(e) {
  let t = 0;
  for (let n = 1; n < e.length; n += 1) t += e[n - 1].distanceTo(e[n]);
  return t;
}
function Vt(e, t, n) {
  (n || Bt(t) >= Ft) &&
    e.push({
      closed: n,
      points: t,
    });
}
function Ht(e, t) {
  if (e.length < 2) return [];
  let n = e.map(([e, t, n]) => new z(e, t, n)),
    r = zt(n),
    i = (r ? n.slice(0, -1) : n).map((e) => {
      let n = e.clone().applyQuaternion(t).z;
      return {
        local: e,
        visible: n >= Pt,
        z: n,
      };
    });
  if (i.length < 2) return [];
  if (i.every((e) => e.visible))
    return [
      {
        closed: r,
        points: i.map((e) => Lt(e.local)),
      },
    ];
  let a = [],
    o = [],
    s = r ? i.length : i.length - 1;
  for (let e = 0; e < s; e += 1) {
    let t = i[e],
      n = i[(e + 1) % i.length];
    if ((t.visible && o.length === 0 && o.push(Lt(t.local)), t.visible && n.visible)) {
      o.push(Lt(n.local));
      continue;
    }
    if (t.visible && !n.visible) {
      (o.push(Rt(t, n)), o.length >= 2 && Vt(a, o, !1), (o = []));
      continue;
    }
    !t.visible && n.visible && (o = [Rt(t, n), Lt(n.local)]);
  }
  return (o.length >= 2 && Vt(a, o, !1), a);
}
//#endregion
//#region src/app/globe-renderer-settings.ts
var Ut = 0.36,
  Wt = 720,
  Gt = 48,
  Kt = 1,
  qt = 0.8,
  Jt = 1.55,
  Yt = Math.ceil(((60 / 100) * r.height * Ut) / (qt * Jt));
function Xt(e) {
  return e / (r.height * Ut);
}
function Zt({ bandHeight: e, columnSpacing: t, dotSize: n, outerRadius: r, radius: i }) {
  let a = Xt(i),
    o = Math.max(qt * a, n * a),
    s = o * Jt,
    c = Math.max(0, e * i),
    l = Math.max(Kt * a, t * a),
    u = Math.max(0, Math.PI * 2 * r * i),
    d = Math.max(Gt, Math.min(Wt, Math.round(u / l))),
    f = Math.max(1, Math.min(Yt, Math.round(c / s)));
  return {
    columnCount: d,
    dotRadius: o / 2,
    rowCount: f,
  };
}
//#endregion
//#region src/app/globe-logo-assets.ts
var Qt = [
  {
    aspectRatio: 1,
    height: 60,
    id: 'app',
    label: 'APP',
    paths: [],
    width: 60,
  },
  {
    aspectRatio: 1,
    height: 60,
    id: 'web',
    label: 'WEB',
    paths: [],
    width: 60,
  },
  {
    aspectRatio: 1,
    height: 60,
    id: 'cloud',
    label: 'CLOUD',
    paths: [],
    width: 60,
  },
  {
    aspectRatio: 1,
    height: 60,
    id: 'ai',
    label: 'AI',
    paths: [],
    width: 60,
  },
];
function $t(e) {
  return Qt.find((t) => t.id === e);
}
//#endregion
//#region src/app/globe-logo-mask.ts
var en = 0.74,
  tn = 0.48,
  $,
  nn = /* @__PURE__ */ new Map();
function rn() {
  if ($ !== void 0) return $;
  if (typeof document > 'u') return (($ = null), $);
  let e = document.createElement('canvas');
  return ((e.width = 1), (e.height = 1), ($ = e.getContext('2d', { willReadFrequently: !0 })), $);
}
function an(e) {
  let t = nn.get(e.id);
  if (t) return t;
  if (typeof Path2D > 'u') return (nn.set(e.id, []), []);
  try {
    let t = e.paths.map((e) => new Path2D(e));
    return (nn.set(e.id, t), t);
  } catch {
    return (nn.set(e.id, []), []);
  }
}
function on(e, t, n) {
  let r = e - t,
    i = n / 2;
  for (; r > i; ) r -= n;
  for (; r < -i; ) r += n;
  return r;
}
function sn({
  aspectRatio: e,
  columnCount: t,
  columnPitchPixels: n,
  rowCount: r,
  rowPitchPixels: i,
  scale: a,
}) {
  let o = Math.max(2, Math.min(r, Math.round(r * en))),
    s = Math.floor((r - o) / 2) + o / 2,
    c = (i * e) / n,
    l = Math.min((o * a) / 100, s * 2, (r - s) * 2, (t * tn) / c);
  return {
    firstRow: s - l / 2,
    rows: l,
    widthColumns: l * c,
  };
}
function cn() {
  return !1;
}
//#endregion
//#region src/app/globe-band-renderer.ts
var ln = '#FFFFFF',
  un = '#000000',
  dn = 192,
  fn = 0.004;
function pn(e, t, n, r) {
  (e.moveTo(t + r, n), e.arc(t, n, r, 0, Math.PI * 2));
}
function mn(e, t) {
  return Math.sqrt(Math.max(0, e * e - t * t));
}
function hn(e, t) {
  let n = 1 + t / 100,
    r = e.position / 100,
    i = e.width / 200,
    a = Math.max(-n + fn, r - i),
    o = Math.min(n - fn, r + i);
  return o > a
    ? {
        maxY: o,
        minY: a,
        outerRadius: n,
      }
    : null;
}
function gn(e, t) {
  let n = t.z - e.z,
    r = Math.abs(n) < 1e-6 ? 0.5 : (Pt - e.z) / n,
    i = Math.min(1, Math.max(0, r)),
    a = e.top.clone().lerp(t.top, i);
  return {
    bottom: e.bottom.clone().lerp(t.bottom, i),
    top: a,
    visible: !0,
    z: Pt,
  };
}
function _n(e, t) {
  t.length >= 2 &&
    e.push({
      bottom: t.map((e) => e.bottom),
      top: t.map((e) => e.top),
    });
}
function vn(e, t, n) {
  let r = hn(e, t);
  if (!r) return [];
  let { maxY: i, minY: a, outerRadius: o } = r,
    s = mn(o, i),
    c = mn(o, a);
  return Array.from({ length: dn }, (e, t) => {
    let r = (t / dn) * Math.PI * 2,
      o = Math.cos(r),
      l = Math.sin(r),
      u = new z(o * s, i, l * s),
      d = new z(o * c, a, l * c),
      f = u.clone().add(d).multiplyScalar(0.5).applyQuaternion(n).z;
    return {
      bottom: d,
      top: u,
      visible: f >= Pt,
      z: f,
    };
  });
}
function yn(e, t, n) {
  let r = vn(e, t, n);
  if (r.length < 2) return [];
  if (r.every((e) => e.visible))
    return [
      {
        bottom: r.map((e) => e.bottom),
        top: r.map((e) => e.top),
      },
    ];
  let i = [],
    a = [];
  for (let e = 0; e < r.length; e += 1) {
    let t = r[e],
      n = r[(e + 1) % r.length];
    if ((t.visible && a.length === 0 && a.push(t), t.visible && n.visible)) {
      a.push(n);
      continue;
    }
    if (t.visible && !n.visible) {
      (a.push(gn(t, n)), _n(i, a), (a = []));
      continue;
    }
    !t.visible && n.visible && (a = [gn(t, n), n]);
  }
  return (_n(i, a), i);
}
function bn(e, t, n, r, i, a) {
  (e.beginPath(),
    t.top.forEach((t, o) => {
      let s = t.clone().applyQuaternion(n),
        c = r + s.x * a,
        l = i - s.y * a;
      o === 0 ? e.moveTo(c, l) : e.lineTo(c, l);
    }),
    [...t.bottom].reverse().forEach((t) => {
      let o = t.clone().applyQuaternion(n);
      e.lineTo(r + o.x * a, i - o.y * a);
    }),
    e.closePath(),
    e.fill());
}
function xn(e, t, n, r, i, a, o, s, c, l) {
  let u = hn(t, n);
  if (!u) return;
  let { maxY: d, minY: f, outerRadius: p } = u,
    m = d - f,
    {
      columnCount: h,
      dotRadius: g,
      rowCount: _,
    } = Zt({
      bandHeight: m,
      columnSpacing: r,
      dotSize: i,
      outerRadius: p,
      radius: l,
    }),
    v = (m * l) / _,
    y = (Math.PI * 2 * p * l) / h,
    b = [],
    x = !1;
  ((e.fillStyle = ln), e.beginPath());
  for (let t = 0; t < _; t += 1) {
    let n = f + ((t + 0.5) / _) * m,
      r = mn(p, n);
    for (let i = 0; i < h; i += 1) {
      let u = (i / h) * Math.PI * 2,
        d = new z(Math.cos(u) * r, n, Math.sin(u) * r).applyQuaternion(o);
      if (d.z < 0.02) continue;
      let f = s + d.x * l,
        p = c - d.y * l;
      cn({
        columnCount: h,
        columnIndex: i,
        columnPitchPixels: y,
        logo: a,
        rowCount: _,
        rowIndex: t,
        rowPitchPixels: v,
      })
        ? b.push([f, p])
        : ((x = !0), pn(e, f, p, g));
    }
  }
  if ((x && e.fill(), b.length > 0)) {
    ((e.fillStyle = un), e.beginPath());
    for (let [t, n] of b) pn(e, t, n, g);
    (e.fill(), (e.fillStyle = ln));
  }
}
function Sn(e, t, n, r, i, a) {
  (e.save(), (e.fillStyle = t.sphereColor));
  for (let o of t.bands) for (let s of yn(o, t.bandDistance, n)) bn(e, s, n, r, i, a);
  e.fillStyle = ln;
  for (let o of t.bands) {
    let s = t.logos.find((e) => e.bandId === o.id);
    xn(e, o, t.bandDistance, t.bandColumnSpacing, t.bandDotSize, s, n, r, i, a);
  }
  e.restore();
}
//#endregion
//#region src/app/globe-frame.ts
function Cn(e, t, n, i, a = {}) {
  let o = t / 2,
    s = n / 2,
    c = Math.min(t, n) * Ut,
    l = a.geometry ?? f(i),
    u = It(i);
  (e.save(),
    a.clear && e.clearRect(0, 0, t, n),
    a.includeBackground && ((e.fillStyle = i.background), e.fillRect(0, 0, t, n)),
    (e.fillStyle = i.sphereColor),
    e.beginPath(),
    e.arc(o, s, c, 0, Math.PI * 2),
    e.fill(),
    e.save(),
    e.clip(),
    (e.strokeStyle = i.lineColor),
    (e.lineWidth = i.lineWidth * (t / r.width)),
    (e.lineCap = 'butt'),
    (e.lineJoin = 'round'));
  for (let t of [...l.latitudes, ...l.meridians])
    for (let n of Ht(t.points, u))
      (e.beginPath(),
        n.points.forEach((t, n) => {
          let r = t.clone().applyQuaternion(u),
            i = o + r.x * c,
            a = s - r.y * c;
          n === 0 ? e.moveTo(i, a) : e.lineTo(i, a);
        }),
        n.closed && e.closePath(),
        e.stroke());
  (e.restore(),
    i.outline &&
      ((e.strokeStyle = i.lineColor),
      (e.lineWidth = i.lineWidth * (t / r.width)),
      (e.lineCap = 'butt'),
      (e.lineJoin = 'round'),
      e.beginPath(),
      e.arc(o, s, c, 0, Math.PI * 2),
      e.stroke()),
    Sn(e, i, u, o, s, c),
    D(e, t, n, a.crtPhaseMs ?? 1280, i.crtIntensity),
    e.restore());
}
//#endregion
//#region src/app/globe-band-order.ts
var wn = [
    {
      bandId: 1,
      logoId: 'app',
      label: 'APP',
      positionKey: 'logoAppFinalPosition',
      scaleKey: 'logoAppScale',
    },
    {
      bandId: 4,
      logoId: 'ai',
      label: 'AI',
      positionKey: 'logoAiFinalPosition',
      scaleKey: 'logoAiScale',
    },
    {
      bandId: 2,
      logoId: 'web',
      label: 'WEB',
      positionKey: 'logoWebFinalPosition',
      scaleKey: 'logoWebScale',
    },
    {
      bandId: 3,
      logoId: 'cloud',
      label: 'CLOUD',
      positionKey: 'logoCloudFinalPosition',
      scaleKey: 'logoCloudScale',
    },
  ],
  Tn = 2520,
  En = 0.35,
  Dn = 0.78;
200 - jn(Tn * (1 - 760 / Tn), Tn);
function On(e) {
  let t = Math.min(1, Math.max(0, e)),
    n = t * t * t * (t * (t * 6 - 15) + 10),
    r = Math.min(1, Math.max(0, (t - Dn) / 0.21999999999999997)),
    i = En * r * r * (3 - 2 * r),
    a = 1 - (1 - t) * (1 - t);
  return n * (1 - i) + a * i;
}
function kn(e, t) {
  return ((e % t) + t) % t;
}
function An(e) {
  return Number.isFinite(e) ? Math.max(0.1, e) : 1;
}
function jn(e, t) {
  return e >= t ? 0 : On(e / t) * 200;
}
function Mn(e = 1) {
  let t = An(e),
    n = Tn / t,
    r = 760 / t,
    i = 840 / t,
    a = n - r;
  return {
    approachDurationMs: r,
    orbitDurationMs: n,
    resetStartOffset: 200 - jn(a, n),
    resetStartPhaseMs: a,
    staggerMs: i,
  };
}
function Nn(e, t = 1) {
  return Mn(t).orbitDurationMs + Math.max(0, e) * 1e3;
}
function Pn(e, t = 1) {
  return jn(e, Mn(t).orbitDurationMs);
}
function Fn(e, t, n, r, i = 1) {
  let a = Mn(i),
    o = t - Math.max(0, n) * a.staggerMs;
  return e + Pn(kn(a.resetStartPhaseMs + o, Nn(r, i)), i);
}
function In(e, t, n, r = 1) {
  return e.map((e) => ({
    ...e,
    position: Fn(
      e.position,
      t,
      wn.findIndex((t) => t.bandId === e.bandId),
      n,
      r
    ),
  }));
}
//#endregion
//#region src/embed/globe-frame.ts
function Ln(e, t, n, r) {
  let i = (Number.isFinite(n) && n > 0 ? n : 1) * r;
  return {
    width: Math.round(e * i),
    height: Math.round(t * i),
    pixelRatio: i,
  };
}
function Rn(e, t, n, i, a, o, s) {
  let c = Math.min(t, n) / r.height;
  Cn(
    e,
    t,
    n,
    {
      ...i,
      lineWidth: (i.lineWidth * c * r.width) / t,
      logos: s ? i.logos : In(i.logos, o, i.logoHoldSeconds, i.logoSpeed),
    },
    {
      clear: !0,
      crtPhaseMs: s ? C : o,
      geometry: a,
      includeBackground: i.includeBackground,
    }
  );
}
var zn = {
    appId: 'servbit-globe-2',
    canvas: {
      aspectRatio: {
        height: 9,
        mode: 'preset',
        value: '16:9',
        width: 16,
      },
      mode: 'finite',
      size: {
        height: 1080,
        unit: 'px',
        width: 1920,
      },
    },
    exportedAt: '2026-08-27T12:57:53.292Z',
    source: 'toolcraft-settings',
    timeline: {
      currentTimeSeconds: 0,
      durationSeconds: 8,
      expanded: !1,
      isLooping: !0,
      isPlaying: !1,
    },
    values: {
      'export.includeBackground': !0,
      'appearance.background': '#000000',
      'canvas.renderScale': 2,
      'globe.sphereColor': '#000000',
      'globe.lineColor': '#FFFFFF',
      'globe.latitudeCount': 8,
      'globe.meridianCount': 16,
      'globe.lineWidth': 1.5,
      'globe.orientation': {
        position: [0.5481637778242294, 1.2696368424374171, 5.493408665028698],
        up: [-0.02225418023154345, 0.9745598888152974, -0.22301967306615994],
      },
      'globe.outline': !0,
      'effects.crtIntensity': 100,
      'bands.distance': 1,
      'bands.dotSize': 1.25,
      'bands.columnSpacing': 3.5,
      'bands.band1.position': 69,
      'bands.band1.width': 17,
      'bands.band4.position': 46,
      'bands.band4.width': 24,
      'bands.band2.position': 6,
      'bands.band2.width': 50,
      'bands.band3.position': -30,
      'bands.band3.width': 16,
      'logos.holdSeconds': 3,
      'logos.speed': 2.5,
      'logos.app.finalPosition': 60,
      'logos.ai.finalPosition': 68,
      'logos.web.finalPosition': 71,
      'logos.cloud.finalPosition': 76,
      'logos.app.scale': 114,
      'logos.ai.scale': 108,
      'logos.web.scale': 121,
      'logos.cloud.scale': 100,
      'export.image.format': 'png',
      'export.image.resolution': '4k',
    },
    version: 2,
  },
  Bn = class {
    container;
    onDestroy;
    canvas;
    win;
    doc;
    renderScale;
    motion;
    reducedMotion;
    resizeObserver;
    intersectionObserver;
    pixelRatioQuery;
    context;
    values;
    settings;
    geometry;
    width = 0;
    height = 0;
    pixelRatio = 1;
    elapsedMs = 0;
    previousFrameMs = null;
    animationFrame = null;
    inView = !1;
    pageHidden = !1;
    paused = !1;
    destroyed = !1;
    dirty = !0;
    constructor(e, t, n) {
      if (
        ((this.container = e),
        (this.onDestroy = n),
        (this.doc = e.ownerDocument),
        (this.win = this.doc.defaultView),
        (this.renderScale = a(t.renderScale, 1, 2, 2)),
        (this.motion = t.motion ?? 'auto'),
        (this.values = structuredClone({
          ...zn.values,
          ...t.values,
        })),
        (this.settings = u(this.values)),
        (this.geometry = f(this.settings)),
        (this.canvas = this.doc.createElement('canvas')),
        (this.context = this.canvas.getContext('2d')),
        !this.context)
      )
        throw Error('Canvas 2D is unavailable.');
      (this.canvas.setAttribute('aria-hidden', 'true'),
        Object.assign(this.canvas.style, {
          position: 'absolute',
          inset: '0',
          width: '100%',
          height: '100%',
          display: 'block',
          pointerEvents: 'none',
        }),
        (this.reducedMotion = this.win.matchMedia('(prefers-reduced-motion: reduce)')),
        (this.pixelRatioQuery = this.createPixelRatioQuery()),
        (this.resizeObserver = new this.win.ResizeObserver(this.resize)),
        (this.intersectionObserver = new this.win.IntersectionObserver((e) => {
          let t = e.find((e) => e.target === this.container);
          t && ((this.inView = t.isIntersecting && t.intersectionRatio > 0), this.reconcile());
        })),
        this.container.append(this.canvas),
        this.resizeObserver.observe(this.container),
        this.intersectionObserver.observe(this.container),
        this.reducedMotion.addEventListener('change', this.invalidate),
        this.doc.addEventListener('visibilitychange', this.reconcile),
        this.win.addEventListener('resize', this.resize),
        this.win.addEventListener('pagehide', this.hidePage),
        this.win.addEventListener('pageshow', this.showPage),
        this.resize());
    }
    createPixelRatioQuery() {
      let e = this.win.matchMedia(`(resolution: ${this.win.devicePixelRatio || 1}dppx)`);
      return (e.addEventListener('change', this.changePixelRatio), e);
    }
    changePixelRatio = () => {
      (this.pixelRatioQuery.removeEventListener('change', this.changePixelRatio),
        (this.pixelRatioQuery = this.createPixelRatioQuery()),
        this.resize());
    };
    resize = () => {
      if (this.destroyed) return;
      let e = this.container.clientWidth,
        t = this.container.clientHeight,
        n = Ln(e, t, this.win.devicePixelRatio, this.renderScale);
      (e !== this.width || t !== this.height || n.pixelRatio !== this.pixelRatio) &&
        ((this.width = e),
        (this.height = t),
        (this.pixelRatio = n.pixelRatio),
        this.canvas.width !== n.width && (this.canvas.width = n.width),
        this.canvas.height !== n.height && (this.canvas.height = n.height),
        this.invalidate());
    };
    hidePage = () => {
      ((this.pageHidden = !0), this.reconcile());
    };
    showPage = () => {
      ((this.pageHidden = !1), this.resize(), this.reconcile());
    };
    isStill() {
      return this.motion === 'still' || this.reducedMotion.matches;
    }
    canDraw() {
      return (
        !this.destroyed &&
        !this.doc.hidden &&
        !this.pageHidden &&
        this.inView &&
        this.width > 0 &&
        this.height > 0
      );
    }
    cancelFrame() {
      (this.animationFrame !== null && this.win.cancelAnimationFrame(this.animationFrame),
        (this.animationFrame = null),
        (this.previousFrameMs = null));
    }
    reconcile = () => {
      if (!this.canDraw()) {
        this.cancelFrame();
        return;
      }
      ((this.paused || this.isStill()) && this.cancelFrame(),
        this.animationFrame === null &&
          (this.dirty || (!this.paused && !this.isStill())) &&
          (this.animationFrame = this.win.requestAnimationFrame(this.render)));
    };
    invalidate = () => {
      this.destroyed || ((this.dirty = !0), this.reconcile());
    };
    render = (e) => {
      if (((this.animationFrame = null), !this.canDraw() || !this.context)) {
        this.previousFrameMs = null;
        return;
      }
      let t = !this.paused && !this.isStill();
      (t &&
        this.previousFrameMs !== null &&
        (this.elapsedMs += Math.max(0, e - this.previousFrameMs)),
        (this.previousFrameMs = t ? e : null),
        this.context.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0),
        Rn(
          this.context,
          this.width,
          this.height,
          this.settings,
          this.geometry,
          this.elapsedMs,
          this.isStill()
        ),
        (this.dirty = !1),
        this.reconcile());
    };
    update(e) {
      if (this.destroyed) return;
      let t = {
          ...this.values,
          ...structuredClone(e),
        },
        n = u(t);
      ((n.latitudeCount !== this.settings.latitudeCount ||
        n.meridianCount !== this.settings.meridianCount) &&
        (this.geometry = f(n)),
        (this.values = t),
        (this.settings = n),
        this.invalidate());
    }
    pause() {
      ((this.paused = !0), this.reconcile());
    }
    resume() {
      ((this.paused = !1), this.reconcile());
    }
    restart() {
      ((this.elapsedMs = 0), (this.previousFrameMs = null), this.invalidate());
    }
    destroy() {
      this.destroyed ||
        ((this.destroyed = !0),
        this.cancelFrame(),
        this.resizeObserver.disconnect(),
        this.intersectionObserver.disconnect(),
        this.reducedMotion.removeEventListener('change', this.invalidate),
        this.pixelRatioQuery.removeEventListener('change', this.changePixelRatio),
        this.doc.removeEventListener('visibilitychange', this.reconcile),
        this.win.removeEventListener('resize', this.resize),
        this.win.removeEventListener('pagehide', this.hidePage),
        this.win.removeEventListener('pageshow', this.showPage),
        this.canvas.remove(),
        (this.canvas.width = 0),
        (this.canvas.height = 0),
        (this.context = null),
        (this.geometry = {
          latitudes: [],
          meridians: [],
        }),
        (this.values = {}),
        this.onDestroy());
    }
  },
  Vn = /* @__PURE__ */ new WeakMap();
function Hn(e, t = {}) {
  if (!e?.ownerDocument?.defaultView)
    throw TypeError('createServbitGlobe requires a browser HTMLElement.');
  if (Vn.has(e))
    throw Error('This container already has a globe. Destroy it before mounting again.');
  if (t.motion !== void 0 && t.motion !== 'auto' && t.motion !== 'still')
    throw TypeError('motion must be auto or still.');
  let n = new Bn(e, t, () => Vn.delete(e));
  return (Vn.set(e, n), n);
}
//#endregion
export { Hn as createServbitGlobe };
