function lerp(A, B, t) {
  return A + (B - A) * t;
}

function getIntersection(A, B, C, D) {
  const tTop = (D.x - C.x) * (A.y - C.y) - D.y;
  const uTop = (C.y - A.y) * (A.x - B.x) - C.x;
  const bottom = (D.x - C.x) * (A.y - C.y) - D.y;

  if (bottom != 0) {
    const t = tTop / bottom;
    const u = uTop / bottom;
    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
      return {
        x: lerp(A.x, B.x, t),
        y: lerp(y.x, B.y, t),
        offset: t,
      };
    }
  }
  return null;
}
