/*
    Arrays numéricos
*/

let numeros = [24,500,0,3];

/*
    funcion para obtener una posicion dentro del array "at()"
    console.log(numeros.at(2));  da como resultado la posición 2 del array, 0 en este caso
    console.log(numeros.at(numeros.length-1)); obtener la ultima posicion del array
*/

//recorrer numeros secuencialmente
showArrayAsc = (array) =>{
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}

//recorrer numeros secuencialmente desde el final
showArrayDesc = (array) => {
    for(let i=array.length-1;i>=0;i--){
        console.log(array[i]);
    }
}

// showArrayAsc(numeros);
// showArrayDesc(numeros);


/*
    Arrays de strings
*/

let cervezas = ['Cristal','Volcanes del sur','Escudo','Kunstmann','Erdinger','Guiness'];


showBeers = (array) =>{
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
//showBeers(cervezas);

/*
    Recorriendo un Dom
*/

// showDom = (e,array) =>{
//     document.getElementById(e).innerHTML = "";

//     for(let i=0;i<array.length;i++){
//         document.getElementById(e).innerHTML += `<div>${array[i]}</div>`;      
//     }
// }

//showDom("array1", cervezas);

//metodos mutables: modifican el estado de los objetos, el estado refiere a un valor del objeto

// cervezas.push("Corona"); //agregar un elemnento al final del array
// cervezas.unshift("Heineken"); //agregar un elemnento al inicio del array
// cervezas.splice(2,0,"Sol"); //param 1: donde se quiere agregar el elemento,  param2: elemento a eliminar (si es 0 no se elimina), param3: elemento a insertar

//showDom("array2", cervezas);

// cervezas.splice(2,2,"Kross"); 

//showDom("array3", cervezas);

//eliminar elementos
// let b = cervezas.pop(); //elimina el ultimo elemento del array
// let b2 = cervezas.shift(); //elimina el primer elemento del array

// console.log(b);
// console.log(b2);

// let vinos = ['chardonnay','merlot','cabernet']
//metodo inmutable
//concat
// const alcoholDrinks = cervezas.concat(vinos);

//console.log(alcoholDrinks);

//showDom("array4", alcoholDrinks);

//buscar elemento dentro del array con indexof

// console.log(alcoholDrinks.indexOf("merlot")); //merlot
// console.log(alcoholDrinks.indexOf("corona")); //retorna -1 si no existe el elemento
// console.log(alcoholDrinks.indexOf(5)); // retorna -1, pues no hay un 5 en el array, es estricto

//generar nuevo array a partir de un grupo de parametros con slice(posicion inicial,posicion final); - metodo inmutable
// const beers = cervezas.slice(0,5);
// console.log("")
// console.log(beers)
// console.log("")

//metodo mutable: fill: inserta elementos de una posicion hasta donde se limite
// beers.fill("pato",0,3);

// console.log("") 
// console.log(beers)
//  console.log("")

/*  
    uso de spreads o ... (si, tres puntos)
*/
//let numeros = [24,500,0,3];
// suma = (a,b,c,d) => {
//     return a+b+c+d;
// }

// console.log(suma(1,2,3,4));
// console.log(suma(numeros[0],numeros[1],numeros[2],numeros[3],)); //tedioso
// console.log(suma(...numeros)); //forma optima

//usandolo de forma practica

// const arr = [...numeros, ...beers];

// console.log(arr);

/*
forma erronea y nub de "copiar" arrays
const numeros2 = numeros; 
esto está mal porque se hace una copia de la referencia del arreglo numeros, por lo que si se edita el numeros2, el valor de referencia
que está en memoria tambien esta en numeros

console.log(`numeros: ${numeros}`)
const numeros2 = numeros; 
console.log(`numeros2: ${numeros2}`)
numeros2[0] = 3;
console.log(`\nEditando numeros2[0] = 3\n`)
console.log(`numeros: ${numeros}`)
console.log(`numeros2: ${numeros2}`)

forma correcta:

console.log(`numeros: ${numeros}`)
const numeros2 = [...numeros]; 
console.log(`numeros2: ${numeros2}`)
numeros2[0] = 3;
console.log(`\nEditando numeros2[0] = 3\n`)
console.log(`numeros: ${numeros}`)
console.log(`numeros2: ${numeros2}`)
*/

//arrays de mayor nivel: array de objetos

const beers = [
    {
    name: "heineken",
    price: 3.50,
    alcohol: 5.1
    },
    {
        name: "stella artois",
        price: 5.50,
        alcohol: 5.0
    },
    {
        name: "corona",
        price: 4.50,
        alcohol: 4.5
    },
    {
        name: "budweiser",
        price: 5.50,
        alcohol: 4.9
    }
];


const wines = [
    {
    name: "Gato negro",
    type: "Merlot",
    price: 3.50,
    alcohol: 5.1
    },
    {
        name: "Clos",
        type: "Cabernet",
        price: 5.50,
        alcohol: 5.0
    },
    {
        name: "Casillero del Diablo",
        type: "Merlot",
        price: 4.50,
        alcohol: 4.5
    },
    {
        name: "Diablo",
        type: "Red Version",
        price: 5.50,
        alcohol: 4.9
    }
];
// //v2
// showDom = (e,array) =>{
//     document.getElementById(e).innerHTML = "";

//     for(let i=0;i<array.length;i++){
//         document.getElementById(e).innerHTML += `<div>${array[i].name} $ ${array[i].price} (${array[i].alcohol}°)</div>`;      
//     }
// }

//showDom("array1",beers);

//funciones de orden superior

let fn = (e,array) =>{
    document.getElementById(e).innerHTML = "";

    for(let i=0;i<array.length;i++){
        document.getElementById(e).innerHTML += `<div>${array[i].name} $ ${array[i].price} (${array[i].alcohol}°)</div>`;      
    }
}

showWinesAndBeers = (e,array,fn) =>{
    fn("array1",beers);
    document.getElementById(e).innerHTML = "";
    for(let i=0;i<array.length;i++){
        document.getElementById(e).innerHTML += `<div>${array[i].name} $ ${array[i].price} (${array[i].alcohol}°)</div>`;      
    }
}

//showWinesAndBeers("array2",wines,fn);

//for-of de  objetos iterables

//v3
showDom = (element,array) =>{
    document.getElementById(element).innerHTML = "";

    for(let e of array){
        document.getElementById(element).innerHTML += `<div>${e.name} $ ${e.price} (${e.alcohol}°)</div>`;      
    }
}



//uso de foreach en arrays
//beers.forEach((element)=>{ console.log(element)}); 
//uso de sort en un array de objetos

beers.sort((a,b)=>{return a.price-b.price});
showDom("array1",beers);
beers.sort((a,b)=>{return a.alcohol-b.alcohol});
showDom("array2",beers);

beers.sort((a,b)=>{
    if(a.name < b.name){
        return -1;
    }

    if(a.name > b.name){
        return 1;
    }

    return 0;
});

showDom("array3",beers);