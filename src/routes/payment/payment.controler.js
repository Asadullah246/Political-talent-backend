import Stripe from 'stripe';
export const CheckoutSession = async (req,res) => {
    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET);
        const {video} = req.body;
        const userId = video?.clerkUserId
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: video.email,
            billing_address_collection: 'auto',
            line_items: [
              {
                price_data: {
                  currency: 'USD',
                  product_data: {
                    name: video.title,
                  },
                  unit_amount: video.price * 100,
                },
                quantity: 1,
              },
            ],
            metadata: {
                userId
            },
            mode: 'payment',
            success_url: `${'http://localhost:3000/course-details'}`,
            cancel_url: `${'http://localhost:3000/course-details'}`,
        });
        res.status(200).json({id: session.id});
    } catch (error) {
        
    }
}