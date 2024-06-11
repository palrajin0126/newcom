import { prisma } from '@/../../lib/prisma';
import { getAuth } from 'firebase-admin/auth';

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { orderId, idToken } = req.query;
    console.log(req.query);

    if (!orderId || !idToken) {
        return res.status(400).json({ message: 'Missing required parameters' });
    }

    try {
        const auth = getAuth();
        const decodedToken = await auth.verifyIdToken(idToken);
        const userId = decodedToken.uid;

        const order = await prisma.customerOrder.findUnique({
            where: { id: parseInt(orderId, 10) },
        });

        if (!order || order.userId !== userId) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({
            orderNumber: order.orderNumber,
            customerName: order.customerName,
            apartment: order.apartment,
            block: order.block,
            locality: order.locality,
            city: order.city,
            state: order.state,
            pincode: order.pincode,
            email: order.email,
            mobile: order.mobile,
            orderTotal: order.orderTotal,
            orderItems: JSON.parse(order.orderItems),
        });
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
