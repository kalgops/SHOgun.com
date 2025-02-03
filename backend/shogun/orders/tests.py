from django.test import TestCase
from django.urls import reverse
from .models import Product

class ProductListViewTests(TestCase):
    def setUp(self):
        Product.objects.create(name="Test Product", price=9.99, image="http://example.com/image.jpg")

    def test_product_list_view(self):
        response = self.client.get(reverse('product_list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Test Product")
