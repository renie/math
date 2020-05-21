# Math project [![Build Status](https://travis-ci.org/renie/math.svg?branch=master)](https://travis-ci.org/renie/math) [![Coverage Status](https://coveralls.io/repos/github/renie/math/badge.svg?branch=master)](https://coveralls.io/github/renie/math?branch=master)

## Usage

### Basic
#### add()

##### Receives
```
add(x, y)
```
Where **x** and **y** are numbers

##### Returns
A number corresponding to the answer

##### Examples
```
add(1,2)
// 3
```
```
add(8,-2)
// 6
```

#### sum()

##### Receives
```
sum(...addends)
```
Where **addends** is a numeric array of any size

##### Returns
A number corresponding to the sum of all addends

##### Examples
```
sum(1,2,3,4)
// 10
```
```
sum(1, -8, 10, 15, -17)
// 1
```

#### sub()

##### Receives
```
sub(x, y)
```
Where **x** and **y** are numbers

##### Returns
A number corresponding to the answer

##### Examples
```
sub(1,2)
// -1
```
```
sub(-8,-2)
// -6
```

#### diff()

##### Receives
```
diff(...parts)
```
Where **parts** is a numeric array of any size

##### Returns
A number corresponding to the difference of all parts, from left to right

##### Examples
```
diff(1,2,3,4)
// -8
```
```
diff(1, -8, 10, 15, -17)
// 1
```


### Utils
#### bulkFunction()

##### Receives
```
bulkFunction(list, fn, initialValue)
```
Where **list** is an array, **fn** a function, and **initialValue** a mixed type

##### Returns
Return the result of a reduce method applied to your *list* with your *function*. Using *initialValue* to begin reducing.

##### Examples
```
bulkFunction([1,2], (acc, item) => acc + item, 0)
// 3
```

#### getRandomPositiveNumber()
```
getRandomPositiveNumber(limit)
```
Where **limit** is an integer. *Default value for limit is 10*.

##### Returns
Return a random number with max value set as parameter.

##### Examples
```
getRandomPositiveNumber()
```

#### getRandomNegativeNumber()
```
getRandomNegativeNumber(limit)
```
Where **limit** is an integer. *Default value for limit is -10*.

##### Returns
Return a random number with max value set as parameter.

##### Examples
```
getRandomNegativeNumber()
```

#### getRandomPositiveArray()
```
getRandomPositiveArray(limit, size)
```
Where **limit** and **size** are integers. *Default value for limit is 10, and for size is 4*.

##### Returns
Return an array, with required **size**, where every content item is a positive number lower than **limit**.

##### Examples
```
getRandomPositiveArray()
```

#### getRandomNegativeArray()
```
getRandomNegativeArray(limit, size)
```
Where **limit** and **size** are integers. *Default value for limit is -10, and for size is 4*.

##### Returns
Return an array, with required **size**, where every content item is a negative number lower than **limit**.

##### Examples
```
getRandomNegativeArray()
```

#### getRandomMixedArray()
```
getRandomMixedArray(limit, size)
```
Where **limit** and **size** are integers. *Default value for limit is -10/10, and for size is 4*.

##### Returns
Return an array, with required **size**, where every content item is an any signal number lower than **limit**.

##### Examples
```
getRandomMixedArray()
```


## Test
```
npm test
```
