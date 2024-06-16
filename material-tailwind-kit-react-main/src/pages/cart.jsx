import React from 'react';
import { useCart } from './CartContext';
import PropTypes from 'prop-types';
import { PageTitle, Footer, ScrollToTop } from "@/widgets/layout";

export const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (itemId, size, value) => {
    const parsedValue = parseInt(value);
    const quantity = isNaN(parsedValue) || parsedValue < 1 ? 1 : parsedValue;
    updateQuantity(itemId, size, quantity);
  };

  const handleRemoveFromCart = (itemId, size) => {
    removeFromCart(itemId, size);
  };

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return (
        <tr>
          <td colSpan="8" className="p-4 text-center">
            Your cart is empty. <a href="/product" className="text-blue-600 hover:underline">Continue shopping</a>
          </td>
        </tr>
      );
    }

    return cartItems.map((item) => (
      <tr key={item.id}>
        <td className="p-2 whitespace-nowrap">
          <img className="w-18 h-14 rounded" src={item.thumbnail} alt="product image" />
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="font-medium text-zinc-800">{item.category}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">{item.product}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-center">{item.size}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">Rp. {item.description.toLocaleString('id-ID')}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-center">
            <input
              type="text"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, item.size, e.target.value)}
              className="border border-gray-300 rounded-md p-1 text-center"
              style={{ width: '50px' }}
            />
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">
            Rp. {(item.description * item.quantity).toLocaleString('id-ID')}
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <button
            className="text-red-600 hover:text-red-700 focus:outline-none"
            onClick={() => handleRemoveFromCart(item.id, item.size)}
          >
            Remove
          </button>
        </td>
      </tr>
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.description * item.quantity, 0);
  };

  return (
    <div>
    <div className="bg-zinc-100 p-8 font-sans flex justify-center items-center h-screen">
      <div className="max-w mx-auto bg-white shadow-lg rounded-sm border border-zinc-200 p-4 mt-8">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <div className="overflow-x-auto mt-6">
          <table className="w-full">
            <thead className="text-xs font-semibold uppercase text-zinc-400 bg-zinc-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Thumbnail</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Brand</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Product</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Size</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Price</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Quantity</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Subtotal</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-zinc-100">
              {renderCartItems()}
            </tbody>
          </table>
        </div>
        {cartItems.length > 0 && (
          <div className="p-4 mt-4 bg-zinc-50 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold">Total: Rp {calculateTotal().toLocaleString('id-ID')}</div>
              <div className="text-sm text-zinc-500">Delivery and discount will be calculated during the checkout process.</div>
            </div>
            <div className="flex justify-between items-center p-4">
              <a href="/product" className="text-blue-600 hover:text-blue-700 focus:outline-none transition duration-150 ease-in-out">Continue Shopping</a>
              <a href='/address' className="bg-blue-600 text-white px-5 py-2 rounded-lg focus:outline-none shadow hover:bg-blue-700 transition duration-150 ease-in-out">CHECK OUT</a>
            </div>
          </div>
        )}
      </div>

    
    </div>
      <div className="bg-white">
      <Footer />
    </div>
    </div>
  );
};

Cart.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default Cart;
