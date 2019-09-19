var button  =   document.getElementById('botao');
var lista   =   document.getElementById('box-noticias');

var req = new XMLHttpRequest() ;
const url ='https://randomuser.me/api/?results=10';

button.addEventListener('click',function(){
    pegaDados();
});

function pegaDados(){
    req.onload = function(){
        let dados = JSON.parse(req.responseText);
        setaDados(dados);
    };
    req.open('GET',url,true);
    req.send();
}
function setaDados(dados){
    let impressao='';
    for(let i=0;i<dados.results.length;i++){
        impressao+=`
                    <div id="noticia">
                        <p> ${ dados.results[i].name.first}</p>
                    </div>
                    `;
    }
    lista.innerHTML=impressao;
}