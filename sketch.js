import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js"
          
const firebaseConfig = {
    apiKey: "AIzaSyBg35YqylCjeYa074djcTnkdmI-USfh31M",
    authDomain: "portfolio-59957.firebaseapp.com",
    projectId: "portfolio-59957",
    storageBucket: "portfolio-59957.firebasestorage.app",
    messagingSenderId: "684060252659",
    appId: "1:684060252659:web:cc6ce770ba429f45709a86",
    measurementId: "G-CGWM9PX4W8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const loginButton = document.getElementById("Entrar");
const nicknameInput = document.getElementById("Nickname");
const passwordInput = document.getElementById("Password");
const excluirConta = document.getElementById("excluirConta")
const profMOTE = document.getElementById("emotion profile")
const h1fromLEM = document.getElementById("h1fromLEM")
const LoginerrorPOPUP = document.querySelector(".loginErrorMessages")

// firebase & variavéis acima dessa linha

loginButton.addEventListener("click", async function(){
    let nickname = nicknameInput.value;
    let password = passwordInput.value;
    
    try {
        const resultado = await signInWithEmailAndPassword(auth, nickname, password);

        console.log("deu certo!");
    } catch(error) {
        if (error.code === "auth/invalid-email"){
            console.log("escreve direito analfabeto BURRO", error.message)
        } else if (error.code === "auth/user-not-found"){
            console.log("nao existe igual meu pai", error.message)
            createUserWithEmailAndPassword(auth, nickname, password);
        } else if (error.code === "auth/wrong-password"){
            console.log("errou a senha bixo véi", error.message)
        } else if (error.code === "auth/invalid-credential"){
            console.log("ou nao existe ou tem algo errado", error.message);
        } else {
            console.log("deu merda, agora é só deus", error.message);
        }
    }

});


// estudando . . .