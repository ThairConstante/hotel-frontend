
document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));

    const rol = user.Usertype_Id;
    const nombreusuario =  user.User_Names;
    const idusuario =  user.User_Id;

    // Ocultar todos los ítems de menú inicialmente
    const secciones = [
        "#clientes",
        "#habitaciones",
        "#reservas",
        "a[href='reportes.html']",
        "#users"
    ];
    secciones.forEach(selector => {
        const item = document.querySelector(selector);
        if (item) {
            item.closest(".nav-item").style.display = "none";
        }
    });

    // Mostrar según el rol
    if (rol === 1) {
        // 🔹 Administrador: ve todo
        secciones.forEach(selector => {
            const item = document.querySelector(selector);
            if (item) {
                item.closest(".nav-item").style.display = "block";
            }
        });
    } 
    else if (rol === 2) {
        // 🔹 Operador: clientes, habitaciones, reservas
        ["#clientes", "#habitaciones", "#reservas"].forEach(selector => {
            const item = document.querySelector(selector);
            if (item) {
                item.closest(".nav-item").style.display = "block";
            }
        });
    } 
    else if (rol === 3) {
        // 🔹 Limpieza: solo habitaciones
        ["#habitaciones"].forEach(selector => {
            const item = document.querySelector(selector);
            if (item) {
                item.closest(".nav-item").style.display = "block";
            }
        });
    }

    const userNameSpan = document.getElementById("userNameDisplay");
    if (userNameSpan) {
        userNameSpan.textContent = nombreusuario;
    }

    // 🔹 Asignar enlace con el ID del usuario
    const perfilLink = document.getElementById("perfilLink");
    if (perfilLink) {
        perfilLink.href = `usuarios_perfil.html?id=${idusuario}`;
    }
});

