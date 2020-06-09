const MIN_ARRAY_SIZE = 4

const __getNormalizedArraySize = (size = MIN_ARRAY_SIZE, minSize = MIN_ARRAY_SIZE) =>
    size > minSize ? size : minSize

const __emptyArray = (size = MIN_ARRAY_SIZE) =>
    Array(__getNormalizedArraySize(size))

const bulkFunction = (operation, list, initialValue) =>
    list.reduce(operation, initialValue)

const getRandomPositiveNumber = (limit = 10) =>
    (Math.floor(Math.random() * limit) + 1)

const getRandomNegativeNumber = (limit = 10) =>
    (getRandomPositiveNumber(limit) * - 1)

const getRandomPositiveArray = (limit = 10, size = MIN_ARRAY_SIZE) =>
    Array.from(__emptyArray(size), _ => getRandomPositiveNumber(limit))

const getRandomNegativeArray = (limit = 10, size = MIN_ARRAY_SIZE) =>
    Array.from(__emptyArray(size), _ => getRandomNegativeNumber(limit))

const getRandomMixedArray = (limit = 10, size = MIN_ARRAY_SIZE) =>
    Array.from(__emptyArray(size), (_,index) =>
        ((index*limit) % 3 === 0) ?
            getRandomPositiveNumber(limit) :
            getRandomNegativeNumber(limit))

const generateIntegerArray = (init = 0, end = 1) =>
    Array.from(Array(Math.abs(end - init) + 1), (_, index) => init + index)

export {
    __getNormalizedArraySize,
    __emptyArray,
    bulkFunction,
    getRandomPositiveNumber,
    getRandomNegativeNumber,
    getRandomPositiveArray,
    getRandomNegativeArray,
    getRandomMixedArray,
    generateIntegerArray
}
