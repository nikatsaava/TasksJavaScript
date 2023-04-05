// ----==== JS School - Lecture 4 HW ====---- 

/**
 * Ð¡riteria for assessment
 * 
 * 5 - All tasks are correctly solved (23 items), the code is clean, the solutions are optimal;
 * 4 - Correctly solved all the tasks of the base block (15 tasks), the code is clean;
 * 3 - At least 10 problems are correctly solved, the code is clean;
 * 2 - Correctly solved at least 10 problems;
 * 1 - At least 5 problems solved correctly.
 */

/**
 * Warning
 * 
 * Do not rename function names or change arguments.
 */

// ----==== Basic exercises (15 items) ====---- 
/**
  * Exercise 1
  *
  * Write a function that returns odd array values.
  * [1,2,3,4] => [1,3]
  */
const getOddValues = numbers => {

  let odd = numbers.filter(value => value % 2 !== 0)
  console.log(odd)
};

// getOddValues([1, 2, 3, 4])
/**
  * Exercise 2
  *
  * Write a function that returns the smallest value of an array
  * [4,2,10,27] => 2
  */
const getSmallestValue = numbers => {
  let sortValue = numbers.sort((a, b) => a - b)
  let smallest = sortValue[0]
  console.log(smallest)
};
// getSmallestValue([4, 2, 102, 123, 123, 3, 124, 25, 1, 27])
/**
  * Exercise 3
  *
  * Write a function that returns the biggest value of an array
  * [5,22,9,43] => 43
  */
const getBiggestValue = numbers => {
  let sortValue = numbers.sort((a, b) => a - b)
  let biggest = sortValue[numbers.length - 1]
  console.log(biggest)
};

// getBiggestValue([5, 22, 9, 43])

/**
  * Exercise 4
  *
  * Write a function that takes an array of strings as input
  * and returns only those shorter than 20 characters
  *
  [
   'I am a short string',
   'I seem to be short too',
   'And I am a long string'
  ] => [
  * 'I am a short string',
  *]
  *
  * Use: filter
  */

const strings = [
  'I am a short string',
  'I seem to be short too',
  'And I am a long string'
]
const getShorterStrings = (strings, characters = 20) => {
  let smallestSting = strings.filter((string) => {
    if (string.length < characters) {
      return string
    }
  })

  console.log(smallestSting)
};
// getShorterStrings(strings)




/**
  * Exercise 5
  *
  * Write a function that takes the following data as input:
  *
  *[
    { name: 'shark', likes: 'ocean' },
  { name: 'turtle', likes: 'pond' },
  { name: 'otter', likes: 'fish biscuits' }
  ]
  *
  * And returns an array of strings:
  *
  * [ 'shark likes ocean', 'turtle likes pond', 'otter likes fish biscuits' ]
  *
  * Use: map
  */

const fish = [
  { name: 'shark', likes: 'ocean' },
  { name: 'turtle', likes: 'pond' },
  { name: 'otter', likes: 'fish biscuits' }
]

const getComputedStrings = fish => {
  let fishString = fish.map((fisher) => {
    return `${fisher.name} likes ${fisher.likes}`
  })

  console.log(fishString)
};

// getComputedStrings(fish)
/**
  * Exercise 6
  *
  * Write a function that takes 2 objects as input and returns 1 with  
  * common properties. If properties have the same keys use the latter.
  *
  * [{ name: 'Alice' }, { age: 11 }] => { name: 'Alice', age: 11 }
  *
  * We use: ...
  */

const objects = [{ name: 'Alice' }, { age: 11 }]
const mergeObjects = objects => {
  const newObject = Object.assign({}, ...objects)
  console.log(newObject)
};
// mergeObjects(objects)
/**
  * Exercise 7
  *
  * Write a function that returns the smallest value of an array
  * [5,200,-5,41] => -5
  *
  * Use: operator ... and Math.min
  */

const numbers1 = [5, 200, -5, 41, -6, -7, 22]
const getSmallestValue2 = numbers1 => {
  console.log(Math.min(...numbers1))

};
// getSmallestValue2(numbers)
/**
  * Exercise 8
  *
  * Write a function that returns odd array values.
  * [77,2,30,51] => [77,51]
  *
  * Use: reduce
  */

const numbers2 = [77, 2, 30, 51]
const getOddValues2 = numbers2 => {
  const value = numbers2.reduce((acc, value) => {
    if (value % 2 === 1) {
      acc.push(value)
    }
    return acc
  }, [])
  console.log(value)
};
// getOddValues2(numbers2)

