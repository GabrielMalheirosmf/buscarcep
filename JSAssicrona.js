var imputElement = document.querySelector('#cep')

//fuction para pesquisar o cep

function searchUser(){
    axios.get(`https://viacep.com.br/ws/${inputElement.value}/json/`)
.then(res =>{ 
    document.getElementById('rua').value = res.data.logradouro 
    document.getElementById('bairro').value = res.data.bairro 
    document.getElementById('cidade').value = res.data.localidade 
    document.getElementById('estado').value = res.data.uf
 }) 
 .catch(() => 
 { alert('o cep $(imputElement.value) não existe!');
}) 
}