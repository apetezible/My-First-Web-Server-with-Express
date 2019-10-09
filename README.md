# My First Web Server with Express

## Abstract
Instalé node.js y por medio de este, express. Me fue posible hacer un Servidor web (en la red local), pero este de por sí solo envia por medio de GET strings. Para servir proyectos anteriores por ejemplo, se tendrá que servir por medio de la función "express.static".

## Introducción
El problema cotidiano de idear un proyecto después de adquirir una pieza de conocimiento nuevo me requiere una sesuda capacidad creativa, finalmente he llegado a la conclusión que que el proyecto del Curso de Programación Básica, junto con una útil modificación, servirán como proyecto apropiado.

## Métodos
No se puden servir imágenes, css o JavaScript en express directamente. Para hacerlo se debe usar el Método de express ".static()" declarando como parámetros la ruta de los elementos que se quieren servir. Me propongo a hacer un Servidor que sirva el proyecto Villa-Platzi en la red local con el puerto 8989. Este proyecto contiene elementos imágen y JavaScrit que requieren el método ".static()". Para enviar un archivo se usa el método response ".sendFile()" en lugar de "send()". Tenemos entonces la capacidad de servir el proyecto "Villa-Platzi" por express. 

Se me ha autorizado a publicar estas imágenes modificadas de los originales pertenecientes a Platzi.com, Inc.
