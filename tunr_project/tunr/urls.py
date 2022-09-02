from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'artists', views.ArtistList)
# router.register(r'artists', views.ArtistDetail)
# router.register(r'songs', views.SongList)
# router.register(r'songs', views.SongDetail)

urlpatterns = [
    path('', views.ArtistList.as_view(), name='artist_list'),
    path('artists/<int:pk>', views.ArtistDetail.as_view(), name='artist_detail'),
    path('songs', views.SongList.as_view(), name='song_list'),
    path('songs/<int:pk>', views.SongDetail.as_view(), name='song_detail')
]
