// import Footer from "@/app/components/Footer";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// const products = [
//   { id: "1", name: "Library Stool Chair", price: 20, image: "/12.png" },
//   { id: "2", name: "Office Chair", price: 45, image: "/11.png" },
//   { id: "3", name: "Dining Chair", price: 30, image: "/10.png" },
//   { id: "4", name: "Lounge Chair", price: 50, image: "/9.png" },
// ];

// // ✅ Generate Static Params for SSG (Static Site Generation)
// export async function generateStaticParams() {
//   return products.map((product) => ({
//     id: product.id,
//   }));
// }

// // ✅ Dynamic Route Component
// export default function ProductPage({ params }: { params: { id: string } }) {
//   const product = products.find((p) => p.id === params.id);

//   if (!product) return notFound(); // Show a 404 page if the product is not found

//   return (
//     <div>
//     <div className="max-w-4xl mx-auto p-8 flex gap-8 items-center">
//       {/* Product Image */}
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-[320px] h-[300px] object-cover rounded-lg"
//       />

//       {/* Product Details */}
//       <div>
//         <h1 className="text-3xl font-bold text-[#272343]">{product.name}</h1>

//         {/* Price Tag */}
//         <p className="bg-green-500 text-white px-3 py-1 inline-block rounded-md mt-3">
//           ${product.price}.00 USD
//         </p>

//         {/* Description */}
//         <p className="text-gray-600 mt-4 leading-relaxed">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. 
//           Lorem ipsum dolor sit amet, consectetur adipiscing.
//         </p>

//         {/* Add to Cart Button */}
//         <Link href="../../Cart">
//         <button className="mt-6 bg-[#029FAE] text-white px-5 py-2 rounded-md flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M3 3h2l1.5 8m0 0h9l1.5-8H5M7 13a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
//             />
//           </svg>
//           Add To Cart
//         </button>
//         </Link>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// }






// "use client";
// import { useCart } from "@/app/components/CartContext";
// import Footer from "@/app/components/Footer";
// import Header from "@/app/components/Header";
// import { notFound } from "next/navigation";

// const products = [
//   { id: "1", name: "Library Stool Chair", price: 20, image: "/12.png" },
//   { id: "2", name: "Office Chair", price: 45, image: "/11.png" },
//   { id: "3", name: "Dining Chair", price: 30, image: "/10.png" },
//   { id: "4", name: "Lounge Chair", price: 50, image: "/9.png" },
// ];

// export default function ProductPage({ params }: { params: { id: string } }) {
//   const { addToCart } = useCart();
//   const product = products.find((p) => p.id === params.id);

//   if (!product) return notFound();
  
//   return (
    // <div>
    //     <Header/>
    
    // <div className="max-w-4xl mx-auto p-8 flex gap-8 items-center">
    //   <img src={product.image} alt={product.name} className="w-[320px] h-[300px] object-cover rounded-lg" />

    //   <div>
    //     <h1 className="text-3xl font-bold text-[#272343]">{product.name}</h1>
    //     <p className="bg-green-500 text-white px-3 py-1 inline-block rounded-md mt-3">
    //       ${product.price}.00 USD
    //     </p>
    //     <p className="text-gray-600 mt-4 leading-relaxed">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //     </p>

    //     {/* Add to Cart Button */}
    //     <button
    //       onClick={() => addToCart({ ...product, quantity: 1 })}  // ✅ Fix: Add `quantity`
    //       className="mt-6 bg-[#029FAE] text-white px-5 py-2 rounded-md flex items-center gap-2"
    //     >
    //       Add To Cart
    //     </button>
    //   </div>
    // </div>
    // <Footer/>
    // </div>
//   );
// }







// products/[id]/page.tsx







// import { client } from "@/sanity/lib/client"; // Sanity client
// import { notFound } from "next/navigation";
// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   priceWithoutDiscount?: number;
//   badge?: string | null;
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
//   category: {
//     _ref: string;
//     _type: string;
//   };
//   description: string;
//   inventory: number;
//   tags: string[];
// }

// async function fetchProduct(id: string) {
//   const products: Product[] = await client.fetch('*[_type == "products"]');
//   const query = `*[_id == $id][0]`;  // Sanity query to fetch a specific product
//   const product = await client.fetch(query, { id });
//   return product;
// }

// export async function getServerSideProps({ params }: { params: { id: string } }) {
//   const product = await fetchProduct(params.id);
  
//   if (!product) {
//     return { notFound: true }; 
//   }

//   return {
//     props: {
//       product, 
//     },
//   };
// }

// export default function ProductPage({ product }: { product: Product }) {
//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <img src={product.image.asset._ref} alt={product.title} />
//       <p>${product.price}</p>
//     </div>
//   );
// }






// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { urlFor } from "@/sanity/lib/image"; // Utility for images

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   priceWithoutDiscount?: number;
//   badge?: string | null;
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
//   category: {
//     _ref: string;
//     _type: string;
//   };
//   description: string;
//   inventory: number;
//   tags: string[];
// }

// // Fetch product by ID
// async function fetchProduct(id: string) {
//   const query = `*[_type == "products" && _id == $id][0]`;
//   const product: Product | null = await client.fetch(query, { id });

//   return product;
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const product = await fetchProduct(params.id);

//   if (!product) {
//     notFound(); // This will show a 404 page
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">{product.title}</h1>
//       <Image
//         src={urlFor(product.image.asset._ref).url()}
//         alt={product.title}
//         width={500}
//         height={500}
//       />
//       <p className="text-lg font-semibold">${product.price}</p>
//       <p className="mt-4">{product.description}</p>
//     </div>
//   );
// }

// // For dynamic routing prefetching (optional)
// export async function generateStaticParams() {
//   const products: { _id: string }[] = await client.fetch(`*[_type == "products"]{_id}`);

//   return products.map((product) => ({
//     id: product._id,
//   }));
// }












"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useCart } from "@/app/components/CartContext"; // Import useCart
import React from "react";

interface Product {
  _id: string;
  title: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
  description: string;
}

async function fetchProduct(id: string) {
  const query = `*[_type == "products" && _id == $id][0]`;
  const product: Product | null = await client.fetch(query, { id });

  return product;
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart(); // Get addToCart from context

  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    async function loadProduct() {
      const fetchedProduct = await fetchProduct(params.id);
      if (!fetchedProduct) {
        notFound();
      }
      setProduct(fetchedProduct);
    }
    loadProduct();
  }, [params.id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <Header />

      <div className="max-w-4xl mx-auto p-8 flex gap-8 items-center">
        {/* Product Image */}
        <Image
          src={urlFor(product.image.asset._ref).url()}
          alt={product.title}
          width={320}
          height={300}
          className="w-[320px] h-[300px] object-cover rounded-lg"
        />

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-[#272343]">{product.title}</h1>
          <p className="bg-green-500 text-white px-3 py-1 inline-block rounded-md mt-3">
            ${product.price}.00 USD
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>

          {/* Add to Cart Button */}
          <button
            onClick={() =>
              addToCart({
                id: product._id,
                name: product.title,
                price: product.price,
                image: urlFor(product.image.asset._ref).url(),
                quantity: 1,
              })
            }
            className="mt-6 bg-[#029FAE] text-white px-5 py-2 rounded-md flex items-center gap-2"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
