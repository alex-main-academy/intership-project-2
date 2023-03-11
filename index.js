// task 1 ------------------------------------------------------------------------------------------
// Write a JavaScript program to find the diagonal of a square where the length of each side is 9.

const findSquareDiagonal = (side) => {
  return side * Math.sqrt(2).toFixed(1);
};
console.log(findSquareDiagonal(9));

// task 2 -----------------------------------------------------------------------------------------
// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.

const findTriangleArea = (a, b, c) => {
  const p = 0.5 * (a + b + c);
  return Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(1);
};
console.log(findTriangleArea(5, 6, 7));

// task 3 ----------------------------------------------------------------------------------------
// Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.
const findCircumferenceSurfaceArea = (radius) => {
  const circumference = 2 * 3.14 * radius;
  const surface = Math.pow(circumference, 2) / (4 * 3.14);
  return {
    circumference: Number(circumference.toFixed(1)),
    surface: Number(surface.toFixed(1)),
  };
};
console.log(findCircumferenceSurfaceArea(4));

// task 4 ---------------------------------------------------------------------------------------
// Write a JavaScript program that accepts two integers and displays the larger of the two.
const displayLargestInterger = (a, b) => {
  return a > b ? a : b;
};
console.log(displayLargestInterger(5, 4));

// task 5 ---------------------------------------------------------------------------------------
// Write a JavaScript program that checks whether an integer is an even or an odd number.
const isEvenOrOdd = (a) => {
  return a % 2 === 0 ? "even" : "odd";
};
console.log(isEvenOrOdd(6));
