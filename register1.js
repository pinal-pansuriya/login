function savedata() {
    let name= document.getElementById("name").value
    let email = document.getElementById("email").value
    let password= document.getElementById("password").value

    // localStorage.setItem("name",uname)
    // localStorage.setItem("email",uemail)
    // localStorage.setItem("password",upassword)

    let user_records = new Array()
    user_records = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : []

    if(user_records.some((v) => {
        return v.email == email
        
    
    }))
    {
        alert(" alredy  exits data!login your account")
        window.open("login.html")
    
    
}else{
        user_records.push({
            "name" : name,
            "email" : email,
            "password" : password
        })
    
    localStorage.setItem("users",JSON.stringify(user_records))
    }
}







































// function getRegisterData(){
//     let fullName = document.getElementById("reg-fullName").value;
//     let email = document.getElementById("reg-email").value;
//     let password = document.getElementById("reg-password").value;

//     let userdata = new Array();
//     userdata = JSON.parse(localStorage.getItem("userdata")) ? JSON.parse(localStorage.getItem("userdata")) : [];

    
//     if (userdata.some(element => element.email == email)) {
//         document.getElementById("exist-msg").innerHTML = "User Already Exist";
//         alert("User Already Exist");
//         window.open("login.html");
//     }
//     else {
//         userdata.push({
//             FullName : pinal,
//              email : pinal@gmail.com,
//              password : 123,
//             usertasks: [],
            
//         });
//         localStorage.setItem("userdata", JSON.stringify(userdata));
//         window.open("login.html");
//     }
// }

