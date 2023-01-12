const nums = [1, 2, 3, 4, 5];

let i = 0;

let sum = 0;

while (i < nums.length) {
  sum += nums[i];
  i++;
}

const sum1 = (array, index) => {
  if (index === array.length - 1) {
    return array[array.length - 1];
  }
  return array[index] + sum(array, index + 1);
};

const result = sum1(nums, 0);

console.log(result);

const counter = (number) => {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
};

counter(20);

const counter2 = (number) => {
  console.log(number);
  if (number === 0) return;
  counter2(number - 1);
};

counter2(5);
