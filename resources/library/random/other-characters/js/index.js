// For any item that's clicked

$('.item').each( function(){

  $(this).click(
    
    function(){
      
      // First, make sure all of the items are showing and make sure no items are expanded
      
      $('.expanded_container').find('div').removeClass();
      $('.item').show("slow", "linear");
    
    // Create a new div using the class of the clicked item
      
      var itemToMove = $(this).attr('class');
      var expandedItem = $('.expanded_container').find('div').addClass(itemToMove + ' item_expanded').removeClass('item');
      
    // Hide the clicked item and add the new div to the expanded area
      
      $(this).hide("fast", "linear");
      /*$('.expanded_container').append(expandedItem);*/
    }
  )}
);


// When the expanded item is clicked, move it back to the unselected items area

$('.expanded_container').click(function(){
  
    $('.expanded_container').find('div').removeClass();
    $('.item').show("slow", "linear");
  
});