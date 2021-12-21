from django.db import models


class VGSales(models.Model):
    rank = models.AutoField(primary_key=True, db_column="Rank")
    name = models.TextField(db_column='Name')
    platform = models.CharField(max_length=16, null=True, blank=True, db_column="Platform")
    year = models.PositiveIntegerField(null=True, blank=True, db_column="Year")
    genre = models.CharField(max_length=25, null=True, blank=True, db_column='Genre')
    publisher = models.CharField(max_length=50, null=True, blank=True, db_column='Publisher')
    na_sales = models.FloatField(db_column='NA_Sales')
    eu_sales = models.FloatField(db_column='EU_Sales')
    jp_sales = models.FloatField(db_column="JP_Sales")
    other_sales = models.FloatField(db_column='Other_Sales')
    global_sales = models.FloatField(db_column='Gloabl_Sales')

    class Meta:
        managed=True
        db_table = 'vgsales'

    def __str__(self) -> str:
        return f"{self.name}: {self.publisher}"
