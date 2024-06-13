import React from "react";
import Navbar from '../../components/Navbar';
import stickertext from '../../assets/images/sticker.png';
import cover from '../../assets/images/hero.svg'
import circlecheck from '../../assets/images/circle.svg'
import TypewriterEffect from "../../components/TypewriterEffect";

const Homepage = () => {
    return(
    <div className="h-screen w-full flex justify-center">
        <div className='container mt-60 mb-52 w-full flex flex-col md:flex-row items-center md:items-center  md:justify-between'>

            <div className='relative px-5 md:px-0 text-creamst flex flex-col text-5xl md:text-7xl font-nunito'>
                <TypewriterEffect />
                <span className='text-shadow-custom font-black z-10 '>Your Own</span>
                <span className='text-shadow-custom font-black z-10 '>Sticker</span>
                {/* <img src={circlecheck} className='absolute z-0 -top-6 -left-10 w-full md:w-3/4 md:-left-32 md:-top-16' alt="" /> */}
                <p className='relative z-10 md:w-1/2 w-full text-sm md:text-lg mt-5'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti natus earum, animi, magni nemo ducimus, perferendis non beatae exercitationem molestiae laborum.
                </p>
                <button className='relative z-10 text-stickeryellow py-3 rounded-md w-1/2 md:w-1/4 text-sm md:text-xl bg-stickered mt-5 font-bold hover:bg-stickeryellow hover:text-stickered'>
                    Order Now
                </button>
            </div>


            <div className='text-creamst md:flex flex-col text-7xl relative hidden'>
                <img src={cover} alt="" className='max-w-full' style={{ width: "1000px" }}/>
            </div>

        </div>
    </div>
    )
}

export default Homepage;