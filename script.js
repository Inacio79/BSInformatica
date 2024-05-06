function enviarDados() {
    const formulario = document.getElementById("meuFormulario");
    const formData = new FormData(formulario);
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });


    fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar dados');
        }
        return response.json();
    })
    .then(data => {
        // Aqui você pode lidar com a resposta do backend, se necessário
        console.log('Resposta do servidor:', data);
        alert(data.message)
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

function buscarDados() {
    fetch('http://localhost:8080/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar dados');
        }
        return response.json();
    })
    .then(data => {
        console.log('Resposta do servidor:', data);
        alert(data.message)
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}
