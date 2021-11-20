// atividade módulos 11 e 12 PROG WEB - 182803 Gabriel T. Vastella

//definindo variáveis globais: vetor de alunos, boolean para alternar exibição, linhas definidas da tabela

var cadastrados = [];
var showing = false;
var legendas = ["Nome", "RA", "Sexo", "Idade", "Endere\u00e7o", "Telefone", "Email"];


//criando o objeto aluno
function aluno(nome,ra,sexo,idade,endereco,telefone,email){
    this.nome=nome;
    this.ra=ra;
    this.sexo=sexo;
    this.idade=idade;
    this.endereco=endereco;
    this.telefone=telefone;
    this.email=email;
}

//função para alternar exibição de alunos cadastrados na tela
function updateScreen(){

     if (!showing){  

        //exibir a tabela
        showing = true;        document.getElementById("divMostrar").innerHTML=("<img src='./icons/visualizaroff.png' alt='' class='Icon'> Ocultar alunos cadastrados<br>");        //criação da tabela para exibir        var body = document.getElementById("divMostrar");
        var tbl = document.createElement("table");
        tbl.setAttribute("id", "tabela")
        var legendaTr = document.createElement("tr");
        legendaTr.setAttribute("class", "linhaInfos");
        for (var j = 0; j < 7; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(legendas[j]);
            cell.appendChild(cellText);
            legendaTr.appendChild(cell);
        }
        tbl.appendChild(legendaTr);

        // loop em todos os alunos cadastrados
        for (var i = 0; i < cadastrados.length; i++) {
            var alunoTr = document.createElement("tr");
            alunoTr.setAttribute("class", "linhaValores");
                //loop em todos os valores do objeto aluno
                for (var key in cadastrados[i]) {
                    var alunoTd = document.createElement("td");
                    var texto = document.createTextNode(cadastrados[i][key]);
                    alunoTd.appendChild(texto);
                    alunoTr.appendChild(alunoTd);
                }
             tbl.appendChild(alunoTr);
        }   


        body.appendChild(tbl);

    } else{

        //ocultar a tabela

        showing = false;        document.getElementById("divMostrar").innerHTML=("<img src='./icons/visualizar.png' alt='' class='Icon'> Exibir alunos cadastrados");
    }
}


 //atualizar a tela quando clicar no botão
document.getElementById('divMostrar').onclick = function(e) {
    updateScreen();
};

// função para validar formulário
function validar(){
    
    
    //variáveis inseridas pelo usuário
    var nome = document.forms["formAluno"]["nome"].value;
    var ra = document.forms["formAluno"]["ra"].value;
    var sexo = document.getElementById("sexo").value;
    var idade = document.forms["formAluno"]["idade"].value;
    var endereco = document.forms["formAluno"]["endereco"].value;
    var telefone = document.forms["formAluno"]["telefone"].value;
    var email = document.forms["formAluno"]["email"].value;

    //checagem de nulo
    if (nome == null || nome == "" ||ra == null || ra == "" || sexo == null  || sexo == "" || idade == null || idade == ""|| endereco == null || endereco == "" ||telefone == null ||telefone == "" || email == null|| email == ""){
        alert("Todos os campos devem estar preenchidos!");
        return false;
    }

    //checar idade
    if (idade < 10){
        alert("A idade precisa ser superior a 10!");
        return false;

    }
    //checar RA
    if (ra.toString().length != 6){
        alert("O RA precisa ter 6 digitos!");
        return false;
    } 

    //checar email
    if (!email.toString().includes("@")){
        alert("O email precisa ser valido!");
        return false;

    }

    //instanciando o objeto aluno
    var al = new aluno(nome,ra,sexo,idade,endereco,telefone,email);

    //adicionando o aluno no vetor
    cadastrados.push(al); 

    //atualizar tela para dados atuais
    if (showing){
        showing = false;
        updateScreen();
    }

    alert("Aluno cadastrado com sucesso.");

    //limpando o formulario manualmente pois não é possivel usar reset
    document.forms["formAluno"]["nome"].value = null;
    document.forms["formAluno"]["ra"].value = null;
    document.getElementById("sexo").value  = null;
    document.forms["formAluno"]["idade"].value  = null;
    document.forms["formAluno"]["endereco"].value  = null;
    document.forms["formAluno"]["telefone"].value  = null;
    document.forms["formAluno"]["email"].value  = null;

     //evitar que a página atualize
    return false;


   
 
   
}



