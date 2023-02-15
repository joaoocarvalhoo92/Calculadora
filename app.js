const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id === "=") {
        display.value = eval(display.value);
      } else if (btn.id === "ac") {
        display.value = "";
      } else if (btn.id == "de") {
        display.value = display.value.slice(0, -1);
      } else {
        display.value += btn.id;
      }
    });
  });

  window.addEventListener("load", function() {
    var barra = document.querySelector(".barra");
    var porcentagem = document.querySelector("#porcentagem");
    var i = 0;
    var intervalo = setInterval(function() {
      if (i >= 100) {
        clearInterval(intervalo);
        document.querySelector("#loading").style.display = "none";
      } else {
        i += 1;
        barra.style.width = i + "%";
        porcentagem.innerHTML = i + "%";
      }
    }, 30);
  });