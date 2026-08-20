let signupBtn = document.getElementById("signupBtn")
let signupEmail = document.getElementById("signupEmail")
let signupPassword = document.getElementById("signupPassword")
let userName = document.getElementById("userName")

let userObject;
let userData;


let getLocalStorageData = localStorage.getItem("userData")
let usersList = JSON.parse(getLocalStorageData) || [];

signupBtn.addEventListener("click", () => {

    console.log(signupEmail.value);
    console.log(signupPassword.value);
    console.log(userName.value);

    if (userName.value === "" || signupEmail.value === "" || signupPassword.value === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in all fields!"
        });
        return; 
    }

    userObject = {
        userName: userName.value,
        signupEmail: signupEmail.value,
        signupPassword: signupPassword.value
    }


    usersList.push(userObject)

    userData = JSON.stringify(usersList)
    console.log("Updated Users List:", usersList, userData);
    localStorage.setItem("userData", userData)


    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(signupEmail.value)) {

        console.log("Valid email!");

        alert("Signup Successful!");

        window.location.href = "index.html";
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please use correct email"
        });
    }
})
