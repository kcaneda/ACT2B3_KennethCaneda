# ACT2B3_KennethCaneda
Actividad 2 de taller acerca de funciones y modularidad para calcular total, subtotal e impuestos de una compra.

# Descripción del diseño

El proyecto está pensado como una simulación simple de un sistema de ventas. Todo el flujo ocurre en la terminal: el programa le pregunta al usuario cuántos productos quiere registrar y, por cada uno, pide su nombre, código, categoría y precio. Cada dato se valida antes de continuar, así que si el usuario deja un campo vacío o escribe algo que no es válido (como una categoría que no existe o un precio negativo), el programa vuelve a pedir el dato hasta que sea correcto.
Una vez registrados todos los productos, el sistema calcula automáticamente:

1.	Subtotal: la suma de los precios de todos los productos registrados.
2.	IVA: el 12% calculado sobre ese subtotal.
3.	Total: la suma del subtotal más el IVA.

Cada uno de estos cálculos vive en su propia función dentro de la clase ProductService, de modo que cada una tiene una sola responsabilidad: una calcula el subtotal, otra el IVA, otra el total, y una última (mostrarTotalCompra) se encarga de juntar los tres resultados y mostrarlos en pantalla de forma ordenada.

## Organización por módulos
El proyecto separa el código en carpetas según su función, para que cada parte sea fácil de encontrar y modificar:
<img width="310" height="529" alt="image" src="https://github.com/user-attachments/assets/49c08a8b-8e9d-47ac-ab3d-5d8ae7aee4da" />


models/ProductModel.ts: define dos cosas. La interfaz Product, que describe qué información debe tener un producto (código, nombre, categoría y precio), y el enum Categories, que limita las categorías posibles a solo cinco opciones válidas (Electrónicos, Ropa, Alimentos, Hogar y Juguetes). Esto evita que se registren productos con categorías inventadas o mal escritas.
data/ProductData.ts: aquí se encuentra la lista vacía (productList) en la que se van a ir almacenando productos a medida que el usuario los registra. 
services/ProductoService.ts: contiene la lógica de negocio, en ella se encuentra la clase ProductService, que tiene todos los métodos: registrar productos, calcular el subtotal, calcular el IVA, calcular el total y mostrar el resumen final.
index.ts: es el archivo que conecta el código y lo inicia. Crea una instancia de ProductService y llama, en orden, a registrarProducto() y luego a mostrarTotalCompra().

## Conclusiones de las pruebas
Separar los cálculos en funciones pequeñas facilita las pruebas. Como calcularSubtotal, calcularIVA y calcularTotal son funciones independientes, fue sencillo comprobar que cada una devuelve el resultado correcto antes de juntarlas todas en mostrarTotalCompra.
Mostrar los datos con console.table mejora la revisión. Visualizar la lista de productos registrados en formato de tabla ayudó a confirmar rápidamente que los datos ingresados (código, nombre, categoría y precio) se guardaban correctamente, sin tener que revisar el código cada vez.
En conjunto, las pruebas confirmaron que dividir el programa en archivos pequeños y con una sola responsabilidad cada uno no solo organiza mejor el código, sino que también hace más fácil encontrar y corregir errores cuando algo no funciona como se espera.
