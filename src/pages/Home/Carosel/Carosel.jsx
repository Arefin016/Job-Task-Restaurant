import  { useRef, useCallback, useEffect } from "react";
import ProfileCard from "./ProfileCard";


const Carosel = () => {
    const boxRef = useRef(null);

    const prev = useCallback(() => {
      if (boxRef.current) {
        const width = boxRef.current.clientWidth;
        boxRef.current.scrollLeft -= 338;
        console.log("Scrolled to the left:", width);
      }
    }, []);
  
    const next = useCallback(() => {
      if (boxRef.current) {
        const width = boxRef.current.clientWidth;
        boxRef.current.scrollLeft += 338;
        console.log("Scrolled to the right:", width);
      }
    }, []);
  
    useEffect(() => {
     
      if (!boxRef.current) {
        console.error("Container element is not available. Check your component structure.");
      }
    }, []);
    return (
        <div className="bg-[#FBF7F2] mt-20 py-28 px-10 relative">
            
            <div className="max-w-[1320px] mx-auto">
               <div className="flex items-center ">
                <div className="">
                <p className="text-[#BD1F17] text-[20px] leading-[32px] flex items-center  gap-2"> <img src="carosel.png" alt="" /> Crispy, Every Bite Taste</p>
                <h2 className="text-[20px] md:text-[62px] leading-[62px] text-[#181818] font-bold mt-2 ">POPULAR FOOD ITEMS</h2>
                </div>
                <div className=" hidden md:flex  ">
                    
                    <div className="flex ml-[460px]">
                    <img onClick={prev} src="arrow.png"  className="cursor-pointer" alt="" />
                    <img onClick={next} src="redArow.png" className="cursor-pointer"  alt="" />
                    </div>
                </div>
               </div>
                
                 <div ref={boxRef} className="mt-16 flex flex-nowrap  gap-8 overflow-x-hidden max-w-[1320px] mx-auto container">
                    <div className="w-[306px]"><ProfileCard title='vegetables burger' dis='Barbecue Italian cuisine burger' img='ber.jpeg'></ProfileCard></div>
                    <div><ProfileCard title='Spacial Pizza ' dis='Barbecue Italian cuisine pizza' img='pizza.png'></ProfileCard></div>
                    
                    <div  className="w-[306px]"><ProfileCard title='Cuisine Chicken' dis='Japanese Cuisine Chicken' img='alu.jpeg'></ProfileCard></div>
                    <div  className="w-[306px]"><ProfileCard title='vegetables burger' dis='Barbecue Italian cuisine burger' img='ber.jpeg'></ProfileCard></div>
                    <div  className="w-[306px]"><ProfileCard title='Spacial French fries ' dis='Barbecue Italian cuisine' img='fry.jpeg'></ProfileCard></div>
                    <div  className="w-[306px]"><ProfileCard title='Spacial Pizza ' dis='Barbecue Italian cuisine pizza' img='pizza.png'></ProfileCard></div>
                    <div  className="w-[306px]"><ProfileCard title='Spacial French fries ' dis='Barbecue Italian cuisine' img='fry.jpeg'></ProfileCard></div>
                    <div  className="w-[306px]"><ProfileCard title='Cuisine Chicken' dis='Japanese Cuisine Chicken' img='alu.jpeg'></ProfileCard></div>
                 </div>
                 <div className=" flex justify-center md:hidden mt-10 ">
                    
                    <div className="flex">
                    <img onClick={prev} src="arrow.png"  className="cursor-pointer" alt="" />
                    <img onClick={next} src="redArow.png" className="cursor-pointer"  alt="" />
                    </div>
                </div>
            </div>
            <div className="absolute left-0 bottom-[72px] hidden md:flex">
                <img src="foll.png" className="max-w-[280px]" alt="" />
            </div>
            
            
            
        </div>
    );
};

export default Carosel;