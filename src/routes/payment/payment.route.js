import express from 'express';
import { CheckoutSession } from './payment.controler.js';
const router = express.Router();
// post single payment
router.post('/create-checkout-session/:id',CheckoutSession);


export default router;