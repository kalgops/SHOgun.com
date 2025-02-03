"""URL configuration for shogun project."""

from django.contrib import admin
from django.urls import path
from orders.views import product_list  # Import the product_list view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', product_list, name='product_list'),  # Add the product list route
]
