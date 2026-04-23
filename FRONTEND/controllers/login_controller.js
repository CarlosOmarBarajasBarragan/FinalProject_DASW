// Función para alternar entre Login y Registro
function toggleForms() {
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    
    // Si el login está oculto, lo mostramos y ocultamos el registro
    if (loginSection.classList.contains('hidden')) {
        loginSection.classList.remove('hidden');
        registerSection.classList.add('hidden');
    } else {
        // Si el login está visible, lo ocultamos y mostramos el registro
        loginSection.classList.add('hidden');
        registerSection.classList.remove('hidden');
    }
}