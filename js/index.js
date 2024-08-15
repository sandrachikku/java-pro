async function fetchProducts(){
    try {
        const res=await fetch('https://dummyjson.com/products')
        const products=await res.json();
        str=``
        products.products.map((product)=>{
            str+=`<div class="card" >
            <img src="${product.thumbnail}" alt="">
            <h3>${product.title.substring(0,15)}</h3>
            <p>$${product.price}</p>
            <a href="./html/product.html?id=${product.id}"><button >More details</button></a>
        </div>`
        })
        document.getElementById("products").innerHTML=str;

    } catch (error) {
        console.log(error);
    }
}
fetchProducts();

document.getElementById("sear").addEventListener('keyup',async(e)=>{
    try {
        const res=await fetch('https://dummyjson.com/products');
        const products=await res.json();
        str=``;
        products.products.filter((i)=>i.title.toLowerCase().includes(e.target.value.toLowerCase())).map((product)=>{
            str+=`<div class="card">
            <img src="${product.thumbnail}" alt="">
            <h3>${product.title.substring(0,15)}</h3>
            <p>$${product.price}</p>
            <a href="./html/product.html?id=${product.id}"><button >More details</button></a>
        </div>`
        })

        document.getElementById("products").innerHTML=str;

    } catch (error) {
        console.log(error);
    }
})