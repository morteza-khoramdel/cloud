from django.db import models


class VGSales(models.Model):
    rank = models.AutoField(primary_key=True, db_column="Rank")
    name = models.TextField(db_column='Name')
    platform = models.CharField(max_length=16, null=True, blank=True, db_column="Platform")


    class Meta:
        managed=True
        db_table = 'vgsales'

    def __str__(self) -> str:
        return f"{self.name}: {self.publisher}"
