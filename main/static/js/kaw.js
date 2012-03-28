$(function () {
    $('#form-submit').click(function () {
        var input_name = $('input[name=name]').val();
        var input_email = $('input[name=email]').val();
        var input_subject = $('input[name=subject]').val();
        var input_message = $('#contact-message').val();
        var response_text = $('#response');
        var csrf = $('input[name=csrfmiddlewaretoken]').val();
        $.post('/cform_submit/', {name:input_name, email:input_email, subject:input_subject, message:input_message, csrfmiddlewaretoken: csrf}, function (data) {
            $('#contact-form').get(0).reset();
            $('.email-success').fadeIn();
            setTimeout(function(){$('.email-success').fadeOut()}, 2000);
        });

        return false;
    });

});