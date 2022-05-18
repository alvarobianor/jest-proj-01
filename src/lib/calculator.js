export function sum(number, number2) {
  const int1 = parseInt(number, 10);
  const int2 = parseInt(number2, 10);
  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error();
  }
  return int1 + int2;
}

export function mult(number, number2) {
  const int1 = parseInt(number, 10);
  const int2 = parseInt(number2, 10);
  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error();
  }
  return int1 * int2;
}
