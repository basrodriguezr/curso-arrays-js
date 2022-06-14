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

showDom = (e,array) =>{
    document.getElementById(e).innerHTML = "";

    for(let i=0;i<array.length;i++){
        document.getElementById(e).innerHTML += `<div>${array[i]}</div>`;      
    }
}

//showDom("array1", cervezas);

//metodos mutables

cervezas.push("Corona"); //agregar un elemnento al final del array
cervezas.unshift("Heineken"); //agregar un elemnento al inicio del array
cervezas.splice(2,0,"Sol"); //param 1: donde se quiere agregar el elemento,  param2: elemento a eliminar (si es 0 no se elimina), param3: elemento a insertar

//showDom("array2", cervezas);

cervezas.splice(2,2,"Kross"); 

//showDom("array3", cervezas);

//eliminar elementos
let b = cervezas.pop(); //elimina el ultimo elemento del array
let b2 = cervezas.shift(); //elimina el primer elemento del array

console.log(b);
console.log(b2);
