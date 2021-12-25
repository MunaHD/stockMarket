const maxProfit = function(arr) {
  let tempArr = [];
  for (let i in arr) {
    let newArr = arr.slice(i);
    for (let j = 0; j < newArr.length - 1; j++) {
      tempArr.push(newArr[j + 1] - arr[i]);
    }
  }
  const maxNum = Math.max(...tempArr);
  if (maxNum < 1) {
    return - 1;
  }
  return maxNum;
};

const arr = [45, 24, 35, 31, 40, 38, 11];
console.log(maxProfit(arr)); // 16
const arr1 = [45, 35, 31, 28, 11];
console.log(maxProfit(arr1)); // -1

