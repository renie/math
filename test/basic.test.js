import assert from 'assert'

import {
    getRandomPositiveNumber,
    getRandomNegativeNumber,
    getRandomPositiveArray,
    getRandomNegativeArray,
    getRandomMixedArray } from './utils.js'
import {
    add,
    sum,
    sub,
    diff,
    multiply,
    product } from '../lib/basic.js'



describe('Basic', function() {

    describe('add()', function() {

        it('Simple result with positive numbers: ', function() {
            const addend1 = getRandomPositiveNumber(100)
            const addend2 = getRandomPositiveNumber(100)

            this.test.title += (`(addend1, addend2) => (${addend1}, ${addend2})`)
            assert.equal(add(addend1, addend2), addend1+addend2)
        })

        it('Simple result with negative numbers: ', function() {
            const addend1 = getRandomNegativeNumber(100)
            const addend2 = getRandomNegativeNumber(100)

            this.test.title += (`(addend1, addend2) => (${addend1}, ${addend2})`)
            assert.equal(add(addend1, addend2), addend1+addend2)
        })

        it('Simple result with mixed signal numbers: ', function() {
            const addend1 = getRandomPositiveNumber(100)
            const addend2 = getRandomNegativeNumber(100)

            this.test.title += (`(addend1, addend2) => (${addend1}, ${addend2})`)
            assert.equal(add(addend1, addend2), addend1+addend2)
        })

        it('Commutative property: ', function() {
            const addend1 = getRandomPositiveNumber(100)
            const addend2 = getRandomPositiveNumber(100)

            this.test.title += (`(addend1, addend2) => (${addend1}, ${addend2})`)
            assert.equal(add(addend1, addend2), add(addend2, addend1))
        })

        it('Additive Identity property: ', function() {
            const addend = getRandomPositiveNumber(100)

            this.test.title += `(addend) => (${addend})`
            assert.equal(add(addend, 0), addend)
        })

        it('Distributive property: ', function() {
            const multiplier = getRandomPositiveNumber(100)
            const addend1 = getRandomPositiveNumber(100)
            const addend2 = getRandomPositiveNumber(100)

            const result1 = add(addend1, addend2) * multiplier
            const result2 = add((addend1 * multiplier), (addend2 * multiplier))

            this.test.title += `(multiplier, addend1, addend2) => (${multiplier}, ${addend1}, ${addend2})`
            assert.equal(result1, result2)
        })

    })

    describe('sum()', function() {

        it('Simple result with x positive numbers', function() {
            const size = getRandomPositiveNumber(20)
            const addends = getRandomPositiveArray(100, size)
            const result = addends.reduce((acc, number) => number + acc, 0)

            this.test.title = this.test.title.replace('x', size)
            this.test.title += `(addends) => (${addends})`
            assert.equal(sum(...addends), result)
        })

        it('Simple result with x negative numbers', function() {
            const size = getRandomPositiveNumber(20)
            const addends = getRandomNegativeArray(100, size)
            const result = addends.reduce((acc, number) => number + acc, 0)

            this.test.title = this.test.title.replace('x', size)
            this.test.title += `(addends) => (${addends})`
            assert.equal(sum(...addends), result)
        })

        it('Simple result with x mixed signal numbers', function() {
            const size = getRandomPositiveNumber(20)
            const addends = getRandomMixedArray(100, size)
            const result = addends.reduce((acc, number) => number + acc, 0)

            this.test.title = this.test.title.replace('x', size)
            this.test.title += `(addends) => (${addends})`
            assert.equal(sum(...addends), result)
        })

    })

    describe('sub()', function() {

        it('Simple result with positive numbers: ', function() {
            const minuend = getRandomPositiveNumber(100)
            const subtrahend = getRandomPositiveNumber(100)

            this.test.title += (`(minuend, subtrahend) => (${minuend}, ${subtrahend})`)
            assert.equal(sub(minuend, subtrahend), minuend-subtrahend)
        })

        it('Simple result with negative numbers: ', function() {
            const minuend = getRandomNegativeNumber(100)
            const subtrahend = getRandomNegativeNumber(100)

            this.test.title += (`(minuend, subtrahend) => (${minuend}, ${subtrahend})`)
            assert.equal(sub(minuend, subtrahend), minuend-subtrahend)
        })

        it('Simple result with mixed signal numbers: ', function() {
            const minuend = getRandomPositiveNumber(100)
            const subtrahend = getRandomNegativeNumber(100)

            this.test.title += (`(minuend, subtrahend) => (${minuend}, ${subtrahend})`)
            assert.equal(sub(minuend, subtrahend), minuend-subtrahend)
        })

        it('Commutative property: ', function() {
            const minuend = getRandomPositiveNumber(100)
            const subtrahend = getRandomPositiveNumber(100)

            this.test.title += (`(minuend, subtrahend) => (${minuend}, ${subtrahend})`)
            assert.notEqual(sub(minuend, subtrahend), sub(subtrahend, minuend))
        })

        it('Subtractive Identity property: ', function() {
            const minuend = getRandomPositiveNumber(100)

            this.test.title += `(minuend) => (${minuend})`
            assert.equal(sub(minuend, 0), minuend)
        })

        it('Distributive property: ', function() {
            const multiplier = getRandomPositiveNumber(100)
            const minuend = getRandomPositiveNumber(100)
            const subtrahend = getRandomPositiveNumber(100)

            const result1 = sub(minuend, subtrahend) * multiplier
            const result2 = sub((minuend * multiplier), (subtrahend * multiplier))

            this.test.title += `(multiplier, minuend, subtrahend) => (${multiplier}, ${minuend}, ${subtrahend})`
            assert.equal(result1, result2)
        })

    })

    describe('difference()', function() {

        it('Simple result with x positive numbers', function() {
            const size = getRandomPositiveNumber(20)
            const parts = getRandomPositiveArray(100, size)
            const result = parts.reduce((acc, number) => acc - number, 0)

            this.test.title = this.test.title.replace('x', size)
            this.test.title += `(parts) => (${parts})`
            assert.equal(diff(...parts), result)
        })

        it('Simple result with x negative numbers', function() {
            const size = getRandomPositiveNumber(20)
            const parts = getRandomNegativeArray(100, size)
            const result = parts.reduce((acc, number) => acc - number, 0)

            this.test.title = this.test.title.replace('x', size)
            this.test.title += `(parts) => (${parts})`
            assert.equal(diff(...parts), result)
        })

        it('Simple result with x mixed signal numbers', function() {
            const size = getRandomPositiveNumber(20)
            const parts = getRandomMixedArray(100, size)
            const result = parts.reduce((acc, number) => acc - number, 0)

            this.test.title = this.test.title.replace('x', size)
            this.test.title += `(parts) => (${parts})`
            assert.equal(diff(...parts), result)
        })

    })

    describe('multiply()', function() {

        it('Simple result with positive numbers: ', function() {
            const multiplicand = getRandomPositiveNumber(100)
            const multiplier = getRandomPositiveNumber(100)

            this.test.title += (`(multiplicand, multiplier) => (${multiplicand}, ${multiplier})`)
            assert.equal(multiply(multiplicand, multiplier), multiplicand*multiplier)
        })

        it('Simple result with negative numbers: ', function() {
            const multiplicand = getRandomNegativeNumber(100)
            const multiplier = getRandomNegativeNumber(100)

            this.test.title += (`(multiplicand, multiplier) => (${multiplicand}, ${multiplier})`)
            assert.equal(multiply(multiplicand, multiplier), multiplicand*multiplier)
        })

        it('Simple result with mixed signal numbers: ', function() {
            const multiplicand = getRandomPositiveNumber(100)
            const multiplier = getRandomNegativeNumber(100)

            this.test.title += (`(multiplicand, multiplier) => (${multiplicand}, ${multiplier})`)
            assert.equal(multiply(multiplicand, multiplier), multiplicand*multiplier)
        })

        it('Commutative property: ', function() {
            const multiplicand = getRandomPositiveNumber(100)
            const multiplier = getRandomPositiveNumber(100)

            this.test.title += (`(multiplicand, multiplier) => (${multiplicand}, ${multiplier})`)
            assert.equal(multiply(multiplicand, multiplier), multiply(multiplier, multiplicand))
        })

        it('Subtractive Identity property: ', function() {
            const multiplicand = getRandomPositiveNumber(100)

            this.test.title += `(multiplicand) => (${multiplicand})`
            assert.equal(multiply(multiplicand, 1), multiplicand)
        })

        it('Distributive property: ', function() {
            const multiplier = getRandomPositiveNumber(100)
            const part1 = getRandomPositiveNumber(100)
            const part2 = getRandomPositiveNumber(100)

            const result1 = multiply((part1 + part2), multiplier)
            const result2 = multiply(part1, multiplier) + multiply(part2, multiplier)

            this.test.title += `(part1, part2, multiplier) => (${part1}, ${part2}, ${multiplier})`
            assert.equal(result1, result2)
        })

    })

    describe('product()', function() {

        it('Simple result with x positive numbers', function() {
            const size = getRandomPositiveNumber(20)
            const parts = getRandomPositiveArray(100, size)
            const result = parts.reduce((acc, number) => acc * number, 1)

            this.test.title = this.test.title.replace('x', size)
            this.test.title += `(parts) => (${parts})`
            assert.equal(product(...parts), result)
        })

        it('Simple result with x negative numbers', function() {
            const size = getRandomPositiveNumber(20)
            const parts = getRandomNegativeArray(100, size)
            const result = parts.reduce((acc, number) => acc * number, 1)

            this.test.title = this.test.title.replace('x', size)
            this.test.title += `(parts) => (${parts})`
            assert.equal(product(...parts), result)
        })

        it('Simple result with x mixed signal numbers', function() {
            const size = getRandomPositiveNumber(20)
            const parts = getRandomMixedArray(100, size)
            const result = parts.reduce((acc, number) => acc * number, 1)

            this.test.title = this.test.title.replace('x', size)
            this.test.title += `(parts) => (${parts})`
            assert.equal(product(...parts), result)
        })

    })
})
