let password = document.getElementById('pass')
let icon = document.getElementById('icon')

function show() {
    if (password.type == 'text') {
        password.type = 'password'
        icon.className = 'fa-solid fa-eye position-absolute'
        icon.style.color = 'initial'
    }
    else {
        password.type = 'text'
        icon.className = 'fa-solid fa-eye-slash position-absolute'
        icon.style.color = 'red'
    }
}