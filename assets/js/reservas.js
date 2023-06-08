const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const diaInput = document.querySelector('#dia')
const mesInput = document.querySelector('#mes')
const horarioInput = document.querySelector('#horario')
const CPFInput = document.querySelector('#CPF')


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
        alert("Por favor, preencha o seu Nome");
        return;
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu Email");
        return;
    }

    if (diaInput.value === "") {
        alert("Por favor, preencha o Dia da reserva");
        return;
    }

    if (mesInput.value === "") {
        alert("Por favor, preencha o Mês da reserva");
        return;
    }

    if (horarioInput.value === "") {
        alert("Por favor, preencha o Horário da reserva");
        return;
    }

    if (CPFInput.value === "") {
        alert("Por favor, preencha o seu CPF");
        return;
    }

    form.submit();
});

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }
    return false;
}