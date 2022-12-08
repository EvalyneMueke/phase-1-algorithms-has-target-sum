function hasTargetSum(array, target) {

  // for (let i =0; i <array.length;i++){
  //   var item1 = array[i]

  //   for(let j= i+1;j<array.length;j++){
  //     var item2 = array[j]

  //     sum =item1 +item2

  //     if (sum===target){
  //       return true
  //     }
  //   }
  //   return false
  // }
  // Write your algorithm here

  const seenNumbers = new Set(); 
  for (const number of array) {
    const complement = target - number;

    // has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;

 
  
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  write a for loop starting from the start
  write a for loop starting at the end
  check if the sum of any of the numbers is equal to 25 then return true
  else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
