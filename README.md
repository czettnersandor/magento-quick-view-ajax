Magento Quick View Ajax Loader
==============================

"Quick View Ajax Loader" is an extension for the product list page in your Magento online store. Let your customers see the details of the products in your store without leaving the category page.

Compatible with Magento 1.4, 1.4.1.1, 1.5, 1.6, 1.7

Installation instructions
=========================

* Copy the content of the repo to the Magento installation folder
* Modify your list.phtml image section with the following code:

<code>
<p class ="product-image">
    <a href="<?php echo $this->getUrl('ajax/product/quickview/id/' . $_product->getId()) ?>" title="<?php echo $this->htmlEscape($_product->getName()) ?>" class="ajax">Quick View</a>
    <a href="<?php echo $_product->getProductUrl() ?>" title="<?php echo $this->htmlEscape($this->getImageLabel($_product, 'small_image')) ?>" class="product-image-img">
        <img src="<?php echo $this->helper('catalog/image')->init($_product, 'small_image')->resize(140); ?>" width="140" height="140" alt="<?php echo $this->htmlEscape($this->getImageLabel($_product, 'small_image')) ?>" />
    </a>
</p>
</code>