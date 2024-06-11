import React from 'react';
import Head from 'next/head';

const ProductsPage = () => {
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gray-100 font-roboto">
        <div>
          <div className="bg-yellow-100 p-4 text-yellow-800">
            <i className="fas fa-exclamation-triangle"></i> Important messages
            for items in your Cart:
            <ul className="list-disc ml-6">
              <li>
                Lay's Potato Chips, India's Masala Magic Flavour, Crunchy Chips
                & Snacks, 90g/100g/115g (Weight May Vary) has increased from ₹45.00
                to ₹46.00
              </li>
              <li>
                Britannia 50-50 Maska Chaska Biscuits, 300 g has decreased from
                ₹80.00 to ₹77.00
              </li>
            </ul>
          </div>
          <div className="p-4">
            <div className="bg-white p-4 border border-green-500">
              <h2 className="text-green-600 text-2xl font-bold">fresh</h2>
              <div className="flex space-x-4 mt-4">
                <img
                  src="https://placehold.co/100x100"
                  alt="Lay's Potato Chips"
                />
                <img
                  src="https://placehold.co/100x100"
                  alt="Britannia 50-50 Maska Chaska Biscuits"
                />
                <img src="https://placehold.co/100x100" alt="Pepsi Bottle" />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="bg-white p-4 border border-green-500 w-1/3">
                <div className="text-lg font-bold">
                  Subtotal (4 items): ₹287.00
                </div>
                <button className="bg-yellow-500 text-black p-2 w-full mt-2">
                  Proceed to Buy Fresh Items
                </button>
                <button className="bg-gray-200 text-black p-2 w-full mt-2">
                  Go to Fresh Cart
                </button>
                <div className="mt-2">
                  Delivery to <span className="font-bold">Arka Das Chowdhur-KOLKATA</span>
                </div>
                <div className="text-blue-500">Continue shopping on Fresh</div>
              </div>
              <div className="bg-white p-4 w-2/3">
                <h2 className="text-2xl font-bold">Shopping Cart</h2>
                <div className="text-blue-500">Deselect all items</div>
                <div className="flex mt-4">
                  <img
                    src="https://placehold.co/100x100"
                    alt="MSI GeForce RTX 4070 Ti Super 16G Ventus 2X OC Graphic Card"
                  />
                  <div className="ml-4">
                    <div className="font-bold">
                      MSI GeForce RTX 4070 Ti Super 16G Ventus 2X OC Graphic Card
                      - NVIDIA GeForce RTX 4070 Ti Super GPU, 16GB GDDR6X 256-bit
                      Memory, 21 Gbps, PCI Express 4 Interface...
                    </div>
                    <div className="text-green-500">In stock</div>
                    <div className="flex items-center mt-2">
                      <input type="checkbox" className="mr-2" /> This will be a
                      gift <span className="text-blue-500 ml-2">Learn more</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <label className="mr-2">Qty:</label>
                      <select className="border p-1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <button className="text-blue-500 ml-4">Delete</button>
                      <button className="text-blue-500 ml-4">Save for later</button>
                      <button className="text-blue-500 ml-4">
                        See more like this
                      </button>
                      <button className="text-blue-500 ml-4">Share</button>
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-red-500 font-bold">₹98,599.00</div>
                    <div className="text-gray-500 line-through">
                      M.R.P.: ₹1,44,999.00
                    </div>
                    <div className="text-red-500">32% off</div>
                    <div className="text-red-500">Limited time deal</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 border border-gray-300 w-1/3">
                <div className="text-lg font-bold">
                  Subtotal (1 item): ₹98,599.00
                </div>
                <div className="flex items-center mt-2">
                  <input type="checkbox" className="mr-2" /> This order contains
                  a gift
                </div>
                <button className="bg-yellow-500 text-black p-2 w-full mt-2">
                  Proceed to Buy
                </button>
                <div className="mt-2">EMI Available</div>
              </div>
            </div>
            <div className="bg-white p-4 mt-4">
              <h2 className="text-xl font-bold">Consider these items</h2>
              <div className="flex space-x-4 mt-4">
                <div className="border p-4">
                  <img
                    src="https://placehold.co/100x100"
                    alt="Olay Ultimate Eye Cream"
                  />
                  <div className="mt-2">
                    Olay Ultimate Eye Cream | Reduces Dark Circles...
                  </div>
                  <div className="text-yellow-500">⭐⭐⭐⭐⭐ 588</div>
                  <div className="text-red-500">₹1,079.00</div>
                </div>
                <div className="border p-4">
                  <img
                    src="https://placehold.co/100x100"
                    alt="Rimmel Stay Matte Pressed Powder"
                  />
                  <div className="mt-2">
                    Rimmel Stay Matte Pressed Powder | Compact Powder...
                  </div>
                  <div className="text-yellow-500">⭐⭐⭐⭐ 24,643</div>
                  <div className="text-red-500">₹192.00</div>
                </div>
                <div className="border p-4">
                  <img
                    src="https://placehold.co/100x100"
                    alt="WOW Skin Science Shampoo"
                  />
                  <div className="mt-2">
                    WOW Skin Science Shampoo | Red Onion Black Seed Oil...
                  </div>
                  <div className="text-yellow-500">⭐⭐⭐⭐ 67,155</div>
                  <div className="text-red-500">₹297.00</div>
                </div>
                <div className="border p-4">
                  <img
                    src="https://placehold.co/100x100"
                    alt="L'Oréal Paris UV Defender Sunscreen"
                  />
                  <div className="mt-2">
                    L'Oréal Paris UV Defender Sunscreen SPF 50+ PA++...
                  </div>
                  <div className="text-yellow-500">⭐⭐⭐⭐⭐ 202</div>
                  <div className="text-red-500">₹426.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default ProductsPage;
