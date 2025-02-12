// import Header from "@/app/components/Header";
// import { client } from "@/sanity/lib/client";
// import Footer from "@/app/components/Footer";
// import Fourproduct from "@/app/components/Fourproduct";
// interface Category {
//   _id: string;
//   title: string;
//   description?: string;
//   image?: {
//     asset: {
//       _ref: string;
//     };
//   };
// }

// export default async function CategoryPage({ params }: { params: { id: string } }) {
//   const category: Category | null = await client.fetch(
//     `*[_type == "categories" && _id == $id][0]`,
//     { id: params.id }
//   );

//   const getImageUrl = (assetRef?: string) => {
//     if (!assetRef) return "/placeholder.png";
//     const assetId = assetRef.replace("image-", "").replace("-png", ".png");
//     return `https://cdn.sanity.io/images/45o9g06r/production/${assetId}`;
//   };

//   if (!category) {
//     return <div className="text-center text-red-500">Category not found.</div>;
//   }

//   return (
//     <>
//     <Header/>
//     <Fourproduct category={category}/>
// <Footer/>
//     </>
//   );
// }
import Header from "@/app/components/Header";
import { client } from "@/sanity/lib/client";
import Footer from "@/app/components/Footer";
import Fourproduct from "@/app/components/Fourproduct";

interface Category {
  _id: string;
  title: string;
  description?: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
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

export default async function CategoryPage({ params }: { params: { id: string } }) {
  const category: Category | null = await client.fetch(
    `*[_type == "categories" && _id == $id][0]`,
    { id: params.id }
  );

  const products: Product[] = await client.fetch(
    `*[_type == "products" && category._ref == $id]`,
    { id: params.id }
  );

  if (!category) {
    return <div className="text-center text-red-500">Category not found.</div>;
  }

  return (
    <>
      <Header />
      <Fourproduct products={products} />
      <Footer />
    </>
  );
}