/**
  * Exercise 9
  *
  * Write a function that accepts data from the basket as input in the following form:
  *
  [
   {price: 10, count: 2},
   {price: 100, count: 1},
   {price: 2, count: 5},
   {price: 15, count: 6},
  ]
  * where price is the price of the item and count is the quantity.
  *
  * The function should return the total price for this order.
  *
  * Use: reduce
  */

const products = [
  { price: 10, count: 2 },
  { price: 100, count: 1 },
  { price: 2, count: 5 },
  { price: 15, count: 6 },
];

const calculateTotal = products => {
  const fullPrice = products.reduce((acc, value) => {
    return acc = acc + (value.price * value.count)
  }, 0)
  console.log(fullPrice)
};
// calculateTotal(products)
/**
  * Exercise 10
  *
  * Implement a function that has an array of numbers as input and an array of unique values as output
  * [1, 2, 2, 4, 5, 5] => [1, 2, 4, 5]
  *
  * Use: reduce and indexOf
  */
const numbers3 = [1, 2, 2, 4, 5, 5]
const getUniqueValues = numbers3 => {
  const unique = numbers3.reduce((acc, value) => {
    if (acc.indexOf(value) === -1)
      acc.push(value)
    return acc
  }, [])
  console.log(unique)
};
// getUniqueValues(numbers3)
/**
  * Exercise 11
  *
  * Implement a function whose input is a numeric code of an error, the output is a string with a message
  * 500 => Server Error
  * 401 => Authorization failed
  * 402 => Server Error
  * 403 => Access denied
  * 404 => Not found
  *
  * Use: switch case or object like a map structure
  */
const getErrorMessage = code => {
  switch (code) {
    case 500:
      console.log('Server Error');
      break
    case 401:
      console.log('Authorization failed')
      break
    case 402:
      console.log('Server Error')
      break
    case 403:
      console.log('Access denied')
      break
    case 404:
      console.log('Not found')
      break
    default: console.log('Havnt this error')

  }
};
// getErrorMessage(300)
/**
  * Exercise 12
  *
  * Write a function that returns the 2 smallest values of an array
  * [4,3,2,1] => [1,2]
  *
  * Use: .sort()
  */

const numbers4 = [4, 3, 2, 1]
const get2SmallestValues = numbers4 => {
  const sortValue = numbers4.sort((a, b) => a - b)
  const smallest = sortValue.slice(0, 2)
  console.log(smallest)
};
// get2SmallestValues(numbers4)
/**
  * Exercise 13
  *
  * Implement a function, at the input of which an object of the following form:
  * {
  * firstName: 'Peter',
  * secondName: 'Vasiliev',
  * patronymic: 'Ivanovich'
  *}
  * output line with the message 'Name: Petr Ivanovich Vasiliev'
  */

  const user =  {
    firstName: 'Peter',
    secondName: 'Vasiliev',
    patronymic: 'Ivanovich'
    }
const getFullName = user => {
  console.log( `'Name: ${user.firstName} ${user.secondName} ${user.patronymic}'`)
};

// getFullName(user)
/**
  * Exercise 14
  *
  * Implement a function that takes 2 arguments as input: an array of numbers and a multiplier,
  * a returns an array of the original array, each element of which has been multiplied by a factor:
  *
  * [1,2,3,4], 5 => [5,10,15,20]
  *
  * Use: map
  */

const numbers5 = [1, 2, 3, 4];
const multiplyTo = (numbers5, multiplier) => {
  const mltiply = numbers5.map((value) => {
    return value * multiplier
  })
  console.log(mltiply)
};
// multiplyTo(numbers5, 5)
/**
  * Exercise 15
  *
  * Implement a function that takes 2 arguments as input: an array and a franchise,
  * and returns a string with the names of the heroes separated by a comma:
  *
  *[
  * {name: "Batman", franchise: "DC"},
  * {name: "Ironman", franchise: "Marvel"},
  * {name: "Thor", franchise: "Marvel"},
  * {name: "Superman", franchise: "DC"}
  *],
  * Marvel
  * => Ironman, Thor
  *
  * Use: filter, map, join
  */

const characters = [
   {name: "Batman", franchise: "DC"},
   {name: "Ironman", franchise: "Marvel"},
   {name: "Thor", franchise: "Marvel"},
   {name: "Superman", franchise: "DC"}
  ]
