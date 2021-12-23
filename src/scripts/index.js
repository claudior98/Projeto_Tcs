function cls(){
    var nome = document.getElementById("nome");
    alert(`Obrigado ${nome.value} sua mensagem foi enviada`);
    document.getElementById("msg").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nome").value = "";
};

