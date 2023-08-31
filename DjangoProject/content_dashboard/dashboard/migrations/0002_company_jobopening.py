# Generated by Django 4.2.4 on 2023-08-31 17:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('industry', models.CharField(max_length=200)),
                ('overview', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='JobOpening',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True, null=True)),
                ('requirements', models.TextField(blank=True, null=True)),
                ('date_posted', models.DateField(auto_now_add=True)),
                ('external_link', models.URLField(max_length=500)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='job_openings', to='dashboard.company')),
            ],
        ),
    ]
