This is a breakdown of stuff as a quick reference.

Find/Open subject you want to reference.

ctrl+f what you need and a copy/paste to make life easier and faster.

  --- example = open JS > jQuery then ctrl+f 'each'
  
    $('.product').each(function() { // find each element that has class = .product
        if ($(this).html().toLowerCase().indexOf('shoe') != -1) { // if the html of this element contains the word 'shoe'
            $(this).addClass('itemTypeShoe'); // add a class to this element 'itemTypeShoe'
        }
    });
