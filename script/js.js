/*function promedio (){
    let numero1 = parseInt(prompt("ingrese un numero"));
    let numero2 = parseInt(prompt("ingrese otro numero"));
    let numero3 = parseInt(prompt("ingrese otro numero mas"));
    let promedio = numero1+numero2+numero3/3;
    alert("su promedio es de " + promedio)
}
promedio()*/
/*

function Producto(nombre, stock, precio) {
    this.nombre = nombre;
    this.stock  = stock;
    this.precio =  precio;
}

const producto1 = new Producto("rizen", 65, 50000);
const producto2 = new Producto("teclado", 15, 3000);
const producto3 = new Producto("monitor", 25, 25000);
const producto4 = new Producto("i9", 10, 60000);
const producto5 = new Producto("playstation", 5, 150000);


function compra(){
    alert("Bienvenido, En este momento tenemos: | rizen | teclado | monitor | i9 | playstation |")
    let compra = prompt("Que desea comprar? si no desea comprar nada , ingrese nada")
        if (compra === producto1.nombre){
            let cantcompra = prompt ("Cuantos " + producto1.nombre+ " deseas comprar? cada uno sale " + producto1.precio)
            let preciofinal = producto1.precio *  cantcompra 
            let confcompra = prompt ("Desea confirmar la compra , responda por si o por  no ")
                if (confcompra === "si"){
                    alert("usted compro " + cantcompra+ " " + producto1.nombre + " por " + preciofinal + " pesos")
                }
                else{
                    alert("Gracias igual , espero que vuelvas pronto!!")
                }
                let stockfinal =  producto1.stock - cantcompra
                console.log(stockfinal)
        }
        else if (compra === producto2.nombre){
            let cantcompra = prompt ("Cuantos " + producto2.nombre+ " deseas comprar? cada uno sale " + producto2.precio)
            let preciofinal = producto2.precio *  cantcompra 
            let confcompra = prompt ("Desea confirmar la compra , responda por si o por  no ")
                if (confcompra === "si"){
                    alert("usted compro " + cantcompra+ " " + producto2.nombre + " por " + preciofinal + " pesos")
                }
                else{
                    alert("Gracias igual , espero que vuelvas pronto!!")
                }
                let stockfinal =  producto1.stock - cantcompra
                console.log(stockfinal)
        } 
        else if (compra === producto3.nombre){
            let cantcompra = prompt ("Cuantos " + producto3.nombre+ " deseas comprar? cada uno sale " + producto3.precio)
            let preciofinal = producto3.precio *  cantcompra 
            let confcompra = prompt ("Desea confirmar la compra , responda por si o por  no ")
                if (confcompra === "si"){
                    alert("usted compro " + cantcompra+ " " + producto3.nombre + " por " + preciofinal + " pesos")
                }
                else{
                    alert("Gracias igual , espero que vuelvas pronto!!")
                }
                let stockfinal =  producto1.stock - cantcompra
                console.log(stockfinal)
        }
        else if (compra === producto4.nombre){
            let cantcompra = prompt ("Cuantos " + producto4.nombre+ " deseas comprar? cada uno sale " + producto4.precio)
            let preciofinal = producto4.precio *  cantcompra 
            let confcompra = prompt ("Desea confirmar la compra , responda por si o por  no ")
                if (confcompra === "si"){
                    alert("usted compro " + cantcompra + " " + producto4.nombre + " por " + preciofinal + " pesos")
                }
                else{
                    alert("Gracias igual , espero que vuelvas pronto!!")
                }
                let stockfinal =  producto1.stock - cantcompra
                console.log(stockfinal)
        }
        else if (compra === producto5.nombre){
            let cantcompra = prompt ("Cuantos " + producto5.nombre+ " deseas comprar? cada uno sale " + producto5.precio)
            let preciofinal = producto5.precio *  cantcompra 
            let confcompra = prompt ("Desea confirmar la compra , responda por si o por  no ")
                if (confcompra === "si"){
                    alert("usted compro " + cantcompra+ " " + producto5.nombre + " por " + preciofinal + " pesos")
                }
                else{
                    alert("Gracias igual , espero que vuelvas pronto!!")
                }
                let stockfinal =  producto1.stock - cantcompra
                while(producto5.stock >= cantcompra){
                console.log(stockfinal)}
                alert("no quedan mas " + producto5.nombre)
        }
        else if( compra=== "nada"){
            alert("Adios")
        }
        else {alert("El producto que deseas comprar no existe")
        let compra = prompt("Que desea comprar?")
    }
}
compra()
*/

