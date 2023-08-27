class Persona{

    static contadorObjetosPersona = 0;

    //constante estatica
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;

        if(Persona.contadorObjetosPersona <Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorObjetosPersona;
        }else{
            console.log("Se han superado el máximo de objetos permitidos");
        }
        
    }

    get GetNombre(){
        return this.nombre;
    }

    set SetNombre(nombre){
        this.nombre = nombre;
    }

    get GetApellido(){
        return this.apellido;
    }

    set SetApellido(apellido){
        this.apellido = apellido;
    }

    nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludos desde método static");
    }

    static saludar2(persona){
        console.log(persona.GetNombre + " " + persona.GetApellido);
    }
}
//Herencia
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this.departamento = departamento;
    }

    get GetDepartamento(){
        return this.departamento
    }

    set SetDepartamento(Departamento){
        this.departamento =this.departamento;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ", Departamento: " + this.departamento;
    }

    toString(){
        return this.nombreCompleto();
    }
}

let persona1 = new Persona("Juan", "Perez");
persona1.SetNombre = "Lucas";
console.log(persona1.GetNombre);

let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);

let empleado = new Empleado("Joaquin", "Mayor", "Programación");
console.log(empleado);
console.log(empleado.nombreCompleto());

//Funcion estáticas
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar2(persona2);

//Atributo estatico
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(Persona.MAX_OBJ);