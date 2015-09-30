    
    $("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

(function ($)
{
    var $window = $(window),
    speed = 10;

     function init()
     {
        $('.page').each(function ()
        {
            var $bgobj = $(this);
            $window.on('scroll', pageScrollHandler.bind(this, $bgobj));
        });
     }

     function pageScrollHandler($bgObj)
     {
        
        var yPos = -($window.scrollTop() / speed);
        var coords = '50% ' + yPos + 'px';


     
        $bgObj.css({backgroundPosition: coords});
    }
    $(init);
})(jQuery);
