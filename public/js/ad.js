$('#add-image').click(function(){
    //je récupère les numeros des futurs champs que je vais créer
    const index = +$('#widgets-counter').val();
    console.log(index);

    //Je récupère le prototype des entrées
    const tmpl = $('#annonce_images').data('prototype').replace(/__name__/g, index);

    //console.log(tmpl);
    
    //J'injecte mon template dans la div
    $('#annonce_images').append(tmpl);

    $('#widgets-counter').val(index + 1);

    //Je gère le boutton supprimer 
    handleDeleteButtons();
});


function handleDeleteButtons(){

    $('button[data-action="delete"]').click(function(){
        const target = this.dataset.target;
        console.log(target);
        $(target).remove();
    });

};

function updateCounter(){
    const count = +$('#annonce_images div.form-group').length;

    $('#widgets-counter').val(count);
}

updateCounter()

handleDeleteButtons();
