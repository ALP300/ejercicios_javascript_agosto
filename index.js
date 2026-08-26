let usuario = prompt("Ingresa tu usuario:");
let contrasena = prompt("Ingresa tu contraseña:");
let rol = prompt("Ingresa tu rol (admin,visitante):");

if (usuario === "admin" && contrasena === "239867564074515072754741548057235") {
    console.log("Acceso concedido.");

    if (rol === "admin") {
        console.log("Permisos de Admin: Tienes acceso total al sistema (Crear, Editar, Eliminar y Ver usuarios).");
    } else if (rol === "editor") {
        console.log("Permisos de Editor: Puedes crear y modificar contenido, pero no eliminar usuarios.");
    } else if (rol === "visitante") {
        console.log("Permisos de Visitante: Solo tienes acceso de lectura al contenido público.");
    } else {
        console.log("Error: El rol ingresado no es válido.");
    }
}