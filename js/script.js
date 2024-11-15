$(document).ready(function(){

    $('#menu').click(function(){
        console.log($('slideMenu').hasClass('animationHide'));
        if ($('.slideMenu').hasClass('animationHide')){
            $('.slideMenu').addClass('animationShow');
        }
        else{
            $('.slideMenu').removeClass('animationShow');
        }
        $('.slideMenu').toggleClass('animationHide');
    });

    $('a').each(function(){
        $(this).click(function(e){
            let address = e.target.href

            e.preventDefault();

            $('.slideMenu').animate(
                {
                    opacity: '0'
                },
                2000,
                function(){
                    window.location.href = address;
                }
            );

            $('.upperBar').animate(
                {
                    opacity: '0'
                },
                2000
            );
        });
    });

});
