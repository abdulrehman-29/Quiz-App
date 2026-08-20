let loginBtn = document.getElementById("loginBtn")
let loginEmail = document.getElementById("loginEmail")
let loginPassword = document.getElementById("loginPassword")

let userData;
let localStorageData;
var loginUser;

localStorageData = localStorage.getItem("userData")
userData = JSON.parse(localStorageData) || []

console.log(userData);

loginBtn.addEventListener("click", () => {

    console.log(loginEmail.value);
    console.log(loginPassword.value);

    if (loginEmail.value === "" || loginPassword.value === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter Email or Password"
        });
        return; 
    }

    let isFound = false;

    for (let checkUser of userData) {
        if (checkUser.signupEmail === loginEmail.value && checkUser.signupPassword === loginPassword.value) {
            isFound = true;
            // loginUser = checkUser;
            break;
        }
    }

    if (isFound) {
        alert("Welcome");
        window.location.href = "./quiz.html";
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter valid Email or Password"
        });
    }
    // console.log(userName.value);
    console.log(loginUser);

})