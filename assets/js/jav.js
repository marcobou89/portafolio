




















/*

//seleccionar una etiqueat - la primera etiqueta
document.querySelector('h1')
//seleccionar una estiqueda con clase
document.querySelector('.h1')
//seleccionar con un Id
document.querySelector('#h1')

//acceder mediante un Id
document.getElementById('h1')
//acceder todas los elemento que tengan una clase
document.querySelectorAll('.h1')
//acceder todas los elementos
document.querySelectorAll('h1')*/

//guardar en una variable
//const saludoincial = document.querySelector('#h1');
// metodo para cambiar el texto
//saludoincial.textContent = "texto desde js"
//metodo agregar una etiqueta
//saludoincial.innerHTML="<b>tecto con innerHTML</b>"
// agregar una nueva clase
//saludoincial.classList.add("nueva_clase")

//metodo para agregar etiquetas
//const lista= document.createElement('li')
// agregar contenido a la etiqueta
//lista.textContent = 'texto agregado'

//incorporar el elemento - etiqueta - la posicion
//lista.appendChild(li)

// creacion de varios elemento o etiquetas mediante un array - opcion1
//const arrayElement = ['primer elemento','segundo elemento', 'tercer elemento']
/*
arrayElement.forEach(item => {
    console.log(item); // impresion del array

    const lista= document.createElement('li')
    lista.textContent = 'texto agregado'
    lista.appendChild(li)
});*/

// creacion de varios elemento o etiquetas mediante un array - opcion2
/*const arrayElement = ['primer elemento','segundo elemento', 'tercer elemento']

arrayElement.forEach(item => {
    lista.innerHtml += '<li>${item}<li>'
}); 

al realizar la creacion puede producir un reflow
*/   
/*
//FRAGMENT
const lista = document.getElementById('lista');

const arrayItem=['item1','item2','item3'];

//opcion1
const fragment = document.createDocumentFragment()
//opcion 2
// const fragment = new DocumentFragment()

arrayItem.forEach(item => {
    const li= document.createElement('li')
    li.textContent = item
    fragment.appendChild(li)
});
lista.appendChild(fragment)*/