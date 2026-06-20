enum Categories {
    ELECTRONICOS = 'Electronicos',
    ROPA = 'Ropa',
    ALIMENTOS = 'Alimentos',
    HOGAR = 'Hogar',
    JUGUETES = 'Juguetes'
}

interface Product {
    codigo: string,
    nombre: string,
    categoria: Categories,
    precio: number
}

export { Product, Categories }