from django.shortcuts import render

# Create your views here.
def index(request):
    is_auth = False
    if request.user.is_authenticated:
        is_auth = True
    return render(request, 'landing.html', {'is_auth': is_auth})
