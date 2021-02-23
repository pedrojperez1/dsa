/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1
  } else {
    return nums[0] * product(nums.slice(1))
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) {
    return words[0].length
  } else {
    return words[0].length > longest(words.slice(1)) ? words[0].length : longest(words.slice(1))
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  
  if (str === '') {// base case
    return ''
  } else { // normal case
    return str[0] + everyOther(str.slice(2))
  }

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  
  if (str === '') { // base case
    return true
  } else { // normal case
    return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1))
  }
  
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (idx === arr.length) {
    return -1
  } else if (arr[idx] === val) {
    return idx
  } else {
    return findIndex(arr, val, idx + 1)
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  
  if (str === '') {// base case
    return ''
  } else { // normal case
    return str[str.length - 1] + revString(str.slice(0, str.length - 1))
  }
  
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = []
  for (let key in obj) {
    if (typeof obj[key] === "string") strings.push(obj[key])
    if (typeof obj[key] === "object") strings.push([...gatherStrings({...obj[key]})])
  }
  return strings
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx=0, rightIdx=arr.length) {
  const mid = Math.floor((rightIdx + leftIdx) / 2);
  if (arr[mid] === val) {
    return mid
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, 0, mid)
  } else {
    return binarySearch(arr, val, mid, arr.length)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
