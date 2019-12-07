from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from social_django.models import UserSocialAuth


@login_required
def top_page(request):
    user = UserSocialAuth.objects.get(user_id=request.user.id)

    return render(request,'pubq_app/top.html',{'user': user})

def spa_page(request):
    return render(request, 'pubq_app/spa.html')

def static_page(request):
    return render(request, 'pubq_app/static.html')