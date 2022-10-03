---
title: 'MissingInteger'
date: '2022-09-23'
preview: 'Find the smallest positive integer that does not occur in a given sequence.'
---

**Problem:** Write a function that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

**Solution:**

If there is no array or the array has no length, we'll return 0.

```js
if (!A || !A.length) return 0;
```

Then I sorted the array from smallest to largest.

```js
A.sort((a, b) => a - b);
```

Then I created a new _Set_ and add each positive integer to the _Set_ so I can have a collection without duplicate numbers.

```js
let p = new Set();
A.forEach(function (value) {
	if (value > 0) p.add(value);
});
```

Then if the set doesn't have a size, I return 1 since it is the first postive integer missing.

```js
if (!p.size) return 1;
```

I then loop through the set (starting with 1 to the size of the set) checking if the index number exists in the set. If it doesn't, I return that number as the smallest positive integer. If the loop completes without returning anything, I then return the set size plus one as the smallest integer.

```js
for (i = 1; i <= p.size; i++) {
	if (!p.has(i)) return i;
}

return p.size + 1;
```

Here is the completed function that satisfied the solution scoring 100%.

```js
function solution(A) {
	if (!A || !A.length) return 0;

	A.sort((a, b) => a - b);

	let p = new Set();
	A.forEach(function (value) {
		if (value > 0) p.add(value);
	});

	if (!p.size) return 1;

	for (i = 1; i <= p.size; i++) {
		if (!p.has(i)) return i;
	}

	return p.size + 1;
}
```

Again, I'm sure there are many other possibilities but this worked for me.
