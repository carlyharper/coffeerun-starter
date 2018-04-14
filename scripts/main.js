//console.log(e)

//VARIABLES
$(function(){
    var orders = [];

    function renderCoffeeOrder(order) {
        var finalHTML = '<div class="order">';

        //add stuff to final HTML based on the order that's being passed
        
        finalHTML += '<span>'+ order.orderName + '</span>';
        finalHTML += '<span>'+ order.email + '</span>';
        finalHTML += '<span>'+ order.size + '</span>';
        finalHTML += '<span>'+ order.flavorShot + '</span>';
        finalHTML += '<span>'+ order.caffeineLevel + '</span>';
        return finalHTML += '</div>';
    };

    //Listen for when people submit the form
    //code inside here will execute when the form is submitted

    $("form").submit(function(e){
        e.preventDefault();

    var currentOrder = {
        orderName: $('#coffeeOrder').val(),
        email: $('#emailInput').val(),
        size: $('input:checked').val(),
        flavorShot: $('#flavorShot').val(),
        caffeineLevel: $('#strengthLevel').val()
    };
    orders.push(currentOrder);

    var renderedHTML = renderCoffeeOrder(currentOrder);
    //take the above info, render it to the screen somewhere
    //maybe i could write renderCoffeeOrder()

    //write some HTML in index.html

    //get the renderedHTML to show up in the DOM
    $('#submittedOrders').append(renderedHTML);
    console.log(orders);

    });
});

//DELETE
//visually want a button for each order (x button)
//think about adding button of class= delete to the span final HTML
//pop an array
//$('#submittedOrders).on('click', '.delete', function(){
