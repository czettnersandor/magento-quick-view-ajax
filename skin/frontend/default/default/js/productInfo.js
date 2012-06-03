var ProductInfo = Class.create();
ProductInfo.prototype = {
    settings: {
        'loadingMessage': 'Please wait ...'
    },
    
    initialize: function(selector, x_image, settings)
    {
        Object.extend(this.settings, settings);
        this.createWindow();  
        
        var that = this;
        $$(selector).each(function(el, index){
            el.observe('click', that.loadInfo.bind(that));
        })
        $$(x_image).each(function(el, index){
            el.observe('mouseover', that.showButton);
            el.observe('mouseout', that.hideButton);
        })
        
    },
    
    createLoader: function()
    {
        var loader = new Element('div', {id: 'ajax-preloader'});
        loader.innerHTML = "<p class='loading'>"+this.settings.loadingMessage+"</p>";
        document.body.appendChild(loader);
        $('ajax-preloader').setStyle({
            position: 'absolute',
            top:  document.viewport.getScrollOffsets().top + 200 + 'px',
            left:  document.body.clientWidth/2 - 75 + 'px'
        });
    },
    
    destroyLoader: function()
    {
        $('ajax-preloader').remove();
    },
    
    showButton: function(e)
    {
        el = this;
        while (el.tagName != 'P') {
            el = el.up();
        }
        $(el).getElementsBySelector('.ajax')[0].setStyle({
            display: 'block'
        })
    },
    
    hideButton: function(e)
    {
        el = this;
        while (el.tagName != 'P') {
            el = el.up();
        }
        $(el).getElementsBySelector('.ajax')[0].setStyle({
            display: 'none'
        })
    },
    
    createWindow: function()
    {
        var qWindow = new Element('div', {id: 'quick-window'});
        qWindow.innerHTML = '<div id="quickview-header"><a href="javascript:void(0)" id="quickview-close">close</a></div><div class="quick-view-content"></div>';
        document.body.appendChild(qWindow);
        $('quickview-close').observe('click', this.hideWindow.bind(this)); 
    },
    
    showWindow: function()
    {
        $('quick-window').setStyle({
            top:  document.viewport.getScrollOffsets().top + 100 + 'px',
            left:  document.body.clientWidth/2 - $('quick-window').getWidth()/2 + 'px',
            display: 'block'
        });
    },
    
    setContent: function(content)
    {
        $$('.quick-view-content')[0].insert(content);
    },
    
    clearContent: function()
    {
        $$('.quick-view-content')[0].replace('<div class="quick-view-content"></div>');
    },
    
    hideWindow: function()
    {
        this.clearContent();
        $('quick-window').hide();
    },

    loadInfo: function(e)
    {
        e.stop();
        var that = this;
        this.createLoader();
        new Ajax.Request(e.element().href, {
            onSuccess: function(response) {
                that.clearContent();
                that.setContent(response.responseText);
                that.destroyLoader();
                that.showWindow();
            }
        }); 
    }
}

Event.observe(window, 'load', function() {
    new ProductInfo('.ajax', '.product-image', {
    });
});