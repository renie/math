import assert from 'assert'

import {
    getRandomPositiveNumber,
    getRandomNegativeNumber,
    getRandomPositiveArray,
    getRandomNegativeArray,
    getRandomMixedArray } from '../utils.js'
import { quadratic } from '../../lib/algebra/index.js'

describe('Algebra', function() {

    describe('Quadratic', function() {

        describe('discriminant()', function() {

            it('Discriminant of a quadratic function (POSITIVE): (a=-1, b=2, c=15)', function() {
                const a = -1
                const b = 2
                const c = 15

                assert.equal(quadratic.discriminant(a,b,c), 64)
            })

            it('Discriminant of a quadratic function (NEGATIVE): (a=1, b=4, c=13)', function() {
                const a = 1
                const b = 4
                const c = 13

                assert.equal(quadratic.discriminant(a,b,c), -36)
            })

            it('Discriminant of a quadratic function (ZERO): (a=4, b=4, c=1)', function() {
                const a = 4
                const b = 4
                const c = 1

                assert.equal(quadratic.discriminant(a,b,c), 0)
            })
        })

        describe('solve()', function() {

            it('Real roots: (-x^2 + 2x + 15) ', function() {
                const a = -1
                const b = 2
                const c = 15

                assert.ok(
                    quadratic
                        .solve(a,b,c)
                        .every(root => (-1*(root**2) +2*root +15) === 0)
                )
            })

            it('Real equal roots: (4x^2 + 4x + 1) ', function() {
                const a = 4
                const b = 4
                const c = 1
                const roots = quadratic.solve(a,b,c)

                assert.equal(roots[0], roots[1])
                assert.ok(
                    roots    
                        .every(root => (4*(root**2) +4*root +1) === 0)
                )
            })
        })
    })
})