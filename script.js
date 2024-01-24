const textarea = document.getElementById("textarea");
const containerResponse = document.getElementById("containerResponse");

textarea.addEventListener("keyup", (e) => {
  let schHeight = e.target.scrollHeight;
  if (window.innerWidth < 768) {
    textarea.style.height = "15rem";
    textarea.style.height = `${schHeight}px`;
  }
  if (window.innerWidth >= 725 && window.innerWidth < 1024) {
    textarea.style.height = "20rem";
    textarea.style.height = `${schHeight}px`;
  }
  if (window.innerWidth >= 1024) {
    textarea.style.height = "34rem";
    textarea.style.height = `${schHeight}px`;
  }

});

function validarEntrada(elemento) {
  elemento.value = elemento.value.replace(/[^a-z ]/g, "");
}

function codificar() {
  let inputValue = textarea.value;
  const encodingScheme = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  let res = inputValue.replace(/[eioua]/g, (match) => encodingScheme[match]);
  inputValue == ""
    ? alert("Por favor digite um texto para criptografar")
    : response(res);
}

function decodificar() {
  let inputValue = textarea.value;
  const decodingScheme = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  let res = inputValue.replace(
    /enter|imes|ai|ober|ufat/g,
    (match) => decodingScheme[match]
  );

  inputValue == ""
    ? alert("Por favor digite um texto para descriptografar")
    : response(res);
}

function response(res) {
  let pResponse = document.getElementsByClassName("p-response");

  pResponse[0].innerHTML = res;
  btnCopy();
  visibleImage();
}

function btnCopy() {
  const buttonCopy = document.createElement("button");
  buttonCopy.className = "btn-copy";
  buttonCopy.innerHTML = "Copia";
  buttonCopy.onclick = copy;

  if (containerResponse.hasChildNodes()) {
    containerResponse.removeChild(containerResponse.lastChild);
    containerResponse.appendChild(buttonCopy);
  } else {
    containerResponse.appendChild(buttonCopy);
  }
}

function copy() {
  let copyText = document.getElementsByClassName("p-response");
  let inputTemp = document.createElement("input");

  inputTemp.value = copyText[0].innerText;
  document.body.appendChild(inputTemp);
  inputTemp.select();
  document.execCommand("copy");

  document.body.removeChild(inputTemp);
}

function visibleImage() {
  let img = document.getElementById('illustration');
  img.style.display = 'none';

  containerResponse.style.justifyContent = 'space-between';
}