from django import forms

class ContactForm(forms.Form):
    name = forms.CharField()
    email = forms.CharField()
    message = forms.CharField(widget=forms.Textarea)