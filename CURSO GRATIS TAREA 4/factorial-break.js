let total = 1;
let n = 4;

while (n > 0) {

    if (n >= 10) {
        break
    } ;

    total *= n;
    n--;
}

console.log(total)

// SOLO PUEDO COLOCAR NUMEROS DEL 1 AL 10 , DE LO CONTRARIO EL TOTAL SERA 1