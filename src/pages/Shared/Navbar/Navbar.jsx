import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-red-800 shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <a href="#" className="flex justify-center items-center gap-2">
            <img className="w-[36px] h-[37px] sm:h-7" src="logo.png" alt="Logo" />
            <span className="text-[28px] text-[#FFFFFF] z-50">Restaurant</span>
          </a>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                
              ) : (
                <img className="w-[24px] h-[24px]" src="open.png" alt="" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-red-800 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${
            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
          }`}
        >
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
            <a href="#" className="px-2.5 py-2 text-[#FFFFFF] text-[15px] transition-colors duration-300 transform rounded-lg dark:text-gray-200 dark:hover:bg-gray-700 md:mx-2">Home</a>

            <a href="#" className="px-2.5 py-2 text-[#FFFFFF] text-[15px] transition-colors duration-300 transform rounded-lg dark:text-gray-200 dark:hover:bg-gray-700 md:mx-2">About</a>

            <a href="#" className="px-2.5 py-2 text-[#FFFFFF] text-[15px] transition-colors duration-300 transform rounded-lg dark:text-gray-200 dark:hover:bg-gray-700 md:mx-2">Portfolio</a>

            <a href="#" className="px-2.5 py-2 text-[#FFFFFF] text-[15px] transition-colors duration-300 transform rounded-lg dark:text-gray-200 dark:hover:bg-gray-700 md:mx-2">Clients</a>

            <a href="#" className="px-2.5 py-2 text-[#FFFFFF] text-[15px] transition-colors duration-300 transform rounded-lg dark:text-gray-200 dark:hover:bg-gray-700 md:mx-2">Blog</a>
            
            <a href="#" className="px-2.5 py-2 text-[#FFFFFF] text-[15px] transition-colors duration-300 transform rounded-lg dark:text-gray-200 dark:hover:bg-gray-700 md:mx-2">Contact</a>

            
          
          </div>

          <div className="relative mt-4 md:mt-0">
           <button className="uppercase bg-[#FEBF00] px-[24px] py-[10px] text-[#0A1425] text-[16px] font-bold">Book a table</button>

           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
