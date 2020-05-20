import assert from 'assert'

import {
    getRandomPositiveNumber,
    getRandomNegativeNumber,
    getRandomPositiveArray,
    getRandomNegativeArray,
    getRandomMixedArray } from './utils.js'
import {
    add,
    sum } from '../lib/basic.js'



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
            assert.equal(add(addend1, addend2), add(addend1, addend2))
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
})
