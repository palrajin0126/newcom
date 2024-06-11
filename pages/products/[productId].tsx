"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { db } from '@/app/firebase'; // Adjust the import according to your project structure
import { doc, getDoc } from 'firebase/firestore';
import ProductsLayout from './ProductsLayout';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

type Product = {
  productName: string;
  images: string[];
  price: string;
  brand: string;
  description: string;
  stock: number;
  deliveryInfo: string;
  emi: string;
  discountedPrice: string;
  seller: string;
};

export default function ProductDetails() {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [userUUID, setUserUUID] = useState<string | null>(null);

  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        try {
          const productDoc = doc(db, 'products', productId as string);
          const productSnapshot = await getDoc(productDoc);
          if (productSnapshot.exists()) {
            setProduct(productSnapshot.data() as Product);
          } else {
            console.error("Product not found");
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    } else {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUserUUID(user.uid);
      } else {
        setUserUUID(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const addToCart = async () => {
    try {
      const user = getAuth().currentUser;
      if (!user) {
        return;
      }

      const idToken = await user.getIdToken(true);
      console.log("Sending request to /api/cart with data:", { productId, idToken });

      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: productId, idToken: idToken }), // Make sure productId is in the body
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      console.log('Product added to cart:', data.cart);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Loading Product Details.....</div>;
  }

  return (
    <ProductsLayout>
      <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">{product.productName}</h1>
          <div className="mb-4">
            {product.images.map((imageUrl, index) => (
              <Image
                key={index}
                src={imageUrl}
                alt={`Product image ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-auto object-cover mb-2 rounded"
              />
            ))}
          </div>
          <div className="space-y-2 text-gray-700">
            <p className="text-lg font-semibold">Price: <span className="text-red-500">{product.price}</span></p>
            <p className="text-lg font-semibold">Discounted Price: <span className="text-green-500">{product.discountedPrice}</span></p>
            <p className="font-semibold">Brand: <span className="font-normal">{product.brand}</span></p>
            <p className="font-semibold">Description: <span className="font-normal">{product.description}</span></p>
            <p className="font-semibold">Stock: <span className="font-normal">{product.stock}</span></p>
            <p className="font-semibold">Delivery Info: <span className="font-normal">{product.deliveryInfo}</span></p>
            <p className="font-semibold">EMI: <span className="font-normal">{product.emi}</span></p>
            <p className="font-semibold">Seller: <span className="font-normal">{product.seller}</span></p>
          </div>
          <button
            onClick={addToCart}
            className="mt-6 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </ProductsLayout>
  );
}
