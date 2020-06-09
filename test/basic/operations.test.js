import assert from 'assert'

import {
    getRandomPositiveNumber,
    getRandomNegativeNumber,
    getRandomPositiveArray,
    getRandomNegativeArray,
    getRandomMixedArray } from '../utils.js'
import { operations } from '../../lib/basic/index.js'

describe('Basic', function() {

    describe('Operations', function() {

        describe('add()', function() {

            it('Simple result with positive numbers: ', function() {
                const addend1 = getRandomPositiveNumber(100)
                const addend2 = getRandomPositiveNumber(100)

                this.test.title += (`(addend1, addend2) => (${addend1}, ${addend2})`)
                assert.equal(operations.add(addend1, addend2), addend1+addend2)
                assert.equal(operations.add(addend1, addend2)-addend2, addend1)
            })

            it('Simple result with negative numbers: ', function() {
                const addend1 = getRandomNegativeNumber(100)
                const addend2 = getRandomNegativeNumber(100)

                this.test.title += (`(addend1, addend2) => (${addend1}, ${addend2})`)
                assert.equal(operations.add(addend1, addend2), addend1+addend2)
                assert.equal(operations.add(addend1, addend2)-addend2, addend1)
            })

            it('Simple result with mixed signal numbers: ', function() {
                const addend1 = getRandomPositiveNumber(100)
                const addend2 = getRandomNegativeNumber(100)

                this.test.title += (`(addend1, addend2) => (${addend1}, ${addend2})`)
                assert.equal(operations.add(addend1, addend2), addend1+addend2)
                assert.equal(operations.add(addend1, addend2)-addend2, addend1)
            })

            it('Commutative property: ', function() {
                const addend1 = getRandomPositiveNumber(100)
                const addend2 = getRandomPositiveNumber(100)

                this.test.title += (`(addend1, addend2) => (${addend1}, ${addend2})`)
                assert.equal(operations.add(addend1, addend2), operations.add(addend2, addend1))
            })

            it('Additive Identity property: ', function() {
                const addend = getRandomPositiveNumber(100)

                this.test.title += `(addend) => (${addend})`
                assert.equal(operations.add(addend, 0), addend)
                assert.equal(operations.add(addend, 0)-addend, 0)

            })

            it('Distributive property: ', function() {
                const multiplier = getRandomPositiveNumber(100)
                const addend1 = getRandomPositiveNumber(100)
                const addend2 = getRandomPositiveNumber(100)

                const result1 = operations.add(addend1, addend2) * multiplier
                const result2 = operations.add((addend1 * multiplier), (addend2 * multiplier))

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
                assert.equal(operations.sum(...addends), result)
            })

            it('Simple result with x negative numbers', function() {
                const size = getRandomPositiveNumber(20)
                const addends = getRandomNegativeArray(100, size)
                const result = addends.reduce((acc, number) => number + acc, 0)

                this.test.title = this.test.title.replace('x', size)
                this.test.title += `(addends) => (${addends})`
                assert.equal(operations.sum(...addends), result)
            })

            it('Simple result with x mixed signal numbers', function() {
                const size = getRandomPositiveNumber(20)
                const addends = getRandomMixedArray(100, size)
                const result = addends.reduce((acc, number) => number + acc, 0)

                this.test.title = this.test.title.replace('x', size)
                this.test.title += `(addends) => (${addends})`
                assert.equal(operations.sum(...addends), result)
            })

        })

        describe('sub()', function() {

            it('Simple result with positive numbers: ', function() {
                const minuend = getRandomPositiveNumber(100)
                const subtrahend = getRandomPositiveNumber(100)

                this.test.title += (`(minuend, subtrahend) => (${minuend}, ${subtrahend})`)
                assert.equal(operations.sub(minuend, subtrahend), minuend-subtrahend)
                assert.equal(operations.sub(minuend, subtrahend)+subtrahend, minuend)

            })

            it('Simple result with negative numbers: ', function() {
                const minuend = getRandomNegativeNumber(100)
                const subtrahend = getRandomNegativeNumber(100)

                this.test.title += (`(minuend, subtrahend) => (${minuend}, ${subtrahend})`)
                assert.equal(operations.sub(minuend, subtrahend), minuend-subtrahend)
                assert.equal(operations.sub(minuend, subtrahend)+subtrahend, minuend)
            })

            it('Simple result with mixed signal numbers: ', function() {
                const minuend = getRandomPositiveNumber(100)
                const subtrahend = getRandomNegativeNumber(100)

                this.test.title += (`(minuend, subtrahend) => (${minuend}, ${subtrahend})`)
                assert.equal(operations.sub(minuend, subtrahend), minuend-subtrahend)
                assert.equal(operations.sub(minuend, subtrahend)+subtrahend, minuend)
            })

            it('Simple result with mixed signal numbers: ', function() {
                const minuend = getRandomNegativeNumber(100)
                const subtrahend = getRandomPositiveNumber(100)
                
                this.test.title += (`(minuend, subtrahend) => (${minuend}, ${subtrahend})`)
                assert.equal(operations.sub(minuend, subtrahend), minuend-subtrahend)
                assert.equal(operations.sub(minuend, subtrahend)+subtrahend, minuend)
            })

            it('Commutative property: ', function() {
                const minuend = getRandomPositiveNumber(100)
                const subtrahend = getRandomPositiveNumber(100)

                this.test.title += (`(minuend, subtrahend) => (${minuend}, ${subtrahend})`)
                assert.notEqual(operations.sub(minuend, subtrahend), operations.sub(subtrahend, minuend))
            })

            it('Subtractive Identity property: ', function() {
                const minuend = getRandomPositiveNumber(100)

                this.test.title += `(minuend) => (${minuend})`
                assert.equal(operations.sub(minuend, 0), minuend)
                assert.equal(operations.sub(minuend, 0)+minuend, minuend*2)
            })

            it('Distributive property: ', function() {
                const multiplier = getRandomPositiveNumber(100)
                const minuend = getRandomPositiveNumber(100)
                const subtrahend = getRandomPositiveNumber(100)

                const result1 = operations.sub(minuend, subtrahend) * multiplier
                const result2 = operations.sub((minuend * multiplier), (subtrahend * multiplier))

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
                assert.equal(operations.diff(...parts), result)
            })

            it('Simple result with x negative numbers', function() {
                const size = getRandomPositiveNumber(20)
                const parts = getRandomNegativeArray(100, size)
                const result = parts.reduce((acc, number) => acc - number, 0)

                this.test.title = this.test.title.replace('x', size)
                this.test.title += `(parts) => (${parts})`
                assert.equal(operations.diff(...parts), result)
            })

            it('Simple result with x mixed signal numbers', function() {
                const size = getRandomPositiveNumber(20)
                const parts = getRandomMixedArray(100, size)
                const result = parts.reduce((acc, number) => acc - number, 0)

                this.test.title = this.test.title.replace('x', size)
                this.test.title += `(parts) => (${parts})`
                assert.equal(operations.diff(...parts), result)
            })

        })

        describe('multiply()', function() {

            it('Simple result with positive numbers: ', function() {
                const multiplicand = getRandomPositiveNumber(100)
                const multiplier = getRandomPositiveNumber(100)

                this.test.title += (`(multiplicand, multiplier) => (${multiplicand}, ${multiplier})`)
                assert.equal(operations.multiply(multiplicand, multiplier), multiplicand*multiplier)
                assert.equal(operations.multiply(multiplicand, multiplier)/multiplier, multiplicand)
            })

            it('Simple result with negative numbers: ', function() {
                const multiplicand = getRandomNegativeNumber(100)
                const multiplier = getRandomNegativeNumber(100)

                this.test.title += (`(multiplicand, multiplier) => (${multiplicand}, ${multiplier})`)
                assert.equal(operations.multiply(multiplicand, multiplier), multiplicand*multiplier)
                assert.equal(operations.multiply(multiplicand, multiplier)/multiplier, multiplicand)
            })

            it('Simple result with mixed signal numbers: ', function() {
                const multiplicand = getRandomPositiveNumber(100)
                const multiplier = getRandomNegativeNumber(100)

                this.test.title += (`(multiplicand, multiplier) => (${multiplicand}, ${multiplier})`)
                assert.equal(operations.multiply(multiplicand, multiplier), multiplicand*multiplier)
                assert.equal(operations.multiply(multiplicand, multiplier)/multiplier, multiplicand)
            })

            it('Commutative property: ', function() {
                const multiplicand = getRandomPositiveNumber(100)
                const multiplier = getRandomPositiveNumber(100)

                this.test.title += (`(multiplicand, multiplier) => (${multiplicand}, ${multiplier})`)
                assert.equal(operations.multiply(multiplicand, multiplier), operations.multiply(multiplier, multiplicand))
            })

            it('Multiplication Identity property: ', function() {
                const multiplicand = getRandomPositiveNumber(100)

                this.test.title += `(multiplicand) => (${multiplicand})`
                assert.equal(operations.multiply(multiplicand, 1), multiplicand)
                assert.equal(operations.multiply(multiplicand, 1)/multiplicand, 1)
            })

            it('Multiplication Identity property 2: ', function() {
                const multiplicand = getRandomPositiveNumber(100)

                this.test.title += `(multiplicand) => (${multiplicand})`
                assert.equal(operations.multiply(multiplicand, 0), 0)
                assert.equal(operations.multiply(multiplicand, 0)/multiplicand, 0)
            })

            it('Distributive property: ', function() {
                const multiplier = getRandomPositiveNumber(100)
                const part1 = getRandomPositiveNumber(100)
                const part2 = getRandomPositiveNumber(100)

                const result1 = operations.multiply((part1 + part2), multiplier)
                const result2 = operations.multiply(part1, multiplier) + operations.multiply(part2, multiplier)

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
                assert.equal(operations.product(...parts), result)
            })

            it('Simple result with x negative numbers', function() {
                const size = getRandomPositiveNumber(20)
                const parts = getRandomNegativeArray(100, size)
                const result = parts.reduce((acc, number) => acc * number, 1)

                this.test.title = this.test.title.replace('x', size)
                this.test.title += `(parts) => (${parts})`
                assert.equal(operations.product(...parts), result)
            })

            it('Simple result with x mixed signal numbers', function() {
                const size = getRandomPositiveNumber(20)
                const parts = getRandomMixedArray(100, size)
                const result = parts.reduce((acc, number) => acc * number, 1)

                this.test.title = this.test.title.replace('x', size)
                this.test.title += `(parts) => (${parts})`
                assert.equal(operations.product(...parts), result)
            })

        })

        describe('divide()', function() {

            it('Simple result with positive numbers: ', function() {
                const dividend = getRandomPositiveNumber(100)
                const divisor = getRandomPositiveNumber(100)

                this.test.title += (`(dividend, divisor) => (${dividend}, ${divisor})`)
                assert.equal(operations.divide(dividend, divisor), dividend/divisor)
                assert.equal(Number((operations.divide(dividend, divisor)*divisor).toPrecision(15)), dividend)
            })

            it('Simple result with negative numbers: ', function() {
                const dividend = getRandomNegativeNumber(100)
                const divisor = getRandomNegativeNumber(100)

                this.test.title += (`(dividend, divisor) => (${dividend}, ${divisor})`)
                assert.equal(operations.divide(dividend, divisor), dividend/divisor)
                assert.equal(Number((operations.divide(dividend, divisor)*divisor).toPrecision(15)), dividend)
            })

            /**
            * The division may have problems with floating point at comparison time
            * this is why I used toPrecision() to compare.
            * Parameters that we already know can cause a problem:
            *  - (52, -93)
            */
            it('Simple result with mixed signal numbers: ', function() {
                const dividend = getRandomPositiveNumber(100)
                const divisor = getRandomNegativeNumber(100)

                this.test.title += (`(dividend, divisor) => (${dividend}, ${divisor})`)
                assert.equal(operations.divide(dividend, divisor), dividend/divisor)
                assert.equal(Number((operations.divide(dividend, divisor)*divisor).toPrecision(15)), dividend)
            })

            it('Commutative property: ', function() {
                const dividend = getRandomPositiveNumber(100)
                let  divisor = getRandomPositiveNumber(100)
                
                while (divisor === dividend)
                    divisor = getRandomPositiveNumber(100)

                this.test.title += (`(dividend, divisor) => (${dividend}, ${divisor})`)
                assert.notEqual(operations.divide(dividend, divisor), operations.divide(divisor, dividend))
            })

            it('Identity property of division: ', function() {
                const dividend = getRandomPositiveNumber(100)

                this.test.title += `(dividend) => (${dividend})`
                assert.equal(operations.divide(dividend, 1), dividend)
                assert.equal(operations.divide(dividend, 1)*dividend, dividend**2)
            })

            it('Identity property of division 2: ', function() {
                const dividend = getRandomPositiveNumber(100)

                this.test.title += `(dividend) => (${dividend})`
                assert.equal(operations.divide(dividend, dividend), 1)
                assert.equal(operations.divide(dividend, dividend)*dividend, dividend)
            })

            it('Identity property of division 3: ', function() {
                const dividend = getRandomPositiveNumber(100)

                this.test.title += `(dividend) => (${dividend})`
                assert.deepStrictEqual(operations.divide(dividend, 0), Infinity)
                assert.deepStrictEqual(operations.divide(dividend, 0)*dividend, Infinity)
            })

            it('Identity property of division 4: ', function() {
                const dividend = getRandomPositiveNumber(100)

                this.test.title += `(dividend) => (${dividend})`
                assert.equal(operations.divide(0, dividend), 0)
                assert.equal(operations.divide(0, dividend)*dividend, 0)
            })

            /**
            * The division may have problems with floating point at comparison time
            * this is why I used toPrecision() to compare.
            * Parameters that we already know can cause a problem:
            *  - (21, 90, 71)
            */
            it('Distributive property: ', function() {
                const divisor = getRandomPositiveNumber(100)
                const part1 = getRandomPositiveNumber(100)
                const part2 = getRandomPositiveNumber(100)

                const result1 = operations.divide((part1 + part2), divisor)
                const result2 = operations.divide(part1, divisor) + operations.divide(part2, divisor)

                this.test.title += `(part1, part2, divisor) => (${part1}, ${part2}, ${divisor})`
                assert.equal(result1.toPrecision(15), result2.toPrecision(15))
            })

        })

        describe('quotient()', function() {

            it('Simple result with x positive numbers', function() {
                const size = getRandomPositiveNumber(20)
                const parts = getRandomPositiveArray(100, size)
                const result = parts.reduce((acc, number) => acc / number, (parts[0]*parts[0]))

                this.test.title = this.test.title.replace('x', size)
                this.test.title += `(parts) => (${parts})`
                assert.equal(operations.quotient(...parts), result)
            })

            it('Simple result with x negative numbers', function() {
                const size = getRandomPositiveNumber(20)
                const parts = getRandomNegativeArray(100, size)
                const result = parts.reduce((acc, number) => acc / number, (parts[0]*parts[0]))

                this.test.title = this.test.title.replace('x', size)
                this.test.title += `(parts) => (${parts})`
                assert.equal(operations.quotient(...parts), result)
            })

            it('Simple result with x mixed signal numbers', function() {
                const size = getRandomPositiveNumber(20)
                const parts = getRandomMixedArray(100, size)
                const result = parts.reduce((acc, number) => acc / number, (parts[0]*parts[0]))

                this.test.title = this.test.title.replace('x', size)
                this.test.title += `(parts) => (${parts})`
                assert.equal(operations.quotient(...parts), result)
            })

        })
    })
})
