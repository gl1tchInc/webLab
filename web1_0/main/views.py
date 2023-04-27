from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'main/index.html')


def company(request):
    return render(request, 'main/company.html')


def registrate(request):
    return render(request, 'main/registrate.html')

