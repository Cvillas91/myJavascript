const math = require('mathjs')

const a = math.complex(2, 3)     // Complex 2 + 3i
const b = math.complex('4 - 2i') // Complex 4 - 2i

const c = math.re(a)                       // Number 2
const d = math.im(a)                       // Number 3


console.log(a)
console.log(b)
console.log(c)
console.log(d)

