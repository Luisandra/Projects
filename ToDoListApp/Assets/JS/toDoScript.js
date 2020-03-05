// Strike through for completed list item 
// CSS class created and applied/removed 
$("li").on("click", function(){
    $(this).toggleClass("completed");
})


//Removing list items when clicking delete
$(".delete").on("click", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
//    MY CODE - Over-complicated
//     var listItem = $(this).closest("li");
//     var timer = 5000;
//     $(this).fadeOut(timer, function(){
//         // listItem.remove();
//         $(this).remove();
//     });
//     listItem.fadeOut(timer, function(){
//         listItem.remove();
//         // $(this).remove();
//     });
    // Will stop Li listener from firing
    
})