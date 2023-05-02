from django.db import models
from django.db.models import CheckConstraint, Q, F

# Create your models here.

class Weapon(models.Model):
    weapon_name = models.CharField(max_length=64)
    power_type = models.CharField(max_length=64)
    power = models.IntegerField()
    power_bonus = models.DecimalField(max_digits=3, decimal_places=2)
    attr_bonus = models.DecimalField(max_digits=3, decimal_places=2)
    luck = models.IntegerField()
    cheese_effect = models.IntegerField()
    title_req = models.IntegerField()
    limited = models.BooleanField()
    image = models.BinaryField()

    class Meta:
        constraints = [
            CheckConstraint(name="weaponcheeseeffectrange", check=Q(cheese_effect__lte=6) & Q(cheese_effect__gte=-6))
        ]

class Base(models.Model):
    base_name = models.CharField(max_length=64)
    power = models.IntegerField()
    power_bonus = models.DecimalField(max_digits=3, decimal_places=2)
    attr_bonus = models.DecimalField(max_digits=3, decimal_places=2)
    luck = models.IntegerField()
    cheese_effect = models.IntegerField()
    title_req = models.IntegerField()
    limited = models.BooleanField()

    class Meta:
        constraints = [
            CheckConstraint(name="basecheeseeffectrange", check=Q(cheese_effect__lte=6) & Q(cheese_effect__gte=-6))
        ]

