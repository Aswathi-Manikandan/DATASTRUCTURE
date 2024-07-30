//  Find the first occurance

const arr=[20,5,6,41,20,41]
const target = 41
function occurance(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
console.log(occurance(arr,target));

// // last occurance 
// for (let i = arr.length - 1; i >= 0; i--) 



// count the occurance

const nums = [20,8,6,20,7]
const target1 = 8
let count=0
function counting(nums,target1){
    for(let i=0;i<arr.length;i++){
        if(nums[i]===target1){
            count++
        }
    }
    return count
}
console.log(counting(nums,target1));


//Maximum value
const nums1 = [20, 55, 87, 10];

function maximum(nums1) {
    return Math.max(...nums1);
}

console.log(maximum(nums1)); 


//minimum value

const nums2 = [20, 55, 87, 2];

function minimum(nums2) {
    return Math.min(...nums2);
}

console.log(minimum(nums2)); 

// RECURSION-LINEAR SEARCH
function linearSearchRecursive(arr, target, i = 0) {
    if (i >= arr.length) {
        return -1;
    }
    if (arr[i] === target) {
        return i;
    }
    return linearSearchRecursive(arr, target, i + 1);
}
console.log(linearSearchRecursive([5, 4, 10, 8, 7], 10)); // 2
console.log(linearSearchRecursive([5, 4, 10, 8, 7], 7));  // 4 
console.log(linearSearchRecursive([5, 4, 10, 8, 7], 4));  // 1  