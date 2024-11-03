// variable to hold current window state - small, medium, or large
var windowState = 'large';

$(document).ready(function () {
   var sw = document.body.clientWidth;
   if (sw < 481) {
      smMenu();
   } else if (sw >= 481 && sw <= 768) {
      medMenu();
   } else {
      lgMenu();
   }
});



/*To check what if we change new dimenzion on the screen */


$(window).resize(function () {
   var sw = document.body.clientWidth;
   if (sw < 481 && windowState != 'small') {
      smMenu();
   }
   if (sw > 480 && sw < 769 && windowState != 'medium') {
      medMenu();
   }
   if (sw > 768 && windowState != 'large') {
      lgMenu();
   }
});


//handle menu for small screens//
function smMenu() {
   // if we  switch from another menu, reset the menu first
   //unbind click and touch events    
   $('.menuToggle a').off('click');
   $('.topMenu h3').off('click touchstart');
   $('html').off('touchstart');
   $('#mainNav').off('touchstart');
   //reset the menu in case it's being resized from a medium screen    
   // remove any expanded menus
   $('.expand').removeClass('expand');
   $('.menuToggle').remove();




   /*create the menu toggle where we can choose which submenu to choose */
   $('.topMenu').before('<div class="menuToggle"><a href="#">menu<span class="indicator">+</span></a></div>');
   // append the + indicator, only h3 have submenus 
   $('.topMenu h3').append('<span class="indicator">+</span>');
   //add click function on this 
   $('.menuToggle a').click(function () {
      //expand the menu 
      $('.topMenu').toggleClass('expand');
      // figure out whether the indicator should be changed to + or -
      var newValue = $(this).find('span.indicator').text() == '+' ? '-' : '+';
      //set the new value of the indicator
      $(this).find('span.indicator').text(newValue);
   });

   //now we'll wire up the submenus
   $(".topMenu h3").click(function () {
      //find the current submenu
      var currentItem = $(this).siblings('.submenu');
      //remove the expand class from other submenus to close any currently open submenus
      $('ul.submenu').not(currentItem).removeClass('expand');
      //change the indicator of any closed submenus 
      $('.topMenu h3').not(this).find('span.indicator:contains("-")').text('+');
      //open the selected submenu
      $(this).siblings('.submenu').toggleClass('expand');
      //change the selected submenu indicator
      var newValue = $(this).find('span.indicator').text() == '+' ? '-' : '+';
      $(this).find('span.indicator').text(newValue);
   });

   //indicate current window state
   windowState = 'small';



}



//handle menu for medium screen sizes
function medMenu() {
//reset the menu in case it's being resized from a small screen
	// unbind click events    
   $('.menuToggle a').off('click');
   $('.topMenu h3').off('click');
   // remove any expanded menus
  $('.expand').removeClass('expand');
   // remove the span tags inside the menu
   $('.topMenu h3').find('span.indicator').remove();
   // remove the "menu" element
   $('.menuToggle').remove();



   //check to see if the device supports touch

   //to support both a  hover and touch enabled

   if ('ontouchstart' in document.documentElement) {
      //find all 'hover' class and strip them
      $('.topMenu').find('li.hover').removeClass('hover');
      //add touch events to submenu headings
      $(".topMenu h3").bind('touchstart', function (e) {
         //find the current submenu
         var currentItem = $(this).siblings('.submenu');
         //remove the expand class from other submenus to close any currently open submenus
         $('ul.submenu').not(currentItem).removeClass('expand');
         //open the selected submenu
         $(this).siblings('.submenu').toggleClass('expand');
      });
      //close submenus if users click outside the menu
      $('html').bind('touchstart', function (e) {
         $('.topMenu').find('ul.submenu').removeClass('expand');
      });
      //stop clicks on the menu from bubbling up
      $('#mainNav').bind('touchstart', function (e) {
         e.stopPropagation();
      });
   }
   //indicate current window state
   windowState = 'medium';
}



//handle menu for large screens
function lgMenu() {
   //revert the screen functionality left by other screen sizes

   // unbind click and touch events    
   $('.menuToggle a').off('click');
   $('.topMenu h3').off('click touchstart');
   $('html').off('touchstart');
   $('#mainNav').off('touchstart');

   // remove any expanded submenus
   $('.topMenu').find('ul.submenu').removeClass('expand');

   // remove the span tags inside the menu
   $('.topMenu h3').find('span.indicator').remove();

   // remove the "menu" element
   $('.menuToggle').remove();

   //indicate current window state
   windowState = 'large';




}