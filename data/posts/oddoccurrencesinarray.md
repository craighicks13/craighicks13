---
title: 'OddOccurrencesInArray'
date: '2022-09-23'
preview: 'Find value that occurs in odd number of elements.'
---

**Problem:** A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired. Find that odd element.

**Solution:**

I created an object where I would add each number as a key and increment the value for each time it was in the array. As I looped through the array, if the indexed number was already in my object, I increment the value by one. If it's not in there then I set the value to one

```js
const dictionary = {};
for (var i = 0; i < A.length; i++) {
	dictionary[A[i]] = ++dictionary[A[i]] || 1;
}
```

I then loop through each item in my object and apply the modulous of 2 to each. Every paired item will return a remainder of 0 except for the one number that isn't paired. I then return that number.

```js
for (var x in dictionary) {
	if (dictionary[x] % 2 != 0) return parseInt(x);
}
```

I liked this method because it doesn't matter if a digit is in there 1 or 99 times, it just cares if it's in there an even or odd amount of times.

The final function looked like this. This solution got an 100% Total Score.

```js
function solution(A) {
	const dictionary = {};
	for (var i = 0; i < A.length; i++) {
		dictionary[A[i]] = ++dictionary[A[i]] || 1;
	}

	for (var x in dictionary) {
		if (dictionary[x] % 2 != 0) return parseInt(x);
	}
	return 0;
}
```

On to the next.
