
import type { StripeWebhookHandler } from "@payloadcms/plugin-stripe/types";
import type Stripe from "stripe";

/**
 * This webhook will run whenever a payment intent is canceled
 */
export const paymentCanceled: StripeWebhookHandler<{
	id: string;
	data: {
		object: Stripe.PaymentIntent;
	};
}> = async ({ event, payload }) => {
	const paymentIntent = event.data.object;

	// Extract relevant details
	const orderId = paymentIntent.metadata?.orderId;
	const customerEmail =
		paymentIntent.receipt_email || paymentIntent.metadata?.email;

	console.log(`🔔 Received Stripe Event: ${event.id}`);

	if (!orderId) {
		console.error("❌ Missing order ID in payment metadata");
		return;
	}

	try {
		// Update order status in Payload CMS
		const result = await payload.update({
			collection: "orders",
			where: {
				orderNumber: {
					equals: orderId,
				},
			},
			data: {
				orderStatus: "canceled",
			},
		});

		console.log(`✅ Payment canceled for Order ID: ${orderId}`, result);

		// (Optional) Send cancellation email
		if (customerEmail) {
			await sendOrderCancellationEmail(customerEmail, orderId);
		}
	} catch (error) {
		console.error("❌ Error updating order status:", error);
	}
};

// Dummy function for email sending (replace with actual implementation)
async function sendOrderCancellationEmail(email: string, orderId: string) {
	console.log(
		`📧 Sending cancellation email to ${email} for Order ID: ${orderId}`,
	);
}
