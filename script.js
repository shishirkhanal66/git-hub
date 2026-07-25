function removeItem(index){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}
   
function openProduct(image,name,price){
    let product={
        image:image,
        name:name,
        price: price
    };
    localStorage.setItem("product", JSON.stringify(product));
    window.location.href="sproduct.html";
}
function addToCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product=JSON.parse(localStorage.getItem("product"));
    if(product){
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
    window.location.href="cart.html";
    }
}
window.onload = function () {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartBody = document.getElementById("cart-body");

    if (!cartBody) {
        return;
    }

    cartBody.innerHTML = "";
    let total =0;

    for (let i = 0; i < cart.length; i++) {
        total += Number(cart[i].price);

        cartBody.innerHTML += `

        <tr class="shishir">
            <td>
                <a href="#" onclick="removeItem(${i}); return false;">
                    <i class="far fa-times-circle"></i>
                </a>
            </td>

            <td>
                <img src="${cart[i].image}" width="80">
            </td>

            <td>${cart[i].name}</td>

            <td>$${cart[i].price}</td>

            <td>
                <input type="number" value="1" min="1" onchange="updatePrice(${i}, this.value)">
            </td>

             <td id="itemTotal${i}"> $${cart[i].price} </td>
        </tr>
        `;
    }
    document.getElementById("subtotal").innerHTML = "$" + total;
    document.getElementById("total").innerHTML = "<strong>$" + total + "</strong>";

};

function updatePrice(index,quantity){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    quantity = Number(quantity);
    let itemTotal = Number(cart[index].price) * quantity;
    document.getElementById("itemTotal" + index).innerHTML = "$" + itemTotal;
    let grandTotal = 0;
    let qty=document.querySelectorAll("#cart-body input");
    for(let i = 0; i< cart.length; i++) {
        grandTotal += Number(cart[i].price) * Number(qty[i].value);
    }
    document.getElementById("subtotal").innerHTML = "$" + grandTotal;
    document.getElementById("total").innerHTML = "<strong>$" + grandTotal + "</strong>";

}