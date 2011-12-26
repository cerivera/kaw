from django.shortcuts import render_to_response
from django.template.context import RequestContext
from kaw.main.forms import ContactForm

def index(request):
    d = {}
    d['contact_form'] = ContactForm()
    return render_to_response('base.html', d, context_instance=RequestContext(request))

def cform_submit(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():

            return HttpResponseRedirect('/thanks/')
    else:
        return HttpResponseRedirect('/')

def thanks(request):
    d = {}
    d['contact_form'] = ContactForm()
    return render_to_response('thanks.html', d, context_instance=RequestContext(request))