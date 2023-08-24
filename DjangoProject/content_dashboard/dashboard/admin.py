from django.contrib import admin
from .models import CustomUser, Article


admin.site.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'is_staff','date_joined')
    search_fields = ('email', 'first_name', 'last_name')
    readonly_fields = ('date_joined',)

# Register your models here.
admin.site.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'pub_date')
    search_fields = ('title', 'content')
    readonly_fields = ('pub_date',)