from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index),
    path('company', views.company),
    path('registrate', views.registrate),
]