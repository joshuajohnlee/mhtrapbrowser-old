from django.shortcuts import render
# from django.http import HttpResponse
from django.http import JsonResponse

# Create your views here.

def index(request):
    return JsonResponse({"data": "this is data"})