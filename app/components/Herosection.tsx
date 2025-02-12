import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link";
import Categories from "./Categories";
export default function Herosection(){
    
    return(
        <div>
            <div className="h-[700px] w-[768px] bg-[#F0F2F3] mx-[250px] rounded-md pl-[60px]  flex">
                <div className="w-[365px] mt-[235px]">
                    <div className="font-[14px] text-[#272343] leading-[14px]">Welcome to chairy</div>
                    <div className="text-[#272343] leading-[66px] text-[45px] mt-[20px] font-bold">Best furniture Collection for your Interior.</div>
                    <div><button className="bg-[#029FAE] text-white w-[171px] h-[52px] px-[24px] gap-[20px] rounded-lg leading-[17.6px] text-[16px] mt-[29px] py-[14px] p">Shop Now → </button></div>
                </div>
                <div>
                    <img src="chair.png" alt="product" className="w-[310px] h-[480px] mt-[150px]"/>
                </div>
            </div>
            <div className="w-[768px] h-[139px] mx-[250px]">
                <ul className="flex justify-between p-[20px]">
                    <li><Link href="#"><img src="1.png" alt="brad logo"  className="h-[70px] "/></Link></li>
                    <li><Link href="#"><img src="2.png" alt="brad logo"  className="h-[70px] "/></Link></li>
                    <li><Link href="#"><img src="7.png" alt="brad logo"  className="h-[70px] "/></Link></li>
                    <li><Link href="#"><img src="4.png" alt="brad logo"  className="h-[70px] "/></Link></li>
                    <li><Link href="#"><img src="5.png" alt="brad logo"  className="h-[70px] "/></Link></li>
                    <li><Link href="#"><img src="6.png" alt="brad logo"  className="h-[70px] "/></Link></li>
                    <li><Link href="#"><img src="8.png" alt="brad logo"  className="h-[70px] "/></Link></li>
                </ul>
            </div>
            <div className="w-[768px] mx-[250px]">
                <span className="text-[32px] leading=[35.2px] text-[#272343]">Featured Products</span>
                <div className="flex justify-between">
                    <div><Link href="#"><img src="12.png" alt="product carts" className="w-[180px] h-[200px]" /><br/><span className=" text-[16px] text-[#007580] font-normal">Library stool chair</span><br/><span className="text-[#272343] leading-[19.8px] text-[18px]  mr-[95px]">$20</span><FontAwesomeIcon icon={faCartShopping} className=" text-[#029FAE] w-[34px] h-[34px] inline-block"/></Link></div>
                    <div><Link href="#"><img src="11.png" alt="product carts" className=" w-[180px] h-[200px]"/><br/><span className="leading-[10px] text-[16px] text-[#007580] font-normal">Library stool chair</span><br/><span className="text-[#272343] leading-[19.8px] text-[18px] mr-[95px]">$20</span><FontAwesomeIcon icon={faCartShopping} className=" text-[#272343] bg-[#F0F2F3] w-[34px] h-[34px] inline-block"/></Link></div>
                    <div><Link href="#"><img src="10.png" alt="product carts" className="w-[180px] h-[200px]" /><br/><span className="leading-[10px] text-[16px] text-[#007580] font-normal">Library stool chair</span><br/><span className="text-[#272343] leading-[19.8px] text-[18px] mr-[95px]">$20</span><FontAwesomeIcon icon={faCartShopping} className=" text-[#272343] bg-[#F0F2F3] w-[34px] h-[34px] inline-block"/></Link></div>
                    <div><Link href="#"><img src="9.png" alt="product carts" className=" w-[180px] h-[200px]"/><br/><span className="leading-[10px] text-[16px] text-[#007580] font-normal">Library stool chair</span><br/><span className="text-[#272343] leading-[19.8px] text-[18px] mr-[95px]">$20</span><FontAwesomeIcon icon={faCartShopping} className=" text-[#272343] bg-[#F0F2F3] w-[34px] h-[34px] inline-block"/></Link></div>
                        
                    
                </div>
            </div>
<Categories/>

{/* <div className="h-[648px] w-[768px]  mx-[250px]">
    <div className="w-[20px] text-black text-">
        EXPLORE NEW AND POPULAR STYLES
    </div>
    <div className=""></div>
</div> */}
<div className="flex mx-[250px] mt-20">
      {/* Left Section */}
      <div className="relative  pr-4">
        <div className="text-[17px] text-[#272343] rotate-[-90deg] origin-bottom-left whitespace-nowrap absolute left-[-70-px] top-[87%] translate-y-[-50%]  font-bold">
          EXPLORE NEW AND POPULAR STYLES
        </div>
        <div className="border-[2px] border-[#FFD700] rounded-md">
          <Image
            src="/16.png"
            alt="Orange Chair"
            width={400}
            height={450}
            className="rounded-md object-cover"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 gap-4 pl-4">
        <div>
          <Image
            src="/17.png"
            alt="White Chair"
            width={200}
            height={250}
            className="rounded-md object-cover"
          />
        </div>
        <div>
          <Image
            src="/18.png"
            alt="Another White Chair"
            width={200}
            height={250}
            className="rounded-md object-cover"
          />
        </div>
        <div>
          <Image
            src="/19.png"
            alt="Grey Chair"
            width={200}
            height={250}
            className="rounded-md object-cover"
          />
        </div>
        <div>
          <Image
            src="/20.png"
            alt="Second White Chair"
            width={200}
            height={250}
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
    <div>
        <div className="w-[768px] mx-[250px] mt-[20px]">
                <span className="text-[32px] leading=[35.2px] mx-[35%] text-[#272343]">Our Products</span>
                <div className="flex justify-between">
                    <div><Link href="#"><img src="12.png" alt="product carts" className="w-[180px] h-[200px]" /><br/><span className=" text-[16px] text-[#007580] font-normal">Library stool chair</span><br/><span className="text-[#272343] leading-[19.8px] text-[18px]  mr-[95px]">$20</span><FontAwesomeIcon icon={faCartShopping} className=" text-[#029FAE] w-[34px] h-[34px] inline-block"/></Link></div>
                    <div><Link href="#"><img src="11.png" alt="product carts" className=" w-[180px] h-[200px]"/><br/><span className="leading-[10px] text-[16px] text-[#007580] font-normal">Library stool chair</span><br/><span className="text-[#272343] leading-[19.8px] text-[18px] mr-[95px]">$20</span><FontAwesomeIcon icon={faCartShopping} className=" text-[#272343] bg-[#F0F2F3] w-[34px] h-[34px] inline-block"/></Link></div>
                    <div><Link href="#"><img src="10.png" alt="product carts" className="w-[180px] h-[200px]" /><br/><span className="leading-[10px] text-[16px] text-[#007580] font-normal">Library stool chair</span><br/><span className="text-[#272343] leading-[19.8px] text-[18px] mr-[95px]">$20</span><FontAwesomeIcon icon={faCartShopping} className=" text-[#272343] bg-[#F0F2F3] w-[34px] h-[34px] inline-block"/></Link></div>
                    <div><Link href="#"><img src="9.png" alt="product carts" className=" w-[180px] h-[200px]"/><br/><span className="leading-[10px] text-[16px] text-[#007580] font-normal">Library stool chair</span><br/><span className="text-[#272343] leading-[19.8px] text-[18px] mr-[95px]">$20</span><FontAwesomeIcon icon={faCartShopping} className=" text-[#272343] bg-[#F0F2F3] w-[34px] h-[34px] inline-block"/></Link></div>
                        
                    
                </div>
                <div className="flex justify-between mt-6">
                    <div><Link href="#"><img src="21.png" alt="product carts" className="w-[180px] h-[200px]" /><br/><span className=" text-[16px] text-[#007580] font-normal">Library stool chair</span><br/><span className="text-[#272343] leading-[19.8px] text-[18px]  mr-[95px]">$20</span><FontAwesomeIcon icon={faCartShopping} className=" text-[#029FAE] w-[34px] h-[34px] inline-block"/></Link></div>
                    <div><Link href="#"><img src="22.png" alt="product carts" className=" w-[180px] h-[200px]"/><br/><span className="leading-[10px] text-[16px] text-[#007580] font-normal">Library stool chair</span><br/><span className="text-[#272343] leading-[19.8px] text-[18px] mr-[95px]">$20</span><FontAwesomeIcon icon={faCartShopping} className=" text-[#272343] bg-[#F0F2F3] w-[34px] h-[34px] inline-block"/></Link></div>
                    <div><Link href="#"><img src="23.png" alt="product carts" className="w-[180px] h-[200px]" /><br/><span className="leading-[10px] text-[16px] text-[#007580] font-normal">Library stool chair</span><br/><span className="text-[#272343] leading-[19.8px] text-[18px] mr-[95px]">$20</span><FontAwesomeIcon icon={faCartShopping} className=" text-[#272343] bg-[#F0F2F3] w-[34px] h-[34px] inline-block"/></Link></div>
                    <div><Link href="#"><img src="24.png" alt="product carts" className=" w-[180px] h-[200px]"/><br/><span className="leading-[10px] text-[16px] text-[#007580] font-normal">Library stool chair</span><br/><span className="text-[#272343] leading-[19.8px] text-[18px] mr-[95px]">$20</span><FontAwesomeIcon icon={faCartShopping} className=" text-[#272343] bg-[#F0F2F3] w-[34px] h-[34px] inline-block"/></Link></div>
                        
                    
                </div>
            </div>
    </div>
</div>
    )
}