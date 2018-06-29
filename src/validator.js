import _$ from 'jquery';
window.$ = window.jQuery = _$; 

$('.validator').on('click', (e) => {
    e.preventDefault();

    $('.msg-invalid').hide();
    $('.is-invalid').removeClass('is-invalid');

    $('.form-validate .obg').each((i, el) => {
        if(!$(el).val()){
            $(el).addClass('is-invalid')
            $(`.invalid-${$(el).attr('id')}`).show();
        }
    });
});
