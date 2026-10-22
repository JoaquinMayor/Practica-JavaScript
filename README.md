# Codigos acerca de fundamentos y conceptos básicos de JavaScript
## Con Mini-Ejercicios prácticos.

### Conceptos

1. Concatenación
2. Tipos de Datos.
3. Operadores y Operadores Lógicos.
4. Sentencias de Control.
5. Ciclos JavaScript
6. Arreglos.
7. Funciones.
8. Objetos.
9. Clases.
10. Strict.
11. Programación orientada a objetos (POO).
12. Manejo de Errores.
13. Funciones Flecha.
14. Funciones CallBack.
15. Promesas.

### Ejercicios Prácticos
#### En Capetas (Incluye HTML y CSS)
1. Aplicación de Presupuestos.
2. Calculadora.
3. JavaCript Eventos DOM.
4. JavaScript DOM (Manejo con Formularios).
5. Manejo de Listado de Personas.
6. Reloj Digital.

#### Archivos Unicamente de JavaScript
1. Ejercicios Mayores de Edad (Operadores Lógicos).
2. Ejercicios Par o Impar (Operadores Lógicos).
3. Práctica Herencia (POO).
4. Práctica Mundo PC.
5. Práctica Sistema de Ventas

![Dependencias SpringBoot](https://desarrolloweb.com/storage/manual_images/V14nEKhx4G5SRJLddT6qrStNKRJosOleRmxkGVN2.jpeg)

Repositorio de **práctica** con los ejercicios que fui realizando para aprender **JavaScript** desde cero: fundamentos del lenguaje, programación orientada a objetos, asincronía, manipulación del DOM y algunas mini aplicaciones web hechas con HTML, CSS y JavaScript puro (vanilla).

> Los archivos incluyen comentarios explicando cada concepto a medida que se fue aprendiendo.

## Tecnologías

- JavaScript (ES6+), sin frameworks ni dependencias
- HTML5
- CSS3

## Estructura del proyecto (detalle)

### Fundamentos (archivos numerados)

| Archivo | Tema |
|---|---|
| `01-01-HolaMundo.js` | Primer programa |
| `02-01-TiposDeDatos.js` | Tipos de datos: string, number, object, boolean, function, Symbol, class, undefined, null, arreglos |
| `02-01-Concatenacion.js` | Concatenación de cadenas |
| `03-01-Operadores.js` | Operadores aritméticos, de asignación, incremento/decremento (pre y post), `==` vs `===` |
| `03-01-OperadoresLogicos.js` | `&&`, `\|\|`, operador ternario, conversión de tipos, `NaN` y precedencia de operadores |
| `03-Ejercicio-MayorDeEdad.js` | Ejercicio: determinar si una persona es mayor de edad |
| `03-Ejercicio-Par-Impar.js` | Ejercicio: determinar si un número es par o impar |
| `04-01-SentenciasDeControl.js` | `if`, `else if`, `else` y `switch` |
| `05-01-CiclosJavaScript.js` | Ciclos `while`, `do while`, `for`, `break`, `continue` y etiquetas |
| `06-01-ArreglosJS.js` | Creación, recorrido y modificación de arreglos |
| `07-01-FuncionesJS.js` | Hoisting, funciones declaradas, de expresión y flecha, `arguments`, paso por valor y por referencia |
| `08-01-Objects.js` | Objetos: acceso a propiedades, `for in`, agregar/eliminar propiedades, JSON, get/set, funciones constructoras, `prototype`, `call` y `apply` |
| `09-01-Class.js` | Clases, herencia (`extends`), métodos y atributos estáticos |
| `10-01-Strict.js` | Modo estricto (`"use strict"`) |
| `11-01-POO.js` | Herencia y polimorfismo |
| `12-01-ManejoErrores.js` | `try`/`catch`/`finally` y `throw` |
| `13-01-FuncionesFlecha.js` | Variantes de sintaxis de funciones flecha |
| `14-01-FuncionCallback.js` | Funciones callback, `setTimeout` y `setInterval` |
| `15-01-Promesas.js` | Promesas, `then`/`catch`, `async` y `await` |

### Ejercicios de programación orientada a objetos

- `Practica-Herencia.js`: clases `Persona`, `Empleado` y `Cliente` con herencia, contadores estáticos y `toString()`.
- `Practica-Sistema-Ventas.js`: clases `Producto` y `Orden` con un máximo de productos por orden y cálculo del total.
- `Practica-MundoPC.js`: modelado de una computadora con `DispositivoEntrada`, `Raton`, `Teclado`, `Monitor`, `Computadora` y `Orden`.

### DOM y eventos

- `Javascript-DOM/index-Obtener-Modificar-Elementos.html`: obtener elementos (`getElementById`, `getElementsByTagName`, `querySelectorAll`), modificar `innerHTML`, imágenes y estilos, y `document.write`.
- `Javascript-DOM/index-Formularios.html`: recorrer los elementos de un formulario con `document.forms` y mostrar sus valores.
- `JavaScript-Eeventos-DOM/index.html`: eventos `onload`, `onclick`, `onmouseover`/`onmouseout`, `onmousedown`/`onmouseup`, `onchange`, `onfocus`/`onblur`, uso de `navigator` y `addEventListener`.

### Mini aplicaciones

- `Calculadora/`: suma dos operandos ingresados por el usuario.
- `Listado de Personas/`: agrega personas (nombre y apellido) a una lista, capitalizando la primera letra y validando que los campos no estén vacíos.
- `Reloj-Digital/`: reloj que muestra hora, día y mes, actualizándose cada segundo con `setInterval`.
- `Aplicacion-Presupuesto/`: registro de ingresos y egresos con una clase `Elemento`, cálculo del total disponible, totales de ingresos/egresos, porcentaje de egresos y opción para borrar cada elemento.

## Cómo ejecutarlo

### Requisitos
- Un navegador web.
- [Node.js](https://nodejs.org/) (opcional, para ejecutar los archivos `.js` sueltos desde la terminal).

### Ejercicios `.js`

```bash
node 07-01-FuncionesJS.js
```

También pueden ejecutarse copiando el código en la consola del navegador.

### Páginas HTML y mini aplicaciones

Abrir el `index.html` correspondiente directamente en el navegador (por ejemplo `Reloj-Digital/index.html`), o servirlo con una extensión como Live Server de VS Code.
