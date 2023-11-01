$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('#nome-da-tarefa').val();
        const adicionarNovaTarefa = $('<li></li>');
    
        $(`<span>${novaTarefa}</span>`).appendTo(adicionarNovaTarefa);
        $(adicionarNovaTarefa).appendTo('ul');

        $('#nome-da-tarefa').val('');
    });

    $('ul').on('click', 'span', function(){
        $(this).toggleClass('concluido')
    })
});