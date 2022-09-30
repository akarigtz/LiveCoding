# LiveCoding
Ejercicios de live coding Generation


# Práctica de Live Coding 1
El repo contiene el reto del live coding 1. Clonalo en tu computadora para resolverlo.

## Función de palabras

En este reto reforzarás tus conocimientos en JavaScript, creando funciones, trabajando con arreglos y strings, y manipulando del DOM para mostrar los resultados al usuario.

1.- Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.

- Escribe una función que reciba 2 parámetros
   - Parámetro 1 - Un string
   - Parámetro 2 - Un array de strings
- La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
- Ejemplo:
   - `const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];`
   - `bigWords('bocina', myArray);`
   - Output - `['insecto', 'bootcamp', 'escritorio']`

2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (<ul></ul>) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento **<li></li>**. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior.

- Escribe una función que reciba 1 parámetro
   - Parámetro 1 - Un array de strings
- La función debe mostrar la lista en el HTML, cada string del arreglo debe imprimirse en un elemento **<li></li>**.
- Ejemplo:
   - `const myArray = ['insecto', 'bootcamp', 'escritorio'];`
   - `printArray(myArray);`
   - Output - `<li>insecto</li>
               <li>bootcamp</li>
               <li>escritorio</li>
               `
3.- Conecta tu archivo JS con el index.html. Comprueba el funcionamiento del código con diferentes inputs.

### Reglas

- Debes compartir tu pantalla y mantener encendida tu cámara web
- Debes escribir el código JS en el archivo app.js
- Define en tu código el array de palabras, debe contener al menos 10 palabras.
- Durante el desafío debes explicar todos los pasos que realices.
- Debes responder a las preguntas que haga el entrevistador.

### Bonus

1.- Crea un input en el HTML donde el usuario pueda escribir la palabra que se mandará por parámetros a la primera función.
2.- Crea un botón en el HTML. Cuando el usuario de click al botón debe dispararse un evento en el cual se invocará la primera función y recibirá lo que el usuario escriba en el input como el string. Después el array resultante será pasado a la segunda función para mostrarlo en el HTML.

# Práctica de Live Coding 2
El repo contiene el reto del live coding 2. Clonalo en tu computadora para resolverlo.

## Yes No API - Descripción
En este reto reforzaras tus conocimientos en JavaScript, realizando una llamadas a un API básico, disparando eventos y mostrando los resultados al usuario.

1.- Construye una función fetchAnswer que realice una petición al API https://yesno.wtf/api.

2.- Muestra la respuesta del API en el HTML, en el div con id answer.

3.- Agrega la función fetchAnswer a un eventListener, para que sea disparado cuando se de click al botón.

4.- Limpia la pregunta y la respuesta despues de 5 segundos.

### Reglas

- Debes compartir tu pantalla y mantener encendida tu cámara web
- Debes escribir el código JS en el archivo script.js que esta dentro de la carpeta starter-files.
- Durante el desafío debes explicar todos los pasos que realices.
- Debes responder a las preguntas que haga el entrevistador.

### Bonus

1.- Valida que no se pueda dar click al botón si el input esta vacio.


### Preview
<img src="/preview.gif" height="500" style="border-radius:10px;margin-bottom:1rem;" />

<div style="padding:0.35rem 0.7rem;
    background: #94dbff;
    border-radius:10px;
    width:300px;
    text-align:center;
    font-weight:600;
    font-size:0.85rem">
    <!-- <a style="color:black;" href="https://danascript.github.io/the-ultimate-api-challenge-yes-no/" target="_blank" rel="noopener">Live Preview</a> -->
</div>

# Práctica de Live Coding 3
## Mangos y naranjas
En este reto reforzaras tus conocimientos en Java, manejando ciclos, condicionales e recibir e imprir datos por consola.

1.- Construye un programa que pida por consola 2 números. El número de mangos y el número de naranjas.

2.- Debes de meter esos mangos y naranjas en cajas.

3.- El número de mangos en cada caja debe ser el mismo. El número de naranjas en cada caja debe ser el mismo.

4.- El número de cajas debe ser el máximo posible.

5.- Debes imprimir el número de cajas, el número de mangos por cajas y el número de naranjas por cajas.

6.- Debes escribir el código en una clase llamada MangosNaranjas que tenga dos atributos: mangos, naranjas, y por lo menos un método imprimir. Debe recibir por el constructor los parametros de el número de mangos y el número de naranjas.

7.- En una clase Main, debes crear un objeto de dicha clase para imprimir el resultado.

Ejemplo:
Entradas: 12028 12772
Salida: El número de cajas es: 124 El número de mangos en una caja es: 103 El número de naranjas en una caja es: 97
Reglas
Debes compartir tu pantalla y mantener encendida tu cámara web
Durante el desafío debes explicar todos los pasos que realices.
Debes responder a las preguntas que haga el entrevistador.
