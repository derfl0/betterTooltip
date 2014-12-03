$(document).ready(function() {
    
    $('[title]').each(function() {
        var text = $(this).attr('title');
        $(this).attr('data-title', text);
        $(this).removeAttr('title');
    });
    
    
    $('[data-title]').mouseenter(function() {
        var text = $(this).attr('data-title');
        var position = $(this).position();
        var tooltip = $('<div>').addClass('betterTooltip').html(text);
        $("body").prepend(tooltip);
        tooltip.css('left', position.left - (tooltip.width() / 2));
        tooltip.css('top', position.top - tooltip.height() - 10);
        tooltip.fadeIn(400);
    });
    
    $('[data-title]').mouseleave(function() {
       $('div.betterTooltip').fadeOut(400).remove(); 
    });
});