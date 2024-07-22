import {
  radiansBetweenPoints,
  getRandomBetween,
} from "@/lib/mathUtils";

// Given a set of points, generate a vine points for a path that winds through those points.
export default function VinePoints({
  sourcePoints,
  velocityModifier = 0.4,
  randomDegreeRange = 0, //.3,
}) {
  let points = [];

  const getAngleForPoint = (index) => {
    let previousPoint = sourcePoints[index - 1];
    let currentPoint = sourcePoints[index];
    let nextPoint = sourcePoints[index + 1];

    if (index === 0) {
      return radiansBetweenPoints(currentPoint, nextPoint);
    }

    if (index === sourcePoints.length - 1) {
      return radiansBetweenPoints(previousPoint, currentPoint);
    }

    // If the point is not the first or last point, calculate the angle between the average
    // vectors of the previous and next points.
    return Math.atan2(
      (currentPoint.y - previousPoint.y) + (nextPoint.y - currentPoint.y),
      (currentPoint.x - previousPoint.x) + (nextPoint.x - currentPoint.x),
    );
  }

  const getVelocityBetweenPoints = (index1, index2) => {
    if (index1 < 0 || index2 < 0) {
      return 0;
    }

    if (index1 >= sourcePoints.length || index2 >= sourcePoints.length) {
      return 0;
    }

    const point1 = sourcePoints[index1];
    const point2 = sourcePoints[index2];

    return Math.sqrt(
      (point1.x - point2.x) ** 2 +
      (point1.y - point2.y) ** 2
    );
  }

  const generatePathPoints = () => {
    points = [];

    sourcePoints.forEach((sourcePoint, index) => {
      points.push({
        x: sourcePoint.x,
        y: sourcePoint.y,
        angle: getAngleForPoint(index) + getRandomBetween(-randomDegreeRange, randomDegreeRange),
        velocityIn: getVelocityBetweenPoints(index, index - 1) * velocityModifier,
        velocityOut: getVelocityBetweenPoints(index + 1, index) * velocityModifier
      });
    });
  };

  generatePathPoints();

  return points;
};
