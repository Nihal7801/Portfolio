let i = 0;
document.querySelector(".hamburger").addEventListener("click", function() {
   let a= document.querySelector(".mobile-screen-navbar").classList;
   document.querySelector(".mobile-screen-navbar").classList.toggle("show");
   console.log(a);
    if (i % 2 == 0) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }
    i++;
});
