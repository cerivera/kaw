from django.shortcuts import render_to_response
from django.template.context import RequestContext
from kaw.main.forms import ContactForm
from django.core.mail import send_mail
from django.http import HttpResponse
from django.conf import settings

def index(request):
    d = {}
    d['contact_form'] = ContactForm()
    return render_to_response('base.html', d, context_instance=RequestContext(request))

#contact form submit
def cform_submit(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            message = form.cleaned_data['message']
            name = form.cleaned_data['name']
            from_email = form.cleaned_data['email']
            send_mail(name, message + ' - ' + from_email, from_email, [settings.INFO_EMAIL])
            return HttpResponse("Thanks!", content_type="text/plain")

    return HttpResponse("")