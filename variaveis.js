/* var x = 0 */

// Hoisting


console.log(`Existe x antes do bloco? ${x}`)

{

    var x = 0


}

console.log(`Existe x depois do bloco? ${x}`)


/* console.log(`Existe y antes do bloco? ${y}`)
 */

{

    let y = 0


}

/* console.log(`Existe y depois do bloco? ${y}`)
 */

let z = 1

console.log(`Existe z antes do bloco? ${z}`)

{

    z = 0
    // Lexical Scoping

}

console.log(`Existe z depois do bloco? ${z}`)

const w = 1

console.log(`Existe w antes do bloco? ${w}`)

{

    const w = 0

}

console.log(`Existe w depois do bloco? ${w}`)


let i = 1

console.log(`Existe i antes do bloco? ${i}`)

{

    let i = 0

}

console.log(`Existe i depois do bloco? ${i}`)


