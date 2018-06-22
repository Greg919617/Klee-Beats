/*  $(document)
    .ready(function() {

      // fix main menu to page on passing
      $('.main.menu').visibility({
        type: 'fixed'
      });
      $('.overlay').visibility({
        type: 'fixed',
        offset: 80
      });

      // lazy load images
      $('.image').visibility({
        type: 'image',
        transition: 'vertical flip in',
        duration: 500
      });

      // show dropdown on hover
      $('.main.menu  .ui.dropdown').dropdown({
        on: 'hover'
      });
    })
  ;
  </script>
*/



// if (window.PaymentRequest) {
//     //If it is supported on the users's browser
    
//     //payment request object
//     const supportedPaymentMethods = 
// [
//     {
//         supportedMethods: ['basic-card']
//     }
//     ];

//     //payment detials(i.e cost/currency)
//     const paymentDetails = {
//         total: {
//             label: 'Total Cost',
//             amount: {
//                 currency: 'USD',
//                 value: 30
//             }
//         }
//     }

//     //custom options
//     const options = {}

//     //create request
//     const paymentRequest = new PaymentRequest(
//         supportedPaymentMethods, paymentDetails, options
//     );
    
    
//     paymentRequest.show()
//         .then(payment => console.log(payment));
//         //.catch(error => console.error(error));
// }
// else {
//     //fallback to your other implementation
// }