const removeButtons= document.querySelectorAll(".next");
removeButtons.forEach(button =>{
    button.addEventListener("click", function(e){
        e.preventDefault();
        this.closest(".shishir").remove();

    });
});
   
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
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
    window.location.href="cart.html";
}