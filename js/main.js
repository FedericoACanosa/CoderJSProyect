let bienvenida = alert("Bienvenido a Arcoíris, a continuación, deberás selecconar el producto que quieras adquirir.");

let item = parseInt(prompt("Elija un producto: 1-Remera blanca, 2-Pantalon Negro, 3-Buzo anime, 4 -Jean Oxford"));

mostrarProductos()


// Funciones

    function mostrarProductos() {
        switch (item) {
            case 1:
                
                console.log("Remera de algodón blanco, cuello V. Este producto tiene un valor de $500") ;
                
                break;

            case 2:
                
                console.log("Pantalón de frizza negro, con puños elastizados. Este producto tiene un valor de $700") ;

                break;
            case 3:
                
                console.log("Buzo del algodón con estampado temático. Este producto tiene un valor de $1500") ;

                break;
            case 4:
                
                console.log("Jean tipo oxford con razgaduras láser. Este producto tiene un valor de $500") ;

                break;
        
            default: alert("No ha seleccionado una opción existente");

                break;
        }
    }

// Variable para elegir el precio del producto

let ingresarPrecio = parseInt(prompt("Ingresa el precio indicado para la prenda a adquirir"));

let envio = confirm("El envío se realiza a Capital Federal (aceptar) o Interior (cancelar)")

if (envio) {
    alert("El precio final a abonar es de $ "+ (ingresarPrecio + 1000)) ;     
}else{
    alert("El precio final a abonar es de $ "+ (ingresarPrecio + 1500)) ;
}