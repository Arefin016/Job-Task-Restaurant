
const Banner = () => {
  return (
    <div className="bg-red-800 py-0 md:py-36">
      <div className="relative max-w-[1320px] mx-auto flex flex-col md:flex-row lg:flex-row">
        <div className=" grow absolute top-28 z-50">
        <img className="absolute ml-10 z-20 opacity-60 hidden md:flex" src="hedingBg.png" alt="" />

        <h2 className="text-[#FFFFFF] z-50 text-[20px]  md:text-[80px] font-semibold uppercase leading-[20px] md:leading-[110px]  ">Taste the authentic<br />Saudi cuisine</h2>
        <p className=" md:text-[#FFFFFF] text-[14px] md:text-[24px] leading-[12px] md:leading-[32px] mt-8" >Among the best Saudi chefs in the world, serving <br className=" hidden md:flex" /> you something beyond flavor. </p>
        
      <button className= " mt-12 uppercase bg-[#FEBF00]  px-[24px] py-[10px] text-[#0A1425] text-[16px] font-bold">Explore Menu</button>

     
        </div>
        <div className="grow md:mt-[500px] mt-[350px] lg:mt-0 md:ml-[200px] lg:ml-[655px] relative">
        <img className="w-[200px] h-[180px] md:w-[700px] md:h-[650px] " src="banner.png" alt="" />
        <img src="victor.png" alt="" className="absolute  md:-top-8 md:right-[88px] lg:-top-9 lg:-right-8"/>
        <div className="bg-[#FEBF00] w-[60px] h-[60px] md:w-[105px] md:h-[105px] rounded-full p-1 absolute bottom-2 md:bottom-0 left-[132px] md:left-0 right-0  md:-right-12">
        <img src="offer.png" alt="" className="" />
        </div>

        </div>
      
      </div>
      
    </div>
  );
};

export default Banner;