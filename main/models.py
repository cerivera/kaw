from django.db import models
from django.utils.translation import ugettext_lazy as _

class Address(models.Model):
    TYPES_CHOICES = (
        ('HOME', _('Home')),
        ('WORK', _('Work')),
        ('OTHER', _('Other'))
        )

    type = models.CharField(_('Type'), max_length=20, choices = TYPES_CHOICES)

    first_name = models.CharField(_('First name'), max_length = 50, blank = True)
    last_name = models.CharField(_('Last name'), max_length = 50, blank = True)
    phone_number = models.CharField(_('Phone number'), max_length = 30, blank = True)
    street1 = models.CharField(_('Address 1'), max_length = 100, blank = True)
    street2 = models.CharField(_('Address 2'), max_length = 100, blank = True)
    zipcode = models.CharField(_('ZIP code'), max_length = 5, blank = True)
    city = models.CharField(_('City'), max_length = 100, blank = True)
    state = models.CharField(_('State'), max_length = 100, blank = True)

class Pet(models.Model):
    TYPES_CHOICES = (
        ('DOG', u('Dog')),
        ('CAT', u('Cat'))
    )

    type = models.CharField(_('Type'), max_length=20, choices = TYPES_CHOICES)
    name = models.CharField(_('Name'), max_length = 50, blank = True)
    birthday = models.DateField(_('Birthday'))
    note = models.TextField(_('Notes'))

class Client(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    address = models.ForeignKey(Address)
    pet = models.ForeignKey(Pet)
