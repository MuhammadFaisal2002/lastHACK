export default function Productsecondlast() {
    return (
      <>
        <div className="bg-[#1E28320D] h-auto w-full px-[250px] py-[50px] text-center">
          {/* Newsletter Section */}
          <h1 className="text-[#1E2832] text-[24px] font-medium">
            Or Subscribe To The Newsletter
          </h1>
          <div className="flex justify-center mt-[20px]">
            <input
              type="text"
              placeholder="Email Address..."
              className="text-[#1E283280] text-[16px] border-b bg-inherit border-black w-[300px] mr-[10px] focus:outline-none"
            />
            <button className="text-[#1E283280] text-[16px] font-medium border-b border-black">
              SUBMIT
            </button>
          </div>
  
          {/* Instagram Section */}
          <h2 className="text-[#1E2832] text-[20px] font-medium mt-[60px]">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="flex justify-center mt-[30px] gap-[15px]">
            <img
              src="9.png"
              alt="Product 1"
              className="w-[120px] h-[120px] object-cover rounded-md"
            />
            <img
              src="10.png"
              alt="Product 2"
              className="w-[120px] h-[120px] object-cover rounded-md"
            />
            <img
              src="11.png"
              alt="Product 3"
              className="w-[120px] h-[120px] object-cover rounded-md"
            />
            <img
              src="12.png"
              alt="Product 4"
              className="w-[120px] h-[120px] object-cover rounded-md"
            />
            <img
              src="13.png"
              alt="Product 5"
              className="w-[120px] h-[120px] object-cover rounded-md"
            />
          </div>
        </div>
      </>
    );
  }
  