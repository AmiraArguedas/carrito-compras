const botonJarabe = document.getElementById("botonJarabe");
const botonPastillas = document.getElementById("botonPastillas");
const botonInyectable = document.getElementById("botonInyectable");

const contenedorCarrito1 = document.getElementById("contenedorCarrito1")
const contenedorCarrito2 = document.getElementById("contenedorCarrito2")
const contenedorCarrito3 = document.getElementById("contenedorCarrito3")

let almacenadora1 = []
let almacenadora2 = []
let almacenadora3 = []

contador = 0

botonJarabe.addEventListener("click", function () {

                //cargar contador 
                contador++

                valorCarrito.innerHTML = contador
                console.log(contador);
    

                const divHijo1 = document.createElement("div")
                const texto1 = document.createElement("p")
                const btnEliminar1 = document.createElement("button")

                texto1.innerHTML = "Jarabe"
                texto1.value = "Jarabe"
                almacenadora1.push(texto1.value)

                localStorage.setItem("carrito1", JSON.stringify(almacenadora1))

                btnEliminar1.innerHTML = "ELIMINAR"
                contenedorCarrito1.appendChild(divHijo1)
                divHijo1.appendChild(texto1)
                divHijo1.appendChild(btnEliminar1)

                btnEliminar1.addEventListener("click", function () {

                    const eliminar1 = JSON.parse(localStorage.getItem("carrito1"))||[];
                    localStorage.setItem("carrito1", JSON.stringify(eliminar1)) 

                    contenedorCarrito1.removeChild(divHijo1)
                    localStorage.removeItem("carrito1")
                    valorCarrito.remove(contador)
                })
                        
                console.log(almacenadora1);   
                        
})


botonPastillas.addEventListener("click", function () {

                //cargar contador 
                contador++

                valorCarrito.innerHTML = contador
                console.log(contador);

                const divHijo2 = document.createElement("div")
                const texto2 = document.createElement("p")
                const btnEliminar2 = document.createElement("button")

                texto2.innerHTML = "Pastillas"
                texto2.value = "Pastillas"
                almacenadora2.push(texto2.value)

                localStorage.setItem("carrito2", JSON.stringify(almacenadora2))

                btnEliminar2.innerHTML = "ELIMINAR"
                contenedorCarrito2.appendChild(divHijo2)
                divHijo2.appendChild(texto2)
                divHijo2.appendChild(btnEliminar2)

                btnEliminar2.addEventListener("click", function () {

                    const eliminar2 = JSON.parse(localStorage.getItem("carrito2"))||[];
                    const actualizacion2 = eliminar2.filter(borrar => borrar != texto2.textContent)
                    localStorage.setItem("carrito", JSON.stringify(actualizacion2)) 

                    contenedorCarrito2.removeChild(divHijo2)
                    localStorage.removeItem("carrito2")
                    valorCarrito.remove(contador)
                })

                console.log(almacenadora2);
})


botonInyectable.addEventListener("click", function () {

                //cargar contador 
                contador++

                valorCarrito.innerHTML = contador
                console.log(contador);

                const divHijo3 = document.createElement("div")
                const texto3 = document.createElement("p")
                const btnEliminar3 = document.createElement("button")

                texto3.innerHTML = "Inyectable"
                texto3.value = "Inyectable"
                almacenadora3.push(texto3.value)

                localStorage.setItem("carrito3", JSON.stringify(almacenadora3))

                btnEliminar3.innerHTML = "ELIMINAR"
                contenedorCarrito3.appendChild(divHijo3)
                divHijo3.appendChild(texto3)
                divHijo3.appendChild(btnEliminar3)

                btnEliminar3.addEventListener("click", function () {

                    const eliminar3 = JSON.parse(localStorage.getItem("carrito3"))||[];
                    const actualizacion3 = eliminar3.filter(borrar => borrar != texto3.textContent)
                    localStorage.setItem("carrito3", JSON.stringify(actualizacion3)) 

                    
                    contenedorCarrito3.removeChild(divHijo3)
                    localStorage.removeItem("carrito3")
                    valorCarrito.remove(contador)
                })

                console.log(almacenadora3);
})
















