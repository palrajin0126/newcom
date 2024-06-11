// delivery.tsx

import React from "react";
import Head from "next/head";

const Delivery = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <body className="bg-gray-100">
        <div className="max-w-screen-lg mx-auto p-4">
          <header className="flex items-center justify-between py-4">
            <img
              src="https://placehold.co/100x50?text=Amazon+Logo"
              alt="Amazon Logo"
              className="h-10"
            />
            <h1 className="text-2xl font-semibold">Checkout</h1>
          </header>
          <div className="bg-white p-4 rounded shadow">
            <div className="border-b pb-4 mb-4">
              <h2 className="text-lg font-semibold">1 Delivery address</h2>
              <p>Arka Das Chowdhury</p>
              <p>Flat No: 3M, Block 6, 116 Dwarir Road</p>
              <p>Deeshari Megacity</p>
              <p>KOLKATA, WEST BENGAL 700151</p>
              <p>Delivery instructions (include access code if applicable):</p>
              <a href="#" className="text-blue-500">
                Edit
              </a>
            </div>
            <div className="border-b pb-4 mb-4">
              <h2 className="text-lg font-semibold">2 Choose delivery</h2>
              <div className="bg-gray-100 p-4 rounded mb-4">
                <div className="flex items-center mb-2">
                  <div className="border border-blue-500 text-blue-500 px-2 py-1 rounded mr-2">
                    Attended
                  </div>
                  <p className="text-sm">
                    Be sure to chill your perishables immediately upon receiving
                    your order.
                  </p>
                </div>
                <div className="flex space-x-2 mb-4">
                  <div className="border border-blue-500 text-blue-500 px-2 py-1 rounded">
                    <p>Today</p>
                    <p>Jun 2</p>
                    <p className="text-xs">Limited availability</p>
                  </div>
                  <div className="border px-2 py-1 rounded">
                    <p>Tomorrow</p>
                    <p>Jun 3</p>
                  </div>
                  <div className="border px-2 py-1 rounded">
                    <p>Tuesday</p>
                    <p>Jun 4</p>
                    <p className="text-xs">Limited availability</p>
                  </div>
                  <div className="border px-2 py-1 rounded">
                    <p>Wednesday</p>
                    <p>Jun 5</p>
                  </div>
                  <div className="border px-2 py-1 rounded">
                    <p>Thursday</p>
                    <p>Jun 6</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold">Select a time</h3>
                  <p>Next available</p>
                  <div className="flex items-center justify-between">
                    <p>4:00 PM - 6:00 PM</p>
                    <p className="text-green-500">FREE</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>6:00 PM - 8:00 PM</p>
                    <p className="text-green-500">FREE</p>
                  </div>
                  <a href="#" className="text-blue-500">
                    See more delivery slots
                  </a>
                </div>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                  Use this time slot
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">3 Payment method</h2>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow mt-4">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded w-full">
              Use this time slot
            </button>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <p>Items: ₹287.00</p>
              <p>Delivery: --</p>
              <p className="text-red-500 font-semibold">Order Total: --</p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Delivery;
