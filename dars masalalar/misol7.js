let nums = "4678129";
let num_arr = nums.split("");
let max = nums[0];
let min = nums[0];
for (let i = 0; i < num_arr.length; i++) {
  if (num_arr[i] > max) {
    max = num_arr[i];
  }
  if (num_arr[i] < min) {
    min = num_arr[i];
  }
}
console.log(max);
console.log(min);
