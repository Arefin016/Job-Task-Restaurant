import { useState } from "react";

import { LuPhoneCall } from "react-icons/lu";

const About = () => {
    const [about, setAbout] = useState("#B52B1D");
    const [experience, setExperience] = useState("");
    const [contact, setContact] = useState("");

    const handleBg= a =>{
        
        if(a==='a'){
            setAbout("#B52B1D")
            setExperience('')
            setContact('')

        }
        if(a==='b'){
            setExperience('#B52B1D')
            setAbout('')
            setContact('')
        }
        if(a==='c'){
            setContact('#B52B1D')
            setExperience('')
            setAbout('')
        }

    }
    return (
        <div className="mt-44">
          <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row p-8 gap-12">
          <div className=" w-full md:w-[50%]">
            <img src="about .png" alt="" className="w-[600px]" />
          </div>
          <div className="w-full md:w-[50%] mt-8 md:mt-0">
            <div className="flex gap-6">
                <button href="#" onClick={()=>handleBg('a')}  style={{
        backgroundColor: about,
        color: about ? '#ffffff' : '#000000'
    }} className={`bg-[${about}] px-4 py-1`}>About</button>
                <button href="#" onClick={()=>handleBg('b')}  style={{
        backgroundColor: experience,
        color: experience ? '#ffffff' : '#000000'
    }} className={`bg-[${experience}] px-4 py-1 `}>Experience</button>
                <button href="#" onClick={()=>handleBg('c')}  style={{
        backgroundColor: contact,
        color: contact ? '#ffffff' : '#000000'
    }} className={` px-4 py-1 text-white`}>Contact</button>
            </div>
            <hr className="bg-red-600 h-[1px] border-0" />

            <h1 className=" text-[20px] md:text-[35px] font-bold uppercase leading-[20px] md:leading-[35px] mt-8">Exceptional culinary <br /> experience and delicious food</h1>
            <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
      <div className="flex gap-12  items-center">
      <button className= " mt-12 uppercase bg-[#FEBF00] px-[14px] md:px-[24px] py-[8px] md:py-[10px] text-[#0A1425] text-[16px] font-bold">About More</button>
      <p className="flex gap-2 items-center mt-8"><LuPhoneCall color="red" /> +88 3426 739 485</p>
      </div>


          </div>
          </div>
            
        </div>
    );
};

export default About;