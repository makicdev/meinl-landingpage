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

const scrollBtn = document.getElementById("scroll-btn")

window.addEventListener("scroll", function(){
  if(this.window.scrollY > 150) {
    scrollBtn.style.opacity = "1"
  } else {
    scrollBtn.style.opacity = "0"
  }
})

scrollBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});