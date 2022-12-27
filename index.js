const fName = document.getElementById("firstName")
const lName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let entrar
    parrafo.innerHTML = ""
    if (fName.value.length < 3) {
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if (lName.value.length < 3) {
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if (password.value.length < 8) {
        warnings += `La contraseña debe tener al menos 8 caracteres <br>`
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado"
    }
})