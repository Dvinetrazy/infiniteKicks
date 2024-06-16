import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';

export const OrderTransaction = () => {
  const { cartItems } = useCart();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (cartItems.length > 0) {
      const newOrders = cartItems.map((item) => ({
        ...item,
        orderId: generateOrderId(), // Generate order ID for each item
      }));
      setOrders(newOrders);
    }
  }, [cartItems]);

  // Function to generate a random order ID
  const generateOrderId = () => {
    return '#' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-4xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6">Your Transaction</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between bg-zinc-100 p-4 rounded-lg">
            <div className="flex items-center">
              <img
                src={order.image}
                alt={order.name}
                className="mr-4 rounded"
                style={{ width: '100px', height: '100px' }}
              />
              <div>
                <h3 className="font-semibold">{order.name}</h3>
                <p className="text-sm">Brand: {order.brand}</p>
                <p className="text-sm">Size: {order.size}</p>
                <p className="text-sm">Order ID: {order.orderId}</p>
              </div>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-lg">Track Package</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTransaction;
