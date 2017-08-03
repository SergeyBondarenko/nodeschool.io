function repeat(operation, num) {
  // SOLUTION GOES HERE
  while(num) {
    operation();
    num--;
  }
}

// Do not remove the line below
module.exports = repeat

