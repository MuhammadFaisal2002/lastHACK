import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Category {
  _id: string;
  title: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

export default async function Categories() {
  const categoriesData: Category[] = await client.fetch(
    `*[_type == "categories"]{ _id, title, image { asset } }`
  );

  const getImageUrl = (assetRef?: string) => {
    if (!assetRef) return "/placeholder.png"; // Default placeholder if no image
    const assetId = assetRef.replace("image-", "").replace("-png", ".png"); // Adjust for other formats if needed
    return `https://cdn.sanity.io/images/45o9g06r/production/${assetId}`;
  };

  return (
    <div className="w-[768px] mx-[250px] mt-10">
      <span className="text-[32px] leading-[35.2px] text-[#272343] block mb-6">
        Top Categories
      </span>
      <div className="flex justify-between gap-4">
        {categoriesData.map((category) => (
          <div key={category._id} className="relative">
            <Link href={`/categories/${category._id}`}>
              <img
                src={getImageUrl(category.image?.asset?._ref)}
                alt={category.title}
                className="h-[246px] w-[246px] rounded-md object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 rounded-b-md">
                <div className="text-[15px] font-medium">{category.title}</div>
                <div className="text-[12px]">View Products</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
