import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="-mt-20 w-40">
                  <Avatar
                    src="/img/team-5.png"
                    alt="Profile picture"
                    variant="circular"
                    className="h-full w-full"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <Typography variant="h4" color="blue-gray">
                    Jenna Stones
                  </Typography>
                  <Typography variant="paragraph" color="gray" className="!mt-0 font-normal">jena@mail.com</Typography>
                </div>
              </div>

              <div className="mt-10 mb-10 flex lg:flex-col justify-between items-center lg:justify-end lg:mb-0 lg:px-4 flex-wrap lg:-mt-5">
                <Button className="bg-gray-900 w-fit lg:ml-auto">Conntect</Button>
                <div className="flex justify-start py-4 pt-8 lg:pt-4">
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      22
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Friends
                    </Typography>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      10
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Photos
                    </Typography>
                  </div>
                  <div className="p-3 text-center lg:mr-4">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      89
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Comments
                    </Typography>
                  </div>
                </div>

              </div>
            </div>
            <div className="-mt-4 container space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  Los Angeles, California
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  Solution Manager - Creative Tim Officer
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  University of Computer Science
                </Typography>
              </div>
            </div>
            <div className="mb-10 py-6">
              <div className="flex w-full flex-col items-start lg:w-1/2">
                <Typography className="mb-6 font-normal text-blue-gray-500">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes,
                  performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An
                  artist of considerable range.
                </Typography>
                <Button variant="text">Show more</Button>
              </div>
            </div>
          </div>


        </div>
      </section>

      
{/* Tampilan Keranjang */}
<div className="bg-zinc-100 p-8 font-sans flex justify-center items-center h-screen">
<div className="max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-zinc-200 p-4 mt-8">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <div className="overflow-x-auto mt-6">
          <table className="w-full">
            <thead className="text-xs font-semibold uppercase text-zinc-400 bg-zinc-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Thumbnail</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Brand</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Product</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Size</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Price</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Quantity</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Subtotal</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-zinc-100">
              {/* Isi keranjang (Contoh) */}
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <img className="w-12 h-12 rounded" src="https://placehold.co/50" alt="product image" />
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="font-medium text-zinc-800">Air Jordan</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">Air Jordan 4 Women's Sail Metallic Gold</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">44</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">Rp. 6,000,000.00</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-center">1</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">Rp. 6,000,000.00</div>
                </td>
              </tr>
              {/* Tambahkan baris keranjang lain di sini */}
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <img className="w-12 h-12 rounded" src="https://placehold.co/50" alt="product image" />
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="font-medium text-zinc-800">Air Jordan</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">Air Jordan 4 Women's Sail Metallic Gold</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">44</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">Rp. 6,000,000.00</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-center">1</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">Rp. 6,000,000.00</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 mt-4 bg-zinc-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold">Total: Rp 12,000,000.00</div>
            <div className="text-sm text-zinc-500">Delivery and discount will be calculated during the checkout process.</div>
          </div>
        </div>
        <div className="flex justify-between items-center p-4">
          <button className="text-blue-600 hover:text-blue-700 focus:outline-none transition duration-150 ease-in-out">Continue Shopping</button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg focus:outline-none shadow hover:bg-blue-700 transition duration-150 ease-in-out">CHECK OUT</button>
        </div>
      </div>
      </div>
      

      
      <div className="flex items-center justify-center mb-8">
        
        <div className="flex items-center">
          <div className="flex items-center text-white text-sm font-bold bg-black rounded-full p-2">
            <div className="text-xs bg-white text-black rounded-full p-3 mr-1">1</div>
            DELIVERY
          </div>
          <div className="w-16 h-1 bg-zinc-300 dark:bg-zinc-700 mx-2"></div>
          <div className="text-zinc-500 dark:text-zinc-400 text-sm font-bold">2 SUMMARY</div>
          <div className="w-16 h-1 bg-zinc-300 dark:bg-zinc-700 mx-2"></div>
          <div className="text-zinc-500 dark:text-zinc-400 text-sm font-bold">3 PAYMENT</div>
        </div>
      </div>

      <body className="bg-zinc-100 font-sans leading-normal tracking-normal">
      <div className="container mx-auto p-32" style={{marginBottom:'-120px'}}>
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
          </body>

      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        
        <div className="flex items-center justify-between border-b-2 border-zinc-200 dark:border-zinc-700 pb-4 mb-4">
          <div className="text-lg font-bold">ADDRESS</div>
          <div className="flex items-center">
            <select className="border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-400 h-10 pl-3 pr-8 bg-white dark:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 focus:outline-none appearance-none rounded">
              <option>-- Select Address --</option>
            </select>
            <button className="ml-4 bg-black dark:bg-zinc-800 text-white dark:text-white p-2 rounded-lg">
              + New Address
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="mb-4">
              <strong>Recipient Name :</strong> Marilyn Monroe
            </div>
            <div className="mb-4">
              <strong>Contact Number :</strong> 0814614851024
            </div>
            <div className="mb-4">
              <strong>Address :</strong> Jl. Pegangsaan Timur
            </div>
            <div className="mb-4">
              <strong>Address Note (optional) :</strong> Kota Wisata, Zona Montreal Blok C6/11
            </div>
            <div className="mb-4">
              <strong>Post Code :</strong> 17895
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-4">
              <strong>Province :</strong> DKI Jakarta
            </div>
            <div className="mb-4">
              <strong>City :</strong> Jakarta Barat
            </div>
            <div className="mb-4">
              <strong>District :</strong> Palmerah
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
        <div className="flex justify-between items-center">
            <button className="bg-zinc-300 hover:bg-zinc-400 text-zinc-800 font-bold py-2 px-4 rounded-l">
              Cancel
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
              Next
            </button>
      </div>
      </div>
      </div>

      <div class="bg-white p-6 shadow-lg rounded-lg max-w-4xl mx-auto my-12">
  <h2 class="text-2xl font-bold mb-6">Your Transaction</h2>
  <div class="space-y-4">
    <div class="flex items-center justify-between bg-zinc-100 p-4 rounded-lg">
      <div class="flex items-center">
        <img
          src="https://placehold.co/100x100"
          alt="Air Jordan 4 Women's Sail Metallic Gold"
          class="mr-4 rounded"
        />
        <div>
          <h3 class="font-semibold">Air Jordan 4 Women’s Sail Metallic Gold</h3>
          <p class="text-sm">Brand: Air Jordan</p>
          <p class="text-sm">Size: 44</p>
          <p class="text-sm">Order ID: #3030303030</p>
        </div>
      </div>
      <button class="bg-black text-white px-6 py-2 rounded-lg">Track Package</button>
    </div>

    <div class="flex items-center justify-between bg-zinc-100 p-4 rounded-lg">
      <div class="flex items-center">
        <img
          src="https://placehold.co/100x100"
          alt="Air Jordan 4 Women's Sail Metallic Gold"
          class="mr-4 rounded"
        />
        <div>
          <h3 class="font-semibold">Air Jordan 4 Women’s Sail Metallic Gold</h3>
          <p class="text-sm">Brand: Air Jordan</p>
          <p class="text-sm">Size: 44</p>
          <p class="text-sm">Order ID: #3030303030</p>
        </div>
      </div>
      <button class="bg-black text-white px-6 py-2 rounded-lg">Track Package</button>
    </div>
  </div>
