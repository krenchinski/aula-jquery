$(document).ready(function(){
    $('.pergunta').click(function(){
        let elPergunta = $(this);
        let elResposta = elPergunta.next('.resposta');

        $('.resposta').not(elResposta).slideUp(200);

        elResposta.slideToggle();
    })

});