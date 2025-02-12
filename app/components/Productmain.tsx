// import Footer from "./Footer";
// import Fourproduct from "./Fourproduct";
// import Productsecondlast from "./Productsecondlast";
// import { client } from "@/sanity/lib/client";
// import { getAllProducts } from "@/sanity/lib/quries";

// export interface Product {
//   _id: string;
//   _originalId: string;
//   _rev: string;
//   _createdAt: string;
//   _updatedAt: string;
//   name: string; 
//   title: string; 
//   price: number;
//   priceWithoutDiscount: number | null;
//   image: {
//     _type: string;
//     asset: {
//       _ref: string;
//     };
//   };
//   _type: string;
//   inventory: number;
//   badge: string | null;
//   category: {
//     _type: string;
//     _ref: string;
//   };
//   description: string;
//   tags: string[];
// }


// interface ProductmainProps {
//   products: Product[]; // Make sure this is an array of products
// }

// export default function Productmain({ products }: ProductmainProps) {
//   if (!products) {
//     return <div>WAIT</div>;
//   }

//   return (
//     <>
//       <div className="text-[32px] leading-[35.2px] text-[#272343] mx-[250px] mt-[30px]">
//         All Products
//       </div>
//       <Fourproduct products={products} />
//       <Productsecondlast />
//       <Footer />
//     </>
//   );
// }

// export async function getServerSideProps() {
//   const products = await client.fetch(getAllProducts);

//   return {
//     props: {
//       products,
//     },
//   };
// }



import Footer from "./Footer";
import Fourproduct from "./Fourproduct";
import Productsecondlast from "./Productsecondlast";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string | null;
  image: {
    asset: {
      _ref: string;
    };
  };
  category: {
    _ref: string;
    _type: string;
  };
  description: string;
  inventory: number;
  tags: string[];
}

export default async function Productmain() {
  const products: Product[] = await client.fetch('*[_type == "products"]');

  if (!products || products.length === 0) {
    return <div className="text-center text-gray-500">No products available</div>;
  }

  return (
    <>
      <div className="text-[32px] text-[#272343] mx-auto mt-[30px] text-center">
        All Products
      </div>
      <Fourproduct products={products} />
      <Productsecondlast />
      <Footer />
    </>
  );
}
