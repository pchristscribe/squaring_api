from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
# Create your views here.

class SquareView(View):
    def get(self, request, number):
        return HttpResponse(int(number) **2)

class HelloWorldView(View):
    def get(self, request):
        return HttpResponse("Hello World")
