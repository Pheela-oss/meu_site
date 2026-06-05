const loginButton = document.getElementById("loginButton")
const nickname = document.getElementById("Nickname");
const password = document.getElementById("Password");

loginButton.addEventListener("click", function () {
    const nickname_storage = localStorage.getItem("username");
    const password_storage = localStorage.getItem("password");
    
    if (nickname.value == "" || password.value == ""){
        alert("Nickname/Senha Vazia")
    } else {
        login(password_storage, nickname_storage);
    }

    console.log(nickname_storage);
    console.log(password_storage)
});

function login(password_storage, nickname_storage){
    const imagem = document.getElementById("emotion profile")
    const letra = document.getElementById("h1fromLEM")
    const modal = document.querySelector(".loginErrorMessages")

    if ( password_storage === null || nickname_storage === null){
        localStorage.setItem("username", nickname.value);
        localStorage.setItem("password", password.value);
        alert("Nao achei o usuario, então eu criei!")
        imagem.src = "assets/content/media/Bothered Kuromi.jpg"
    } else {
        alert("Achei o usuário!")
        if (password_storage === password.value && nickname_storage === nickname.value){
            alert("Login com sucesso ;3")
            imagem.src = "assets/content/media/Happy Kuromi.jpg"
            loginError(modal);
        } else {
            alert("senha ou usuário incorreto!")
            imagem.src = "assets/content/media/Scared Kuromi.jpg"
            loginError(modal);
        }
    }
}

function loginError(modal){
    modal.style.top = "0px"

    setTimeout(function() {
        modal.style.top = "-100px"
    }, 2200)
};