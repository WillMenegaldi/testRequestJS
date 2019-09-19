var button  =   document.getElementById('botao');
var lista   =   document.getElementById('box-noticias');

const url ='https://randomuser.me/api/?results=10';

button.addEventListener('click',function(){
    pegaDados();
});

function pegaDados(){

    $.ajax({
        type:'GET',
        url:url,
        success: function(data) {
            setaDados(data);
        }
    });
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