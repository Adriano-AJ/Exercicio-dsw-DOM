// JavaScript Document 
const btn = document.getElementById('btnOnClick');
const link = document.getElementById("link");
const paragrafo = document.getElementById("paragrafo");

btn.addEventListener("click", onClick);
link.addEventListener("click", onClick);
paragrafo.addEventListener("click", onClick);

function onClick(){
    alert("Clicado.");
}

//onsubmit
const sub = document.getElementById("sub")
const down = document.getElementById("down")

sub.addEventListener("submit", onSubmit);
down.addEventListener("submit", onSubmit);

function onSubmit(){
    alert("Obrigado por enviar o formulario.")
}
//onchange
const select = document.getElementById("select")
select.addEventListener('change', onChange)

function onChange(){
   confirm("Deseja mudar de sexo mesmo?");
}
//onmouseover e onmouseout
const btnMouseOver = document.getElementById("btn_mouseOverOut");
btnMouseOver.addEventListener('mouseover', onMouseOver)
btnMouseOver.addEventListener('mouseout', onMouseOut)
function onMouseOver(){
    btnMouseOver.textContent = 'Você está sobre o botão.';
    
}
function onMouseOut() {
    btnMouseOver.textContent = 'Você retirou o mouse sobre o botão.'
}


//onblur e onfocus

const inpM = document.getElementById("inp_matricula");
const inpN = document.getElementById("inp_nome");
const texto = document.getElementById("texto");

inpM.addEventListener("blur", onBlur);
inpM.addEventListener("focus", onFocusM)
inpN.addEventListener("focus", onFocus);
inpN.addEventListener("blur", onBlur);

function onBlur(){
    texto.textContent=""
}
function onFocus(){
    texto.textContent=`Digite o nome nesse campo.`
}
function onFocusM(){
    texto.textContent=`Digite a matricula nesse campo.`
}
//onLoad

document.addEventListener("DOMContentLoaded", function() {
    alert("A página foi carregada com sucesso!");
});

//Exercicio 2

const btnDate = document.getElementById("btn");
const txt = document.getElementById("txt");

btnDate.addEventListener("click", updateDateTime);

function updateDateTime() {
    const now = new Date();

    const monthNames = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho", 
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    const dayNames = [
        "domingo", "segunda-feira", "terça-feira", 
        "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
    ];

    // Data por extenso
    const dayOfWeek = dayNames[now.getDay()];
    const day = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    const formattedDate = `${dayOfWeek}, ${day} de ${month} de ${year}`;


    // Formatação da hora
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Atualizar o conteúdo
    txt.textContent = formattedDate; // Data no div
    btnDate.value = formattedTime; // Hora no value do botão

    // Atualizar continuamente com setTimeout
    setTimeout(updateDateTime, 1000); // Atualiza após 1 segundo
}

