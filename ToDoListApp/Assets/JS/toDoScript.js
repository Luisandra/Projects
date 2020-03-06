// Strike through for completed list item 
// CSS class created and applied/removed 

// $("li").on("click", function(){
//         //THIS CODE ONLY WORKS ON CURRENT LI, NOT FUTURE LI'S
//     $(this).toggleClass("completed");
// })

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});


//Removing list items when clicking delete
$("ul").on("click", ".toDelete", function(event){
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
    
});

//Add new item. Listener for enter key
$("input[type='text']").on("keypress", function(e){    
    if (e.which === 13) {
        var enteredTxt = $(this).val();
        $("ul").append("<li><span class='toDelete'>X</span> "+enteredTxt+"</li>");
        //clears the input field after enter is hit
        $(this).val("");
    }
});

// Display delete icon on mouseover 
$("ul").on("mouseover", "li", function(){
    $(this).children(".toDelete").css("display", "inline");
})

$("ul").on("mouseout", "li", function(){
    $(this).children(".toDelete").css("display", "none");
})
