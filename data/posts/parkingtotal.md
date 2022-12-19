---
title: 'ParkingBill'
date: '2022-09-23'
preview: 'Given two strings representing times of entry and exit from a car parking lot, find the cost of the ticket according to the given billing rules.'
---

**Problem:** You parked your car in a parking lot and want to compute the total cost of the ticket. The billing rules are as follows:

- The entrance fee of the car parking lot is 2;
- The first full or partial hour costs 3;
- Each successive full or partial hour (after the first) costs 4.

You entered the car parking lot at time E and left at time L. In this task, times are represented as strings in the format "HH:MM" (where "HH" is a two-digit number between 0 and 23, which stands for hours, and "MM" is a two-digit number between 0 and 59, which stands for minutes).

**Solution:**

I created the variables I needed initially. Set the cost equal to 2 since that's the base cost of entering the parking lot. Also, created date variables for both entry and exit for comparison.

```js
let cost = 2;
let entry = new Date();
let exit = new Date();
```

Then I want to take the time values sent for each and split to hours and minutes then apply them to the date variables.

```js
let et = E.split(':');
let xt = L.split(':');

entry.setHours(et[0], et[1]);
exit.setHours(xt[0], xt[1]);
```

Then I want to get the difference by subracting the exit time by the entrance time which will return the difference in milliseconds. So then I divide that by 1000 to get the difference in seconds, then again by 60 to get the difference in minutes, and finally by 60 again to get the difference in hours.

```js
let time = (exit.getTime() - entry.getTime()) / 1000 / 60 / 60;
```

Now, if there is no time difference, I'll just return the cost which at this point is just 2 dollars.

```js
if (time <= 0) return cost;
```

Because the first hour is only 3 dollars, I'll add 3 and remove an hour from the time. Then I'll times the remainder of the time by 4 making sure to round up the time to the next full hour.

```js
cost += 3 + 4 * Math.ceil(time - 1);
```

Now that I have the cost, I just return that and presto. The final function looked like this. This solution got an 100% Total Score.

```js
function solution(E, L) {
	let cost = 2;
	let entry = new Date();
	let exit = new Date();

	let et = E.split(':');
	let xt = L.split(':');

	entry.setHours(et[0], et[1]);
	exit.setHours(xt[0], xt[1]);

	let time = (exit.getTime() - entry.getTime()) / 1000 / 60 / 60;

	if (time <= 0) return cost;

	cost += 3 + 4 * Math.ceil(time - 1);

	return cost;
}
```

I'm sure there are many other solutions but this one got the job done!!

On to the next.
