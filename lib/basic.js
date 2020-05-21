import { bulkFunction } from './utils.js'

const add = (addend1, addend2) =>
    addend1 + addend2

const sum = (...parts) =>
    bulkFunction(add, parts, 0)

const sub = (minuend, subtrahend) =>
    minuend - subtrahend

const diff = (...parts) =>
    bulkFunction(sub, parts, 0)

export {
    add,
    sum,
    sub,
    diff
}
