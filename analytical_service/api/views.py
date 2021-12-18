from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.files.storage import default_storage
from django.core.files.images import ImageFile
from django.conf import settings
from django.db.models import Q, Sum
from django.conf import settings

from .models import VGSales
from .auth import resource_access_check

import io
import matplotlib.pyplot as plt
import numpy as np


def access_denied(request, status):
    context = {
        'err': 'access to this resource is denied' if status == 403 else \
            'There is something wrong. try again later or if you are stuck here for long, submit a ticket',
    }

    return Response(data=context, status=status,)
    

@api_view(http_method_names=['GET',])
@resource_access_check(settings.ACCESS_API_URL, access_denied, 200)
def compare_games_view(request,):
    context = {}
    pks = []
    try:
        pks = [request.GET.get('game1'), request.GET.get('game2')]
    except:
        context['err'] = 'wrong parameters'
        return Response(context)
    figure_name = f"compare-games-{request.GET.get('game1')}-{request.GET.get('game2')}"
    if not default_storage.exists(figure_name):
        objs = VGSales.objects.all().filter(pk__in=pks)
        print(objs)
        labels = [objs[0].name, objs[1].name]
        cols = ['na_sales', 'eu_sales', 'jp_sales', 'other_sales', 'global_sales']
        colors = ['blue', 'orange', 'green', 'red', 'purple']
        fig, ax = plt.subplots()
        bars_groups = []
        x = np.arange(2)
        width = 0.75/len(cols)
    
        for i, c in enumerate(cols):
            bars_groups.append(ax.bar(x + width*(i-len(cols)//2), [getattr(objs[0], c), getattr(objs[1], c)], width, color=colors[i]))
        ax.set_xticks(x, labels)
        ax.legend(cols)
        
        for i, g in enumerate(bars_groups):
            ax.bar_label(g, padding=len(cols)+2)
        
        
        figure = io.BytesIO()
        plt.savefig(figure, format="png")
        content_file = ImageFile(figure)
        path = default_storage.save(figure_name, content_file)
        url = settings.MEDIA_URL + path
        plt.close()
    else:
        url = settings.MEDIA_URL + figure_name

    context = {'image_url': url, }
    
    return Response(context)



@api_view(http_method_names=['GET'])
# @resource_access_check(settings.ACCESS_API_URL, access_denied)
def global_sales_view(request,):
    context = {}
    try:
        t_from = int(request.GET.get('from'))
        t_to = int(request.GET.get('to'))
        figure_name = f"global-sales-period-{t_from}-{t_to}"

        if not default_storage.exists(figure_name):
            objs = VGSales.objects.all().filter(Q(year__gte=t_from) & Q(year__lte=t_to)).values('year').annotate(total_year_global=Sum('global_sales'))
            x = np.arange(len(objs))
            colors = plt.cm.get_cmap('hsv', len(objs))
            colors = [colors(i) for i in range(len(objs))]
            width = 0.75

            labels = [i for i in range(t_from, t_to)]
            print(labels)
            plt.legend(plt.bar(x, [o.get('total_year_global') for o in objs], width, color=colors), labels)
            
            figure = io.BytesIO()
            plt.savefig(figure, format="png")
            content_file = ImageFile(figure)
            path = default_storage.save(figure_name, content_file)
            plt.close()

        url = settings.MEDIA_URL + figure_name
        context['image_url'] = url
    except Exception as ex:
        context['err'] = 'Something bad happened'

    return Response(context)


@api_view(http_method_names=['GET'])
@resource_access_check(settings.ACCESS_API_URL, access_denied)
def compare_publishers_productions(request,):
    context = {}

    try:
        t_from = int(request.GET.get('from'))
        t_to = int(request.GET.get('to'))

        pub1 = request.GET.get('pub1')
        pub2 = request.GET.get('pub2')

        figure_name = f"publishers-period-sales-{t_from}-{t_to}-{pub1}-{pub2}-"

        if not default_storage.exists(figure_name):
            objs1 = VGSales.objects.all().filter(Q(year__gte=t_from) & Q(year__lte=t_to) & Q(publisher=pub1)).values('year').annotate(total_year_global=Sum('global_sales'))
            objs2 = VGSales.objects.all().filter(Q(year__gte=t_from) & Q(year__lte=t_to) & Q(publisher=pub2)).values('year').annotate(total_year_global=Sum('global_sales'))
            labels = [str(i) for i in range(t_from, t_to+1)]

            objs11 = [0]*len(labels)
            objs22 = [0]*len(labels)
            idx = 0
            print(objs1[0])
            print(objs1,end='\n\n\n')
            print(objs2,end='\n\n\n')
            first_year = objs1[0]['year']
            for i in objs1:
                objs11[i['year']-first_year] = i['total_year_global']
            first_year = objs2[0]['year']
            for i in objs2:
                objs22[i['year']-first_year] = i['total_year_global']
            print(objs11,end='\n\n\n')
            print(objs22)
            
            plt.plot(labels, objs11)
            plt.plot(labels, objs22)

            figure = io.BytesIO()
            plt.savefig(figure, format="png")
            content_file = ImageFile(figure)
            path = default_storage.save(figure_name, content_file)
            plt.close()
        url = settings.MEDIA_URL + figure_name
        context['image_url'] = url    
    except Exception as ex:
        raise ex
        context['err'] = "something bad happened"
    
    return Response(context)

@api_view(http_method_names=['GET'])
# @resource_access_check(settings.ACCESS_API_URL, access_denied)
def compare_genres_view(request,):
    context = dict()
    try:
        t_from = int(request.GET.get('from'))
        t_to = int(request.GET.get('to'))

        figure_name = f"genres-global-sales-{t_from}-{t_to}"
        if not default_storage.exists(figure_name):
            objs = VGSales.objects.all().filter(Q(year__gte=t_from) & Q(year__lte=t_to)).values('genre').annotate(total_year_global=Sum('global_sales'))
            labels = VGSales.objects.all().values('genre').distinct()
            objs11 = dict()
            for i in labels:
                objs11[i['genre']] = 0
            
            print(labels)

            
            for i in objs:
                objs11[i['genre']] = i['total_year_global']
            
            plt.bar(range(len(objs11)), list(objs11.values()), )
            plt.xticks(range(len(objs11)), list(objs11.keys()), rotation=90)
            plt.title(f"{t_from}-{t_to} years")
            plt.tight_layout()

            figure = io.BytesIO()
            plt.savefig(figure, format="png")
            content_file = ImageFile(figure)
            path = default_storage.save(figure_name, content_file)
            plt.close()
        url = settings.MEDIA_URL + figure_name
        context['image_url'] = url 
    except Exception as ex:
        raise ex

    return Response(context)