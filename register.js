// function getRegisterData() {
//     let fullName = document.getElementById("reg-fullName").value;
//     let email = document.getElementById("reg-email").value;
//     let password = document.getElementById("reg-password").value;

//     let user_data = new Array();
//     user_data = JSON.parse(localStorage.getItem("user_data")) ? JSON.parse(localStorage.getItem("user_data")) : [];

//     if (user_data.some(element => element.email == email) || user_data.some(element => element.mobile == mobile)) {
//         document.getElementById("exist-msg").innerHTML = "User Already Exist";
//         alert("User Already Exist");
//         window.open("login.html");
//     }
//     else {
//         user_data.push({
//             "fullName": fullName,
//             "email": email,
//             "password": password,
//             "user_tasks": [],
            
//         });
//         localStorage.setItem("user_data", JSON.stringify(user_data));
//         window.open("login.html");
//     }
// }
//  function func1(){
//     let fname = document.getElementById("reg-fullName").value
//     let Email = document.getElementById("reg-email").value
//         let pass = document.getElementById("reg-password").value
    
//         localStorage.setItem(fname,Email,pass)
    
    // }

const registration = document.getElementById("register")

registration.onclick = (ragister) => {
    
    let fname= document.getElementById("reg-fullName").value
    let Email = document.getElementById("reg-email").value
    let pass = document.getElementById("reg-password").value

    let setfname = localStorage.getItem("reg-fullName")
    let setuser = localStorage.getItem("reg-email")
    let setpass = localStorage.getItem("reg-password")
    if(setfname !="" && setuser !="" && setpass !=""){
    if( fname==setfname && Email == setuser && pass == setpass ){
    alert("success full!!")
    window.open("dashboard.html")
    }       
}else{
    alert("your details are invalide!register your data")
}
}
