const wKarte = document.getElementById("Willkommenskarte")
const cardBtn = document.getElementById("card-btn")

function freezePage() {
  document.body.style.overflow = "hidden";
}

function unfreezePage() {
  document.body.style.overflow = "";
}

setTimeout(function(){
    wKarte.style.display = "block"
    freezePage()
}, 3000)

cardBtn.addEventListener("click", function(){
    wKarte.style.display = "none"
    unfreezePage()
})