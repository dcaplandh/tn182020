const fs = require('fs');
let productosDelCarrito = fs.readFileSync("productosDelCarrito.json");
productosDelCarrito = JSON.parse(productosDelCarrito);

let carrito = {
    productos : productosDelCarrito,
    agregarProducto : (productoAAgregar)=>{
        //si hay stock...
        if(productoAAgregar.stock > 0){
            //agrego el producto al array del carrito
            carrito.productos.push(productoAAgregar);
            //lo guardo en el json
            fs.writeFileSync("productosDelCarrito.json",JSON.stringify(carrito.productos));
            //le resto stock al producto
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

//ejemplo con productos.json
//let productos = JSON.parse(fs.readFileSync("productos.json"));
//let productosConStock = productos.filter(producto=>producto.stock > 0);
//let productosBaratos = productos.filter(producto=>producto.precio < 100);

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
    stock: 3
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