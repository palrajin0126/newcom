"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { getAuth } from 'firebase/auth';

interface OrderItem {
    productName: string;
    price: number;
    quantity: number;
}

interface Order {
    orderNumber: string;
    customerName: string;
    apartment: string;
    block: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    email: string;
    mobile: string;
    orderTotal: number;
    orderItems: OrderItem[];
}

export default function OrderPlaced() {
    const [order, setOrder] = useState<Order | null>(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                if (!searchParams) {
                    console.error('Search parameters are not available');
                    return;
                }

                const orderId = searchParams.get('orderId');
                if (!orderId) {
                    console.error('Order ID is missing');
                    return;
                }

                const auth = getAuth();
                const user = auth.currentUser;
                const idToken = user ? await user.getIdToken(true) : null;

                const response = await axios.get('/api/order/fetchorder', {
                    params: { orderId, idToken },
                });

                setOrder(response.data);
            } catch (error) {
                console.error('Error fetching order:', error);
            }
        };

        fetchOrder();
    }, [searchParams]);

    if (!order) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Order Placed</h1>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Order Details</h2>
                <p><strong>Order Number:</strong> {order.orderNumber}</p>
                <p><strong>Customer Name:</strong> {order.customerName}</p>
                <p><strong>Address:</strong> {`${order.apartment}, ${order.block}, ${order.locality}, ${order.city}, ${order.state}, ${order.pincode}`}</p>
                <p><strong>Email:</strong> {order.email}</p>
                <p><strong>Mobile:</strong> {order.mobile}</p>
                <p><strong>Total:</strong> ${order.orderTotal}</p>
            </div>
            <div>
                <h2 className="text-xl font-semibold">Order Items</h2>
                <ul>
                    {order.orderItems.map((item, index) => (
                        <li key={index} className="mb-2">
                            <p><strong>Product Name:</strong> {item.productName}</p>
                            <p><strong>Price:</strong> ${item.price}</p>
                            <p><strong>Quantity:</strong> {item.quantity}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
