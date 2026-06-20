import { productList } from '../data/ProductData';
import { Product, Categories } from '../models/ProductModel';

import promptSync from 'prompt-sync';
const prompt = promptSync();
let subtotal: number = 0;
const IVA: number = 0.12;

export class ProductService {
    registrarProducto(): void {
        let cantidad = Number(prompt("Ingrese la cantidad de productos que desee registrar: "));
        while (cantidad.toString().trim() == "" || isNaN(cantidad) || cantidad <= 0) {
            console.log("La cantidad es obligatoria y debe ser un número válido, ingrésela nuevamente.");
            cantidad = Number(prompt("Ingrese la cantidad de clientes que desee ingresar: "));
        }

        for (let i = 0; i < cantidad; i++) {
            console.log("\n Producto no. " + (i + 1) + "\n");
            let nombreProducto = prompt("Ingrese el nombre del producto: ");
            while (nombreProducto.trim() == "") {
                console.log("El nombre del producto no puede ir vacío, ingrese los datos nuevamente.");
                nombreProducto = prompt("Ingrese el nombre del producto: ");
            }
            let codigoProducto = prompt("Ingrese el código del producto: ");
            while (codigoProducto.trim() == "") {
                console.log("El código del producto no puede ir vacío, ingrese los datos nuevamente.");
                codigoProducto = prompt("Ingrese el código del producto: ");
            }
            let categoriaProducto = prompt("Ingrese la categoría del producto (Electronicos, Hogar, Ropa, Juguetes, Alimentos): ") as Categories;
            while (categoriaProducto.trim() == "") {
                console.log("La categoría del producto no puede ir vacía, ingrese los datos nuevamente.");
                categoriaProducto = prompt("Ingrese la categoría del producto (Electronicos, Hogar, Ropa, Juguetes, Alimentos): ") as Categories;
            }
            while (categoriaProducto !== Categories.ELECTRONICOS && categoriaProducto !== Categories.HOGAR && categoriaProducto !== Categories.ROPA && categoriaProducto !== Categories.JUGUETES && categoriaProducto !== Categories.ALIMENTOS) {
                console.log("Debe ingresar una categoría válida. Las categorías válidas son: Electronicos, Hogar, Ropa, Juguetes, Alimentos. Ingrese los datos nuevamente.");
                categoriaProducto = prompt("Ingrese la categoría del producto (Electronicos, Hogar, Ropa, Juguetes, Alimentos): ") as Categories;
            }
            let precioProducto = Number(prompt("Ingrese el precio del producto: "));
            while (isNaN(precioProducto) || precioProducto <= 0 || precioProducto.toString().trim() == "") {
                console.log("El precio del producto es obligatorio y debe ser un número válido, ingrese los datos nuevamente.");
                precioProducto = Number(prompt("Ingrese el precio del producto: "));
            }

            const producto: Product = {
                codigo: codigoProducto,
                nombre: nombreProducto,
                categoria: categoriaProducto,
                precio: precioProducto
            }
            productList.push(producto);
        }
        console.log("Producto registrados: ");
        console.table(productList);
    }

    calcularSubtotal(): number {
        for (let i = 0; i < productList.length; i++) {
            subtotal += productList[i].precio;
        }
        return subtotal;
    }

    calcularIVA(subtotal: number): number {
        const ivaTotal = subtotal * IVA;
        return ivaTotal;
    }

    calcularTotal(subtotal: number, iva: number): number {
        const total = subtotal + iva;
        return total;
    }

    mostrarTotalCompra(): void {
        const subtotal = this.calcularSubtotal();
        const iva = this.calcularIVA(subtotal);
        const total = this.calcularTotal(subtotal, iva);
        console.log("\nResumen de la compra: ");
        console.log("El Subtotal de la compra es: " + subtotal.toFixed(2));
        console.log("El monto de IVA es: " + iva.toFixed(2));
        console.log("El total a pagar es: " + total.toFixed(2));
    }

}