const getharacterNames = (characters, franchise) => {
  let heroObj = characters.filter((hero) => {
    return hero.franchise === franchise
  }).map((hero)=>hero.name).join()
  console.log(heroObj)
};

// getharacterNames(characters, "Marvel")


// ----==== Advanced exercises (8 items) ====----
/**
  * Exercise 16
  *
  * Write a function that returns an array of the smallest row values of a two-dimensional array
  *[
  * [10,1,300,4],
  * [20,2,300,400],
  * [30,3,300,4],
  * [40,4,300,4],
  *]
  * => [1,2,3,4]
  */
const getSmallestRow = numbers => {

};
/**
* Exercise 17
*
* Write a function that returns an array of the smallest column values of a two-dimensional array
[
 [1,2,3,4],
 [1,2,3,4],
 [1,2,30,4],
 [1,2,3,40],
]
* => [1,2,3,4]
*/

const numbers8 = [
  [1,2,3,4],
  [1,2,3,4],
  [1,2,30,4],
  [1,2,3,40],
 ]
const getSmallestColumn = numbers8 => {
  const smallest = numbers8.filter()
};
/**
  * Exercise 18
  *
  * Write a function that returns the 2 biggest value of an array
  * [4,3,2,1] => [4,3]
  */

const numbers6 = [4, 3, 2, 11, 24, 11, 2, 76, 4]
const get2BiggestValues = numbers6 => {
  const biggest = numbers6.sort((a, b) => a - b)
  console.log(biggest.slice((biggest.length - 2), (biggest.length)))
};
// get2BiggestValues(numbers6)
/**
  * Exercise 19
  *
  * Write a function that returns the number of vowels in a string in English
  * ( a, e, i, o, u ).
  *
  * 'Return the number (count) of vowels in the given string.' => 15
  */

const string = 'Return the number (count) of vowels in  the given string.'
const getNumberOfVowels = string => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < string.length; i++) {
    for (let k = 0; k < vowels.length; k++) {
      if (string[i].toLowerCase() === vowels[k]) {
        count++
      }
      
    }
  }


  console.log(count)
  
};

// getNumberOfVowels(string) 
/**
  * Exercise 20
  *
  * Write a function that returns an array of two strings where the first element
  * is the original string with uppercase even letters, and the second
  * with capital odd.
  * 'abcdef' => ['AbCdEf', 'aBcDeF']
  */
const getCapitalizedStrings = string => {
};
/**
  * Exercise 21
  *
  * Write a function that satisfies the following conditions:
  *
  * the function takes a string S, consisting of N letters of the English alphabet in lowercase [a-z]
  * the function returns a string that does not contain three identical letters in a row
  * the function removes the minimum number of letters from the string S
  *
  * Examples:
  * S = "eedaaad", the function returns "eedaad". One "a" has been removed.
  * S = "xxxtxxx", the function returns "xxtxx". The same letters can occur more than three times in a string, but not in a row.
  * S = "uuuuxaaaaxuuu", the function returns "uuxaaxuu".
  *
  * Assumptions:
  * N is an integer in the range [1..200,000]
  * S consists only of lowercase letters [a-z]
  */
const getCorrectString = string => {
};
/**
 * Exercise 22
 *
 * Implement a flatten function that takes an array of arbitrary nesting arrays as input
 * and returns an array of all their elements without nesting.
 * [1, 2, [3, 4], 5, [[6, 7], 8], 9] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

const numbers7 = [1, 2, [3, 4], 5, [[6, 7], 8], 9]; 
const getFlattenedArray = numbers7 => {
 
    var flattend = [];
    (function flat(numbers7) {
      numbers7.forEach(function(el) {
        if (Array.isArray(el)) flat(el);
        else flattend.push(el);
      });
    })(numbers7);
    console.log(flattend);
  
};
  
// getFlattenedArray(numbers7)
/**
* Exercise 23
*
* Implement a function that has an array of numbers as input and an array of not unique values as output.
* 
* [1, 2, 2, 4, 5, 5] => [2, 5]
*/
const getNotUniqueValues = numbers => {
  let uniqueArray = [];

  for (i = 0; i < numbers.length; i++) {
    if (uniqueArray.indexOf(numbers[i]) === -1) {
      uniqueArray.push(numbers[i]);
    }
  }
  console.log(uniqueArray)
};
// getNotUniqueValues([1, 2, 2, 4, 5, 5, 4, 1, 5, 2, 1, 5, 2, 77, 4])