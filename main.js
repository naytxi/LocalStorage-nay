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
    document.body.innerHTML = `<p>HOLA ${UserInfo.name} EMAIL: ${UserInfo.email} MENSAJE: ${UserInfo.message} IMAGEN: ${UserInfo.image}</p>`;
});


