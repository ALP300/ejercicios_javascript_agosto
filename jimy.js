console.log("Hola soy Jimy")


let usuario = prompt("Ingrese su usuario: ")
let password = prompt("Ingrese su contraseña: ")
let rol = prompt("Ingrese su rol: ")

if (usuario == "admin" && password == "admin" && rol == "admin") {
    console.log("Bienvenido admin")
} else if (usuario == "editor" && password == "editor" && rol == "editor") {
    console.log("Bienvenido editor")
} else if (usuario == "visitante" && password == "visitante" && rol == "visitante") {
    console.log("Bienvenido visitante")
} else {
    console.log("Usuario o contraseña incorrectos")
}