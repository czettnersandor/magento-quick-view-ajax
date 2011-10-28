<?php

require_once 'Mage/Catalog/controllers/ProductController.php';

class Czettner_Ajax_ProductController extends Mage_Catalog_ProductController {

    public function quickViewAction() {
        if (!$this->getRequest()->isXmlHttpRequest()) {
            $this->_redirect('/');
        }

        if ($product = $this->_initProduct()) {
            $this->getResponse()
                    ->setBody($this->getLayout()
                            ->createBlock('ajax/product')
                            ->setProduct($product)
                            ->toHtml());
        } else {
            echo Mage::helper('catalog')->__('Product not found');
        }
    }

}

