interface IValidations {
    [key: string]: IExp;
    name: IExp;
    email: IExp;
    password: IExp;
    confirma_pass: IExp;
}

interface IExp {
    validation: RegExp;
    message: string;
}

interface IFormData {
    [key: string]: string;
    name: string;
    email: string;
    password: string;
    confirma_pass: string;
}

const validations: IValidations = {
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
}

const form = <HTMLFormElement>document.getElementById("formulario");

form?.addEventListener("submit", evt => {
    evt.preventDefault();
    const data: IFormData | any = {};
    const formData = new FormData(evt.target as HTMLFormElement);
    for (let [key, value] of formData) {
        data[key] = value as string;
    }
    for (let k in data) {
        if (data[k] && !validations[k].validation.test(data[k])) {
            console.log(k);
            
            return alert(validations[k].message);
        }
    }
    if (data.password !== data.confirma_pass) return alert("Las contraseñas difieren");
    form.reset();
    alert("Registro exitoso");
})