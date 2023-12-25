from django.shortcuts import render
from django.http import JsonResponse
from .models import Patient

def patient_list(request):
    patients = Patient.objects.all()
    patient_list = list(patients.values())
    return JsonResponse(patient_list, safe=False)
