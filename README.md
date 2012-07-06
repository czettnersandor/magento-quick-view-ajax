Magento Quick View Ajax Loader
==============================

"Quick View Ajax Loader" is an extension for the product list page in your Magento online store. Let your customers see the details of the products in your store without leaving the category page.

Compatible with Magento 1.4, 1.4.1.1, 1.5, 1.6, 1.7

Installation instructions
=========================

* Copy the content of the repo to the Magento installation folder
* Modify your list.phtml image section or use czettner_ajax/list.phtml (already configured, see czettner_ajax.xml)
* Hide the button from your CSS (thanks lawrencetaur):
  .product-image .ajax{ display:none;}
  .product-image .ajax:hover{ display:block;}
