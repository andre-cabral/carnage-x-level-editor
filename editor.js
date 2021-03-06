var controlPressionado = false;
var posicaoAtualMouse = "";

$('#gerar-mapa').click(function(){
    var largura = $('#largura-mapa').val();
    var altura = $('#altura-mapa').val();
    gerarMapa(largura, altura);
});

$("#gerar-mapa-por-array").click(function(){
    eval($("#codigo-array").val());
    if(typeof array != 'undefined'){
        gerarMapaPelaArray(array);
    }
});

$('.icone-selecao').click(function(){
    $('.icone-selecao').removeClass('selecionado');
    $(this).addClass('selecionado');
});

$("body").on("click", "td", function() {
    pintarQuadrado(this);
});

$("body").on("mouseenter", "td", function() {
    posicaoAtualMouse = this;
    if( controlPressionado ){
        pintarQuadrado(this);
    }
});

$("body").on("mouseout", "td", function() {
    posicaoAtualMouse = "";
});

$('#gerar-codigo').click(function(){
    gerarCodigo();
});

$( document ).keydown(function(e) {
    var code = e.keyCode || e.which;
    if(code == 17) { 
        controlPressionado = true;
        
        if(posicaoAtualMouse != ""){
            pintarQuadrado(posicaoAtualMouse);
        }
    }
});

$( document ).keyup(function(e) {
    var code = e.keyCode || e.which;
    if(code == 17) { 
        controlPressionado = false;
    }
});

function pintarQuadrado(quadrado){
    var classeIconeAdicionar = 'icone-' + $('.icone-selecao.selecionado').html();
    var classeIconeRemover = 'icone-' + $(quadrado).html();
    $(quadrado).removeClass(classeIconeRemover);
    $(quadrado).addClass(classeIconeAdicionar);

    $(quadrado).html($('.icone-selecao.selecionado').html());
}

function gerarMapa(largura,altura){
    var codigoInterno = '';
    
    for(y=0;y<altura;y++){
        codigoInterno += '<tr class="linha-mapa" id="linha-'+ y +'">';
        for(x=0;x<largura;x++){
            codigoInterno += '<td class="quadrado-mapa icone-w coluna-' + x + '">w</td>';
        }
        codigoInterno += '</tr>';
    }
    $('.container-mapa').html(codigoInterno);
}

function gerarMapaPelaArray(array){
    var codigoInterno = '';
    for(posicao_y=0;posicao_y<array.length;posicao_y++){
        codigoInterno += '<tr class="linha-mapa" id="linha-'+ posicao_y +'">';
        for(posicao_x=0; posicao_x<array[posicao_y].length; posicao_x++){
            codigoInterno += '<td class="quadrado-mapa icone-'+array[posicao_y][posicao_x]+' coluna-' + posicao_x + '">'+array[posicao_y][posicao_x]+'</td>';
        }
        codigoInterno += '</tr>';
    }
    $('.container-mapa').html(codigoInterno);
}

function gerarCodigo(){
    var codigo = 'var array = [<br>'
    $('.linha-mapa').each(function(index_y){
        if(index_y == 0){
            codigo += '&nbsp;[';
        }else{
            codigo += ',[';
        }
        var elementoLinhaItens = '#linha-' + index_y + ' .quadrado-mapa';
        $(elementoLinhaItens).each(function(index_x){
            var elementoFilhoFinal = '#linha-' + index_y + ' .coluna-' + index_x;
            if(index_x == 0){
                codigo += '"' + $(elementoFilhoFinal).text() + '"&nbsp;';
            }else{
                codigo += ',"' + $(elementoFilhoFinal).text() + '"&nbsp;';
            }
        });
        codigo += ']<br>';
        
    });
    codigo += '];';
    $('.codigo-array').html(codigo);
}