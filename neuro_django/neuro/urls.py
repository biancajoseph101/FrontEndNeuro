# neuro/urls.py
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [

    path('tags/', views.TagList.as_view(), name='tag_list'),
    path('tags/<int:pk>', views.TagDetail.as_view(), name='tag_detail'),
    path('posts/', views.PostList.as_view(), name='post_list'),
    path('posts/<int:pk>', views.PostDetail.as_view(), name='post_detail'),
    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
]