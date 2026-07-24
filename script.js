const removeButtons= document.querySelectorAll(".next");
removeButtons.forEach(button =>{
    button.addEventListener("click", function(e){
        e.preventDefault();
        this.closest(".shishir").remove();

    });
});
function addToCart(name,price,image){
    let cart=localStorage.getItem("cart");
    if(cart){
        cart=JSON.parse(cart);
    }
    else{
        cart=[];
    }
    let item={
        name:name,
        price:price,
        image:image
    };
    cart.push(item);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Product added to cart!");
}
function addToCart(){
    let cart=[];
    let oldCart=localStorage.getItem("cart");
    if(oldCart !=null){
        cart=JSON.parse(oldCart);
    }
    let product= {
        image: "images (6).jpg",
        name:"Men's Fasion T Shirt",
        price:140.00
    };
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("product added to cart.");
    window.location.href="cart.html";
}
