import {
    sum,
    sub,
    multiply,
    product,
    quotient } from '../basic/operations.js'

const discriminant = (a, b, c) =>
    sum(product(b, b), product(-4, a, c))

const root = (a, b, delta, operation) => 
    quotient(
        operation(
            product(b, -1),
            Math.sqrt(delta)
        ),
        multiply(2, a)
    )

const solve = (a, b, c) =>
    [sum, sub]
    	.map(operation => 
    		root(a, b, discriminant(a, b, c), operation))

export {
	discriminant,
	root,
    solve
}