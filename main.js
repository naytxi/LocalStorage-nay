/*Primero capturamos el form y el añadimos un evento de subida*/
document.getElementById("form").addEventListener("submit", function(event) {

    /*let users = JSON.parse(localStorage.getitem("users")) || []*/

    event.preventDefault();
    /*metemos los valores de los input en una variable*/
    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        image: document.getElementById("image").value,
    }
    
    /*users.push(user)*/
    
    /*subimos el user al localstorage como un string en Json*/
    localStorage.setItem("user", JSON.stringify(user));
    /*aqui lo volvemos a recuperar y lo metemos en una variable*/
    const UserInfo = JSON.parse(localStorage.getItem("user"));
   /*se crea un parrafo con la info subida al localstorage debajo del form, se guarda en una variable y despues se añade la info*/
    let UserInfoparagraph = document.createElement("p");    
    UserInfoparagraph.innerHTML = `HOLA ${UserInfo.name} <br> EMAIL: ${UserInfo.email} <br> MENSAJE: ${UserInfo.message} <br> IMAGEN: ${UserInfo.image}`;
    document.body.appendChild(UserInfoparagraph);
});
/*capturamos el boton de borrar y le añadimos un evento de click para el borrado de datos del localstorage con clear*/
document.getElementById("clear").addEventListener("click", function() {
    localStorage.clear();
});

