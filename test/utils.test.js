import chai from 'chai'

import {
    __getNormalizedArraySize,
    __emptyArray,
    bulkFunction,
    getRandomPositiveNumber,
    getRandomNegativeNumber,
    getRandomPositiveArray,
    getRandomNegativeArray,
    getRandomMixedArray } from '../lib/utils.js'

const assert = chai.assert

describe('Utils', function() {

    describe('__getNormalizedArraySize()', function() {

        it('Get default size', function() {
            assert.equal(__getNormalizedArraySize(4, 7), 7)
        })

        it('Get new size', function() {
            assert.equal(__getNormalizedArraySize(7, 4), 7)
        })

    })

    describe('__emptyArray()', function() {

        it('Get array', function() {
            assert.deepStrictEqual(__emptyArray(5), Array(5))
        })

    })

    describe('bulkFunction()', function() {

        it('Execute function some times', function() {
            const fn = (acc, item) => acc + item
            const list = [1,2,3,4,5]

            assert.equal(bulkFunction(fn, list, 0), 15)
        })

    })

    describe('getRandomPositiveNumber()', function() {

        it('Generate random positive number', function() {
            assert.isAbove(getRandomPositiveNumber(), 0)
        })

    })

    describe('getRandomNegativeNumber()', function() {

        it('Generate random negative number', function() {
            assert.isAbove(getRandomPositiveNumber(), 0)
        })

    })

    describe('getRandomPositiveArray()', function() {

        it('Generate an array with random positive number', function() {
            getRandomPositiveArray()
                .every(item => assert.isAbove(item, 0))
        })

    })

    describe('getRandomNegativeArray()', function() {

        it('Generate an array with random negative number', function() {
            getRandomNegativeArray()
                .every(item => assert.isBelow(item, 0))
        })

    })

    describe('getRandomMixedArray()', function() {

        it('Generate an array with random mixed signal number', function() {
            const list = getRandomMixedArray()
            assert.isOk(list.some(item => item > 0), `no positive in ${list}`)
            assert.isOk(list.some(item => item < 0), `no negative ${list}`)
        })

    })
})
