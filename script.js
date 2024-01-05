const menu = document.querySelector("#menu");
const mobileMenu = document.querySelector("#mobile-menu");

function toggleMenu(){
    const mobileMenu = document.querySelector("#mobile-menu");
    const wrapper = document.querySelector("#wrapper");
    mobileMenu.classList.toggle("hidden")
    // if(!mobileMenu.contains("hidden")){
    //     wrapper.classList.toggle("blur-lg")
    // }
}
