function getSum(a, b) {
  // Declare sum variable
  sum = 0;

  // If a and b are equal, return a
  if (a === b) {
    return a;
    // If a is less than b, loop through a to b and add each number to sum
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    // If b is less than a, loop through b to a and add each number to sum
  } else {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum;
}

// console.log(getSum(0, -1));
// console.log(getSum(0, 1));
// console.log(getSum(2, 2));
// console.log(getSum(9, 3));
// console.log(getSum(99, 33));
// console.log(getSum(33, 99));
// console.log(getSum(-1000, -950));
