const formulario = document.querySelector("form");
const Iusername = document.querySelector(".username");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Iidoso = document.querySelector(".idoso");
const IPcd = document.querySelector(".Pcd");
const Iestudante = document.querySelector(".estudante");

function cadastrar() {

    fetch("http://localhost:8080/cadastrar",
    {
            headers:{
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            method: "Post",
            body: JSON.stringify({
                username: Iusername.value,
                email: Iemail.value,
                senha: Isenha.value,
                idoso: Iidoso.value,
                Pcd: IPcd.value,
               estudante: Iestudante.value,
            })
           
    })    
        .them(function (res) {console.log (res) })
        .catch(function (res) {console.log (res) })
    
};
function limpar() {
    Iusername.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Iidoso.value = "";
    IPcd.value = "";
    Iestudante.value = "";

};


formulario.addEventListener('cadastrar', function(event){
    event.preventDefault();
        cadastrar();
        limpar();
});