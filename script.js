$(document).ready(function(){
    $('.pergunta').click(function(){
        let elPergunta = $(this);
        let elResposta = elPergunta.next('.resposta');

        $('.pergunta').not(elPergunta)
            .removeClass('ativa')
            .find('.icone')
            .html('+');

        elPergunta.toggleClass('ativa');

        $('.resposta').not(elResposta).slideUp(200);
        elResposta.slideToggle();

        let icone = elPergunta.find('.icone');
        if(elPergunta.hasClass('ativa')){
            icone.html("-");
        }else{
            icone.html("+");
        }
    });

    $('#busca-faq').on('keyup', function(){
        let termoBusca = $(this).val().toLowerCase();

        $('.faq-item').each(function(){
            let textoItem = $(this).text().toLowerCase();

            if(textoItem.includes(termoBusca)){
                $(this).show();
            }else{
                $(this).hide();
            }

        })
    });
});