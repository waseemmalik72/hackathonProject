import { app } from '../../firebase/firebase.js'
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

let auth = getAuth(app);

let signUpBtn = document.querySelector(".submit");

signUpBtn.addEventListener("click", () => {

    let sEmail = document.getElementById("s-email").value;
    let sPassword = document.getElementById("s-pass").value;

    createUserWithEmailAndPassword(auth, sEmail, sPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            location.replace("./signin.html")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.querySelector(".error-para").innerHTML = errorMessage            
        });
})




let btn = document.querySelector(".l-btn")
btn.addEventListener("mouseover", () => {
    let remove = document.querySelector(".s-btn")
    remove.classList.remove("s-btn")
})
btn.addEventListener("mouseout", () => {
    let remove = document.getElementById("s-btn")
    remove.classList.add("s-btn")
})


