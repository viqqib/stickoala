import React from "react";
import meme from '../assets/images/StickerCard/meme.png'
import pinmeme from '../assets/images/StickerCard/pinmeme.png'
const ProductStickerCard = (props) => {

    return (
        <div className="md:w-48 md:h-60 w-28 h-36 flex flex-col justify-between relative hover-container cursor-pointer">
            <span></span>
            <img 
                src={props.src}  
                className="stickerimg absolute bottom-0 left-0 w-24 md:w-44 z-10  transition-transform duration-300" 
                alt="" 
            />
            <img 
                src={props.srcpin}  
                className="pinimg absolute bottom-0 right-0 w-20 md:w-32 z-10  transition-transform duration-300" 
                alt="" 
            />

            {/* <img 
                src={props.src}  
                className="absolute w-full z-10 transition-transform duration-300" 
                alt="" 
            /> */}


            <div className="z-0 bg-white w-full h-3/4 rounded-xl"></div>

            <button className="absolute bottom-0 z-20 bg-stickeryellow w-full px-5 py-2 md:py-3 rounded-bl-xl rounded-br-xl text-center">
                <a href={props.link} className="md:text-xl font-bold text-greenst">{props.text}</a>
            </button>
        </div>
    );
}

export default ProductStickerCard;