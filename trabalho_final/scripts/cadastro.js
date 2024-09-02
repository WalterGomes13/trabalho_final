const email = document.getElementById('email');
const senha = document.getElementById('senha');
const rptSenha = document.getElementById('rptsenha');
const cadastraBtn = document.getElementById('cadastraBtn');

function cadastrar(){
    if(email.value =="" || senha.value=="" || rptSenha.value == ""){
        throw "Email ou senha inválidos!"
    } else {
        fetch('usuarios.json')
            .then(response =>{
                if(!response.ok){
                    throw new Error("A solicitação não foi bem sucedida.")
                }
                return response.json();
            })
            .then(data => {
                const usuarios = data.usuarios;
                for(usuario of usuarios){
                    if(email.value == usuario.email){
                        alert("Usuário já cadastrado!");
                        window.location.href = 'index.html';
                        break;
                    } else {
                        if(senha.value == rptSenha.value){
                            alert("Usuário cadastrado com sucesso!");
                            const novoUsuario = {
                                email: email.value,
                                senha: senha.value
                            };
                            
                            usuarios.push({
                                "email":email.value,
                                "senha":senha.value
                            });
                            console.log(usuarios);
                            window.location.href = 'index.html';
                            break;
                        } else {
                            alert('As senhas estão diferentes!');
                            break;
                        }
                    }
                }
            })
            .catch(erro =>{
                console.error("Erro: "+erro.message);
            })
    }
}

cadastraBtn.addEventListener('click',()=>{
    try{
        cadastrar();
    } catch(erro){
        console.error("Ocorreu um erro: ", erro);
    }
})