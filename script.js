window.addEventListener("DOMContentLoaded", function () {
    document.getElementById('formulario').addEventListener("submit", function (e) {
        e.preventDefault();
        var formData = new FormData(e.target);

        console.log(Object.fromEntries(formData));
    })
})

function calcularTotal(){
    var qtd = document.getElementById('qtd').value
    var valor = document.getElementById('valor').value

    document.getElementById('total').value = qtd * valor
}