import React from 'react';

const OrderPage = () => {
    return (
        <div className="max-w-5xl mx-auto p-4 bg-white min-h-screen">
            <nav className="text-sm text-gray-600 mb-4">
                <a href="#" className="hover:underline">Your Account</a> &gt; <span>Your Orders</span>
            </nav>
            <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>
            <div className="flex items-center space-x-4 mb-4">
                <button className="border-b-2 border-orange-500 pb-1">Orders</button>
                <button className="text-gray-600 hover:underline">Buy Again</button>
                <button className="text-gray-600 hover:underline">Not Yet Shipped</button>
                <button className="text-gray-600 hover:underline">Cancelled Orders</button>
            </div>
            <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">19 orders placed in</span>
                <select className="border border-gray-300 rounded p-1">
                    <option>past 3 months</option>
                </select>
                <div className="flex items-center space-x-2">
                    <input type="text" placeholder="Search all orders" className="border border-gray-300 rounded p-1"/>
                    <button className="bg-black text-white px-4 py-1 rounded">Search Orders</button>
                </div>
            </div>
            <div className="space-y-4">
                <OrderCard 
                    orderDate="28 May 2024" 
                    total="₹230.00" 
                    orderNumber="406-9222744-5750717" 
                    title="Money Added" 
                    imageUrl="https://placehold.co/64x64" 
                    imageAlt="Wallet icon" 
                    description="Amazon Pay Wallet" 
                    details={[
                        { label: "Amount", value: "₹230.00" },
                        { label: "Status", value: "Money Added" }
                    ]}
                    actionText="Archive order"
                />
                <OrderCard 
                    orderDate="26 May 2024" 
                    total="₹5,372.00" 
                    orderNumber="406-3405481-5765915" 
                    title="Successful" 
                    imageUrl="https://placehold.co/64x64" 
                    imageAlt="WBSEDCL logo" 
                    description="Electricity bill payment" 
                    details={[
                        { label: "Paid on", value: "26 May 2024" },
                        { label: "Consumer ID", value: "106451350" },
                        { label: "State", value: "West Bengal" },
                        { label: "Provider", value: "West Bengal State Electricity Distribution Co. Ltd (WBSEDCL)" },
                        { label: "Mobile Number", value: "6291916799" }
                    ]}
                />
            </div>
        </div>
    );
};

const OrderCard = ({ orderDate, total, orderNumber, title, imageUrl, imageAlt, description, details, actionText }) => {
    return (
        <div className="border border-gray-300 rounded p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <span className="text-gray-600">ORDER PLACED</span>
                    <span className="block">{orderDate}</span>
                </div>
                <div>
                    <span className="text-gray-600">TOTAL</span>
                    <span className="block">{total}</span>
                </div>
                <div>
                    <span className="text-gray-600">ORDER # {orderNumber}</span>
                    <div className="flex space-x-2">
                        <a href="#" className="text-blue-600 hover:underline">View order details</a>
                        <a href="#" className="text-blue-600 hover:underline">Invoice</a>
                    </div>
                </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <div className="flex items-center space-x-4">
                <img src={imageUrl} alt={imageAlt} className="w-16 h-16"/>
                <div>
                    <div className="text-blue-600 hover:underline">{description}</div>
                    {details.map((detail, index) => (
                        <div key={index}>
                            <div className="text-gray-600">{detail.label}</div>
                            <div>{detail.value}</div>
                        </div>
                    ))}
                </div>
            </div>
            {actionText && <button className="text-blue-600 hover:underline mt-2">{actionText}</button>}
        </div>
    );
};

export default OrderPage;
