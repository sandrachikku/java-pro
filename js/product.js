let product;
async function fetchProduct(){
    const urlParams=new URLSearchParams(window.location.search)
    id=urlParams.get("id");
    const res=await fetch(`https://dummyjson.com/products/${id}`);
    product=await res.json();
    document.getElementById("img").src=product.thumbnail;
    str1=``;
    product.images.map((i)=>{
        str1+=`<img onmouseover="changeImage('${i}')" src="${i}" alt="" >`;
    })
    document.getElementById("pdl1").innerHTML=str1;
    document.getElementById("h2a").innerHTML=`<span class="title">${product.title}</span><span class="categ">(${product.category})</span>`
    document.getElementById("pa").innerHTML=`<span class="r">${product.rating}<img src="../img/star_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt=""></span>${product.description}`
    cost=product.price-(product.price*product.discountPercentage/100);
    c=cost.toString();
    
    document.getElementById("price").innerHTML=`<h2 class="p1">$${c.substring(0,5)}</h2> 
            <h3 class="p2"><strike>$${product.price}</strike></h3>  
            <h5> ${product.discountPercentage}%off</h5>`
    document.getElementById("det").innerHTML=`
                <h2 class="spec">Specification</h2>
                <div class="table">
                <table>
                    <tr>
                        <td><b>Brand</b></td>
                        <td>: ${product.brand}</td>
                    </tr>
                    <tr>
                        <td><b>sku</b></td>
                        <td>: ${product.sku}</td>
                    </tr>
                    <tr>
                        <td><b>Warranty Information</b></td>
                        <td>: ${product.warrantyInformation}</td>
                    </tr>
                    <tr>
                        <td><b>Shipping Information</b></td>
                        <td>: ${product.shippingInformation}</td>
                    </tr>
                    <tr>
                        <td><b>Stock</b></td>
                        <td>: ${product.stock}</td>
                    </tr>
                    <tr>
                        <td><b>Availibility</b></td>
                        <td>: ${product.availabilityStatus}</td>
                    </tr>
                    <tr>
                        <td><b>Return Policy</b></td>
                        <td>: ${product.returnPolicy}</td>
                    </tr>
                    <tr>
                        <td><b>Minimum Order Quantity</b></td>
                        <td>: ${product.minimumOrderQuantity}</td>
                    </tr>
                </table>
                </div>`
    str=``
    product.reviews.map((i)=>{
        str+=`<div class="review">
                    <h4><span class="r">${i.rating}<img src="../img/star_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt=""></span>${i.comment}</h4>
                    <p><b>${i.reviewerName}</b> ${i.date.substring(0,10)}</p>
                    <p>${i.reviewerEmail}</p>
                </div>`
    })
    document.getElementById("rev").innerHTML=str;
    
} 
fetchProduct();
function changeImage(img){
    document.getElementById("img").src=img;
}
function addToCart(){
    // console.log(product);
    localStorage.setItem(product.id,JSON.stringify(product));
    window.location.href="../html/cart.html";
}