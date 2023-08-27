let a = 3;
let b = 2;
let c = 1;
let z = a + b;
console.log("Resultado de la suma: "+ z);

z = a - b;
console.log("El resultado de la resta: "+z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la divición: "+z);

z = a % b;
console.log("El módulo de la dijvición es: " +z);

z = a ** b;
console.log("El resultado del exponente es: "+z);

a += 3; // a = a + 3
console.log(a);

a -= 2; // a = a - 2
console.log(a);

//Incremento
//Pre-incremento(el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

//Post-incremento(el opperador ++ despues de la variable)
z = b++; //Primero se le asigna el valor de b y despues b incrementa
console.log(b);
console.log(z);

//Decremento
//Pre-decremento
z = --a;
console.log(a);
console.log(z);

//Post-decremento;
z = a--;
console.log(a);
console.log(z);

a = 3, b = 2, c = "3";
z = a == b;
console.log(z);

z = a!=b;
console.log(z);

z = a !== c;
console.log(z);

z = a == c; //No reviza el tipo
console.log(z);

z = a === c; //Revisa el tipo
console.log(z);

z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);

z = a >= c;
console.log(z);