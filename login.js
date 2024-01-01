 
 const login = document.getElementById("login")

login.onclick = (login) => {
    

    let Email = document.getElementById("email").value
    let pass = document.getElementById("password").value

    let setuser = localStorage.getItem("email")
    let setpass = localStorage.getItem("password")

    if(Email == setuser && pass == setpass ){
    alert("success full!!")
    window.open("dashboard.html")
}else{
    alert("your details are invalide!register your data")
}
}
// function func(){
// let Email = document.getElementById("email").value
//     let pass = document.getElementById("password").value

//     localStorage.setItem(Email,pass)

// }