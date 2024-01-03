let gif = document.getElementById("gifs")
let gifss = ["./image/giphy.gif", "./image/giphy2.gif.gif", "./image/giphy1.gif.gif"]
setInterval(function () {
    let random = Math.floor(Math.random() * gifss.length)
    gif.src = gifss[random]
}, 500)
var dt = new Date()
document.getElementById("date-time").innerText = dt