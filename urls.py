from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'kaw.main.views.index'),
    url(r'^cform_submit/', 'kaw.main.views.cform_submit'),
    url(r'^thanks/', 'kaw.main.views.thanks')
)
