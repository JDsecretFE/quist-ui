# remove-array-items

remove items from a javascript array without generating memory garbage.

[![Build Status](https://travis-ci.org/mreinstein/remove-array-items.svg?branch=master)](https://travis-ci.org/mreinstein/remove-array-items)

Despite there being a number of "remove array items" in npm, I couldn't find satisfying all criteria:

* **doesn't generate garbage**
* **performs similar or better to the native `array.splice`**
* has tests
* es3+ compatible

so here we are.

originally inspired by https://gamealchemist.wordpress.com/2013/05/01/lets-get-those-javascript-arrays-to-work-fast/

(which is a gold mine for performant, non-garbage generating array operations by the way.)


## api

```javascript
removeItems(arr, startIdx, removeCount)
```


## usage

```javascript
const removeItems = require('remove-array-items')

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

removeItems(arr, 3, 4)  // after running, arr === [ 1, 2, 3, 8, 9 ]
```
