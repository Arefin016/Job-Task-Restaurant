import "./BookTable.css"

const BookTable = () => {
  return (
    <div className="bookTable-image h-auto bg-no-repeat">
      <div className="md:py-36 md:px-[300px] py-5 px-5">
        {/* Book Now */}
        <div className="flex flex-row items-center">
          <span className="w-[10px] h-[10px] bg-[#BD1F17] flex items-center justify-center mr-2"></span>
          <h1 className="text-[#BD1F17] font-bold md:text-xl text-[10px]">
            Book Now
          </h1>
        </div>
        <h3 className="font-bold md:text-[62px] text-[40px] text-[#FFFFFF]">
          Book Your Table
        </h3>
        <p className="font-normal text-[16px] text-[#F7F8F9] leading-relaxed">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          <span className="inline md:hidden">&nbsp;</span>
          <span className="hidden md:inline">
            <br />
          </span>
          molestie vel, ornare non id blandit netus.
        </p>
        {/* Book Form Start */}
        <form>
          {/* First Row */}
          <div className="flex md:flex-row flex-col gap-6 md:mt-10 mt-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control md:w-[302px] h-[46px] w-[280px] pl-2 bg-[#1D1D1D] text-[#FFFFFF] border border-[#E5E7EB]"
                placeholder="Your Name *"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3 text-[#FFFFFF]">
              <input
                type="text"
                className="form-control md:w-[302px] h-[46px] w-[280px] pl-2 bg-[#1D1D1D] border border-[#E5E7EB]"
                placeholder="Your Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          {/* Second Row */}
          <div className="flex md:flex-row flex-col gap-6 mt-5">
            <div className="input-group mb-3">
              <input
                type="date"
                className="form-control md:w-[302px] h-[46px] w-[280px] pl-2 bg-[#1D1D1D] text-[#FFFFFF] border border-[#E5E7EB]"
                placeholder="Reservation Date"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3 text-[#FFFFFF]">
              <input
                type="number"
                className="form-control md:w-[302px] h-[46px] w-[280px] pl-2 bg-[#1D1D1D] border border-[#E5E7EB]"
                placeholder="Total People"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          {/* Third Row */}
          <div className="mt-5">
            <div className="form-floating mb-3">
              <textarea
                className="form-control bg-[#1D1D1D] text-[#FFFFFF] border border-[#E5E7EB] w-[280px] 
            md:w-[628px] h-[100px] p-2"
                placeholder="Message"
                id="floatingTextarea"
              ></textarea>
            </div>
          </div>
        </form>
        {/* Book Form End */}
        {/* Button */}
        <button className="uppercase bg-[#FEBF00] px-[24px] py-[10px] text-[#0A1425] text-[16px] font-bold">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default BookTable
