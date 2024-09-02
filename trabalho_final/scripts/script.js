const email = document.getElementById('email');
const senha = document.getElementById('senha');
const entrar = document.getElementById('inBtn');
const cadastrar = document.getElementById('cadastraBtn');

cadastrar.addEventListener('click',()=>{
    window.location.href = 'cadastro.html';
})

function entrarStream(){
    if(email.value =="" || senha.value==""){
        throw "Email ou senha inválidos!"
    } else {
        fetch('usuarios.json')
            .then(response =>{
                if(!response.ok){
                    throw new Error("A solicitação não foi bem sucedida.")
                }
                return response.json();
            })
            .then(data =>{
                const usuarios = data.usuarios;
                console.log(usuarios);
                for(usuario of usuarios){
                    if(email.value == usuario.email){
                        if(senha.value == usuario.senha){
                            alert("Bem-vindo!");
                            window.location.href = 'streaming.html';
                            break;
                        } else {
                            alert("Email ou senha inválidos");
                            break;
                        }
                    } else {
                        alert("Email ou senha inválidos");
                        break;
                    }
                }
            })
            .catch(erro =>{
                console.error("Erro: "+ erro.message);
            })
        }  
}

entrar.addEventListener('click',()=>{
    try{
        entrarStream();
    } catch(erro){
        console.error("Ocorreu um erro: ", erro);
    }
})