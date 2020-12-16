    function mensagem(){
        alert("Você ganhou 2 horas gratuitas do curso de CSS")
    }

    function validar(){
        var nome=formuser.nome.value
        var email=formuser.email.value

        if(nome==""){
            alert("O preenchimento do campo nome é obrigatorio")
            formuser.nome.focus()
            return false
        }

        if(email=="" || email.indexOf('@') == -1){
            alert("O preenchimento do campo email é obrigatorio")
            formuser.email.focus()
            return false
        }

        alert("Prezado(a) "+nome+" estaremos lhe enviado o nosso portifolio para seu email "+email+" .")

    }
