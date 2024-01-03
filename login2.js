function savedata() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let user_records = new Array()
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
        return v.email == email && v.password == password
    })) {
        alert("login successfull!!")
        // window.open("dashboard.html")
        let current_user = user_records.filter((v) => {
            return v.email == email && v.password == password
        })

        localStorage.setItem("name", current_user.name)
        localStorage.setItem("email", current_user.email)
        window.open("dashboard.html")
    }
    else {
        alert("login fail!! register your data")
    }
}
