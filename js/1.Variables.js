// Declarando Variables con Var
var name='Beltran'
if(true){
    var name='Juan'
    console.log('Nombre dentro del If: '+name)
}
console.log('Nombre fuera del if: '+name)

// Declarando Variables con Let
let letname='Beltran'
if(true){
    let letname='Juan'
    console.log('Nombre dentro del If: '+letname)
}
console.log('Nombre fuera del if: '+letname)
//Declarando Variable con const

const URL='www.elprofe.com'
// URL='www.tumarido.com' NO SE PUEDE ASSIGNAR UN VALOR A UNA VARIABLE CONSTANTE
console.log(URL)

const numeros=[1,2,3,4]
numeros[4]=100;
console.log(numeros)


const personal={
    name:'Beltran',
    pais:'Peru'
}
personal.edad='26'
personal.name='Thiago'
console.log(personal)