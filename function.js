(function ( $ ) {
 
    $.fn.inputs = function(options) {
    	var settings = $.extend( {
    		className:"multiple-choise",
    		text:"Multiple choise"
    	}, options)

        this.before("<label>"+settings.text+"</label>").addClass(settings.className);
        return this;
    };
 
}( jQuery ));

$("select").inputs({className:'feelings', text:'Choose how you feel'});