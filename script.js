const removeButtons= document.querySelectorAll(".remove-btn");
removeButtons.forEach(button =>{
    button.addEventListener("click", function(e){
        e.preventDefault();
        this.closest(".cart-item").remove();

    });
});