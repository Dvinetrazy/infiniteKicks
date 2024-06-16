import React, { useState, useEffect } from 'react';
import { Link , useNavigate, Navigate} from 'react-router-dom';
import { useCart } from './CartContext'; // Impor useCart dari CartContext
import Swal from 'sweetalert';

export const Payment = () => {
    const navigate = useNavigate(); // Use useNavigate hook
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const { clearCart } = useCart(); // Dapatkan fungsi clearCart dari CartContext
  const [transactionData, setTransactionData] = useState(null); // State untuk menyimpan data transaksi

  const handleCardChange = (event) => {
    setSelectedCard(event.target.value);
  };
  
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isCardNumberValid, setIsCardNumberValid] = useState(false);
  const [isCvvValid, setIsCvvValid] = useState(false);

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value;
    setCardNumber(value);
  };

  const handleCvvChange = (event) => {
    const value = event.target.value;
    setCvv(value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFirstNameValid(firstName.length >= 2);
      setIsLastNameValid(lastName.length >= 2);
      setIsCardNumberValid(cardNumber.length >= 10);
      setIsCvvValid(cvv.length === 3);
      setIsFormComplete(
        firstName.length >= 2 &&
        lastName.length >= 2 &&
        cardNumber.length >= 10 &&
        cvv.length === 3 &&
        selectedCard !== null
      );
    }, 500);
  
    return () => clearTimeout(timeout);
  }, [firstName, lastName, cardNumber, cvv, selectedCard]);

  const handleSubmit = () => {
    if (isFormComplete) {
      // Hapus semua item dari keranjang
      clearCart();
  
      // Simpan data transaksi
      const transactionData = {
        firstName,
        lastName,
        cardNumber,
        cvv,
        selectedCard,
      };
      console.log('Transaction Data:', transactionData);
  
      // Tampilkan pemberitahuan pembayaran berhasil menggunakan SweetAlert
      Swal({
        title: 'Success!',
        text: 'You order was successfully processed.',
        icon: 'success',
      }).then(() => {
        // Navigasi ke halaman transaksi setelah menutup SweetAlert
        navigate('/transactions');
  
        // Reset form setelah submit (jika diperlukan)
        setFirstName('');
        setLastName('');
        setCardNumber('');
        setCvv('');
        setSelectedCard(null);
        setIsFirstNameValid(false);
        setIsLastNameValid(false);
        setIsCardNumberValid(false);
        setIsCvvValid(false);
        setIsFormComplete(false);
      });
    } else {
      alert('Please fill out all required fields.');
    }
  };
  

  return (
    <body className="bg-zinc-100 font-sans leading-normal tracking-normal">
    <div className="container mx-auto p-32" style={{marginBottom:'-240px', marginTop:'-120px'}}>
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
          <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-zinc-300 bg-green-500 text-white flex items-center justify-center">
              <span className="text-lg font-bold">2</span>
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
    <div className="bg-zinc-100 font-sans leading-normal tracking-normal">
      <div className="container mx-auto p-32">
        <div className="flex items-center mb-4">
          <span className="text-lg font-semibold text-zinc-800">Payment Overview</span>
        </div>
        <div className="relative">
          <select
            type="text"
            disabled
            className="border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-400 h-10 pl-3 pr-8 bg-white dark:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 focus:outline-none appearance-none rounded-full"
            style={{ width: '890px', marginBottom: '10px' }}>
            <option>Credit</option>
          </select>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zinc-700">First Name</label>
              <div className="mt-1 flex items-center">
                <input
                  type="text"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-none rounded-md focus:outline-none"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
                {isFirstNameValid && (
                  <span className="ml-2 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700">Last Name</label>
              <div className="mt-1 flex items-center">
                <input
                  type="text"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-none rounded-md focus:outline-none"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
                {isLastNameValid && (
                  <span className="ml-2 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700">Card Number</label>
              <div style={{display:'flex'}}>
              <input
                type="number"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-none rounded-md focus:outline-none"
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
               {isCardNumberValid && (
                  <span className="ml-2 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
            </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700">CVV</label>
              <div style={{display:'flex'}}>
              <input
                type="text"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-none rounded-md focus:outline-none"
                value={cvv}
                onChange={handleCvvChange}
              />
                {isCvvValid && (
                  <span className="ml-2 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
                </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <label className="image-radio">
              <input
                type="radio"
                name="card"
                value="visa"
                checked={selectedCard === 'visa'}
                onChange={handleCardChange}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Old_Visa_Logo.svg"
                alt="visa"
                style={{ width: '100px', height: '60px', border: selectedCard === 'visa' ? '2px solid blue' : 'none' }}
              />
            </label>

            <label className="image-radio">
              <input
                type="radio"
                name="card"
                value="mastercard"
                checked={selectedCard === 'mastercard'}
                onChange={handleCardChange}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
                alt="Mastercard"
                style={{ width: '100px', height: '60px', border: selectedCard === 'mastercard' ? '2px solid blue' : 'none' }}
              />
            </label>

            <label className="image-radio">
              <input
                type="radio"
                name="card"
                value="americanexpress"
                checked={selectedCard === 'americanexpress'}
                onChange={handleCardChange}
              />
              <img
                src="https://www.shutterstock.com/image-vector/vinnytsia-ukraine-september-6-2023-600nw-2358048941.jpg"
                alt="americanexpress"
                style={{ width: '100px', height: '60px', border: selectedCard === 'americanexpress' ? '2px solid blue' : 'none' }}
              />
            </label>

            <label className="image-radio">
              <input
                type="radio"
                name="card"
                value="discover"
                checked={selectedCard === 'discover'}
                onChange={handleCardChange}
              />
              <img
                alt="discover"
                src='https://www.investopedia.com/thmb/bsuvDPp6qRajunDxfjy4UHcSfwk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Discover-logo-28a70026a79d4023adafb0f5e2e773cf.jpg'
                style={{ width: '100px', height: '60px', border: selectedCard === 'discover' ? '2px solid blue' : 'none' }}
              />
            </label>

            {/* Add similar blocks for other card options */}
          </div>
          <div className="flex justify-between items-center mt-8">
            <Link to="/address" className="bg-zinc-300 hover:bg-zinc-400 text-zinc-800 font-bold py-2 px-4 rounded-l">
              Cancel
            </Link>

            <button
            onClick={handleSubmit}
            className={`ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg ${isFormComplete ? '' : 'opacity-50 cursor-not-allowed'}`}
            disabled={!isFormComplete}
          >
            Submit
          </button>

          </div>
          <div className="mt-4 flex justify-center space-x-4">
            {/* Placeholder for card logos */}
          </div>
        </div>
      </div>
    </div>
    </body>
  );
};

export default Payment;
