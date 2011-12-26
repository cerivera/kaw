$(function () {
    $('#form_submit').click(function () {
        var input_name = $('input[name=name]').val();
        var input_email = $('input[name=email]').val();
        var input_subject = $('input[name=subject]').val();
        var input_message = $('#id_message').val();
        var response_text = $('#response');
        var csrf = $('input[name=csrfmiddlewaretoken]').val();
        response_text.hide();

        response_text.html('Sending...').show();

        $.post('/cform_submit/', {name:input_name, email:input_email, subject:input_subject, message:input_message, csrfmiddlewaretoken: csrf}, function (data) {
            response_text.html(data);
            $('#cForm').get(0).reset();
        });

        return false;
    });

});