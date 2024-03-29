import django.contrib.auth.views
from django.urls import path,include
from . import views
app_name='pubq_app'

urlpatterns=[
    path('top/',views.top_page, name="top"),
    path('login/',
        django.contrib.auth.views.LoginView.as_view(template_name='pubq_app/login.html'),
        name='login'),
    path('logout/', # ログアウト
        django.contrib.auth.views.LogoutView.as_view(template_name='pubq_app/logout.html'),
        name='logout'),
]