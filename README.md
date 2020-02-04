# WorkshopHelloNode
Material del Workshop Hello Node, el cual es una introducción básica para NodeJS, dentro del código hay un archivo Hello NodeJS.docx que contiene un paso a paso de la primera parte del taller

## Pasos para ejecutar
Dentro de las carpetas generador y helloExpress para ejecutar se deben correr los comandos:

>     npm install
>     npm start

 El primero para instalar todas las dependencias del proyecto y el segundo para correrlo.


 ## Contiene:
 - Ejercicio Hola Mundo con node.
 - Ejercicio Hola Mundo usando express.
 - Ejecicio de Api con Express con dos endpoints expuestos, el primero recibe una petición POST a localhost:3000/convertir con el siguiente cuerpo en formato JSON:

>      {
>         "unidad": 2.5,
>         "uactual": "km",
>         "ufinal": "m"
>     }

 El segundo recibe una petición GET a la URL localhost:3000/empleados y retorna un promedio de sueldos de empleados obtenidos de la API de prueba que nos proporciona la página (http://dummy.restapiexample.com/api/v1/employees).