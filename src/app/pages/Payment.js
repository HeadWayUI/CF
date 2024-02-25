import React from 'react';
import Razorpay from 'razorpay';

const Payment = () => {
    const handlePayment = async () => {
        // Initialize Razorpay instance
        const options = {
            key_id: 'YOUR_RAZORPAY_KEY_ID',
            amount: 100, // Amount in paise (e.g., 100 paise = 1 INR)
            currency: 'INR',
            name: 'Your Company Name',
            description: 'Purchase Description',
            image: 'path/to/your/logo.png',
            order_id: 'ORDER_ID_FROM_BACKEND', // You need to generate this on your server
            handler: response => {
                console.log(response);
                // Handle success or failure
            },
            prefill: {
                name: 'Your Name',
                email: 'your.email@example.com',
                contact: 'XXXXXXXXXX',
            },
            theme: {
                color: '#528FF0',
            },
        };

        const razorpay = new Razorpay(options);
        razorpay.open();
    };
    return (
        <div>
            <button onClick={handlePayment}>
                Pay with Razorpay
            </button>
        </div>
    )
}

export default Payment
