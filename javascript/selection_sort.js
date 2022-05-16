function selectionSort(arr) {
  let sorted = [];
  while (arr.length > 0) {
    const min = Math.min(...arr)
    arr.splice(arr.indexOf(min), 1)
    sorted.push(min)
  }
  return sorted
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("Expecting: [2, 4, 6, 8, 9");
  console.log("=>", selectionSort([4, 2, 9, 6, 8]))

  console.log("Expecting: [-20, -3, 25, 37, 1042]")
  console.log("=>", selectionSort([37, 1042, -20, 25, -3]))
  
  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
// IN OWN WORDS: find lowest value, then insert at correct spot in new sorted array
// 1) find minimum value in input Array
// 2) find appropriate spot in new array and insert this value

