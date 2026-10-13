
const botao = document.querySelector("#botao-informacao");
const informacao = document.querySelector("#informacao-extra");

botao.addEventListener("click", function () {
    const estaFechado = informacao.hidden;

    informacao.hidden = !estaFechado;

    botao.setAttribute(
        "aria-expanded",
        String(estaFechado)
    );

    if (estaFechado) {
        botao.textContent = "Mostrar menos";
    } else {
        botao.textContent = "Saber mais sobre a nossa filosofia";
    }
});