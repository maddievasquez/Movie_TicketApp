$(document).ready(function () {
    //the price set by default is 0 at the start
    let adultTicket = 0;
    let childTicket = 0;
    // Set the prices for adults, children, and the family package
    const adultPrice = 10;
    const childPrice = 5;
    const familyPrice = 30;

    //This function calculates the total tickets bought when adding an adult and child ticket, and giving us a total of the total tickets
    function calculateTotal() {
        let totalTickets = adultTicket + childTicket; // Total number of tickets
        let totalPrice = 0; // Total price by default is 0

        // Check if family package applies (2 adults + 3 children)
        if (adultTicket === 2 && childTicket === 3) {
            totalPrice = familyPrice; // Apply family package price
        } else {
            // Calculate the price based on individual adult and child prices
            totalPrice = (adultTicket * adultPrice) + (childTicket * childPrice);
        }

        // Update the total tickets and price for the user
        $('#totalTickets').text(totalTickets);
        $('#totalPrice').text(totalPrice);
    }


//this function handles when the + button is click
    $('.btn-plus').click(function () {
        const ticketType = $(this).data('type');
//the logic of adding adult ticket but making the limit 4
        if (ticketType === 'adult' && adultTicket < 4) {
            adultTicket++;
        }
//adding a child ticket but the limit is 5 making sure there is an adult booking a ticket as well(so its not zero)
        if (ticketType === 'child' && childTicket < 5 && adultTicket > 0) {
            childTicket++;
        }

        // Update the tickets
        $('#adultTicket').text(adultTicket);
        $('#childTicket').text(childTicket);

        // Recalculate the total price
        calculateTotal();
    });


    
    $('.btn-minus').click(function () {
        const ticketType = $(this).data('type');

        if (ticketType === 'adult' && adultTicket > 0) {
            adultTicket--;
            // If no adults left, reset children count to 0
            if (adultTicket === 0) {
                childTicket = 0;
                $('#childTicket').text(childTicket);//update the children tickets
            }
        }
//dcrease the child tickets but not less than 0
        if (ticketType === 'child' && childTicket > 0) {
            childTicket--;
        }

        // Update tickets for the user with new tickets
        $('#adultTicket').text(adultTicket);
        $('#childTicket').text(childTicket);

        // Recalculate the total price of tickets
        calculateTotal();
    });
});
