document.getElementById("botao-entrar").addEventListener("click", function(){
    window.location.href = "dashboard.html";
});

document.getElementById("botao-entrar").addEventListener("click", function(){
    window.location.href = "dashboard.html";
});

function gerarRelatorio(){
    alert ("Relatório gerado com sucesso!");
}

function configuracoesSalvas() {
    if(confirm("Alterações feitas com sucesso. Deseja cancelar?")){
        alert ("Alterações Confirmadas.");
    }else{
        alert("Alterações Desfeitas.");
    }
}

