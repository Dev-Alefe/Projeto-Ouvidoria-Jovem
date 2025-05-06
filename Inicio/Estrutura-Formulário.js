// Script para Controlar o Formulário //

const idadeInput = document.getElementById("idadeAluno")
const campoResponsavel = document.getElementById("nomeResponsavel");
const nomeResp = document.getElementById("responsavel");
const idadeResp = document.getElementById("idadeResponsavel");

idadeInput.addEventListener("input", () => {
    const idade = parseInt(idadeInput.value);
    if (idade <= 17) {
        campoResponsavel.style.display = "block";
        nomeResp.setAttribute("required", "required");
        idadeResp.setAttribute("required", "required");
    }
    else {
        campoResponsavel.style.display = "none";
        nomeResp.removeAttribute("required");
        idadeResp.removeAttribute("required");
    }
});