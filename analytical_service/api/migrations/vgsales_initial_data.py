from django.db import migrations, models
import csv
from django.conf import settings


def load_data(apps, schema_editor):
    VGSales = apps.get_model("api", "VGSales")
    bulks = []
    with open(settings.BASE_DIR / 'vgsales.csv', 'r') as f:
        reader = csv.reader(f)
        row = next(reader)
        print(f"""
        rank={row[0]},
        name={row[1]},
        platform={row[2]},
        year={row[3]},
        genre={row[4]},
        publisher={row[5]},
        na_sales={row[6]},
        eu_sales={row[7]},
        jp_sales={row[8]},
        other_sales={row[9]},
        global_sales={row[10]},
        """)
        
        try:
            for idx, row in enumerate(reader):
                if idx % 100 == 0:
                    print(f"{idx}-{row}")
                if not row:
                    continue
                bulks.append(
                    VGSales(
                        rank=row[0],
                        name=row[1],
                        platform=row[2],
                        year= None if row[3] == 'N/A' else row[3],
                        genre=row[4],
                        publisher=row[5],
                        na_sales=row[6],
                        eu_sales=row[7],
                        jp_sales=row[8],
                        other_sales=row[9],
                        global_sales=row[10],
                    )
                )
        except Exception as ex:
            print(f"******************error at {idx}")
            raise ex
    print(bulks[-1])
    VGSales.objects.bulk_create(bulks)
    


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_vgsales'),
    ]

    operations = [
        migrations.RunPython(load_data,),
    ]