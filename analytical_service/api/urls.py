from django.urls import path
from .views import (
    compare_games_view, global_sales_view,
    compare_publishers_productions, compare_genres_view,
    )


namespace = 'api'

urlpatterns = [
    path('compare-games/',compare_games_view, name='compare_games'),
    path('global-sale/', global_sales_view, name='global-sale'),
    path('compare-publishers-sale/', compare_publishers_productions, name='publishers-sales'),
    path('compare-genres-sale/', compare_genres_view, name='compare-genres'),
    
]
