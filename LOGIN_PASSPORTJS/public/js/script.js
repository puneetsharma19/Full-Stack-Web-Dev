
document.getElementById('rzp-button1').onclick = function(){
const pid = document.getElementById('productId').innerText

    $.ajax({
        url:'/pay',
        data: JSON.stringify({productId: pid}),
        contentType: 'application/json',
        type: 'POST',
        dataType: 'json',
        success:function(response){
            if(response.status == 'created'){
                var options = {
                    "key": "rzp_test_4Gf1o3RVwVyq0t", // Enter the Key ID generated from the Dashboard
                    "amount": response.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": "INR",
                    "name": "ShopEasy",
                    "description": "Test Transaction",
                    "image": "",
                    "order_id": response.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    "handler": function (response) {
                    console.log(response.razorpay_payment_id);
                    console.log(response.razorpay_order_id);
                    console.log(response.razorpay_signature);
                    swal("Done!", "Payment Succesful!", "success");
                },
                "prefill": "",
                    
                "theme": {
                    "color": "#3399cc"
                }
                };
                    var rzp1 = new Razorpay(options);
                    rzp1.on('payment.failed', function (response) {
                        console.log(response.error.code);
                        console.log(response.error.description);
                        console.log(response.error.source);
                        console.log(response.error.step);
                        console.log(response.error.reason);
                        console.log(response.error.metadata.order_id);
                        console.log(response.error.metadata.payment_id);
                        swal("Failed!", "Transaction failed", "error");
                    });

                    rzp1.open();
            }
        },
        error: function(error){
            console.log(error)
        }
    })

    

}