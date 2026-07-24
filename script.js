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