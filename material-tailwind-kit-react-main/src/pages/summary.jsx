import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PageTitle, Footer, ScrollToTop } from "@/widgets/layout";

export const Summary = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    const location = useLocation();
    const selectedAddress = location.state ? location.state.selectedAddress : null;
    const [voucherCode, setVoucherCode] = useState('');
    const [appliedVoucherAmount, setAppliedVoucherAmount] = useState(0);
  
    const handleVoucherChange = (e) => {
      setVoucherCode(e.target.value);
    };
  
    const handleSelectVoucher = () => {
      // Contoh: Tambahkan logika untuk memproses kode voucher
      if (voucherCode === 'INFINITEPROMO') {
        // Set potongan harga (misalnya Rp 50000)
        setAppliedVoucherAmount(50000);
      } else if (voucherCode === 'PRAM') {
        // Set potongan harga (misalnya Rp 50000)
        setAppliedVoucherAmount(150000);
    } else if (voucherCode === 'RUDI') {
        // Set potongan harga (misalnya Rp 50000)
        setAppliedVoucherAmount(1150000);
    } else {
        // Jika kode voucher tidak valid, atur potongan harga ke 0
        setAppliedVoucherAmount(0);
      }
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
        </tr>
      ));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.description * item.quantity, 0);
      };

      const Total = () => {
        const total = calculateTotal();
        const shippingCost = 100000;
        const totalAfterVoucher = total - appliedVoucherAmount;
        return totalAfterVoucher + shippingCost;
      };
    
  return (
    <body className="bg-zinc-100 font-sans leading-normal tracking-normal">
      <div className="container mx-auto p-32" style={{marginBottom:'-120px', marginTop:'-120px'}}>
        <div className="bg-white p-8 rounded-md shadow-md">
          <div className="flex items-center mb-5">
          <div className="flex items-center text-zinc-500 relative">
            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-zinc-300 bg-green-500 text-white flex items-center justify-center">
                <span className="text-lg font-bold">1</span>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-zinc-500">
                Delivery
            </div>
            </div>

            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-zinc-300"></div>
            <div className="flex items-center text-zinc-500 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-zinc-300 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="m-auto text-zinc-400 w-6 h-6">
                              <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="14" fill="currentColor">2</text>

                </svg>
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-zinc-500">
                Summary
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-zinc-300"></div>
            <div className="flex items-center text-zinc-500 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-zinc-300 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="m-auto text-zinc-400 w-6 h-6">
                             <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="14" fill="currentColor">3</text>

                </svg>
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-zinc-500">
                Payment
              </div>
            </div>
          </div>
          </div>
          </div>
        
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex items-center justify-between border-b-2 border-zinc-200 dark:border-zinc-700 pb-4 mb-4"  style={{marginBottom:'-120px'}}>
        <div className="text-lg font-bold">Summary</div>
      </div>

      <div className="bg-zinc-100 p-8 font-sans flex justify-center items-center h-screen" style={{marginBottom:'-40px'}}>
      <div className="max-w mx-auto bg-white shadow-lg rounded-sm border border-zinc-200 p-4 mt-8">
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
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-zinc-100">
              {renderCartItems()}
            </tbody>
          </table>
        </div>
        </div>
        </div>
        
        <div class="flex flex-col md:flex-row justify-between gap-1 mb-8">
    <div class="bg-white shadow-md rounded-lg p-4 flex-1">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="mb-4">
            <strong>Recipient Name :</strong> {selectedAddress.recipientName}
          </div>
          <div className="mb-4">
            <strong>Contact Number :</strong> {selectedAddress.contactNumber}
          </div>
          <div className="mb-4">
            <strong>Address :</strong> {selectedAddress.address}
          </div>
          {selectedAddress.addressNote && (
            <div className="mb-4">
              <strong>Address Note (optional) :</strong> {selectedAddress.addressNote}
            </div>
          )}
          <div className="mb-4">
            <strong>Post Code :</strong> {selectedAddress.postCode}
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-4">
            <strong>Province :</strong> {selectedAddress.province}
          </div>
          <div className="mb-4">
            <strong>City :</strong> {selectedAddress.city}
          </div>
          <div className="mb-4">
            <strong>District :</strong> {selectedAddress.district}
          </div>
        </div>
      </div>
</div>
</div>
      <div class="mx-auto">
  <div class="flex flex-col md:flex-row justify-between gap-1">
    <div class="bg-white shadow-md rounded-lg p-4 flex-1">
      <h2 class="text-lg font-semibold border-b pb-2">VOUCHERS</h2>
      <p class="text-sm my-2">Ignore it if you don't have any voucher</p>
      <div class="flex gap-2 items-center mb-4">
        <input type="text" placeholder="Enter voucher code" class="border p-2 flex-1" value={voucherCode}
              onChange={handleVoucherChange}/>
        <button class="bg-black text-white px-4 py-2" onClick={handleSelectVoucher}>SELECT VOUCHER</button>
      </div>
      <p class="text-sm">Take Advantage of our exclusive offers</p>
    </div>

    <div class="bg-white shadow-md rounded-lg p-4 flex-1">
      <div class="flex justify-between border-b pb-2 mb-2">
        <span>Total Product (tax incl.)</span>
        <span>Rp {calculateTotal().toLocaleString('id-ID')}</span>
      </div>
      <div class="flex justify-between border-b pb-2 mb-2">
        <span>Delivery Cost</span>
        <span>Rp 100.000,00</span>
      </div>
      <div class="flex justify-between border-b pb-2 mb-2">
        <span>Total Vouchers</span>
        <span>Rp {appliedVoucherAmount.toLocaleString('id-ID')}</span>
      </div>
      <div class="flex justify-between font-semibold pt-2">
        <span>TOTAL</span>
        <span>Rp {Total().toLocaleString('id-ID')}</span>
      </div>
    </div>
  </div>

  
</div>
    <div className="flex justify-between items-center mt-8">
          <Link to="/address" className="bg-zinc-300 hover:bg-zinc-400 text-zinc-800 font-bold py-2 px-4 rounded-l">
            Cancel
          </Link>
          <a
            href='/payment' 
            className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Proceed To Payment
          </a>
      </div>
    </div>

    <div className="bg-white" style={{marginTop:'10px'}}>
        <Footer />
      </div>
    </body>
  );
};

export default Summary;
