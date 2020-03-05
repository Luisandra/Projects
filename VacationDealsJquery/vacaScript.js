$(document).ready(function(){
    //Replace button w/ Text (sales price)
    $('.vaca').on('click', 'button', function(){
        var location = $(this).closest('.priceBtn');
        var vacation = $(this).closest('.vaca');
        //DATA ATTRIBUTE CANNOT CONTAIN A CAPITAL IN THE NAME
        var amount = vacation.data('sales_price');
        var price = $('<p>From $'+ amount +'</p>');
        $(this).remove();
        location.append(price);
    });
    

    //Filter deals based on certain criteria
    $('.filter').on('click', '.sale-filter', function(){
        //remove any previously added highlighted class
        $('.highlighted').removeClass('highlighted');
        //find all vaca on sale
        $('.vaca').filter('.onsale').addClass('highlighted');
        //add class to vaca on sale

    });

    $('.filter').on('click', '.expiring-filter', function(){
        //remove any previously added highlighted class
        $('.highlighted').removeClass('highlighted');
        //find all vaca on sale
        $('.vaca').filter('.expiring').addClass('highlighted');
        //add class to vaca on sale

    });
});



