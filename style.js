const valid = (choix, text)=> {
$('alert').hide().removeClass('alert-danger').removeClass('alert-success')
    if ($('select').val() === choix && $('textarea').val()===text) {
    $('.alert').addClass('alert-success').text('Votre demande a bien été envoyée! Nous vous répondrons dans les meilleurs délais').fadeIn(2000)

}
else {
    $('.alert'.addClass('alert-danger'))
}
}
$('form').submit(evt => {
    evt.preventDefault()
    valid('select', 'Sushi || Sashimi', 'textarea', 'length > 20')
})


   