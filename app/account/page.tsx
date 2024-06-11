import React from 'react';

const AccountPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Your Account</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card 
                    icon="fas fa-box" 
                    title="Your Orders" 
                    description="Track, return, or buy things again" 
                />
                <Card 
                    icon="fas fa-lock" 
                    title="Login & security" 
                    description="Edit login, name, and mobile number" 
                />
                <Card 
                    icon="fas fa-truck" 
                    title="Prime" 
                    description="View benefits and payment settings" 
                />
                <Card 
                    icon="fas fa-map-marker-alt" 
                    title="Your Addresses" 
                    description="Edit addresses for orders and gifts" 
                />
                <Card 
                    icon="fas fa-briefcase" 
                    title="Your business account" 
                    description="Sign up for free to save up to 28% with GST invoice and bulk discounts and purchase on credit." 
                />
                <Card 
                    icon="fas fa-credit-card" 
                    title="Payment options" 
                    description="Edit or add payment methods" 
                />
                <Card 
                    icon="fas fa-wallet" 
                    title="Amazon Pay balance" 
                    description="Add money to your balance" 
                />
                <Card 
                    icon="fas fa-headset" 
                    title="Contact Us" 
                    description="" 
                />
            </div>
            <hr className="my-6"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Section 
                    title="Digital content and devices" 
                    items={["Apps and more", "Content Library", "Devices", "Digital gifts you've received"]} 
                />
                <Section 
                    title="Email alerts, messages, and ads" 
                    items={["Advertising preferences", "Communication preferences", "SMS alert preferences", "Message Centre", "Alexa shopping notifications", "Deals Notifications"]} 
                />
                <Section 
                    title="More ways to pay" 
                    items={["Default Purchase Settings", "Amazon Pay", "Coupons"]} 
                />
                <Section 
                    title="Ordering and shopping preferences" 
                    items={["Leave packaging feedback", "Lists", "Amazon Web Services"]} 
                />
                <Section 
                    title="Other accounts" 
                    items={["Account Linking", "Seller account", "Amazon Web Services"]} 
                />
                <Section 
                    title="Shopping programs and rentals" 
                    items={["Manage Your Profiles", "Subscribe & Save", "Shop the Kids' Store by age"]} 
                />
            </div>
        </div>
    );
};

const Card = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <i className={`${icon} text-3xl text-gray-500 mr-4`}></i>
            <div>
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

const Section = ({ title, items }) => {
    return (
        <div>
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <ul className="list-none space-y-1">
                {items.map((item, index) => (
                    <li key={index} className="text-blue-600 hover:underline cursor-pointer">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default AccountPage;
