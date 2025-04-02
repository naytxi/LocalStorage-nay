document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        image: document.getElementById("image").value,
    }
    
    localStorage.setItem("user", JSON.stringify(user));

    const UserInfo = JSON.parse(localStorage.getItem("user"));
    let UserInfoparagraph = document.createElement("p");    
    UserInfoparagraph.innerHTML = `HOLA ${UserInfo.name} <br> EMAIL: ${UserInfo.email} <br> MENSAJE: ${UserInfo.message} <br> IMAGEN: ${UserInfo.image}`;
    document.body.appendChild(UserInfoparagraph);
});

document.getElementById("clear").addEventListener("click", function() {
    localStorage.clear();
});

