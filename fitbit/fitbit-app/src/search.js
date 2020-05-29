function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle])end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
  
}
// O(log n) and O(1)

// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));


function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++){
    for (let j = 0; j < short.length; j++){
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

// console.log(naiveSearch("lorie loled", "lo"))


// sorting 
//compare and sort 

function numCompare(n1, n2) {
  return n1 - n2;
}
let com =[2,7,3,56,32,65,23].sort(numCompare)
console.log("com", com)

function curr(a) {
  return (b)=>{
    return a + b;
  }
}

console.log("crr", curr(2)(3))

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}   

function bubbleSort(arr) {
  for (let i = arr.length; i >0; i--){
    for (let j = 0; j<i-1; j++){
      console.log("ar", arr, arr[j], arr[j+1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr;
}

// console.log("bub", bubbleSort([23, 2, 3, 53, 23, 42, 27]))


//Selection sort

// Selection Sort: similar to bubble sort, but instead of first placing large values into sorted position,
// it places small values  into sorted position

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++){
    let lowest = i;
    for (let j = i+1; j < arr.length; j++){
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return arr
}

//O(n ** 2)

// console.log(selectionSort([23, 1, 2, 45, 32, 16, 34]));

//Insertion Sort
// Builds up the sort by gradually creating a larger
// left half which is always sorted

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
      arr[j + 1] = arr[j];
    }
    arr[i + 1] = currentVal;
  }
  return arr
}

// console.log(insertionSort([2,3,1,5,8,13,23,13]))

function testARR(arr) {
  let n = arr.length;
  let b=[]
  b[0] = arr[0] * arr[1];
  // arr[n - 1] = arr[n - 1] * arr[n - 2];
  for (let i = 1; i < n - 1; i++){
    b[i] = arr[i - 1] * arr[i + 1]
    console.log("asa",arr[i-1], arr[i+1], b[i])
  }
  b[n - 1] = arr[n - 1] * arr[n - 2];
  return b
} 
// console.log("test", testARR([2, 3, 4, 5, 6]))

function sortArr(a) {
  let newarr=[]
  for (let i = 0; i < a.length; i++){
    a[i]===0 ? newarr.unshift(a[i]) : newarr.push(a[i])
  }
  return newarr
}
// console.log("srro",sortArr([0,1,0,0,1,1,1,0,0]))

function binaryToDecimal(n) {
  let sa;
  if (n > 0) {
    let k = (n.toString(2))
    console.log("ss", k)
    if (k.length < 8) {
      i = 8 - k.length
      for (let m = 0; m < i ; m++) {
        k = 0 + k
      }
    }
    sa = k.split('').reverse().join('')
    console.log("sasa",sa)
    return parseInt(sa, 2);
  }
}
console.log("sss",binaryToDecimal(21))