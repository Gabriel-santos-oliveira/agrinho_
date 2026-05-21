/* ================================= */
/* ACCORDION */
/* ================================= */

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {

  const button = item.querySelector(".accordion-header");

  button.addEventListener("click", () => {

    item.classList.toggle("active");

  });

});

/* ================================= */
/* AUMENTAR / DIMINUIR FONTE */
/* ================================= */

const body = document.body;

let tamanhoFonte = 16;

const aumentarFonte = document.getElementById("aumentarFonte");
const diminuirFonte = document.getElementById("diminuirFonte");

aumentarFonte.addEventListener("click", () => {

  tamanhoFonte += 1;

  body.style.fontSize = `${tamanhoFonte}px`;

});

diminuirFonte.addEventListener("click", () => {

  if(tamanhoFonte > 12){

    tamanhoFonte -= 1;

    body.style.fontSize = `${tamanhoFonte}px`;

  }

});

/* ================================= */
/* DARK / LIGHT MODE */
/* ================================= */

const alternarTema = document.getElementById("alternarTema");

alternarTema.addEventListener("click", () => {

  body.classList.toggle("light-mode");

});

/* ================================= */
/* LEITURA POR VOZ */
/* ================================= */

const lerConteudo = document.getElementById("lerConteudo");
const pararLeitura = document.getElementById("pararLeitura");

let fala;

/* Ler somente conteúdo principal */

lerConteudo.addEventListener("click", () => {

  window.speechSynthesis.cancel();

  const texto = document.querySelector("main").innerText;

  fala = new SpeechSynthesisUtterance(texto);

  fala.lang = "pt-BR";
  fala.rate = 1;
  fala.pitch = 1;

  window.speechSynthesis.speak(fala);

});

/* Parar leitura */

pararLeitura.addEventListener("click", () => {

  window.speechSynthesis.cancel();

});

/* ================================= */
/* FORMULÁRIO */
/* ================================= */

const formulario = document.getElementById("formSeminario");

formulario.addEventListener("submit", (event) => {

  event.preventDefault();

  alert("Inscrição realizada com sucesso!");

  formulario.reset();

});

/* ================================= */
/* COMENTÁRIOS */
/* ================================= */

const btnComentario = document.getElementById("btnComentario");
const textarea = document.querySelector("textarea");

btnComentario.addEventListener("click", () => {

  if(textarea.value.trim() !== ""){

    alert("Comentário enviado com sucesso!");

    textarea.value = "";

  }else{

    alert("Digite um comentário antes de enviar.");

  }

});
