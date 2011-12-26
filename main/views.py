from django.shortcuts import render_to_response
from django.template.context import RequestContext
from kaw.main.forms import ContactForm

def index(request):
    d = {}
    d['contact_form'] = ContactForm()
    return render_to_response('index.html', d, context_instance=RequestContext(request))

