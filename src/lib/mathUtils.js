const radiansBetweenPoints = (point1, point2) => {
  return Math.atan2(point2.y - point1.y, point2.x - point1.x);
};

const degreesBetweenPoints = (point1, point2) => {
  return (radiansBetweenPoints(point1, point2) * 180) / Math.PI;
};

const getRandomBetween = (min, max) => {
  return Math.random() * (max - min) + min;
};

const getRandomIntBetween = (min, max) => {
  return Math.floor(getRandomBetween(min, max));
};

export {
  radiansBetweenPoints,
  degreesBetweenPoints,
  getRandomBetween,
  getRandomIntBetween,
};
