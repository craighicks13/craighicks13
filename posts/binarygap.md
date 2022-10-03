---
title: 'BinaryGap'
date: '2022-09-23'
preview: 'Find longest sequence of zeros in binary representation of an integer.'
---

**Problem:** A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N. Write an efficient algorithm that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

**Solution:**

First i take the number and turn it to a binary string.

```js
let binary = (N >>> 0).toString(2);
```

Then I want turn the string into an array by splitting it using 1 as an identifier so I get the strings of zeros or empty strings.

```js
let zeros = binary.split('1');
```

Let's set up the length variable that we will update with the length of the longest string of zeros and create the loop to check each item in the zeros array.

```js
let longest = 0;
zeros.forEach((item, index) => {});
```

I then created a condition that would make sure the index was less than the length of the zeros array minus 1. I did this because the last item of the array is either an empty array or it wasn't a string of zeros surrounded by a 1. I could have also achieved this by just popping off the last item of the array before looping through them.

Then, I want to see if the length of the string is longer than _longest_ and if it is, set that length to _longest_. Once the loop is completed _longest_ should represent the length of the longest sequence of consecutive zeros in the binary of a number.

```js
zeros.forEach((item, index) => {
	if (index < zeros.length - 1)
		longest = item.length > longest ? item.length : longest;
});
```

The final function looked like this. This solution got an 100% Total Score.

```js
function solution(N) {
	let binary = (N >>> 0).toString(2);
	let zeros = binary.split('1');
	let longest = 0;

	zeros.forEach((item, index) => {
		if (index < zeros.length - 1)
			longest = item.length > longest ? item.length : longest;
	});

	return longest;
}
```

I'm sure there are many other solutions but this one got the job done!!

On to the next.
