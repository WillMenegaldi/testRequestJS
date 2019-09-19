var button  =   document.getElementById('botao');
var lista   =   document.getElementById('box-noticias');

const url ='https://randomuser.me/api/?results=10';

button.addEventListener('click',function(){
    pegarDados();
});

function pegarDados(){
    fetch(url)
        .then((result) => result.json())
        .then((finalResult)=>{
            let dados = finalResult.results;
            setaDados(dados);
        })
        .catch(alert("Erro no carregamento dos dados!"));
}
function setaDados(dados){
    let impressao='';
    for(let i=0;i<dados.length;i++){
        impressao+=`
                    <div id="noticia">
                        <p> ${ dados[i].name.first}</p>
                    </div>
                    `;
    }
    lista.innerHTML=impressao;
}