function clik() {
    let hh = document.getElementById("hh")
    if (hh.className === "ul") {
        hh.className = "ll"
    } else {
        hh.className = "ul"
    }
}
// alert("hello")

// let timeout = setTimeout(time , 3000)

// function time() {
//     alert("hello")
// }

let btn = document.querySelector("#myBtn")
console.log(btn)
window.onscroll = function () {
    if (window.scrollY >= 600) {
        console.log("xxxxx")
        btn.style.cssText = "display: block;"
    } else (
        btn.style.cssText = "display: none;"
    )
}

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left:0,
        behavior:"smooth"
    })
}