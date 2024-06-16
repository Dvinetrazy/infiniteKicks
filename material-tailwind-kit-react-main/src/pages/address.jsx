import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { PageTitle, Footer, ScrollToTop } from "@/widgets/layout";

export const AddressForm = () => {
  const Navigate = useNavigate();
  const initialAddress = {
    recipientName: '',
    address: '',
    contactNumber: '',
    addressNote: '',
    postCode: '',
    province: '',
    city: '',
    district: ''
  };

  const initialAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
  const [addresses, setAddresses] = useState(initialAddresses);
  const [newAddress, setNewAddress] = useState({ ...initialAddress });
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(-1);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('addresses', JSON.stringify(addresses));
  
    // Cek apakah selectedAddressIndex adalah indeks yang valid
    if (selectedAddressIndex !== -1 && selectedAddressIndex < addresses.length) {
      const selectedAddress = addresses[selectedAddressIndex];
      // Perbarui newAddress dengan nilai dari alamat yang dipilih
      setNewAddress(selectedAddress);
    }
  }, [selectedAddressIndex, addresses]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({
      ...newAddress,
      [name]: value
    });
  };

  const handleAddAddress = () => {
    if (isValidAddress(newAddress)) {
      // Menambahkan alamat baru ke dalam array addresses
      const updatedAddresses = [...addresses, newAddress];
      setAddresses(updatedAddresses);
  
      // Mengatur selectedAddressIndex ke indeks alamat yang baru ditambahkan
      const newIndex = updatedAddresses.length - 1; // Indeks alamat yang baru ditambahkan
      setSelectedAddressIndex(newIndex);
  
      // Mengosongkan input newAddress setelah alamat baru ditambahkan
      setNewAddress({ ...initialAddress });
    } else {
      alert('Please fill out all required fields.');
    }
  };
  
  const handleResetNewAddress = () => {
    // Mengosongkan input newAddress ketika tombol "+ New Address" diklik
    setNewAddress({ ...initialAddress });
  };
  
  
  
  const handleEditAddress = () => {
    setEditMode(true);
    const selectedAddress = addresses[selectedAddressIndex];
    setNewAddress({ ...selectedAddress });
  };

  const handleUpdateAddress = () => {
    if (isValidAddress(newAddress)) {
      const updatedAddresses = [...addresses];
      updatedAddresses[selectedAddressIndex] = newAddress;
      
      // Mengupdate array addresses dengan alamat yang telah diperbarui
      setAddresses(updatedAddresses);
      
      // Mengatur kembali newAddress ke initialAddress setelah memperbarui alamat
      setNewAddress({ ...initialAddress });
      
      // Menghentikan mode edit dan menyeleksi alamat yang baru diperbarui
      setEditMode(false);
      setSelectedAddressIndex(selectedAddressIndex); // Menyegarkan tampilan dengan memilih alamat yang diperbarui
    } else {
      alert('Please fill out all required fields.');
    }
  };

  const handleDeleteAddress = () => {
    if (selectedAddressIndex !== -1) {
      const updatedAddresses = [...addresses];
      updatedAddresses.splice(selectedAddressIndex, 1);
      setAddresses(updatedAddresses);
      setSelectedAddressIndex(-1);
      setEditMode(false);
    }
  };

  const isValidAddress = (address) => {
    return (
      address.recipientName &&
      address.address &&
      address.contactNumber &&
      address.postCode &&
      address.province &&
      address.city &&
      address.district
    );
  };

  const handleCancel = () => {
    Navigate('/cart')
    // window.location.href = '/home';
  };

  const handleNext = () => {
    if (isValidAddress(newAddress)) {
      Navigate('/summary', { state: { selectedAddress: newAddress } });
    } else {
      alert('Please fill out all required fields.');
      console.log('newAddress:', newAddress);
      console.log('selectedAddressIndex:', selectedAddressIndex);
  
    }

   
  };

  return (
    <body className="bg-zinc-100 font-sans leading-normal tracking-normal">
      <div className="container mx-auto p-32" style={{marginBottom:'-120px', marginTop:'-120px'}}>
        <div className="bg-white p-8 rounded-md shadow-md">
          <div className="flex items-center mb-5">
            <div className="flex items-center text-zinc-500 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-zinc-300 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="m-auto text-zinc-400 w-6 h-6">
                           <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="14" fill="currentColor">1</text>

                </svg>
                
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
      <div className="text-lg font-bold mb-4">ADDRESS</div>
      <div className="flex items-center mb-4">
        <select
          className="border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-400 h-10 pl-3 pr-8 bg-white dark:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 focus:outline-none appearance-none rounded"
          value={selectedAddressIndex}
          onChange={(e) => setSelectedAddressIndex(parseInt(e.target.value))}
        >
          <option value={-1} disabled>-- Select Address --</option>
          {addresses.map((address, index) => (
            <option key={index} value={index}>
              {address.recipientName}
            </option>
          ))}
        </select>
        {editMode ? (
          <button
            disabled
            className="ml-4 bg-black dark:bg-zinc-800 text-white dark:text-white p-2 rounded-lg"
          >
            + New Address
          </button>
        ) : (
          <button
          onClick={() => {
            setSelectedAddressIndex(-1);
            handleResetNewAddress(); // Memanggil fungsi untuk mengosongkan newAddress
          }}
          className="ml-4 bg-black dark:bg-zinc-800 text-white dark:text-white p-2 rounded-lg"
        >
          + New Address
        </button>

        )}
        {selectedAddressIndex !== -1 && !editMode && (
          <button
            onClick={handleEditAddress}
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Edit
          </button>
        )}
        {selectedAddressIndex !== -1 && (
          <button
            onClick={() => {handleDeleteAddress(); handleResetNewAddress();}}
            disabled={editMode} // Disable delete button in edit mode
            className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Delete
          </button>
        )}
        
      </div>


      {selectedAddressIndex !== -1 ? (
        <div className="grid grid-cols-2 gap-4">
          {editMode ? (
            Object.keys(initialAddress).map((key) => (
              <div key={key} className="mb-4">
                <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')} :</strong>
                <input
                  type="text"
                  name={key}
                  value={newAddress[key]}
                  onChange={handleChange}
                  className="border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-400 h-10 pl-3 pr-8 bg-white dark:bg-zinc-800 focus:outline-none rounded w-full"
                />
              </div>
            ))
          ) : (
            Object.entries(addresses[selectedAddressIndex]).map(([key, value]) => (
              <div key={key} className="mb-4">
                <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')} :</strong> {value}
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {Object.keys(initialAddress).map((key) => (
            <div key={key} className="mb-4">
              <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')} :</strong>
              <input
                type="text"
                name={key}
                value={newAddress[key]}
                onChange={handleChange}
                className="border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-400 h-10 pl-3 pr-8 bg-white dark:bg-zinc-800 focus:outline-none rounded w-full"
              />
            </div>
          ))}
        </div>
      )}
         <div className="flex justify-between items-center mt-8">
        <button onClick={handleCancel} className="mt-4 bg-white-500 hover:bg-white-700 text-black font-bold py-2 px-4 rounded-lg">
          Cancel
        </button>
        
        {selectedAddressIndex !== -1 && !editMode && (
          <button 
            onClick={handleNext}
            disabled={editMode} // Disable delete button in edit mode
            className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Next
          </button>
        )}

      {selectedAddressIndex !== -1 && editMode && (
        <button
          onClick={handleUpdateAddress}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Update Address
        </button>
      )}
      {selectedAddressIndex === -1 && (
        <button
          onClick={handleAddAddress}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Save Address
        </button>
      )}
      </div>
    </div>
    <div className="bg-white" style={{marginTop:'10px'}}>
        <Footer />
      </div>
    </body>
  );
};

export default AddressForm;
