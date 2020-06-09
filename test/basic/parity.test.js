import assert from 'assert'

import { parity } from '../../lib/basic/index.js'

describe('Basic', function() {

    describe('Parity', function() {

        describe('isOdd()', function() {

            it('Should be an odd number (5)', function(){
                assert.ok(parity.isOdd(5))
            })
            
            it('Should not be an odd number (6)', function(){
                assert.ok(!parity.isOdd(6))
            })

            it('Should be an odd number (0)', function(){
                assert.ok(!parity.isOdd(0))
            })
        })

        describe('isEven()', function() {

            it('Should be an odd number (5)', function(){
                assert.ok(!parity.isEven(5))
            })
            
            it('Should not be an odd number (6)', function(){
                assert.ok(parity.isEven(6))
            })

            it('Should be an odd number (0)', function(){
                assert.ok(parity.isEven(0))
            })
        })
    })
})
