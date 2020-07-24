let carrito = {
    productos : [],
    agregarProducto : (productoAAgregar)=>{
        if(productoAAgregar.stock > 0){
            carrito.productos.push(productoAAgregar);
            productoAAgregar.stock--;
            console.log(carrito.usuario.nombre + " ha comprado " + productoAAgregar.nombre)
        }
    },
    usuario: {
        nombre: "Jorge",
        dni: 234567,
        tarjeta: 12356789
    },
    finalizarCompra: ()=>{
        for(var i = 0; i < carrito.productos.length; i++){
            carrito.total += carrito.productos[i].precio;
        }
        carrito.estado = "cerrado";
        console.log(carrito.usuario.nombre + " debe pagar un total de $"+ carrito.total);
    },
    total : 0,
    estado : "abierto"
}
let salsa = {
    nombre: "Salsa de tomate",
    precio: 100,
    codigo: 23456789,
    stock: 4
}
let alfajor = {
    nombre: "Alfajor Jorgito x 12 u.",
    precio: 230,
    codigo: 0987643,
    stock: 2
}
let ventilador = {
    nombre: "Ventilador Philips",
    precio: 3500,
    codigo: 45654345,
    stock: 0
}
console.log(carrito.usuario.nombre + " tiene un carrito " + carrito.estado);

carrito.agregarProducto(ventilador);
carrito.agregarProducto(salsa);
carrito.agregarProducto(alfajor);
carrito.agregarProducto(alfajor);
carrito.agregarProducto(alfajor);
carrito.agregarProducto(alfajor);
carrito.agregarProducto(alfajor);

carrito.finalizarCompra();
console.log(carrito.usuario.nombre + " tiene un carrito " + carrito.estado);