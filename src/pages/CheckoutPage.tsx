import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { placeOrder } from '../lib/api';

const CheckoutPage: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [orderPlaced, setOrderPlaced] = React.useState(false);

  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const orderPayload = {
        name,
        address,
        email,
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        total_price: totalPrice // Use total_price to match DB column
      };
      console.log('Order payload:', orderPayload);
      await placeOrder(orderPayload);
      setOrderPlaced(true);
      clearCart();
    } catch (err: any) {
      let message = 'Failed to place order. Please try again.';
      if (err?.message) message = err.message;
      if (err?.details) message += ` (${err.details})`;
      setSubmitError(`Failed to place order: ${message}`);
      // Log full error object for debugging
      // eslint-disable-next-line no-console
      console.error('Supabase order error:', err, JSON.stringify(err, null, 2));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Thank You for Your Order!</h2>
        <p className="mb-8">Your order has been placed successfully. A confirmation email will be sent to you shortly.</p>
        <button
          className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800"
          onClick={() => navigate('/shop')}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="divide-y divide-gray-200 mb-4">
              {items.map(item => (
                <li key={item.id} className="py-2 flex justify-between items-center">
                  <span>{item.name} x {item.quantity}</span>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between font-bold text-lg border-t pt-4">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Form */}
        <form className="bg-white rounded-lg shadow-md p-6" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Address</label>
            <textarea
              className="w-full border rounded-md px-3 py-2"
              value={address}
              onChange={e => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-md px-3 py-2"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          {submitError && (
            <div className="mb-4 text-red-600 text-center font-semibold">
              {submitError}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
            disabled={isSubmitting || items.length === 0}
          >
            {isSubmitting ? 'Placing Order...' : 'Place Order'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
