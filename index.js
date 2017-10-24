//Promises in normal Function-Callback JS
let sumarDosNumeros = function(primero, segundo){
    return new Promise(function(fullfill,reject){
        let resultado= primero+segundo;
        fullfill(resultado);
    });
}

sumarDosNumeros(4,5).then(function(res){
    console.log(res);
})

//Promises in Arrow Function syntax
let sumarDosNumerosArrow = (primero,segundo) => {
    return new Promise((fullfill,reject)=>{
        let resultado = primero + segundo;
        fullfill(resultado);
    })
}

sumarDosNumerosArrow(2,3).then((resultado)=>{
    console.log(resultado);
});