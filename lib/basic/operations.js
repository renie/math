import { bulkFunction } from '../utils.js'

const add = (addend1, addend2) =>
    addend1 + addend2

const sum = (...parts) =>
    bulkFunction(add, parts, 0)

const sub = (minuend, subtrahend) =>
    minuend - subtrahend

const diff = (...parts) =>
    bulkFunction(sub, parts, 0)

const multiply = (multiplicand, multiplier) =>
    multiplicand * multiplier

const product = (...parts) =>
    bulkFunction(multiply, parts, 1)

const divide = (dividend, divisor) =>
    dividend / divisor

const quotient = (...parts) =>
    bulkFunction(divide, parts, multiply(parts[0], parts[0]))


export {
    add,
    sum,
    sub,
    diff,
    multiply,
    product,
    divide,
    quotient
}
