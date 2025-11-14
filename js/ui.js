function hamburger(){
    const hamburgerr = document.getElementById("hamburger")
    const nav = document.querySelector("nav ul")
    hamburgerr.addEventListener("click", () =>{
        nav.classList.toggle("show");
    })
}
hamburger();


function handlescroll(){
    const header = document.querySelector("header");
    const nav = document.querySelector("nav") ;

    if(window.scrollY > 500){
        header.style.background = "black"
        header.style.position = "sticky";
        header.style.top = "0";
        nav.style.background = "black"
        nav.style.position = "sticky";
        nav.style.top = "0";
    }else{
        header.style.background = "transparent";
        header.style.position = "static";
        nav.style.background = "transparent";
        header.style.position = "static";
    }
}
