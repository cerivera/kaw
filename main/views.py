from django.shortcuts import render_to_response
from django.template.context import RequestContext

def index(request):
    d = {}
    return render_to_response('index.html', d, context_instance=RequestContext(request))