</div>

    <body className="bg-white dark:bg-zinc-800 p-4">
            <div className="max-w-2xl mx-auto">
                
                <nav className="text-zinc-500 text-sm mb-6">
                    Home / Air Jordan / Air Jordan 4 Women's Sail Metallic Gold
                </nav>
        
                
                <div class="bg-white p-6 shadow-lg rounded-lg max-w-4xl mx-auto my-12">

        
                <div class="flex items-center justify-between bg-zinc-100 p-4 rounded-lg">
                  
      <div class="flex items-center">
        <img
          src="img/nbhome.png"
          width={'200px'}
          alt="Air Jordan 4 Women's Sail Metallic Gold"
          class="mr-5 rounded"
        />
        
        <div>
        <h1 className="text-2xl font-bold mb-2">AIR JORDAN 4 WOMEN'S SAIL METALLIC GOLD</h1>
        <div className="flex items-center mb-4">
                    <div className="text-yellow-400 mr-2" style={{fontSize:'30px'}}>
                        ★★★★★
                    </div>
           
                </div>
                <div className="text-xl font-semibold">Rp.6.000.000.000</div>
        
                
                <div className="mb-4">
                    <label htmlFor="size" className="block text-lg font-medium mb-1">Select shoe size:</label>
                    <div className="flex gap-2">
                        <button className="border border-zinc-300 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700">37</button>
                        <button className="border border-zinc-300 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700">38</button>
                        <button className="border border-zinc-300 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700">39</button>
                        <button className="border border-zinc-300 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700">40</button>
                        <button className="border border-zinc-300 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700">41</button>
                    </div>
                </div>  
        </div>
      </div>
    </div>
        
                
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-1">Detail:</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        One of our top bestsellers in a new leather option. We've made this classic longwing derby in a really nice dark brown suede from the Italian tannery Sciarada. Made on the Ben last with a round toe box.
                    </p>
                </div>
        
                
                  <div className="flex items-center mb-4">
                            <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">
                                -
                            </button>
                            <span className="ml-4 mr-4">100</span>
                            <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
                                +
                            </button>
                       
                        </div>
        
                
                <div className="text-lg font-semibold mb-4">
                    Subtotal:&nbsp;
                    <span>Rp.6.000.000.000</span>
                </div>
        
                
                <div className="flex gap-4">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Buy Directly</button>
                    <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Add To Cart</button>
                </div>
            </div>
            </div>
            </body>
            <div class="max-w-4xl mx-auto p-4">
  <div class="flex flex-col md:flex-row justify-between gap-6">
    <div class="bg-white shadow-md rounded-lg p-4 flex-1">
      <h2 class="text-lg font-semibold border-b pb-2">VOUCHERS</h2>
      <p class="text-sm my-2">Ignore it if you don't have any voucher</p>
      <div class="flex gap-2 items-center mb-4">
        <input type="text" placeholder="Enter voucher code" class="border p-2 flex-1" />
        <button class="bg-black text-white px-4 py-2">SELECT VOUCHER</button>
      </div>
      <p class="text-sm">Take Advantage of our exclusive offers</p>
    </div>

    <div class="bg-white shadow-md rounded-lg p-4 flex-1">
      <div class="flex justify-between border-b pb-2 mb-2">
        <span>Total Product (tax incl.)</span>
        <span>Rp 6.000.000,00</span>
      </div>
      <div class="flex justify-between border-b pb-2 mb-2">
        <span>Delivery Cost</span>
        <span>Rp 100.000,00</span>
      </div>
      <div class="flex justify-between border-b pb-2 mb-2">
        <span>Total Vouchers</span>
        <span>Rp 0</span>
      </div>
      <div class="flex justify-between font-semibold pt-2">
        <span>TOTAL</span>
        <span>Rp 6.000.000,00</span>
      </div>
    </div>
  </div>

  
