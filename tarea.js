//Crear un prototipo "personaProto" que incluya los métodos: caminar, saludar y comer.

let personaProto = {
    caminar: function(){
        return `${this.nombre} esta caminando hoy`
    }, saludar: function(){
        return `Hello, me llamo ${this.nombre}`
    }, comer: function(){
        return `${this.nombre} esta comiendo galletas`
    }
};

//Crear un prototipo "estudianteProto" que incluya los métodos: estudiar y dormir. Este prototipo debe tener como prototipo "personaProto".

let estudianteProto = Object.create (personaProto); 

estudianteProto.estudiar = function(){
    return `${this.nombre} esta estudiando en ${this.uni}`
}; estudianteProto.dormir = function(){
    return `${this.nombre} esta durmiendo en el sofa`
}; 

//Crear un prototipo "profesorProto" que incluya los métodos: enseñar y calificar. Este prototipo debe tener como prototipo "personaProto".

let profesorProto = Object.create (personaProto);

profesorProto.enseñar = function (){
    return `${this.nombre} esta enseñando ${this.carrera} en ${this.cetav}` 
}, profesorProto.calificar = function (){
    return `el profesor ${this.nombre} esta revisando examenes`
};

// Crear un constructor "EstudianteConstructor" que acepte como parámetros nombre, edad y escuela. Este constructor debe crear objetos que tengan como prototipo "estudianteProto".

function estudianteConstructor (nombre, edad, uni){
    this.nombre = nombre;
    this.edad = edad;
    this.uni = uni;
    this.__proto__= estudianteProto;
}


// Crear un constructor "ProfesorConstructor" que acepte como parámetros nombre, carrera y escuela. Este constructor debe crear objetos que tengan como prototipo "profesorProto".

function profesorConstructor (nombre, cetav, carrera){
    this.nombre = nombre; 
    this.cetav = cetav; 
    this.carrera = carrera; 
    this.__proto__ = profesorProto; 
}

//Haciendo uso de "EstudianteConstructor", crear un par de objetos diferentes y llamar métodos de sus prototipos "estudianteProto" y "personaProto"

let estudianteWeb1 = new estudianteConstructor ("Karina", 24, "CETAV especializacion web");
let estudianteWeb2 = new estudianteConstructor ("Jason", 23, "CETAV especializacion web"); 

console.log (estudianteWeb1.saludar());
console.log(estudianteWeb1.estudiar());
console.log(estudianteWeb1.caminar());
console.log(estudianteWeb1.dormir());
console.log(estudianteWeb1.comer());

console.log(estudianteWeb2.saludar());
console.log(estudianteWeb2.estudiar());
console.log(estudianteWeb2.caminar());
console.log(estudianteWeb2.comer());

//Haciendo uso de "ProfesorConstructor", crear un par de objetos diferentes y llamar métodos de sus prototipos "profesorProto" y "personaProto"

let profesor1 = new profesorConstructor ("Irene", "CETAV","JavaScript"); 
let profesor2 = new profesorConstructor ("Jose",  "CETAV","Desing Tinking"); 

console.log (profesor1.saludar());
console.log(profesor1.caminar());
console.log(profesor1.enseñar());
console.log(profesor1.calificar());

console.log(profesor2.saludar());
console.log(profesor2.comer());
console.log(profesor2.calificar());
console.log(profesor2.enseñar());