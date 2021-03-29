document.addEventListener("DOMContentLoaded", () => {

    let select = document.querySelector("select")
    let frontend = document.querySelector(".frontend")
    let backend = document.querySelector(".backend")

    select.addEventListener("change", () => {
        if(select.value === "all"){
            frontend.style.display = "inline"
            backend.style.display = "inline"
        } else if(select.value === "frontend") {
            frontend.style.display = "inline"
            backend.style.display = "none"
        } else if(select.value === "backend"){
            frontend.style.display = "none"
            backend.style.display = "inline"
        } else if(select.value === "--"){
            frontend.style.display = "none"
            backend.style.display = "none"
        }
    })
})