/*
const getValueInput = () =>{
    let inputValue = document.getElementById("nombre").value; 
    document.getElementById("valueInput").innerHTML = inputValue; 
  }
console.log(getValueInput)
let nombre = document.getElementById("nombre");
document.getElementById("nombre").value;
console.log(nombre.value)

//variable//
let allcontainercart = document.querySelector(".productos__seccion");
let containerbycards = document.querySelector(".productos__seccion")
let buythings = [];

//funciones//
loadeventlistener();
function loadeventlistener(){
    allcontainercart.addEventListener("click",addproduct);
}
function addproduct(e){
    e.preventDefault();
    if(e.target.classList.contains("bottonpro")){
        //console.log(e.target.parentElement);
        const selectProduct = e.target.parentElement;
        readThecontent(selectProduct);
    }
}
function readThecontent(product){
    const infoproduct = {
        image: product.querySelector("div img").src,
        title: product.querySelector("div p").textContent,
        precio: product.querySelector(".precio").textContent,
    }
    buythings = [...buythings, infoproduct]
    function loadHtml();
    console.log(infoproduct);
}
function loadHtml(){
    clearHtml();
    buythings.forEach(product => {
        const {image,title,precio} = product;
        const row = document.createElement("div");
        row.classList.add("container__productos");
        row.innerHTML = `               
            <div class="container__productos">
            <div class="img__productos"><img class="rizen" src="${image}" alt="rizen">
                <div class="texto__productos">
                    <p>${title}</p>
                    <p class="precio">${precio}</p>
                    <button class="bottonpro ">AGREGAR AL CARRITO</button>
                </div>
            </div>

            </div>
    `;
    containerbycards.appendChild(row);
    });
}
function clearHtml(){
    containerbycards.innerHTML = "";

}*/
//variables
//variables
Swal.fire({
    icon: 'warning',
    title: "A partir de $20.000 el envio es GRATIS",
  })




let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');


let buyThings = [];
let totalCard = 0;
let countProduct = 0;

//functions

loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);
}
/*function getJsonData(){
    var arr = [];
    fetch("../script")
    .then(response => {
        arr.push(response.json());
    })
    .then(jsondata => console.log(jsondata));
    return arr
}
function addProducts (data){
    const nodoProductos = document.getElementById("divProductos");
    data.forEach(prod => {
    const card = document.createElement("div");
    card.setAttribute("class", "carts");
    card.innerHTML = `

                    <div>
                        <img src="${prod.img}" alt="">
                        <p><span>${prod.precio}</span>$</p>
                    </div>
                    <p class="title">${prod.title}</p>
                    <a href="" data-id="${prod.id}" class="btn-add-cart">AGREGAR AL CARRITO</a>
                     `;
    nodoProductos.appendChild(card);
    });
}

*/
var app ={};
var micallback = datos =>{
    console.log(datos);
    app.productos=datos;
    var html = ""
    app.productos.map(prods =>{
        html+="<div>"
        html+="<img src='"+prods.img+"'></img>";
        html+="<p'"+prods.precio+"'></p>";
    for(let propiedad of Object.keys(prods)){
            html+="<p> "+prods[propiedad]+ "<p>"
        }
    html+= "<a>AGREGAR AL CARRITO</a>"
    html+="</div>"
    }) 
    document.getElementById("results").innerHTML=html;
}
function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);
        
        countProduct--;
    }
    loadHtml();
}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
    //console.log(infoProduct);
}


function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}$</h5>
                <h6>Cantidad: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}
 function clearHtml(){
    containerBuyCart.innerHTML = '';
 }
const $form = document.querySelector("#formulario")
$form.addEventListener("submit",handlesubmit)
function handlesubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get("nombre"))
}
let boton = document.querySelectorAll(".ssss")
boton.addEventListener("click", saludar)
function saludar(){
    Swal.fire('Any fool can use a computer')
}