const removeButtons= document.querySelectorAll(".next");
removeButtons.forEach(button =>{
    button.addEventListener("click", function(e){
        e.preventDefault();
        this.closest(".shishir").remove();

    });
});