import prisma from '@/lib/prisma'; // Correct import path

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {
        productName,
        price,
        brand,
        seller,
        description,
        manufacturingDate,
        expiryDate,
        listingDate,
        discountedPrice,
        percentageOfDiscountOffered,
        stock,
        category,
        deliveryInfo,
      } = req.body;

      const product = await prisma.product.create({
        data: {
          productName,
          price: parseFloat(price),
          brand,
          seller,
          description,
          manufacturingDate: new Date(manufacturingDate),
          expiryDate: new Date(expiryDate),
          listingDate: new Date(listingDate),
          discountedPrice: parseFloat(discountedPrice),
          percentageOfDiscountOffered: parseFloat(percentageOfDiscountOffered),
          stock: parseInt(stock),
          category,
          deliveryInfo,
        },
      });

      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}