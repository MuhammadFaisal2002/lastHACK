// import Image from "next/image";

// export default function BagPage() {
//   return (
//     <div className="flex flex-col md:flex-row justify-between px-[250px] py-8">
//       {/* Bag Section */}
//       <div className="w-full md:w-2/3">
//         <h2 className="text-[22px] font-semibold mb-6">Bag</h2>
//         {/* Items List */}
//         <div className="space-y-6">
//           {/* Item 1 */}
//           <div className="flex items-center justify-between border-b pb-4">
//             <div className="flex items-center gap-4">
//               <Image
//                 src="/12.png" // Replace with your image path
//                 alt="Library Stool Chair"
//                 className="w-20 h-20 object-cover"
//                 height={150}
//                 width={150}
//               />
//               <div>
//                 <h3 className="text-[16px] font-medium">Library Stool Chair</h3>
//                 <p className="text-[15px] text-gray-500">Ashen Slate/Cobalt Bliss</p>
//                 <p className="text-[15px] text-gray-500">Quantity: 1</p>
//               </div>
//             </div>
//             <div>
//             <div className="flex items-center gap-4">
//               <p className="text-md font-medium">MRP: $99</p>
              
              
//               <button className="text-gray-500 hover:text-red-500">
//                 <Image src="/34.png" alt="Remove Icon" height={20} width={20} />
//               </button>
//               <button className="text-gray-500 hover:text-red-500">
//                 <Image src="/33.png" alt="Favorite Icon" height={20} width={20} />
//               </button>
//             </div>
//            </div>
//           </div>

//           {/* Item 2 */}
//           <div className="flex items-center justify-between border-b pb-4">
//             <div className="flex items-center gap-4">
//               <Image
//                 src="/11.png" // Replace with your image path
//                 alt="Library Stool Chair"
//                 className="w-20 h-20 object-cover"
//                 height={150}
//                 width={150}
//               />
//               <div>
//                 <h3 className="text-[16px] font-medium">Library Stool Chair</h3>
//                 <p className="text-[15px] text-gray-500">Ashen Slate/Cobalt Bliss</p>
//                 <p className="text-[15px] text-gray-500">Quantity: 1</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <p className="text-md font-medium">MRP: $99</p>
//               <button className="text-gray-500 hover:text-red-500">
//                 <Image src="/34.png" alt="Remove Icon" height={20} width={20} />
//               </button>
//               <button className="text-gray-500 hover:text-red-500">
//                 <Image src="/33.png" alt="Favorite Icon" height={20} width={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Summary Section */}
//       <div className="w-full md:w-1/3 mt-8 md:mt-0 ml-[20px]">
//         <h2 className="text-[21px] font-semibold mb-6">Summary</h2>
//         <div className="space-y-4">
//           <div className="flex justify-between">
//             <p className="text-gray-500 text-[15px]">Subtotal</p>
//             <p className="font-medium text-[15px]">$198.00</p>
//           </div>
//           <div className="flex justify-between">
//             <p className="text-gray-500 text-[15px]">Estimated Delivery & Handling</p>
//             <p className="font-medium text-[15px]">Free</p>
//           </div>
//           <div className="flex justify-between border-t pt-4">
//             <p className="font-medium text-[14px]">Total</p>
//             <p className="font-semibold text-[14px]">$198.00</p>
//           </div>
//         </div>
//         <button className="w-[220px] h-[60px] mt-6 bg-[#007580] text-white py-3 rounded-full text-center font-medium hover:bg-[#005f63]">
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { useCart } from "@/app/components/CartContext";

export default function Main() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="flex flex-col md:flex-row justify-between px-[250px] py-8">
      {/* Cart Items Section */}
      <div className="w-full md:w-2/3">
        <h2 className="text-[22px] font-semibold mb-6">Bag</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-lg" 
                    height={80} 
                    width={80} 
                  />
                  <div>
                    <h3 className="text-[16px] font-medium">{item.name}</h3>
                    <p className="text-[15px] text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-md font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary Section */}
      <div className="w-full md:w-1/3 mt-8 md:mt-0 ml-[20px]">
        <h2 className="text-[21px] font-semibold mb-6">Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="text-gray-500 text-[15px]">Subtotal</p>
            <p className="font-medium text-[15px]">${total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between border-t pt-4">
            <p className="font-medium text-[14px]">Total</p>
            <p className="font-semibold text-[14px]">${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
