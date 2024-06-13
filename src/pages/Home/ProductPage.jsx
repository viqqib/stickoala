import React from "react";
import ProductStickerCard from "../../components/ProductStickerCard";
import memeimg from "../../assets/images/StickerCard/meme.png"
import quotesimg from '../../assets/images/StickerCard/quotes.png'
import animeimg from '../../assets/images/StickerCard/anime.png'
import kpopimg from '../../assets/images/StickerCard/kpop.png'
import animalimg from '../../assets/images/StickerCard/animal.png'
import musicimg from '../../assets/images/StickerCard/band.png'
import memepin from '../../assets/images/StickerCard/pinmeme.png'

import quotespin from '../../assets/images/StickerCard/pinquote.png'

import animepin from '../../assets/images/StickerCard/pinanime.png'

import kpoppin from '../../assets/images/StickerCard/pinkpop.png'


import animalpin from '../../assets/images/StickerCard/pinanimal.png'

import musicpin from '../../assets/images/StickerCard/pinmusic.png'

const ProductPage = () => {

    return (
        <div className=" h-screen w-full flex">
        
            <div className='container mb-72 mt-44 w-full flex flex-col md:flex-col items-center md:items-center text-center'>

                <h1 className="text-3xl md:text-6xl font-serif text-stickeryellow">We Sell This Kind Of Stickers & Pins:</h1>
                
                <div className="flex w-full flex-wrap md:flex-row md:w-full gap-5 justify-center md:gap-10 mt-20">
                    <ProductStickerCard text="Meme" src={memeimg} srcpin={memepin}/>
                    <ProductStickerCard text="Quote" src={quotesimg} srcpin={quotespin}/>
                    <ProductStickerCard text="Anime" src={animeimg} srcpin={animepin}/>
                    <ProductStickerCard text="Music" src={musicimg} srcpin={musicpin}/>
                    <ProductStickerCard text="Kpop" src={kpopimg} srcpin={kpoppin}/>
                    <ProductStickerCard text="Animal" src={animalimg} srcpin={animalpin}/>


                </div>

            </div>

        </div>

    )
}

export default ProductPage;