//Follow CRUD

//READ = Request in server
$(document).ready(()=>{
    $.ajax({
        url: 'http://localhost:3000/todos',
        method: 'GET'
    })
    .done((dataObj)=>{
        //empty pre-existing data first
        $('ul').empty()
        dataObj.map((todo)=>{
            let completed = todo.isComplete ? "completed" : ""
            
            $('ul').append(
                `<li data-id = ${todo.id} class=${completed}>${todo.descrption}<span> class ='fas fa-trash'></i></span></li>`
            )
        })
    })
    .fail((errObj)=>{
        console.log('Issues with GET request', errObj);
        
    })
})

//CREATE = Post request in server
$('input').keypress((event)=>{
    if(event.which === 13 &&$(this).val() !=="") {
        $.ajax({
            url: 'http://localhost:3000/todos',
            method: 'POST'
            data: {item: $(this).val()}
        })
        .done((dataObj)=>{
            completed = dataObj.isComplete ? "completed" : ""

            $('ul').append(
                `<li data-id=${dataObj.id} class =${completed}>${dataObj.description} <span><i class='far fa-trash-alt'></i></span></li>`
            )
            $('input').val("")
        })
        .fail((errObj)=>{
            console.log('Error from POST request', errObj);
            
        })
    }
})

//UPDATE = Put request
$('ul').on("click", "li", ()=>{
    let thisTodoID = $(this).data('id')

    //SELF needed to make THIS a global variable
    let self = this;

    $.ajax({
        url: `http://localhost:3000/todos/${thisTodoId}`,
        method: 'PUT'
    })
    .done(()=>{
        $(self).toggleClass("completed")
    })
    .fail((errObj)=>{
        console.log('Error from PUT request', errObj);
        
    })
    
})

//DELETE- Delete Request
$("ul").on("click", "span", (event)=>{
    event.stopPropagation() //needed to stop bubbling - clicking on span triggers clicking on li event 
    let thisTodoID = $(this).parent().data('id')
    let self = this

    $.ajax({
        url: `http://localhost:3000/todos/${thisTodoId}`,
        method: 'DELETE'
    })
    .done(()=>{
        $(self)
            .parent()
            .remove();
    })
    .fail((errObj)=>{
        console.log('Issue with DELETE ', errObj);
        
    })
})