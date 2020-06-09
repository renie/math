import { isEven } from '../basic/parity.js'
import { generateIntegerArray } from '../utils.js'

const getRelevantPossibleDivisors = number =>
	generateIntegerArray(2, parseInt(Math.sqrt(number)))

const isPrime = number =>
	getRelevantPossibleDivisors(number)
		.every(divisorCandidate => number % divisorCandidate !== 0)

export {
    getRelevantPossibleDivisors,
    isPrime
}
