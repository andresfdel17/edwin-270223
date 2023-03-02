"use strict";
const validations = {
    name: {
        validation: /^(?![\s\S]*[^\w -]+)[\s\S]*?$/,
        message: "Nombre no escrito correctamente"
    },
    email: {
        validation: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        message: "Correo electronico no valido"
    },
    password: {
        validation: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        message: "Contraseña no escrita correctamente, minimo 6 caracteres y máximo 16"
    },
    confirma_pass: {
        validation: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        message: "Confrimación de contraseña no escrita correctamente"
    },
};
const form = document.getElementById("formulario");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", evt => {
    evt.preventDefault();
    const data = {};
    const formData = new FormData(evt.target);
    for (let [key, value] of formData) {
        data[key] = value;
    }
    for (let k in data) {
        if (data[k] && !validations[k].validation.test(data[k])) {
            console.log(k);
            return alert(validations[k].message);
        }
    }
    if (data.password !== data.confirma_pass)
        return alert("Las contraseñas difieren");
    form.reset();
    alert("Registro exitoso");
});
//# sourceMappingURL=app.js.map