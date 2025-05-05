from django.urls import path,include
from.views import LivreViewSet
from rest_framework.routers import DefaultRouter # type: ignore


router=DefaultRouter()
router.register("livre", LivreViewSet, basename="livre") # type: ignore
urlpatterns=[
    path("",include(router.urls)), # type: ignore
    
]

