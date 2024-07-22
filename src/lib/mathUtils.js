import Deterministic from "./Deterministic";

const radiansBetweenPoints = (point1, point2) => {
  return Math.atan2(point2.y - point1.y, point2.x - point1.x);
};

const degreesBetweenPoints = (point1, point2) => {
  return (radiansBetweenPoints(point1, point2) * 180) / Math.PI;
};

const getRandomBetween = (min, max) => {
  return Deterministic.random() * (max - min) + min;
};

const getRandomIntBetween = (min, max) => {
  return Math.floor(getRandomBetween(min, max));
};

// This function splits a bezier curve into subcurves using a modification of De Casteljau's algorithm.
// This algorithm calculates the subcurve based on parameter space rather than arc length.
//   time0 - the start of the subcurve where 0 <= t0 <= t1 <= 1
//   time1 - the end of the subcurve where 0 <= t0 <= t1 <= 1
const bezierSubcurve = ({ time0, time1, point0, point1, control0, control1 }) => {
  const time0Compliment = 1.0 - time0;
  const time1Compliment = 1.0 - time1;

  const offsetXA =  point0.x * time0Compliment * time0Compliment +
                    control0.x * 2 * time0 * time0Compliment +
                    control1.x * time0 * time0;
  const offsetXB =  point0.x * time1Compliment * time1Compliment + // 2.5
                    control0.x * 2 * time1 * time1Compliment + // 10
                    control1.x * time1 * time1; // 1.25
  const offsetXC =  control0.x * time0Compliment * time0Compliment +
                    control1.x * 2 * time0 * time0Compliment +
                    point1.x * time0 * time0;
  const offsetXD =  control0.x * time1Compliment * time1Compliment +
                    control1.x * 2 * time1 * time1Compliment +
                    point1.x * time1 * time1;

  const offsetYA =  point0.y * time0Compliment * time0Compliment +
                    control0.y * 2 * time0 * time0Compliment +
                    control1.y * time0 * time0;
  const offsetYB =  point0.y * time1Compliment * time1Compliment +
                    control0.y * 2 * time1 * time1Compliment +
                    control1.y * time1 * time1;
  const offsetYC =  control0.y * time0Compliment * time0Compliment +
                    control1.y * 2 * time0 * time0Compliment +
                    point1.y * time0 * time0;
  const offsetYD =  control0.y * time1Compliment * time1Compliment +
                    control1.y * 2 * time1 * time1Compliment +
                    point1.y * time1 * time1;

  return {
    point0: {
      x: offsetXA * time0Compliment + offsetXC * time0,
      y: offsetYA * time0Compliment + offsetYC * time0,
    },
    point1: {
      x: offsetXB * time1Compliment + offsetXD * time1,
      y: offsetYB * time1Compliment + offsetYD * time1,
    },
    control0: {
      x: offsetXA * time1Compliment + offsetXC * time1,
      y: offsetYA * time1Compliment + offsetYC * time1,
    },
    control1: {
      x: offsetXB * time0Compliment + offsetXD * time0,
      y: offsetYB * time0Compliment + offsetYD * time0,
    },
  };
};

export {
  radiansBetweenPoints,
  degreesBetweenPoints,
  getRandomBetween,
  getRandomIntBetween,
  bezierSubcurve,
};
