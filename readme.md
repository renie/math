# Math functional [![Build Status](https://travis-ci.org/renie/math.svg?branch=master)](https://travis-ci.org/renie/math) [![Coverage Status](https://coveralls.io/repos/github/renie/math/badge.svg?branch=master)](https://coveralls.io/github/renie/math?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/98e600d0587c506b17b6/maintainability)](https://codeclimate.com/github/renie/math/maintainability)

Just a project to abstract math functions from basic to I-don't-know-where.

## Usage

### Basic
#### Operations
##### add()

###### Receives
```
add(x, y)
```
Where **x** and **y** are numbers

###### Returns
A number corresponding to the answer

###### Examples
```
add(1,2)
// 3
```
```
add(8,-2)
// 6
```

##### sum()

###### Receives
```
sum(...addends)
```
Where **addends** is a numeric array of any size

###### Returns
A number corresponding to the sum of all addends

###### Examples
```
sum(1,2,3,4)
// 10
```
```
sum(1, -8, 10, 15, -17)
// 1
```

##### sub()

###### Receives
```
sub(x, y)
```
Where **x** and **y** are numbers

###### Returns
A number corresponding to the answer

###### Examples
```
sub(1,2)
// -1
```
```
sub(-8,-2)
// -6
```

##### diff()

###### Receives
```
diff(...parts)
```
Where **parts** is a numeric array of any size

###### Returns
A number corresponding to the difference of all parts, from left to right

###### Examples
```
diff(1,2,3,4)
// -8
```
```
diff(1, -8, 10, 15, -17)
// 1
```

##### multiply()

###### Receives
```
multiply(x, y)
```
Where **x** and **y** are numbers

###### Returns
A number corresponding to the answer

###### Examples
```
multiply(1,2)
// 2
```
```
multiply(2,-2)
// 4
```

##### product()

###### Receives
```
product(...parts)
```
Where **parts** is a numeric array of any size

###### Returns
A number corresponding to the multiplication of all parts

###### Examples
```
product(1,2,3,4)
// 24
```
```
product(1, -8, 10, 15, -17)
// 20400
```

##### divide()

###### Receives
```
divide(x, y)
```
Where **x** and **y** are numbers

###### Returns
A number corresponding to the answer

###### Examples
```
divide(4,2)
// 2
```
```
divide(15,3)
// 5
```

##### quotient()

###### Receives
```
quotient(...parts)
```
Where **parts** is a numeric array of any size

###### Returns
A number corresponding to the division of all parts, from left to right

###### Examples
```
quotient(1,2,3,4)
// 0,041666667
```
```
quotient(1, -8, 10, 15, -17)
// 0,00004902
```

#### Parity
##### isOdd()

###### Receives
```
isOdd(x)
```
Where **x** is a number

###### Returns
Boolean value indicating that number is odd or not

###### Examples
```
isOdd(5)
// true
```
```
isOdd(2)
// false
```

##### isEven()

###### Receives
```
isEven(x)
```
Where **x** is a number

###### Returns
Boolean value indicating that number as Even or not

###### Examples
```
isEven(5)
// false
```
```
isEven(2)
// true
```

### Algebra
#### Primality
##### getRelevantPossibleDivisors()

###### Receives
```
getRelevantPossibleDivisors(x)
```
Where **x** is a number

###### Returns
An array of every relevant divisors, for prime calculation, for **x**.
In other words, it will return an array of integers from 2 until √x

###### Examples
```
getRelevantPossibleDivisors(9)
// [2,3]
```
```
getRelevantPossibleDivisors(8)
// [2]
```

##### isPrime()

###### Receives
```
isPrime(x)
```
Where **x** is a number

###### Returns
Boolean indicator about **x** primality

###### Examples
```
isPrime(7)
// true
```
```
isPrime(9)
// false
```


### Utils
##### bulkFunction()

###### Receives
```
bulkFunction(list, fn, initialValue)
```
Where **list** is an array, **fn** a function, and **initialValue** a mixed type

###### Returns
Return the result of a reduce method applied to your *list* with your *function*. Using *initialValue* to begin reducing.

###### Examples
```
bulkFunction([1,2], (acc, item) => acc + item, 0)
// 3
```

##### getRandomPositiveNumber()
```
getRandomPositiveNumber(limit)
```
Where **limit** is an integer. *Default value for limit is 10*.

###### Returns
Return a random number with max value set as parameter.

###### Examples
```
getRandomPositiveNumber()
```

##### getRandomNegativeNumber()
```
getRandomNegativeNumber(limit)
```
Where **limit** is an integer. *Default value for limit is -10*.

###### Returns
Return a random number with max value set as parameter.

###### Examples
```
getRandomNegativeNumber()
```

##### getRandomPositiveArray()
```
getRandomPositiveArray(limit, size)
```
Where **limit** and **size** are integers. *Default value for limit is 10, and for size is 4*.

###### Returns
Return an array, with required **size**, where every content item is a positive number lower than **limit**.

###### Examples
```
getRandomPositiveArray()
```

##### getRandomNegativeArray()
```
getRandomNegativeArray(limit, size)
```
Where **limit** and **size** are integers. *Default value for limit is -10, and for size is 4*.

###### Returns
Return an array, with required **size**, where every content item is a negative number lower than **limit**.

###### Examples
```
getRandomNegativeArray()
```

##### getRandomMixedArray()
```
getRandomMixedArray(limit, size)
```
Where **limit** and **size** are integers. *Default value for limit is -10/10, and for size is 4*.

###### Returns
Return an array, with required **size**, where every content item is an any signal number lower than **limit**.

###### Examples
```
getRandomMixedArray()
```

##### generateIntegerArray()
```
generateIntegerArray(initialValue, finalValue)
```
Where **initialValue** and **finalValue** are integers. *Default value for initialValue is 0, and for finalValue is 1*.

###### Returns
Return an array of integers, beggining on **initialValue** and finishing on **finalValue**

###### Examples
```
generateIntegerArray()
// [0-1]
```
```
generateIntegerArray(5,9)
// [5,6,7,8,9]
```


## Test
```
npm test
```

#### To check tests coverage
```
npm run coverage-text
```
