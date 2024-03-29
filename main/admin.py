__author__ = 'Carlos'

from kaw.main.models import Client, Address, Pet
from django.contrib import admin

class ClientAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'phone_number', 'email']
class PetAdmin(admin.ModelAdmin):
    list_display = ['name']
class AddressAdmin(admin.ModelAdmin):
    list_display = ['type']

admin.site.register(Client, ClientAdmin)
admin.site.register(Address, AddressAdmin)
admin.site.register(Pet, PetAdmin)

