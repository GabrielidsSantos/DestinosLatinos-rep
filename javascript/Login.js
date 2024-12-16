document.getElementById('Btn').addEventListener('click', function () {
    // Faz o submit do formulário
    const form = document.getElementById('Forms');
    form.submit();

    // Abre a nova aba
    window.open('./index.html');
});