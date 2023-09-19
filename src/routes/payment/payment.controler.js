import Stripe from 'stripe';
import { course } from '../courses/course.modal.js';
export const CheckoutSession = async (req,res) => {
    try {
      const {video} = req.body;
      const id = req.params;
      console.log(id);
      const premium = await course.findById(id);
      console.log(premium);
      if(premium.premium){
        console.log("This is a premium course");
          const stripe = new Stripe(process.env.STRIPE_SECRET);
          const userId = video?.clerkUserId
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: video.email,
            billing_address_collection: 'auto',
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: premium.name,
                  },
                  unit_amount: premium.price * 100,
                },
                quantity: 1,
              },
            ],
            metadata: {
                userId
            },
            mode: 'payment',
            success_url: `http://localhost:3000/course-details/${id}`,
            cancel_url: `http://localhost:3000/course-details/${id}`,
        });
        res.status(200).json({id: session.id,session});
        }
        else{
          console.log("This is a free course");
          res.status(200).json({message:"This is a free course"});
        }
    } catch (error) {
        
    }
}