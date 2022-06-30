const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form__Content");
const errorElement = document.getElementById("error");
const emailRegex = /\S+@\S+\.\S+/;

form.addEventListener("submit", (e) => {
  let messages = [];
  if (nombre.value === "" || nombre.value === null) {
    messages.push("Ingrese un nombre");
  }
  if (email.value === "" || email.value === null) {
    messages.push("Ingrese un email");
  } else if (!emailRegex.test(email.value)) {
    messages.push("Ingrese un email valido");
  }

  if (mensaje.value === "" || mensaje.value === null) {
    messages.push("Ingrese un mensaje");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
    errorElement.style.color = "red";
  }
});
