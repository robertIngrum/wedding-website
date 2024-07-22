import VinePoints from "./components/VinePoints";
import styles from "./styles.module.css";
import {
  radiansBetweenPoints,
  getRandomIntBetween,
  bezierSubcurve,
 } from "@/lib/mathUtils";

// path: This should be an array of objects with x and y properties
export default function Vine({
  path,
  height,
  width,
  depth = 5,
  debugPath = false,
}) {
  // const rootPoints = [
  //   { x: 10, y: 10 },
  //   { x: 30, y: 50 },
  //   { x: 90, y: 10 },
  //   { x: 90, y: 40 },
  //   { x: 80, y: 80 },
  //   { x: 30, y: 85 },
  //   { x: 10, y: 80 },
  //   { x: 30, y: 60 },
  //   { x: 40, y: 70 },
  // ];
  const rootPoints = [
    { x: 90, y: 10 },
    { x: 70, y: 30 },
    { x: 50, y: 20 },
    { x: 30, y: 25 },
    { x: 10, y: 10 },
    { x: 5, y: 30 },
    { x: 20, y: 50 },
    { x: 10, y: 70 },
    { x: 30, y: 90 },
    { x: 50, y: 80 },
    { x: 70, y: 90 },
    { x: 90, y: 90 },
    { x: 70, y: 70 },
    { x: 80, y: 50 },
    { x: 60, y: 35 },
    { x: 50, y: 40 },
  ];

  const rootPath = () => {
    let path = "";
    rootPoints.forEach((point, index) => {
      if (index === 0) {
        path += `M ${point.x} ${point.y}`;
      } else {
        path += ` L ${point.x} ${point.y}`;
      }
    });

    return (
      <path d={path} fill="transparent" stroke="red" />
    );
  }

  const vinePath = () => {
    let path = "";
    let points = [];

    const vinePoints = VinePoints({ sourcePoints: rootPoints })
    vinePoints.forEach((point, index) => {
      if (index > depth) { return; }

      debugPath && console.log(point);

      if (index === 0) {
        path += `M ${point.x} ${point.y}`;
      } else {
        const previousPoint = vinePoints[index - 1];

        const c1 = {
          x: previousPoint.x + (Math.cos(previousPoint.angle) * previousPoint.velocityOut),
          y: previousPoint.y + (Math.sin(previousPoint.angle) * previousPoint.velocityOut),
        };

        const c2 = {
          x: point.x - Math.cos(point.angle) * point.velocityIn,
          y: point.y - Math.sin(point.angle) * point.velocityIn,
        };

        points.push(c1);
        points.push(c2);

        if (index > depth - 1) {
          const subcurve = bezierSubcurve({
            time0: 0,
            time1: depth - index,
            point0: previousPoint,
            point1: point,
            control0: c1,
            control1: c2,
          })

          path += ` C ${subcurve.control0.x} ${subcurve.control0.y}, ${subcurve.control1.x} ${subcurve.control1.y}, ${subcurve.point1.x} ${subcurve.point1.y}`;
        } else {
          path += ` C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${point.x} ${point.y}`;
        }
      }
    });

    const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "black", "white"];

    return (
      <>
        <path d={path} fill="transparent" stroke="green" />

        {debugPath && points.map((point, index) => (
          <circle cx={point.x} cy={point.y} r="1" fill={colors[index % colors.length]} />
        ))}
      </>
    )
  }

  return (
    <svg className={styles.vine}
         viewBox={`0 0 ${height} ${width}`}
         xmlns="http://www.w3.org/2000/svg">
      {debugPath && rootPath()}
      {vinePath()}
    </svg>
  );
};
