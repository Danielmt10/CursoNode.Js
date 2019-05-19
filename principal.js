const cursos=[{
    id:1,
    nombre:'Node.Js',
    duracion:80,
    valor:0,
    demand:true
},
{
    id:2,
    nombre:'Calculo Diferencial',
    duracion: 64,
    valor:200000
},
{
    id:3,
    nombre:'Ingeniería de software',
    duracion: 32,
    valor:300000
}]


let mostrarCurso=(curso,time, callback)=>{
    setTimeout(function(){    
        let resultado="Id del curso: "+cursos[curso].id+ '\n'+
                        "nombre del curso: "+cursos[curso].nombre+ '\n'+
                        "duracion del curos: "+cursos[curso].duracion+ ' horas'+'\n'+ 
                        "Valor del curos: "+cursos[curso].valor+ ' pesos'+'\n' ;
        callback(resultado);
    }
    ,time);
}


mostrarCurso(0,0,function(resultado){
    console.log(resultado);
})

mostrarCurso(1,2000,function(resultado){
    console.log(resultado);
})

mostrarCurso(2,4000,function(resultado){
    console.log(resultado);
})


const opciones={
    id:{
        demand:true,
        alias:'i'
    }, 
    nombre:{
        demand:true,
        alias:'n'
    },
    cedula:{
        demand: true,
        alias:'c'
    }
}

const argv= require('yargs')
            .command('inscribir', 'Tenga en cuenta', opciones)
            .argv


let id= argv.i
let nombreEs = argv.n
let cedula = argv.c

let cursoid = cursos.find(function(algo) {
    return algo.id == id})

const fs=require('fs');

let crearArchivo=(cursoid)=>{
    texto = 'El nombre del estudiante es :'+nombreEs +'\n'+
            'Con cedula :'+cedula +'\n'+
            'Se ha registrado en el curso' + cursoid.nombre +'\n'+
            'Con una duracion de '+ cursoid.duracion+'\n'+
            'Y un valor de '+ cursoid.valor;
    fs.writeFile('datos.txt',texto,(err)=>{
    if (err) throw(err);
        console.log('Se ha credo el archivo')
    });
}

crearArchivo(cursoid);
                



