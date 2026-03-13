const products=[

{name:"Luxury Sofa",price:350,category:"sofa",
img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
desc:"Premium comfortable sofa set."},

{name:"Modern Wooden Bed",price:450,category:"bed",
img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
desc:"Elegant wooden king-size bed."},

{name:"Comfort Chair",price:120,category:"chair",
img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
desc:"Relaxing modern lounge chair."},

{name:"Luxury Cupboard",price:400,category:"cupboard",
img:"https://images.unsplash.com/photo-1595514535415-dae1b6e0bfa2",
desc:"Large wooden cupboard for storage."},

{name:"Steel Almirah",price:380,category:"almirah",
img:"https://images.unsplash.com/photo-1615874959474-d609969a20ed",
desc:"Strong steel almirah with lock."},

{name:"Premium Bedding",price:150,category:"bedding",
img:"https://images.unsplash.com/photo-1600210492493-0946911123ea",
desc:"Luxury bedding set."},

{name:"Dining Table Set",price:500,category:"table",
img:"https://images.unsplash.com/photo-1617806118233-18e1de247200",
desc:"Modern dining table set."}

]

const list=document.getElementById("productList")

function showProducts(data){

if(!list) return

list.innerHTML=""

data.forEach(p=>{

list.innerHTML+=`

<div class="card">

<img src="${p.img}" onclick="openImg('${p.img}')">

<h3>${p.name}</h3>

<p class="desc">${p.desc}</p>

<p class="price">$${p.price}</p>

<a class="order"
href="https://wa.me/923001234567?text=I want ${p.name}">

Order on WhatsApp

</a>

</div>

`

})

}

showProducts(products)

document.getElementById("search")?.addEventListener("input",e=>{

const value=e.target.value.toLowerCase()

showProducts(products.filter(p=>p.name.toLowerCase().includes(value)))

})

document.getElementById("category")?.addEventListener("change",e=>{

if(e.target.value==="all") return showProducts(products)

showProducts(products.filter(p=>p.category===e.target.value))

})

function openImg(src){

const modal=document.getElementById("modal")

modal.style.display="flex"

document.getElementById("modalImg").src=src

modal.onclick=()=>modal.style.display="none"

}

function addReview(){

let name=document.getElementById("name").value
let msg=document.getElementById("message").value

let reviews=JSON.parse(localStorage.getItem("reviews")||"[]")

reviews.push({name,msg})

localStorage.setItem("reviews",JSON.stringify(reviews))

displayReviews()

}

function displayReviews(){

let reviews=JSON.parse(localStorage.getItem("reviews")||"[]")

let container=document.getElementById("reviews")

if(!container) return

container.innerHTML=""

reviews.forEach(r=>{

container.innerHTML+=`<p><b>${r.name}</b>: ${r.msg}</p>`

})

}

displayReviews()
