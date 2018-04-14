//console.log(e)

//VARIABLES
$(function(){

    //page has loaded
    //need to pull the old coffee orders from localStorage

    var orders = [];

    var oldOrdersJSON = localStorage.getItem("coffeeOrders");
    var oldOrders = JSON.parse(oldOrdersJSON);

    if (oldOrders != null) { //needed for when localStorage is empty
        //carry on as usual
        orders = oldOrders;  
    } 
    orders = oldOrders;

    //show the old orders to the screen
    var oldOrdersHTML = "";
    orders.forEach(function(currentOrder){
        oldOrdersHTML += renderCoffeeOrder(currentOrder);
    });
    $('#submittedOrders').append(renderedHTML);

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

    //save the order list to local storage
    //every time we save a coffee order, it will now save to
    //local storage
    var ordersJSON = JSON.stringify(orders);
    localStorage.setItem("coffeeOrders", ordersJSON);

    });
});

//DELETE
//visually want a button for each order (x button)
//think about adding button of class= delete to the span final HTML
//pop an array
//$('#submittedOrders).on('click', '.delete', function(){
