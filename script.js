let userData = {
    email: "usuario@gmail.com",
    password: "12345"
};

function login() {
    inputFromEmail = document.getElementById('inputEmail').value;
    inputFromPassword = document.getElementById('inputPassword').value;

    for (const u in userData) {
        if (inputFromEmail === userData.email && inputFromPassword === userData.password) {
            localStorage.setItem("logado", JSON.stringify(inputFromEmail));
            document.getElementById("login-Page").style.display = "none";
            document.getElementById("loged").style.display = "block";

        } else {
            alert('Dados incorretos, tente novamente!');
            user.value = "";
            user.focus();
        }
    }    
}

function logout() {
    localStorage.clear();
    localStorage.setItem('logout-option', JSON.stringify(logoutButton));
    document.getElementById("loged").style.display = "none";
    document.getElementById("login-Page").style.display = "block";
}

let accessButton = document.getElementById('access');
let logoutButton = document.getElementById('logout-option');

accessButton.addEventListener('click', function() {
    login();
});

logoutButton.addEventListener('click', function() {
    logout();
});
