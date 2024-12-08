jQuery(document).ready(function() {
    new WbdContentPost({
        selectorContent: '.sidebar-container',
        selectorSubtitles: 'h3',
        title: 'Содержание'
    });
});

// Модуль оглавления статьи
var WbdContentPost = (function($) {
     
    // Объявляем функцию-конструктор
    var Content = function(options) {
        this.ui = {
            $content: $(options.selectorContent),
            $subtitles: $(options.selectorSubtitles)
        };
        this.title = options.title || 'Содержание';

 
        this.init();
    };
 
    // Инициализация
    Content.prototype.init = function() {
 
        var contentHtml = '',
            url = document.location.href.split('#')[0];    
         
        this.ui.$subtitles.each(function(n, item) {
            var anchor = '<a id="subtitle' + n + '"></a>',
                $item = $(item),
                subtitle = '<a class="sidebar-text" href="' + url + '#subtitle' + n + '">' + $item.text() + '</a>';
 
            $item.before(anchor);
            contentHtml += subtitle;
        });
         
        this.ui.$content.html('<a class="sidebar-text" style="display:grid">' + contentHtml + '</a>');
        this.ui.$content.prepend('<h5>' + this.title + '</h5>');
         
    };
 
    return Content;
 
})(jQuery);