</div>

<div class="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
  <div class="flex items-center mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 text-zinc-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 8c1.66 0 3-1.34 3-3S13.66 2 12 2 9 3.34 9 5s1.34 3 3 3zm0 2c-2.21 0-4-1.79-4-4S9.79 1 12 1s4 1.79 4 4-1.79 4-4 4zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm0 2c1.1 0 2.1.23 3 .64V17H9v-1.36c.9-.41 1.9-.64 3-.64z"
      />
    </svg>
    <span class="ml-2 text-lg font-semibold text-zinc-800">PAYMENT OVERVIEW</span>
  </div>
  <div class="grid grid-cols-2 gap-6">
    <div>
      <label class="block text-sm font-medium text-zinc-700">First Name</label>
      <div class="mt-1 flex items-center">
        <input
          type="text"
          value="FADHIL"
          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-zinc-300 rounded-md"
          disabled
        />
        <span class="ml-2 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
      </div>
    </div>
    <div>
      <label class="block text-sm font-medium text-zinc-700">Last Name</label>
      <div class="mt-1 flex items-center">
        <input
          type="text"
          value="IMAN"
          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-zinc-300 rounded-md"
          disabled
        />
        <span class="ml-2 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-6 mt-4">
    <div>
      <label class="block text-sm font-medium text-zinc-700">Card Number</label>
      <div class="mt-1 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-zinc-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 7H3v10h18V7zm-1 9H4V8h16v8zm-9-3H5v2h6v-2z"
          />
        </svg>
        <span class="ml-2 text-lg">•••• •••• •••• 1234</span>
      </div>
    </div>
    <div>
      <label class="block text-sm font-medium text-zinc-700">CVV</label>
      <div class="mt-1 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-zinc-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 14v-3m0 0V8m0 3h2m-2 0H10m6 6H6v-2a2 2 0 012-2h8a2 2 0 012 2v2z"
          />
        </svg>
        <span class="ml-2 text-lg">•••</span>
      </div>
    </div>
  </div>
  <div class="mt-4 flex justify-center space-x-4">
    <img src="https://placehold.co/64x40" alt="Visa" />
    <img src="https://placehold.co/64x40" alt="MasterCard" />
    <img src="https://placehold.co/64x40" alt="American Express" />
    <img src="https://placehold.co/64x40" alt="Discover" />
  </div>
</div>


      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}

export default Profile;
