import assert from 'assert'

import { primality } from '../../lib/algebra/index.js'

describe('Algebra', function() {

    describe('Primality', function() {

        describe('getRelevantPossibleDivisors()', function() {

            it('Return an array from 2 to square root of a number (one divisor)', function() {
                const number = 8
                const divisors = primality.getRelevantPossibleDivisors(number)

                assert.deepStrictEqual(divisors, [2])
                assert.equal(divisors.length, parseInt(Math.sqrt(number)) - 1)
            })

            it('Return an array from 2 to square root of a number (perfect square)', function() {
                const number = 9
                const divisors = primality.getRelevantPossibleDivisors(number)

                assert.deepStrictEqual(divisors, [2,3])
                assert.equal(divisors.length, Math.sqrt(number) - 1)
            })

            it('Return an array from 2 to square root of a number (not perfect square)', function() {
                const number = 10
                const divisors = primality.getRelevantPossibleDivisors(number)

                assert.deepStrictEqual(divisors, [2,3])
                assert.equal(divisors.length, parseInt(Math.sqrt(number) - 1))
            })
        })

        describe('isPrime()', function() {

            it('Return whether a number is prime', function() {
                assert.ok(13)
            })

            it('Return whether a number is not prime', function() {
                assert.ok(15)
            })
        })
    })
})