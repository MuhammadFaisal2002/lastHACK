
//  import Product from "../products/page";

// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";
// import imageUrlBuilder from "@sanity/image-url";
// import { client } from "@/sanity/lib/client";

// const builder = imageUrlBuilder(client);

// function urlFor(source: any) {
//   return builder.image(source);
// }

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
// }

// interface FourproductProps {
//   products: Product[];
// }

// export default function Fourproduct({ products }: FourproductProps) {
//   if (!products || products.length === 0) {
//     return <div>No products available</div>;
//   }

//   return (
//     <div className="w-full px-[180px] max-w-[1100px] mx-auto mt-8">
//       <div className="grid grid-cols-4 gap-6">
//         {products.map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }




// function ProductCard({ product }: { product: Product }) {
//   return (
//     <div className="relative border p-2 rounded-lg shadow-md">
//       <Link href={`/products/${product._id}`}>
//         <img
//           src={urlFor(product.image.asset._ref).url()}
//           alt={product.title}
//           className="w-44 h-48 object-cover"
//         />
//         <button className="bg-green-500 text-white text-xs px-2 py-1 absolute top-2 left-2 rounded">
//           NEW
//         </button>
//         <div className="mt-2">
//           <span className="text-teal-600 font-medium">{product.title}</span>
//           <br />
//           <span className="text-gray-800 text-lg">${product.price}</span>
//           <FontAwesomeIcon
//             icon={faCartShopping}
//             className="text-teal-500 w-5 h-5 ml-2"
//           />
//         </div>
//       </Link>
//     </div>
//   );
// }
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).url();
}

interface Product {
  _id: string;
  title: string;
  price: number;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

interface FourproductProps {
  products: Product[];
}

export default function Fourproduct({ products }: FourproductProps) {
  if (!products || products.length === 0) {
    return <div className="text-center text-gray-500">No products available</div>;
  }

  return (
    <div className="w-full px-[180px] max-w-[1100px] mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Products</h2>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative border p-2 rounded-lg shadow-md hover:shadow-lg transition">
      <Link href={`/products/${product._id}`}>
        <img
          src={product.image?.asset?._ref ? urlFor(product.image.asset._ref) : "/placeholder.png"}
          alt={product.title}
          className="w-44 h-48 object-cover rounded-md"
        />
        <button className="bg-green-500 text-white text-xs px-2 py-1 absolute top-2 left-2 rounded">
          NEW
        </button>
        <div className="mt-2">
          <span className="text-teal-600 font-medium">{product.title}</span>
          <br />
          <span className="text-gray-800 text-lg">${product.price}</span>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-teal-500 w-5 h-5 ml-2"
          />
        </div>
      </Link>
    </div>
  );
}
