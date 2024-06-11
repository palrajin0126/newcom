import React from 'react';

const Deals = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-bars text-xl mr-4"></i>
          <img src="https://placehold.co/100x40" alt="Amazon Logo" className="mr-4" />
          <div>
            <p className="text-sm">Deliver to Arka</p>
            <p className="text-lg font-bold">Kolkata 700151</p>
          </div>
        </div>
        <div className="flex items-center">
          <input type="text" placeholder="Search Amazon.in" className="p-2 rounded-l-md" />
          <button className="bg-yellow-500 p-2 rounded-r-md">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="flex items-center">
          <p className="mr-4">EN</p>
          <p className="mr-4">Hello, Ratnesh</p>
          <p className="mr-4">Returns & Orders</p>
          <i className="fas fa-shopping-cart text-xl"></i>
        </div>
      </header>
      <nav className="bg-gray-700 text-white p-2 flex justify-between">
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">All</a>
          <a href="#" className="hover:underline">Fresh</a>
          <a href="#" className="hover:underline">Buy Again</a>
          <a href="#" className="hover:underline">Today's Deals</a>
          <a href="#" className="hover:underline">Keep Shopping for</a>
          <a href="#" className="hover:underline">Amazon miniTV</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Amazon Business</a>
          <a href="#" className="hover:underline">Gift Ideas</a>
          <a href="#" className="hover:underline">Amazon Pay</a>
        </div>
      </nav>
      <div className="bg-green-500 text-white p-2 text-center">
        <p>fresh</p>
      </div>
      <div className="bg-white p-4">
        <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
          <h1 className="text-2xl font-bold">Deals</h1>
          <div className="flex space-x-4">
            <a href="#" className="text-yellow-500 border-b-2 border-yellow-500 pb-1">Featured Deals</a>
            <a href="#" className="hover:underline">All Deals</a>
          </div>
        </div>
        <div className="my-4">
          <img src="https://placehold.co/1200x200" alt="ICICI Bank Offer" className="w-full" />
        </div>
        <h2 className="text-xl font-bold mb-4">Up to 40% off | Supersaver</h2>
        <div className="flex items-center space-x-4 overflow-x-auto">
          <i className="fas fa-chevron-left text-2xl"></i>
          <div className="flex space-x-4">
            {[
              {
                src: "https://placehold.co/150x150",
                alt: "Fresh Eggs, 30 Pieces",
                name: "Fresh Eggs, 30 Pieces",
                desc: "30 Count",
                price: "₹199.00",
                oldPrice: "₹230.00",
                discount: "13% OFF"
              },
              {
                src: "https://placehold.co/150x150",
                alt: "Huggies Complete Comfort Wonder Pants",
                name: "Huggies Complete Comfort Wonder Pants",
                desc: "India's Fastest Absorbing Diaper",
                price: "₹675.00",
                oldPrice: "₹1,399.00",
                discount: "52% OFF"
              },
              {
                src: "https://placehold.co/150x150",
                alt: "Surf Excel Easy Wash Detergent Powder",
                name: "Surf Excel Easy Wash Detergent Powder",
                desc: "5 Kg",
                price: "₹630.00",
                oldPrice: "₹770.00",
                discount: "18% OFF"
              },
              {
                src: "https://placehold.co/150x150",
                alt: "Pears Pure & Gentle Soap Bar",
                name: "Pears Pure & Gentle Soap Bar",
                desc: "125 g (Pack of 5)",
                price: "₹297.00",
                oldPrice: "₹372.00",
                discount: "20% OFF"
              },
              {
                src: "https://placehold.co/150x150",
                alt: "Dove Cream Beauty Bathing Bar",
                name: "Dove Cream Beauty Bathing Bar",
                desc: "25 g (Pack of 5)",
                price: "₹337.00",
                oldPrice: "₹463.00",
                discount: "27% OFF"
              },
              {
                src: "https://placehold.co/150x150",
                alt: "Aashirvaad Svasti Pure Cow Ghee",
                name: "Aashirvaad Svasti Pure Cow Ghee",
                desc: "1 L",
                price: "₹599.00",
                oldPrice: "₹785.00",
                discount: "24% OFF"
              },
              {
                src: "https://placehold.co/150x150",
                alt: "Aashirvaad Select Sharbati Atta",
                name: "Aashirvaad Select Sharbati Atta",
                desc: "5 kg, Premium 100%",
                price: "₹291.00",
                oldPrice: "₹331.00",
                discount: "12% OFF"
              }
            ].map((deal, index) => (
              <div key={index} className="bg-white p-4 border rounded-md">
                <img src={deal.src} alt={deal.alt} className="w-full" />
                <p className="mt-2">{deal.name}</p>
                <p className="text-gray-500">{deal.desc}</p>
                <p className="text-lg font-bold">{deal.price} <span className="line-through text-gray-500">{deal.oldPrice}</span></p>
                <p className="text-red-500">{deal.discount}</p>
                <button className="bg-yellow-500 text-white p-2 mt-2 w-full">Add to Cart</button>
              </div>
            ))}
          </div>
          <i className="fas fa-chevron-right text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Deals;
