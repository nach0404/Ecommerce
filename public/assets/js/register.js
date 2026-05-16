document.getElementById('form-register').addEventListener('submit', function(e) {

    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const errores = [];

    // 1. Campos no vacios y sin espacios al principio o al final
    if (!nombre.trim()) errores.push("El nombre no puede estar vacio.");
    if (!apellido.trim()) errores.push("El apellido no puede estar vacio.");
    if (!email.trim()) errores.push("El email no puede estar vacio.");
    if (!password.trim()) errores.push("La contraseña no puede estar vacio.");

    // 2. Validar que los valores no tengan espacios al inicio o al final
    if (nombre !== nombre.trim()) errores.push("El nombre no debe tener espacios al inicio o al final.");
    if (apellido !== apellido.trim()) errores.push("El apellido no debe tener espacios al inicio o al final.");
    if (email !== email.trim()) errores.push("El email no debe tener espacios al inicio o al final.");

    // 3. Email valido
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) errores.push("El email no es valido.");

    // 4. Validaciones de contraseña
    if (password.length < 8) errores.push("La contraseña debe incluir al menos 8 caracteres");

    if (!/[a-zA-Z]/.test(password)) errores.push("La contraseña debe incluir al menos una letra.");

    if (!/[0-9]/.test(password)) errores.push("La contraseña debe incluir al menos un numero.");

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errores.push("La contraseña debe incluir al menos un caracter especial.");

    // 5. Cadenas prohibidas en la contraseña
    const cadenasProhibidas = ["password", "1234", "qwerty", nombre.toLowerCase(), apellido.toLowerCase()];
    cadenasProhibidas.forEach(cadena => {
        if (password.toLowerCase().includes(cadena)) 
            errores.push(`La contraseña no debe contener "${cadena}".`);
    });

    // 6. La contraseña no puede ser igual al email
    if (password === email) errores.push("La contraseña no puede ser igual al email.");

    // Si hay errores, se muestran y se cancela el envio
    if(errores.length > 0) {
        e.preventDefault();
        alert(errores.join("\n"));
    }

});