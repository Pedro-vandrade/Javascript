const URL_ESTADOS = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'

const state = document.getElementById("state");
const city = document.getElementById("city");
const country = document.getElementById("country");

function loadStates() {
    fetch(URL_ESTADOS)
    .then(response => response.json())
    .then(estados => {
        selectEstado.innerHTML = '<option value="">Selecione um estado</option>'

        estados.forEach(estado => {
            const option = document.createElement('option')
            option.value = estado.sigla;
            option.textContent = estado.nome;
            option.setAttribute('data-id', estado.id)
            selectEstado.appendChild(option)
        })
    })
    .catch(error => console.error('Erro ao carregar estados:', error));
}



function confirmForm() {

    document.getElementById("myForm").submit();


    const nome = docucumet.getElementById("name");
    const dataNasc = document.getElementById("dateBirth");
    const celular = document.getElementById("phone");
    const email = document.getElementById("email");
    
}