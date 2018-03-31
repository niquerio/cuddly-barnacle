import jQuery from 'jquery'

export default (function ($) {
    $.fn.tunamidi = function (options) {
        var defaults = {
        };
        var opts = $.extend(defaults, options);
        var container = $('<div>').addClass('tunamidi') 
        return $(this).append(container);
    }
})(jQuery);
