from django.urls import path
from quizes import views

app_name = 'quizes'

urlpatterns = [
    path('', views.QuizListView.as_view(), name='main-view'),
    path('<int:pk>/', views.quiz_view, name='quiz-view'),
    path('<int:pk>/data/', views.quiz_data_view, name='quiz-data-view'),
    path('<int:pk>/save/', views.save_quiz_view, name='save-view'),
]