function validarLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    // Aqui você pode adicionar a lógica para o login
    // Por exemplo, enviar os dados para um servidor para autenticação
    // Ou apenas mostrar uma mensagem de sucesso
    alert("Login bem sucedido!");
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtenção dos valores dos campos do formulário
        var name = document.getElementById('inputName').value;
        var email = document.getElementById('inputEmail').value;
        var password = document.getElementById('inputPassword').value;

        // Criação de um objeto com os dados do usuário
        var userData = {
            name: name,
            email: email,
            password: password
        };

        // Envio dos dados para o servidor (substitua 'url_do_seu_backend' pela URL real do seu servidor)
        fetch('url_do_seu_backend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(function(response) {
            if (response.ok) {
                // Se o cadastro for bem-sucedido, redirecione o usuário para outra página
                window.location.href = 'pagina_de_sucesso.html';
            } else {
                // Se houver erro no cadastro, exiba uma mensagem de erro
                alert('Ocorreu um erro ao cadastrar. Por favor, tente novamente.');
            }
        })
        .catch(function(error) {
            console.error('Erro ao enviar dados para o servidor:', error);
            // Se houver erro na solicitação, exiba uma mensagem de erro
            alert('Ocorreu um erro ao cadastrar. Por favor, tente novamente.');
        });
    });
});
