# Generated by Django 4.2 on 2023-05-01 21:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TrapBrowser', '0001_initial'),
    ]

    operations = [
        migrations.AddConstraint(
            model_name='base',
            constraint=models.CheckConstraint(check=models.Q(('cheese_effect__lte', 6), ('cheese_effect__gte', -6)), name='basecheeseeffectrange'),
        ),
        migrations.AddConstraint(
            model_name='weapon',
            constraint=models.CheckConstraint(check=models.Q(('cheese_effect__lte', 6), ('cheese_effect__gte', -6)), name='weaponcheeseeffectrange'),
        ),
    ]